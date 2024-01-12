import "./App.css";
import { Course } from "./components/course/Course";

const courseData = {
  courseCode: "CHE 100",
  longName: "Chemical Engineering Concepts I",
  tags: [
    { name: "Chemistry", color: "red" },
    { name: "Physics", color: "blue" },
    { name: "Math", color: "green" },
  ],
};

function App() {
  return (
    <div style={{ background: "red" }}>
      <div style={{ border: "1px solid black", background: "unset" }}>
        <Course isExtended={true} {...courseData} />
      </div>
    </div>
  );
}

export default App;
