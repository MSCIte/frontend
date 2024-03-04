import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useWarnings } from "~/stores";

interface TermTitleProps {
  termName: string;
}

export const TermTitle = (props: TermTitleProps) => {
  // const coursesInTerm = usePlanStore((state) => state.warnings [props.termName]);
  const warnings = useWarnings({ term: props.termName }).filter(
    (warning) => warning.type === "overloading",
  );

  if (warnings.length > 0) {
    return (
      <h2 className="my-2 text-center text-xl font-semibold">
        {props.termName}{" "}
        <ExclamationTriangleIcon
          className="inline h-6 w-6 text-yellow-400"
          data-tooltip-id={warnings[0].id}
          data-tooltip-content={warnings[0].text}
          data-tooltip-variant="warning"
        />
      </h2>
    );
  }

  return (
    <h2 className="my-2 text-center text-xl font-semibold">{props.termName}</h2>
  );
};
