import clsx from "clsx";
import { useCallback, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { RequirementsPane } from "../requirementsPane/RequirementsPane";

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

  const toggleSidebar = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={clsx(
        "flex flex-shrink-0 flex-grow-0 flex-col transition-width overflow-hidden ",
        isExpanded ? "w-80 border-r-2" : "w-16",
      )}
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <div className="p-4 h-full">
        <div className="flex justify-around">
          <h2 className={clsx("text-xl", !isExpanded && "hidden")}>
            Academic Summary
          </h2>
          <button onClick={toggleSidebar} className="w-6 h-6 m-auto mr-0">
            {isExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </button>
        </div>

        {!isExpanded && (
          <div className={clsx("lineDownCenter h-full w-full mt-4")} />
        )}

        <div className={clsx("space-y-4 mt-4", !isExpanded && "hidden")}>
          {sampleRequirementsData.map((requirement, ind) => (
            <RequirementsPane key={`${requirement}-${ind}`} {...requirement} />
          ))}
        </div>
      </div>
    </div>
  );
};
