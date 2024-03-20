import { usePlanStore } from "~/stores";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { Pane } from "../pane/Pane";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "wouter";

interface CourseMiniSchema {
  courseCode: string;
  orderNumber: number;
  onClick?: () => void;
}

export const CourseMini = (props: CourseMiniSchema) => {
  const { getCourseById, completedCourseCodes } = usePlanStore();

  const course = getCourseById(props.courseCode);
  const hasPlannedThisCourse = completedCourseCodes().includes(
    props.courseCode,
  );

  return (
    <Pane
      className=" group relative m-auto mb-4 h-32 w-36 drop-shadow-lg transition duration-200"
      onClick={props.onClick}
    >
      <div className="text-lg 2xl:text-xl">{props.courseCode}</div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="line-clamp-3 text-xs text-gray-400 ">
            {course.courseName}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 ml-0 flex items-center">
        <div>
          {course.tags && (
            <CoursePills courseCode={props.courseCode} tags={course.tags} />
          )}

          <Link to={hasPlannedThisCourse ? "#" : "/plan"}>
            <div className="inline-block cursor-pointer rounded-lg border bg-gradient-to-r from-green-400 to-blue-500 px-1 text-sm font-medium text-white hover:scale-105 hover:from-pink-500 hover:to-yellow-500">
              {hasPlannedThisCourse ? (
                "Planned!"
              ) : (
                <span>
                  Add{" "}
                  <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4" />
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </Pane>
  );
};
