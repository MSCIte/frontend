import { twMerge } from "tailwind-merge";
import { RequirementData, colorVariants } from "./RequirementsPane";
import { usePlanStore } from "~/stores";
import { useMemo } from "react";

interface OptionRequirementElementProps {
  requirement: RequirementData;
}

const optionReqNameToTitle = (name: string) => {
  if (name === "organizational_studies") {
    return "Organizational Studies";
  } else if (name === "eng_econ") {
    return "Engineering Economics";
  } else if (name === "opti_1") {
    return "Introduction to Optimization";
  } else if (name === "elective") {
    return "Option Electives";
  } else {
    return name;
  }
};

export const OptionRequirementElement = ({
  requirement,
}: OptionRequirementElementProps) => {
  const { getCoursesByTag, major, option, isTakingCourse } = usePlanStore();

  const courseIsTaking = useMemo(() => {
    const courses = getCoursesByTag(requirement.name);
    return courses.map((course) => {
      return {
        course,
        isTaking: isTakingCourse(course.courseCode),
      };
    });
  }, [major, option]);

  return (
    <div className="my-2">
      <div className="font-light">
        <span>{optionReqNameToTitle(requirement.name)}</span>
        <span className="float-right  text-slate-500">
          {requirement.requirementsCompleted}/{requirement.requirementsTotal}
        </span>
      </div>
      <div className="">
        <progress
          value={
            requirement.requirementsCompleted !== 0
              ? requirement.requirementsCompleted
              : 1
          }
          max={
            requirement.requirementsCompleted !== 0
              ? requirement.requirementsTotal
              : 75
          }
          className={twMerge(
            "h-2 w-full rounded bg-slate-200 [&::-webkit-progress-bar]:rounded [&::-webkit-progress-value]:rounded ",
            `[&::-webkit-progress-bar]:bg-slate-300`,
            colorVariants?.[requirement.color as keyof typeof colorVariants],
          )}
        />
      </div>
      <details className="rounded border">
        <summary className="bg-gray-100  text-sm">
          {optionReqNameToTitle(requirement.name)} Courses
        </summary>
        <div className="max-h-24 overflow-y-auto">
          <table className="">
            <tbody>
              {courseIsTaking.map(({ course, isTaking }) => (
                <tr key={course.courseCode}>
                  <td className="gray-400 text-sm">{course.courseCode}</td>
                  <td className="gray-400 text-sm">{course.courseName}</td>
                  <td className="gray-400 text-sm">{isTaking ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
};
