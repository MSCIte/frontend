import clsx from "clsx";
import { Pane } from "../pane/Pane";

interface RequirementData {
  name: string;
  requirementsCompleted: number;
  requirementsTotal: number;
  color: string;
}

interface RequirementsPaneProps {
  title: string;
  data: RequirementData[];
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

export const RequirementsPane = (props: RequirementsPaneProps) => {
  return (
    <Pane>
      <h3 className="font-medium text-xl">{props.title}</h3>
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
                  "w-full h-2 bg-slate-200 rounded [&::-webkit-progress-bar]:rounded [&::-webkit-progress-value]:rounded ",
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
