import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CourseData } from "./sampleData";
import {
  coursesCanTakeCoursesCanTakeCourseCodePost,
  tagsCoursesTagsGet,
} from "./api/endpoints";
import { sortByKeys } from "./utils";
import { toast } from "react-toastify";

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
  coursesToCSV: () => void;
  validatePlan: () => Promise<void>;
  warnings: Array<{
    id: string;
    affectedCourse: {
      code: string;
      term: string;
    };
    type: "prereq" | "antireq" | "overloading";
    text: string;
  }>;
}

export const usePlanStore = create<PlanState>()(
  devtools(
    persist(
      (set, get) => ({
        major: {
          name: "management_engineering",
          year: 2023,
        },
        option: {
          name: "management_sciences_option",
          year: 2023,
        },
        setMajor: (major) => {
          set({ major });
          get().resetCourses();
        },
        setOption: (option) => {
          set({ option });
          get().resetCourses();
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

        resetCourses: async () => {
          const coursesWithTags = await tagsCoursesTagsGet({
            degree_name: get().major.name,
            degree_year: get().major.year.toString(),
          });

          if (coursesWithTags?.data) {
            const newCourses = coursesWithTags.data.reduce<CourseData>(
              (acc, course) => {
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
              },
              {} as CourseData,
            );

            const newCoursesSorted = sortByKeys(newCourses);
            console.log("setting courses", newCourses);
            set({ courses: newCoursesSorted });
          }
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
          const coursesWarnings = await Promise.all(
            Object.entries(courses).flatMap(
              async ([term, termCourses], termInd) => {
                // Prereq warnings
                const coursesCompleted = Object.entries(courses)
                  .filter((_, ind) => ind < termInd)
                  .flatMap(([, termCourses]) =>
                    Object.keys(termCourses).map((courseCode) => courseCode),
                  );

                const prereqPromises = Object.keys(termCourses).map(
                  async (courseCode) => {
                    const canTakeCourse =
                      await coursesCanTakeCoursesCanTakeCourseCodePost(
                        courseCode,
                        {
                          courseCodesTaken: coursesCompleted,
                        },
                      );

                    if (!canTakeCourse.data.result) {
                      return {
                        affectedCourse: {
                          code: courseCode,
                          term,
                        },
                        type: "prereq",
                        text: canTakeCourse.data.message,
                      };
                    } else {
                      return false;
                    }
                  },
                );

                // Anti-req warnings
                const coursesCompletedAndTaking = Object.entries(courses)
                  .filter((_, ind) => ind <= termInd)
                  .flatMap(([, termCourses]) =>
                    Object.keys(termCourses).map((courseCode) => courseCode),
                  );

                const anitReqPromises = Object.keys(termCourses).map(
                  async (courseCode) => {
                    const canTakeCourse =
                      await coursesCanTakeCoursesCanTakeCourseCodePost(
                        courseCode,
                        {
                          // Use the ones that are being taken as well, to prevent taking antireqs
                          courseCodesTaken: coursesCompletedAndTaking,
                        },
                      );

                    if (!canTakeCourse.data.result) {
                      return {
                        affectedCourse: {
                          code: courseCode,
                          term,
                        },
                        type: "antireq",
                        text: canTakeCourse.data.message,
                      };
                    } else {
                      return false;
                    }
                  },
                );

                return await Promise.all([
                  ...prereqPromises,
                  ...anitReqPromises,
                ]);
              },
            ),
          );

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
          toast.dismiss(toastId);

          set({
            warnings: filteredWarnings,
          });
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
