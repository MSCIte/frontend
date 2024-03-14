import { Pane } from "../pane/Pane";
import { twMerge } from "tailwind-merge";
import { RequirementData } from "./RequirementsPane";
import { usePlanStore } from "~/stores";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { OptionRequirementElement } from "./OptionRequirementElement";

interface MajorRequirementsPaneProps {
  title: string;
  data: RequirementData[];
  className?: string;
}


export const OptionsRequirementsPane = (props: MajorRequirementsPaneProps) => {
  const { option, setOption, setIsMsciInfoModalOpen } = usePlanStore(
    (state) => ({
      option: state.option,
      setOption: state.setOption,
      setIsMsciInfoModalOpen: state.setIsMsciInfoModalOpen,
    }),
  );

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
      <div className="my-4 space-y-4">
        {props.data.map((requirement, ind) => (
          <OptionRequirementElement key={`req-${props.title}-${ind}`} requirement={requirement} />
        ))}
      </div>
      <button
        type="button"
        className="flex items-center rounded-full border border-gray-300 p-1 text-sm transition-transform hover:scale-110"
        onClick={() => setIsMsciInfoModalOpen(true)}
      >
        <QuestionMarkCircleIcon className="inline-block h-4 w-4" /> Show
        Requirements
      </button>
    </Pane>
  );
};
