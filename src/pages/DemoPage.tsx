import { ActionButton } from "~/components/actionButton/ActionButton";
import { CourseLarge } from "~/components/courseLarge/CourseLarge";
import { CourseSmall } from "~/components/courseSmall/CourseSmall";
import { RequirementsPane } from "~/components/requirementsPane/RequirementsPane";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { Sidebar } from "~/components/sidebar/Sidebar";
import { CourseSelectionPane } from "~/components/courseSelectionPane/CourseSelectionPane";
import { Pane } from "~/components/pane/Pane";

const courseData = {
  courseCode: "CHE 100",
  longName:
    "Chemical Engineering Concepts I mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
  tags: [
    { name: "Chemistry", color: "red" },
    { name: "Physics", color: "blue" },
    { name: "Math", color: "green" },
  ],
};

const requirements = {
  title: "Degree Requirements",
  data: [
    {
      name: "Mandatory Courses",
      requirementsCompleted: 15,
      requirementsTotal: 20,
      color: "red",
    },
    {
      name: "Technical Electives",
      requirementsCompleted: 0,
      requirementsTotal: 6,
      color: "blue",
    },
    {
      name: "Degree Completion",
      requirementsCompleted: 36,
      requirementsTotal: 45,
      color: "green",
    },
  ],
};

export const DemoPage = () => {
  return (
    <div className="main space-y-10">
      <Pane style={{ width: "80rem", height: "50rem" }}>
        <CourseSelectionPane />
      </Pane>

      <Sidebar />
      <div style={{ width: "10rem" }}>
        <CourseSmall {...courseData} />
      </div>
      <div style={{ width: "20rem" }}>
        <CourseLarge {...courseData} />
      </div>
      <div>
        <RequirementsPane {...requirements} />
      </div>
      <div className="space-y-2">
        <ActionButton text="All Terms" icon={<AllTermsView />} />
        <ActionButton text="Year" icon={<YearView />} />
        <ActionButton text="Term" icon={<TermView />} />
      </div>
    </div>
  );
};
