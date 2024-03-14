import { CourseWithTagsSchema } from "~/api/endpoints";
import { CourseData } from "~/sampleData";
import { CourseSmall } from "../courseSmall/CourseSmall";
import { TermTitle } from "./TermTitle";
import { useMemo } from "react";
import { CourseLarge } from "../courseLarge/CourseLarge";
import { twMerge } from "tailwind-merge";
import { ModalMode } from "~/pages/PlanningPage";

interface TermColumnProps {
  term: string;
  courseData: CourseData;
  onDeleteCourse: (term: string, courseCode: string) => void;
  openModal: (
    term: string,
    options?: { course?: CourseWithTagsSchema; mode?: ModalMode },
  ) => void;
  courseWidth: "small" | "medium" | "large";
  setSelectedCourse: (course: CourseWithTagsSchema) => void;
}

export const TermColumn = (props: TermColumnProps) => {
  const coursesInTerm = useMemo(() => {
    return Object.values(props.courseData?.[props.term]);
  }, [props.courseData, props.term]);

  const colWidth = useMemo(() => {
    if (props.courseWidth === "small") {
      return "w-36 2xl:w-40";
    } else if (props.courseWidth === "medium") {
      return "w-72";
    } else {
      return "w-96";
    }
  }, [props.courseWidth]);

  return (
    <div
      key={props.term}
      className={twMerge("relative flex w-40  mr-4 flex-col", colWidth)}
    >
      <TermTitle termName={props.term} />
      <div className={twMerge("w-40", colWidth)}>
        {coursesInTerm?.map((course) => {
          if (course) {
            if (
              props.courseWidth === "large" ||
              props.courseWidth === "medium"
            ) {
              return (
                <CourseLarge
                  className={twMerge("h-32 cursor-pointer")}
                  key={`${props.term}-${course.courseCode}`}
                  onDelete={() => {
                    console.log("clicked");
                    props.onDeleteCourse(props.term, course.courseCode);
                  }}
                  onReplace={() => {
                    props.setSelectedCourse(course);
                    props.openModal(props.term, { course, mode: "replace" });
                  }}
                  onClick={() => {
                    console.log("clicked");
                    props.setSelectedCourse(course);
                  }}
                  course={course}
                />
              );
            } else {
              return (
                <CourseSmall
                  key={`${props.term}-${course.courseCode}`}
                  onDelete={() => {
                    console.log("clicked");
                    props.onDeleteCourse(props.term, course.courseCode);
                  }}
                  onReplace={() => {
                    props.openModal(props.term, { course, mode: "replace" });
                  }}
                  onClick={() => {
                    console.log("clicked");
                    props.openModal(props.term, { course, mode: "replace" });
                  }}
                  term={props.term}
                  {...course}
                />
              );
            }
          }
        })}
        {/* Only allow 8 courses in term max */}
        {coursesInTerm?.length <= 8 && (
          <button
            className="mb-4 flex w-full items-center justify-center rounded-lg bg-white p-1 transition-transform hover:scale-105"
            onClick={() => props.openModal(props.term, { mode: "add" })}
          >
            <div className="bg-none text-4xl">+</div>
          </button>
        )}
      </div>
    </div>
  );
};
