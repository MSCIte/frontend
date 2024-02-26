import { Pane } from "../pane/Pane";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
interface CourseSmallSchema extends CourseWithTagsSchema {
  onDelete: () => void;
  onReplace: () => void;
  onClick?: () => void;
}

export const CourseSmall = (props: CourseSmallSchema) => {
  return (
    <Pane
      className="group relative mb-4 h-28 w-28 cursor-pointer transition duration-200 hover:scale-105 2xl:h-36 2xl:w-36"
      onClick={props.onClick}
    >
      <div className="flex flex-col justify-between">
        <div className="text-lg 2xl:text-xl">{props.courseCode}</div>
        <div>
          <div className="line-clamp-3 text-xs text-gray-400">
            {props.courseName}
          </div>
        </div>
      </div>
      {props.tags && (
        <div className="absolute bottom-4 left-4 ml-0 flex">
          <CoursePills courseCode={props.courseCode} tags={props.tags} />
        </div>
      )}
      {/* Trash can button in top right */}
      <div className="absolute right-4 top-4 flex flex-col ">
        <button
          className="transform text-gray-300 transition duration-200 hover:scale-105 hover:text-gray-400 "
          onClick={(e) => {
            e.stopPropagation();
            props.onDelete();
          }}
        >
          <TrashIcon className="h-4 w-4 2xl:h-6 2xl:w-6 " />
        </button>
      </div>
    </Pane>
  );
};
