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
    <Pane className="hover:bg-gray-200 p-0">
      {/* TODO: make courses selected based on an ID */}
      <button
        className="text-left w-full hover:underline p-2"
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
