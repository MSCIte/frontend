import clsx from "clsx";
import { useCallback, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div
      className={clsx(
        "flex flex-col h-screen transition-width",
        isExpanded ? "w-64 border-r-2" : "w-16"
      )}
    >
      <div className="p-4 h-full">
        <h2 className={clsx("float-left text-xl", !isExpanded && "hidden")}>
          Academic Summary
        </h2>
        <button onClick={toggleSidebar} className="w-6 h-6 float-right">
          {isExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
        <div className="lineDownCenter h-full w-full mt-6" />
      </div>
    </div>
  );
};
