import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { usePlanStore } from "~/stores";
import { Tooltip } from "react-tooltip";

interface TermTitleProps {
  termName: string;
}

export const TermTitle = (props: TermTitleProps) => {
  const coursesInTerm = usePlanStore((state) => state.courses[props.termName]);

  if (
    !["1A", "1B", "2A", "2B"].includes(props.termName) && // first few terms have 6 courses by default
    Object.keys(coursesInTerm).length > 5 
  ) {
    return (
      <h2 className="my-2 text-center text-xl font-semibold">
        {props.termName}{" "}
        <ExclamationTriangleIcon
          className="inline h-6 w-6 text-yellow-400"
          data-tooltip-id="overloading-warning"
          data-tooltip-content="Overloading. Previous term average must be >= 75%."
        />
        <Tooltip id="overloading-warning" />
      </h2>
    );
  }

  return (
    <h2 className="my-2 text-center text-xl font-semibold">{props.termName}</h2>
  );
};
