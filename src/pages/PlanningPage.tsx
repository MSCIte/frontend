import { ActionButton } from "~/components/actionButton/ActionButton";
import { Sidebar } from "~/components/sidebar/Sidebar";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { ShareIcon } from "@heroicons/react/24/solid";
import { courseData as initialData } from "~/sampleData";
import { useState } from "react";
import { AllTermsTableView } from "~/components/allTermsTableView/AllTermTableView";

export const PlanningPage = () => {
  const maxCoursesInATerm = 6; //TODO: get this from the backend, or get it calculated

  const [selectedView, setSelectedView] = useState<"all" | "year" | "term">(
    "all"
  );
  const [selectedTerm, setSelectedTerm] = useState<string | null>("1A");
  const [courseData, setCourseData] = useState(initialData);

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-4 py-2 overflow-x-auto">
        <h1 className="text-3xl">My Plan</h1>
        <div className="flex justify-between my-2">
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
          </ul>

          <div>
            <ActionButton text="Share" icon={<ShareIcon />} />
          </div>
        </div>

        <hr />
        
        {selectedView === "all" ? (
          <AllTermsTableView
            courseData={courseData}
            maxCoursesInATerm={maxCoursesInATerm}
            setCourseData={setCourseData}
          />
        ) : (
          <div>TODO: implement year and term view</div>
        )}
      </div>
    </div>
  );
};
