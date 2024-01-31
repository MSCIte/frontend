import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { MouseEventHandler } from "react";
import { Pane } from "../pane/Pane";
import { CourseWithTagsSchema } from "~/api/endpoints";

interface CourseBlockProps {
  course: CourseWithTagsSchema;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const CourseBlock = ({ course, onClick }: CourseBlockProps) => {
  return (
    <Pane className="p-0 hover:bg-gray-200">
      {/* TODO: make courses selected based on an ID */}
      <button
        className="w-full p-2 text-left hover:underline"
        key={course.courseCode}
        onClick={onClick}
      >
        <div>
          {course.courseCode}: {course.courseName}
        </div>
        <div></div>
        <div>
          {course.tags && course.tags.length > 0 && (
            <CoursePills courseCode={course.courseCode} tags={course.tags} />
          )}
        </div>
      </button>
    </Pane>
  );
};
