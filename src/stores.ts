import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CourseData } from "./sampleData";
import {
  CanTakeCourseQuery,
  CourseWithTagsSchema,
  coursesCanTakeBatchCoursesCanTakeBatchPost,
  degreeMissingReqsDegreeDegreeIdMissingReqsPost,
  optionsMissingReqsOptionOptIdMissingReqsPost,
  tagsCoursesTagsGet,
} from "./api/endpoints";
import { sortByKeys } from "./utils";
import { toast } from "react-toastify";
import { RequirementData } from "./components/requirementsPane/RequirementsPane";

// MSCI 100, MSCI 211, etc.
type CourseCode = string;

export interface PlanState {
  major: {
    year: number;
    name: string;
  };
  option: {
    year: number;
    name: string;
  };
  coursesCache: Record<string, CourseWithTagsSchema>;
  clearCoursesCache: () => void;
  setMajor: (major: PlanState["major"]) => void;
  setOption: (option: PlanState["option"]) => void;
  courses: CourseData;
  setCourses: (
    courses: CourseData | ((prev: CourseData) => CourseData),
  ) => void;
  completedCourseCodes: () => CourseCode[];
  isOnboardingModalOpen: boolean;
  setIsOnboardingModalOpen: (isOpen: boolean) => void;
  resetCourses: () => Promise<void>;
  hardResetCourses: () => Promise<void>;
  coursesToCSV: () => void;
  validatePlan: () => Promise<void>;
  updateMissingReqs: () => Promise<void>;
  updateAllCourses: () => Promise<void>;
  missingReqsMajor: RequirementData[];
  missingReqsOption: RequirementData[];
  warnings: Array<{
    id: string;
    affectedCourse: {
      code: string;
      term: string;
    };
    type: "prereq" | "overloading";
    text: string;
  }>;
}

export const usePlanStore = create<PlanState>()(
  devtools(
    persist(
      (set, get) => ({
        major: {
          name: "chemical_engineering",
          year: 2023,
        },
        option: {
          name: "management_sciences_option",
          year: 2023,
        },
        coursesCache: {},
        clearCoursesCache: () => {
          set({ coursesCache: {} });
        },
        setMajor: (major) => {
          if (get().major !== major) {
            console.log("set major getting called");
            set({ major });
            get().clearCoursesCache();
            get().resetCourses();
          }
        },
        setOption: (option) => {
          if (get().option !== option) {
            console.log("set option getting called");
            set({ option });
            get().clearCoursesCache();
            get().resetCourses();
          }
        },
        courses: {},
        setCourses: (courses) => {
          if (typeof courses === "function") {
            set({ courses: courses(get().courses) });
            return;
          } else {
            set({ courses });
          }
        },
        completedCourseCodes: () => {
          return Object.values(get().courses)
            .map((courseList) =>
              Object.values(courseList).map((course) => course.courseCode),
            )
            .flat();
        },
        isOnboardingModalOpen: false as boolean,
        setIsOnboardingModalOpen: (isOpen) =>
          set({ isOnboardingModalOpen: isOpen }),
        hardResetCourses: async () => {
          console.log("hard resetting courses");
          await get().updateAllCourses();
          await get().resetCourses();
        },
        resetCourses: async () => {
          console.log("Courses cache", get().coursesCache);
          if (Object.keys(get().coursesCache).length === 0) {
            console.log("No courses in cache, updating all courses");
            await get().updateAllCourses();
          }

          const newCourses = Object.values(
            get().coursesCache,
          ).reduce<CourseData>((acc, course) => {
            if (course?.tags) {
              for (const tag of course.tags) {
                if (
                  ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"].includes(
                    tag.code,
                  )
                ) {
                  if (!acc[tag.code]) {
                    acc[tag.code] = {};
                  }
                  acc[tag.code][course.courseCode] = course;
                }
              }
            }

            return acc;
          }, {} as CourseData);

          const newCoursesSorted = sortByKeys(newCourses);
          console.log("setting courses", newCourses);
          set({ courses: newCoursesSorted });
        },
        coursesToCSV: () => {
          const courses = get().courses;
          // get the maximum number of courses in a term
          const maxCourses = Math.max(
            ...Object.values(courses).map((term) => Object.keys(term).length),
          );
          let accum = "";
          Object.keys(courses).forEach((term) => {
            accum += term + ",";
          });
          accum += "\n";
          for (let i = 0; i < maxCourses; i++) {
            Object.values(courses).forEach((term) => {
              const course = Object.values(term)[i];
              if (course) {
                accum += course.courseCode + ",";
              } else {
                accum += ",";
              }
            });
            accum += "\n";
          }
          // download the csv
          const element = document.createElement("a");
          const file = new Blob([accum], { type: "text/csv" });
          element.href = URL.createObjectURL(file);
          element.download = "mscitePlan.csv";
          document.body.appendChild(element); // Required for this to work in FireFox
          element.click();
          element.remove(); // cleanup
        },
        validatePlan: async () => {
          const toastId = toast.info("Validating plan...", {
            autoClose: false,
          });
          const courses = get().courses;

          const canTakeQueryBodies: CanTakeCourseQuery[] = Object.entries(
            courses,
          ).flatMap(([term, termCourses], termInd) => {
            const coursesCompleted = Object.entries(courses)
              .filter((_, ind) => ind < termInd)
              .flatMap(([, termCourses]) =>
                Object.keys(termCourses).map((courseCode) => courseCode),
              );

            const coursesCompletedAndTaking = Object.entries(courses)
              .filter((_, ind) => ind <= termInd)
              .flatMap(([, termCourses]) =>
                Object.keys(termCourses).map((courseCode) => courseCode),
              );

            return [
              ...Object.keys(termCourses).map((courseCode) => ({
                courseCode,
                courseCodesTaken: coursesCompleted,
                term,
              })),
              ...Object.keys(termCourses).map((courseCode) => ({
                courseCode,
                courseCodesTaken: coursesCompletedAndTaking,
                term,
              })),
            ];
          });

          const res = await coursesCanTakeBatchCoursesCanTakeBatchPost({
            canTakeCourseCodes: canTakeQueryBodies,
          });

          const coursesWarnings = res.data.results.map((canTakeCourse) => {
            if (!canTakeCourse.result) {
              return {
                affectedCourse: {
                  code: canTakeCourse.courseCode,
                  term: canTakeCourse.term,
                },
                type: "prereq",
                text: canTakeCourse.message,
              };
            } else {
              return false;
            }
          });

          console.log("canTakeQueryBodies", canTakeQueryBodies);

          const overloadingWarnings = Object.entries(courses).map(
            ([term, termCourses]) => {
              // // Overloading warnings
              const isOverloading =
                Object.keys(termCourses).length > 5 &&
                Object.values(termCourses).some((course) =>
                  course.tags?.some(
                    (tag) =>
                      ![
                        "1A",
                        "1B",
                        "2A",
                        "2B",
                        "3A",
                        "3B",
                        "4A",
                        "4B",
                      ].includes(tag.code),
                  ),
                );
              if (isOverloading) {
                return {
                  affectedCourse: {
                    code: "",
                    term,
                  },
                  type: "overloading",
                  text: "Overloading. Previous term average must be >= 75%.",
                };
              }
            },
          );

          const filteredWarnings = [...coursesWarnings, overloadingWarnings]
            .flat()
            .filter((x) => x)
            .filter(Boolean)
            .filter(
              // dedup warnings
              (warning, ind, arr) =>
                arr.findIndex(
                  (x) =>
                    x &&
                    warning &&
                    x?.affectedCourse?.code === warning?.affectedCourse?.code &&
                    x?.affectedCourse?.term === warning?.affectedCourse?.term,
                ) === ind,
            )
            .map((x, ind) => {
              return {
                ...x,
                id: `warning-${ind}`,
              };
            }) as PlanState["warnings"];

          console.log("filteredWarnings", filteredWarnings);
          toast("Plan validated!", {
            type: "success",
          });
          toast.dismiss(toastId);

          set({
            warnings: filteredWarnings,
          });
        },
        updateMissingReqs: async () => {
          const plannedCourses = get().completedCourseCodes();
          const major = get().major;
          const option = get().option;

          const degreeMissingReqs =
            degreeMissingReqsDegreeDegreeIdMissingReqsPost(major.name, {
              courseCodesTaken: plannedCourses,
              year: major.year.toString(),
            });

          const optionMissingReqs =
            optionsMissingReqsOptionOptIdMissingReqsPost(
              "management_sciences_option",
              {
                courseCodesTaken: plannedCourses,
                year: option.year.toString(),
              },
            );

          const [degreeReqs, optionReqs] = await Promise.all([
            degreeMissingReqs,
            optionMissingReqs,
          ]);

          if (degreeReqs?.data) {
            if (!degreeReqs?.data?.additionalReqs) {
              set({
                missingReqsMajor: [],
              });
            }
            const degreeData = degreeReqs.data;

            const statusBarMajor: RequirementData[] = [
              {
                name: "Mandatory",
                requirementsCompleted:
                  degreeData.numberOfMandatoryCourses -
                  degreeData.mandatoryCourses.length,
                requirementsTotal: degreeData.numberOfMandatoryCourses,
                color: degreeData.tag.color,
              },
            ];

            for (const [categoryCode, completionStatus] of Object.entries(
              degreeData.additionalReqs,
            )) {
              statusBarMajor.push({
                name: categoryCode,
                requirementsCompleted: parseInt(completionStatus.completed),
                requirementsTotal: parseInt(completionStatus.total),
                color: completionStatus.tag.color,
              });
            }

            set({
              missingReqsMajor: statusBarMajor,
            });
          }

          if (optionReqs?.data) {
            if (!optionReqs?.data?.lists) {
              set({
                missingReqsOption: [],
              });
            }

            const optionData = optionReqs.data;

            const reqStatus = optionData.lists
              .map((req) => {
                return {
                  name: req.listName,
                  requirementsCompleted: Object.values(req.courses).filter(
                    (course) => course,
                  ).length,
                  requirementsTotal: req.totalCourseToComplete,
                  color: req.tag.color,
                };
              })
              .sort((a, b) => a.requirementsTotal - b.requirementsTotal);

            set({
              missingReqsOption: reqStatus,
            });
          }
        },
        missingReqsMajor: [] as PlanState["missingReqsMajor"],
        missingReqsOption: [] as PlanState["missingReqsOption"],
        updateAllCourses: async () => {
          set({ coursesCache: {} });

          const toastId = toast.info("Updating all courses...", {
            autoClose: false,
          });

          const allCourses = await tagsCoursesTagsGet({
            degree_name: get().major.name,
            degree_year: get().major.year.toString(),
            option_name: get().option.name,
            option_year: get().option.year.toString(),
          });

          if (!allCourses?.data) {
            return;
          }

          const courseObj = allCourses?.data?.reduce<
            Record<string, CourseWithTagsSchema>
          >((acc, course) => {
            acc[course.courseCode] = course;
            return acc;
          }, {});

          toast.dismiss(toastId);
          toast.success("All courses updated!");
          set({ coursesCache: courseObj });
        },
        warnings: [] as PlanState["warnings"],
      }),
      {
        name: "plan-storage",
      },
    ),
  ),
);

interface useWarningsProps {
  code?: string;
  term: string;
}
export const useWarnings = (props: useWarningsProps) => {
  const warnings = usePlanStore((state) => state.warnings);

  if (props.code) {
    return warnings.filter(
      (warning) =>
        warning.affectedCourse.code === props.code &&
        warning.affectedCourse.term === props.term,
    );
  } else {
    return warnings.filter(
      (warning) => warning.affectedCourse.term === props.term,
    );
  }
};
