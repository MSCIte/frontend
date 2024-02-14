import clsx from "clsx";
import { useCallback, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { RequirementsPane } from "../requirementsPane/RequirementsPane";
import { Pane } from "../pane/Pane";
import { OnboardingModal } from "../onboardingModal/OnboardingModal";
import { usePlanStore } from "~/stores";

const sampleRequirementsData = [
  {
    title: "Degree Requirements",
    data: [
      {
        name: "Mandatory Courses",
        requirementsCompleted: 15,
        requirementsTotal: 20,
        color: "red",
      },
      {
        name: "Technical Electives",
        requirementsCompleted: 0,
        requirementsTotal: 6,
        color: "blue",
      },
      {
        name: "Complementary Studies Electives",
        requirementsCompleted: 0,
        requirementsTotal: 2,
        color: "blue",
      },
      {
        name: "Free Electives",
        requirementsCompleted: 1,
        requirementsTotal: 2,
        color: "blue",
      },
      {
        name: "Degree Completion",
        requirementsCompleted: 36,
        requirementsTotal: 45,
        color: "green",
      },
    ],
  },
  {
    title: "MSCI Option Requirements",
    data: [
      {
        name: "Mandatory Courses",
        requirementsCompleted: 15,
        requirementsTotal: 20,
        color: "red",
      },
      {
        name: "Dept. of Management Sciences Courses",
        requirementsCompleted: 3,
        requirementsTotal: 6,
        color: "blue",
      },
      {
        name: "Additional Elective",
        requirementsCompleted: 0,
        requirementsTotal: 2,
        color: "blue",
      },
      {
        name: "Option Completion",
        requirementsCompleted: 36,
        requirementsTotal: 45,
        color: "green",
      },
    ],
  },
];

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { setIsOnboardingModalOpen } = usePlanStore();

  const toggleSidebar = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={clsx(
        "flex h-[calc(100vh-6rem)] flex-shrink-0 flex-grow-0 flex-col overflow-hidden transition-width",
        isExpanded ? "w-80 border-r-2" : "w-16",
      )}
    >
      <div className="h-full">
        <div className="flex justify-around p-4">
          <h2 className={clsx("text-xl", !isExpanded && "hidden")}>
            Academic Summary
          </h2>
          <button onClick={toggleSidebar} className="m-auto mr-0 h-6 w-6">
            {isExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </button>
        </div>

        {!isExpanded && (
          <div className={clsx("lineDownCenter mt-4 h-full w-full")} />
        )}

        <div
          className={clsx(
            "h-[calc(100%-4rem)] space-y-4 overflow-y-scroll p-4",
            !isExpanded && "hidden",
          )}
        >
          {sampleRequirementsData.map((requirement, ind) => (
            <RequirementsPane key={`${requirement}-${ind}`} {...requirement} />
          ))}

          <Pane>
            <div className="flex justify-center">
              <button
                className="rounded-lg bg-white p-2"
                onClick={() => setIsOnboardingModalOpen(true)}
              >
                Change Major
              </button>
            </div>
          </Pane>
        </div>
      </div>
    </div>
  );
};
