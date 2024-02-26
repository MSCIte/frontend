import clsx from "clsx";
import { Pane } from "../pane/Pane";
import { twMerge } from "tailwind-merge";
import { RequirementData } from "./RequirementsPane";
import { usePlanStore } from "~/stores";
import { disciplineNameToFriendly } from "~/utils";
import { useDegreesDegreeGet } from "~/api/endpoints";

interface MajorRequirementsPaneProps {
  title: string;
  data: RequirementData[];
  className?: string;
}

const colorVariants = {
  red: "[&::-webkit-progress-value]:bg-red-400 [&::-moz-progress-bar]:bg-red-400",
  yellow:
    "[&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400",
  green:
    "[&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400",
  blue: "[&::-webkit-progress-value]:bg-blue-400 [&::-moz-progress-bar]:bg-blue-400",
  indigo:
    "[&::-webkit-progress-value]:bg-indigo-400 [&::-moz-progress-bar]:bg-indigo-400",
  purple:
    "[&::-webkit-progress-value]:bg-purple-400 [&::-moz-progress-bar]:bg-purple-400",
  pink: "[&::-webkit-progress-value]:bg-pink-400 [&::-moz-progress-bar]:bg-pink-400",
};

export const MajorRequirementsPane = (props: MajorRequirementsPaneProps) => {
  const { major, setMajor } = usePlanStore((state) => ({
    major: state.major,
    setMajor: state.setMajor,
    resetCourses: state.resetCourses,
  }));

  const { data: degrees } = useDegreesDegreeGet();

  return (
    <Pane className={props?.className}>
      <h3 className={twMerge("cursor-pointer text-lg font-medium")}>
        <select
          className="cursor-pointer rounded-sm border bg-gray-100 hover:bg-white"
          value={major.name}
          onChange={(e) => {
            setMajor({ name: e.target.value, year: major.year });
          }}
        >
          {degrees?.data
            ?.filter((degree) => degree !== "management_engineering")
            ?.map((degree) => (
              <option key={degree} value={degree}>
                {disciplineNameToFriendly(degree)}
              </option>
            ))}
        </select>
        <span className="ml-1">Started in year of </span>
        <select
          className="cursor-pointer rounded-sm border bg-gray-100 hover:bg-white"
          value={major.year}
          onChange={(e) =>
            setMajor({
              name: major.name,
              year: parseInt(e.target.value),
            })
          }
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </h3>
      <div className="mt-4">
        {props.data.map((requirement, ind) => (
          <div className="my-2" key={`req-${props.title}-${ind}`}>
            <div className="font-light">
              <span>{requirement.name}</span>
              <span className="float-right  text-slate-500">
                {requirement.requirementsCompleted}/
                {requirement.requirementsTotal}
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
                className={clsx(
                  "h-2 w-full rounded bg-slate-200 [&::-webkit-progress-bar]:rounded [&::-webkit-progress-value]:rounded ",
                  `[&::-webkit-progress-bar]:bg-slate-300`,
                  colorVariants?.[
                    requirement.color as keyof typeof colorVariants
                  ],
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </Pane>
  );
};
