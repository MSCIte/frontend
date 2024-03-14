import { CourseWithTagsSchema } from "~/api/endpoints";
import { Pane } from "../pane/Pane";
import styles from "./CourseLarge.module.css";
import {
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { mandatoryTagRegex } from "~/utils";
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
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const isMandatoryCourse = props.course.tags?.some((tag) =>
    tag.code.match(mandatoryTagRegex),
  );
  // console.log(props.course.tags?.[0].color);
  return (
    <Pane
      className={twMerge(
        "mb-4",
        props.course.tags?.[0].color
          ? `border-l-4 border-l-${props.course.tags?.[0].color}-400`
          : `border-l-4 border-l-blue-400`,
        props?.className,
      )}
      onClick={props.onClick}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <div className={twMerge(styles.header, "")}>
              {props.course.courseCode}
            </div>
            <div className="">
              {isMandatoryCourse && isConfirmDelete ? (
                <>
                  <button
                    aria-description="Confirm"
                    className="transform text-gray-300 transition duration-200  hover:scale-105 hover:text-gray-400 "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDelete();
                    }}
                  >
                    <CheckIcon className="h-6 w-6" />
                  </button>
                  <button
                    className="transform text-gray-300 transition duration-200 hover:scale-105 hover:text-gray-400 "
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsConfirmDelete(false);
                    }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="transform text-gray-300 transition duration-200 hover:scale-105 hover:text-gray-400 "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onReplace?.();
                    }}
                  >
                    <PencilSquareIcon className="h-6 w-6" />
                  </button>

                  <button
                    className="transform text-gray-300 transition duration-200 hover:scale-105 hover:text-gray-400 "
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isMandatoryCourse) {
                        setIsConfirmDelete(true);
                        return;
                      }
                      props.onDelete();
                    }}
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* <button
                className="transform text-gray-300 transition duration-200 hover:scale-105 hover:text-gray-400 "
                onClick={(e) => {
                  e.stopPropagation();
                  props.onDelete();
                }}
              >
                <TrashIcon className="h-6 w-6 " />
              </button> */}
            </div>
          </div>
          <div>
            <div className={styles.description}>{props.course.courseName}</div>
          </div>
        </div>

        <div className={styles.pillWrapper}>
          {props.course?.tags?.map((tag) => (
            <div
              className={styles.textPill}
              key={`courseLarge-${props.course.courseCode}-${tag.longName}`}
              style={{ border: `1.5px solid ${tag.color}` }}
            >
              {tag.longName}
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </Pane>
  );
};
