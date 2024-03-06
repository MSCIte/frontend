import { ActionButton } from "~/components/actionButton/ActionButton";
import { Sidebar } from "~/components/sidebar/SidebarNew";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { CourseData } from "~/sampleData";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AllTermsTableView } from "~/components/planningViews/AllTermTableView";
import { TermTableView } from "~/components/planningViews/TermTableView";
import { YearTableView } from "~/components/planningViews/YearTableView";
import clsx from "clsx";
import { Navbar } from "~/components/navbar/NavBar";
import { OnboardingModal } from "~/components/onboardingModal/OnboardingModal";
import { usePlanStore } from "~/stores";
import { useTagsCoursesTagsGet } from "~/api/endpoints";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import {
  CheckBadgeIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import { sortByKeys } from "~/utils";
import { twMerge } from "tailwind-merge";
import { Tooltip } from "react-tooltip";

export interface CourseViewProps {
  courseData: CourseData;
  setCourseData: Dispatch<SetStateAction<CourseData>>;
  focusedTerm: number;
  setFocusedTerm: Dispatch<SetStateAction<number>>;
  maxCoursesInATerm: number;
}

export type ModalMode = "add" | "replace";

export const PlanningPage = () => {
  const maxCoursesInATerm = 8; //TODO: get this from the backend, or get it calculated

  const [selectedView, setSelectedView] = useState<"all" | "year" | "term">(
    "all",
  );
  const [selectedTerm, setSelectedTerm] = useState<number>(0);

  const moveStep =
    selectedView === "year" ? 2 : selectedView === "term" ? 1 : 0;

  const {
    isOnboardingModalOpen,
    setIsOnboardingModalOpen,
    courses,
    setCourses,
    major,
    coursesToCSV,
    validatePlan,
    option,
  } = usePlanStore();

  useEffect(() => {
    if (!localStorage.getItem("onboardingComplete")) {
      console.log("opening onboarding modal");
      setIsOnboardingModalOpen(true);
    }
  }, [setIsOnboardingModalOpen]);

  const { data: coursesWithTags } = useTagsCoursesTagsGet({
    degree_name: major.name,
    degree_year: major.year.toString(),
    option_name: option.name,
    option_year: option.year.toString(),
  });
  console.log(coursesWithTags)

  const resetCourses = () => {
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
      setCourses(newCoursesSorted);
    }
  };

  const header = (
    <div className="my-2 flex justify-between">
      <ul className="space-x-4">
        <ActionButton
          className="inline-block"
          text="All Terms"
          onClick={() => setSelectedView("all")}
          isActive={selectedView === "all"}
          icon={<AllTermsView />}
        />
        <ActionButton
          className="inline-block"
          text="Year"
          onClick={() => setSelectedView("year")}
          isActive={selectedView === "year"}
          icon={<YearView />}
        />
        <ActionButton
          className="inline-block"
          text="Term"
          onClick={() => setSelectedView("term")}
          isActive={selectedView === "term"}
          icon={<TermView />}
        />

        <div className="inline-block space-x-4 text-gray-500">
          <button
            onClick={() => {
              if (selectedTerm >= moveStep) {
                setSelectedTerm(selectedTerm - moveStep);
              } else if (selectedTerm > 0) {
                setSelectedTerm(0);
              }
            }}
            className={twMerge(
              // Disable if we're at the first term
              (selectedTerm === 0 || selectedView === "all") &&
                "cursor-default text-gray-300",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              if (selectedTerm <= Object.keys(courses).length - 1 - moveStep) {
                setSelectedTerm(selectedTerm + moveStep);
              } else if (selectedTerm < Object.keys(courses).length - 1) {
                setSelectedTerm(Object.keys(courses).length - 1);
              }
            }}
            className={clsx(
              // Disable if we're at the last term
              (selectedTerm === Object.keys(courses).length - 1 ||
                selectedView === "all") &&
                "cursor-default text-gray-300",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </ul>

      <div className="flex space-x-4">
        <ActionButton
          text="Reset Courses"
          icon={<ArrowPathIcon className="h-6 w-6 text-gray-400" />}
          onClick={() => resetCourses()}
        />
        <ActionButton
          text="Validate Plan"
          icon={<CheckBadgeIcon className="h-6 w-6 text-gray-400" />}
          onClick={() => validatePlan()}
        />{" "}
        <ActionButton
          text="Export"
          icon={<DocumentChartBarIcon className="h-6 w-6 text-gray-400" />}
          onClick={() => coursesToCSV()}
        />
      </div>
    </div>
  );

  const warnings = usePlanStore((state) => state.warnings);

  return (
    <div className=" h-screen overflow-hidden ">
      <Navbar />
      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        setIsOpen={setIsOnboardingModalOpen}
      />

      <div className="flex">
        <Sidebar />
        <div className="h-[calc(100vh-4rem)] w-full overflow-x-auto overflow-y-clip px-4 py-2">
          <h1 className="text-3xl">My Plan</h1>
          {header}
          <hr />

          {selectedView === "all" ? (
            <AllTermsTableView
              courseData={courses}
              maxCoursesInATerm={maxCoursesInATerm}
              setCourseData={setCourses}
              focusedTerm={selectedTerm}
              setFocusedTerm={setSelectedTerm}
            />
          ) : selectedView === "year" ? (
            <YearTableView
              courseData={courses}
              maxCoursesInATerm={maxCoursesInATerm}
              setCourseData={setCourses}
              focusedTerm={selectedTerm}
              setFocusedTerm={setSelectedTerm}
            />
          ) : (
            // Term view
            <TermTableView
              courseData={courses}
              maxCoursesInATerm={maxCoursesInATerm}
              setCourseData={setCourses}
              focusedTerm={selectedTerm}
              setFocusedTerm={setSelectedTerm}
            />
          )}
        </div>
      </div>

      {/* Place warnings in a root spot to make it display over all other elements */}
      <div>{warnings?.map((warning) => <Tooltip id={warning.id} />)}</div>
    </div>
  );
};
