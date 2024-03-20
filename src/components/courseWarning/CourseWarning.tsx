import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { PlanState } from "~/stores";

interface CourseWarningsProps {
  warnings: PlanState["warnings"];
  size: "small" | "large";
}

export const CourseWarnings = ({ warnings, size }: CourseWarningsProps) => {
  return (
    <div>
      {warnings.length > 0 ? (
        <div className="flex flex-row items-center">
          {warnings.map((warning, ind) => {
            return (
              <ExclamationTriangleIcon
                key={`${warning.id}-${ind}`}
                className={twMerge(
                  "inline text-yellow-400 z-40",
                  size === "small" ? "h-5 w-5" : "h-6 w-6",
                )}
                data-tooltip-id={warning.id}
                data-tooltip-content={warning.text}
                data-tooltip-variant="warning"
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
