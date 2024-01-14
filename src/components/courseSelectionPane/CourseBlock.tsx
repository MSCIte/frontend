import { Course } from "~/sampleData";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { MouseEventHandler } from "react";
import { Pane } from "../pane/Pane";

interface CourseBlockProps {
  course: Course;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const CourseBlock = ({ course, onClick }: CourseBlockProps) => {
  return (
    <Pane className="hover:bg-gray-200 p-0">
      {/* TODO: make courses selected based on an ID */}
      <button
        className="text-left w-full hover:underline p-2"
        key={course.courseCode}
        onClick={onClick}
      >
        <div>{course.courseCode}: {course.longName}</div>
        <div></div>
        <div>
          <CoursePills courseCode={course.courseCode} tags={course.tags} />
        </div>
      </button>
    </Pane>
  );
};
