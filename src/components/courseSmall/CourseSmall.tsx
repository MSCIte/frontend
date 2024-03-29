import { Pane } from "../pane/Pane";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useWarnings } from "~/stores";
import { CourseWarnings } from "../courseWarning/CourseWarning";
interface CourseSmallSchema extends CourseWithTagsSchema {
  onDelete: () => void;
  onReplace: () => void;
  onClick?: () => void;
  term: string;
}

export const CourseSmall = (props: CourseSmallSchema) => {
  const warnings = useWarnings({ code: props.courseCode, term: props.term });

  return (
    <Pane
      className="group relative mb-4 h-32 w-32 cursor-pointer transition duration-200 hover:scale-105 2xl:h-36 2xl:w-36"
      onClick={props.onClick}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between ">
          <div className="text-lg 2xl:text-xl">{props.courseCode}</div>
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
        <div>
          <div className="line-clamp-3 text-xs text-gray-400">
            {props.courseName}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 ml-0 flex items-center">
        <div>
          {props.tags && (
            <CoursePills courseCode={props.courseCode} tags={props.tags} />
          )}
        </div>
        {warnings && <CourseWarnings size="small" warnings={warnings} />}
      </div>
    </Pane>
  );
};
