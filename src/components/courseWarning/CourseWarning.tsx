import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
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
          {warnings.map((warning) => {
            return (
              <>
                <ExclamationTriangleIcon
                  className={twMerge(
                    "inline text-yellow-400",
                    size === "small" ? "h-5 w-5" : "h-6 w-6",
                  )}
                  data-tooltip-id={warning.id}
                  data-tooltip-content={warning.text}
                  data-tooltip-variant="warning"
                />
                {/* <Tooltip id={warning.id} className="z-50" /> */}
              </>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
