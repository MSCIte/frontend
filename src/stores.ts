import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CourseData } from "./sampleData";
import { tagsCoursesTagsGet } from "./api/endpoints";
import { sortByKeys } from "./utils";

// MSCI 100, MSCI 211, etc.
type CourseCode = string;

interface PlanState {
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
        setMajor: (major) => set({ major }),
        setOption: (option) => set({ option }),
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
      }),
      {
        name: "plan-storage",
      },
    ),
  ),
);
