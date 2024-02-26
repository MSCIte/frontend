import clsx from "clsx";
import { Pane } from "../pane/Pane";
import { twMerge } from "tailwind-merge";
import { RequirementData } from "./RequirementsPane";
import { usePlanStore } from "~/stores";
import { disciplineNameToFriendly } from "~/utils";
import { PencilIcon } from "@heroicons/react/24/solid";

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
  const { major, setIsOnboardingWindowOpen } = usePlanStore((state) => ({
    major: state.major,
    setMajor: state.setMajor,
    setIsOnboardingWindowOpen: state.setIsOnboardingModalOpen,
  }));

  return (
    <Pane className={props?.className}>
      <h3
        className={twMerge(
          "cursor-pointer text-xl font-medium hover:underline  ",
        )}
        onClick={() => setIsOnboardingWindowOpen(true)}
      >
        {disciplineNameToFriendly(major.name)} plan from {major.year}{" "}
        <PencilIcon className="inline h-4 w-4" />
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
