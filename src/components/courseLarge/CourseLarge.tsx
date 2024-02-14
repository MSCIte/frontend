import { CourseWithTagsSchema } from "~/api/endpoints";
import { Pane } from "../pane/Pane";
import styles from "./CourseLarge.module.css";
import clsx from "clsx";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
export interface Tag {
  name: string;
  color: string;
}

interface CourseProps {
  course: CourseWithTagsSchema;
  className?: string;
  onClick: () => void;
  onDelete: () => void;
  onReplace?: () => void;
}

export const CourseLarge = (props: CourseProps) => {
  return (
    <Pane
      className={clsx(styles.accentColor, props?.className)}
      onClick={props.onClick}
    >
      <div className="relative">
        <div className={styles.header}>{props.course.courseCode}</div>
        <div>
          <div className={styles.description}>{props.course.courseName}</div>
        </div>
        <div className={styles.pillWrapper}>
          {props.course?.tags?.map((tag) => (
            <div
              className={styles.textPill}
              key={`courseLarge-${props.course.courseCode}-${tag.longName}`}
              style={{ border: `1px solid ${tag.color}` }}
            >
              {tag.longName}
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 ">
          <button
            className="transform text-gray-300 transition duration-200 hover:scale-110 hover:text-gray-400 "
            onClick={(e) => {
              e.stopPropagation();
              props.onReplace?.();
            }}
          >
            <PencilSquareIcon className="h-6 w-6 " />
          </button>
          <button
            className="transform text-gray-300 transition duration-200 hover:scale-110 hover:text-gray-400 "
            onClick={(e) => {
              e.stopPropagation();
              props.onDelete();
            }}
          >
            <TrashIcon className="h-6 w-6 " />
          </button>
        </div>
      </div>
      {/* </div> */}
    </Pane>
  );
};
