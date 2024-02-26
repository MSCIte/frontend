import clsx from "clsx";
import { Pane } from "../pane/Pane";
import { twMerge } from "tailwind-merge";
import { RequirementData } from "./RequirementsPane";
import { usePlanStore } from "~/stores";
import { disciplineNameToFriendly } from "~/utils";
import { PencilIcon } from "@heroicons/react/24/solid";
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

const MajorSelection = () => {
  const { major, setMajor } = usePlanStore((state) => ({
    major: state.major,
    setMajor: state.setMajor,
  }));

  const { data: degrees, isLoading } = useDegreesDegreeGet();

  return (
    <div>
      <div>
        <label
          htmlFor="major"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Major:{" "}
        </label>
        <select
          id="major"
          value={major.name}
          onChange={(e) => setMajor({ name: e.target.value, year: major.year })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          {degrees?.data?.map((degree) => (
            <option key={degree} value={degree}>
              {disciplineNameToFriendly(degree)}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label
          htmlFor="year"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Entrance Year:{" "}
        </label>
        <input
          type="number"
          id="year"
          value={major.year}
          min={2020}
          max={2023}
          onChange={(e) =>
            setMajor({
              name: major.name,
              year: +e.target.value,
            })
          }
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="90210"
          required
        />
      </div>
    </div>
  );
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
