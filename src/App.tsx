import "./App.css";
import { ActionButton } from "./components/actionButton/ActionButton";
import { CourseLarge } from "./components/courseLarge/CourseLarge";
import { CourseSmall } from "./components/courseSmall/CourseSmall";
import { RequirementsPane } from "./components/requirementsPane/RequirementsPane";
import AllTermsView from "./assets/allTermsView.svg?react";

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

const actionButtonData = {
  text: "Add Course",
  onClick: () => console.log("button clicked"),
  icon: <AllTermsView />,
};

function App() {
  return (
    <div className="main">
      <div style={{ width: "10rem" }}>
        <CourseSmall {...courseData} />
      </div>
      <div style={{ width: "20rem" }}>
        <CourseLarge {...courseData} />
      </div>
      <div>
        <RequirementsPane {...requirements} />
      </div>
      <div>
        <ActionButton {...actionButtonData} />
      </div>
    </div>
  );
}

export default App;
