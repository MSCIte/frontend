import { Pane } from "../pane/Pane";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { TrashIcon } from "@heroicons/react/24/solid";
interface CourseSmallSchema extends CourseWithTagsSchema {
  onDelete: () => void;
  onReplace: () => void;
  onClick?: () => void;
}

export const CourseSmall = (props: CourseSmallSchema) => {
  return (
    <Pane className="h-36 w-36 cursor-pointer" onClick={props.onClick}>
      <div className="group relative">
        <div className="flex h-full flex-col justify-between">
          <div className="text-xl">{props.courseCode}</div>
          <div>
            <div className="line-clamp-3 text-gray-400">{props.courseName}</div>
          </div>
          {props.tags && (
            <div className="mr-0 flex flex-row-reverse">
              <CoursePills courseCode={props.courseCode} tags={props.tags} />
            </div>
          )}
        </div>
        {/* Trash can button in top right */}
        <button
          className="absolute right-0 top-0 transform text-gray-300 transition duration-200 hover:scale-110 hover:text-gray-400 "
          onClick={(e) => {
            e.stopPropagation();
            props.onDelete();
          }}
        >
          <TrashIcon className="h-6 w-6 " />
        </button>
      </div>
    </Pane>
  );
};
