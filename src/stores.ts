import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CourseWithTagsSchema } from "./api/endpoints";
import { CourseData } from "./sampleData";

// 1A, 1B etc.
type TermId = string;
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
  completedCourseCodes: () => CourseCode[];
  isOnboardingModalOpen: boolean;
  setIsOnboardingModalOpen: (isOpen: boolean) => void;
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
        completedCourseCodes: () => {
          return Object.values(get().courses)
            .map((courseList) =>
              Object.values(courseList).map((course) => course.courseCode),
            )
            .flat();
        },
        isOnboardingModalOpen: false,
        setIsOnboardingModalOpen: (isOpen) =>
          set({ isOnboardingModalOpen: isOpen }),
      }),
      {
        name: "plan-storage",
      },
    ),
  ),
);
