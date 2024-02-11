import { ActionButton } from "~/components/actionButton/ActionButton";
import { Sidebar } from "~/components/sidebar/Sidebar";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { CourseData, courseData as initialData } from "~/sampleData";
import { Dispatch, SetStateAction, useState } from "react";
import { AllTermsTableView } from "~/components/planningViews/AllTermTableView";
import { TermTableView } from "~/components/planningViews/TermTableView";
import { YearTableView } from "~/components/planningViews/YearTableView";
import clsx from "clsx";

export interface CourseViewProps {
  courseData: CourseData;
  setCourseData: Dispatch<SetStateAction<CourseData>>;
  focusedTerm: number;
  setFocusedTerm: Dispatch<SetStateAction<number>>;
  maxCoursesInATerm: number;
}

export const PlanningPage = () => {
  const maxCoursesInATerm = 6; //TODO: get this from the backend, or get it calculated

  const [selectedView, setSelectedView] = useState<"all" | "year" | "term">(
    "all",
  );
  const [selectedTerm, setSelectedTerm] = useState<number>(0);
  const [courseData, setCourseData] = useState(initialData);

  const moveStep =
    selectedView === "year" ? 2 : selectedView === "term" ? 1 : 0;

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[calc(100%-30rem)] overflow-x-auto px-4 py-2">
        <h1 className="text-3xl">My Plan</h1>
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
                className={clsx(
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
                  if (
                    selectedTerm <=
                    Object.keys(courseData).length - 1 - moveStep
                  ) {
                    setSelectedTerm(selectedTerm + moveStep);
                  } else if (
                    selectedTerm <
                    Object.keys(courseData).length - 1
                  ) {
                    setSelectedTerm(Object.keys(courseData).length - 1);
                  }
                }}
                className={clsx(
                  // Disable if we're at the last term
                  (selectedTerm === Object.keys(courseData).length - 1 ||
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

          <div>
            <ActionButton
              text="Share"
              icon={
                <div className="text-gray-400">
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
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </div>
              }
            />
          </div>
        </div>

        <hr />

        {selectedView === "all" ? (
          <AllTermsTableView
            courseData={courseData}
            maxCoursesInATerm={maxCoursesInATerm}
            setCourseData={setCourseData}
            focusedTerm={selectedTerm}
            setFocusedTerm={setSelectedTerm}
          />
        ) : selectedView === "year" ? (
          <YearTableView
            courseData={courseData}
            maxCoursesInATerm={maxCoursesInATerm}
            setCourseData={setCourseData}
            focusedTerm={selectedTerm}
            setFocusedTerm={setSelectedTerm}
          />
        ) : (
          // Term view
          <TermTableView
            courseData={courseData}
            maxCoursesInATerm={maxCoursesInATerm}
            setCourseData={setCourseData}
            focusedTerm={selectedTerm}
            setFocusedTerm={setSelectedTerm}
          />
        )}
      </div>
    </div>
  );
};
