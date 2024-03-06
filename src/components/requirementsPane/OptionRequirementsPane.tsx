import clsx from "clsx";
import { Pane } from "../pane/Pane";
import { twMerge } from "tailwind-merge";
import { RequirementData, colorVariants } from "./RequirementsPane";
import { usePlanStore } from "~/stores";

interface MajorRequirementsPaneProps {
  title: string;
  data: RequirementData[];
  className?: string;
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

export const OptionsRequirementsPane = (props: MajorRequirementsPaneProps) => {
  const { option, setOption } = usePlanStore((state) => ({
    option: state.option,
    setOption: state.setOption,
    setIsOnboardingWindowOpen: state.setIsOnboardingModalOpen,
  }));

  return (
    <Pane className={props?.className}>
      <h3
        className={twMerge(" text-lg font-medium   ")}
      // onClick={() => setIsOnboardingWindowOpen(true)}
      >
        MSCI Option declared in{" "}
        <select
          className="cursor-pointer rounded-sm border bg-gray-100 hover:bg-white"
          value={option.year}
          onChange={(e) =>
            setOption({
              year: parseInt(e.target.value),
              name: "management_sciences_option",
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
              <span>{optionReqNameToTitle(requirement.name)}</span>
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
