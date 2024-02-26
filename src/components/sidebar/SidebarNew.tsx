//@ts-nocheck

import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  RequirementData,
  RequirementsPane,
} from "../requirementsPane/RequirementsPane";
import { usePlanStore } from "~/stores";
import {
  useDegreeMissingReqsDegreeDegreeIdMissingReqsPost,
  useDegreeReqsDegreeDegreeNameReqsGet,
  useOptionsMissingReqsOptionOptIdMissingReqsPost,
} from "~/api/endpoints";
import { dataTagSymbol } from "@tanstack/react-query";
import { MajorRequirementsPane } from "../requirementsPane/MajorRequirementsPane";
import { OptionsRequirementsPane } from "../requirementsPane/OptionRequirementsPane";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { major, option, courses, completedCourseCodes } = usePlanStore();

  const { data: missingDegreeReqs, mutateAsync: getDegreeMissingReqs } =
    useDegreeMissingReqsDegreeDegreeIdMissingReqsPost({
      degreeId: major.name,
      courseCodesTaken: completedCourseCodes(),
      year: major.year.toString(),
    });

  const { data: missingOptionReqs, mutate: getOptionMissingReqs } =
    useOptionsMissingReqsOptionOptIdMissingReqsPost();

  useEffect(() => {
    getDegreeMissingReqs({
      degreeId: major.name,
      data: {
        courseCodesTaken: completedCourseCodes(),
        year: major.year.toString(),
      },
    });
  }, [major, courses]);

  useEffect(() => {
    getOptionMissingReqs({
      optId: "management_sciences_option",
      data: {
        courseCodesTaken: completedCourseCodes(),
        year: option.year.toString(),
      },
    });
  }, [option, courses]);

  const majorCompletionObj = useMemo<RequirementData[]>(() => {
    if (!missingDegreeReqs?.data?.additionalReqs) {
      return [];
    }

    const { data } = missingDegreeReqs;

    const statusBarMajor: RequirementData[] = [
      {
        name: "mandatory",
        requirementsCompleted:
          data.numberOfMandatoryCourses - data.mandatoryCourses.length,
        requirementsTotal: data.numberOfMandatoryCourses,
        color: "blue",
      },
    ];

    for (const [categoryCode, completionStatus] of Object.entries(
      data.additionalReqs,
    )) {
      statusBarMajor.push({
        name: categoryCode,
        requirementsCompleted: completionStatus.completed,
        requirementsTotal: completionStatus.total,
        color: "blue",
      });
    }

    // console.log("statusBarMajor", statusBarMajor);
    return statusBarMajor;
  }, [missingDegreeReqs?.data]);

  const optionCompletionObj = useMemo<RequirementData[]>(() => {
    if (!missingOptionReqs?.data) {
      return [];
    }

    const { data } = missingOptionReqs;

    const reqStatus = data.lists.map((req) => {
      return {
        name: req.listName,
        requirementsCompleted: Object.values(req.courses).filter(
          (course) => course,
        ).length,
        requirementsTotal: req.totalCourseToComplete,
        color: "purple",
      };
    });

    return reqStatus;
  }, [missingOptionReqs?.data]);

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
          <button
            onClick={toggleSidebar}
            className="m-auto mr-0 h-6 w-6 hover:scale-110"
          >
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
          {/* Major requirement */}
          {/* <RequirementsPane
            title="Major Requirement"
            data={majorCompletionObj}
          /> */}
          <MajorRequirementsPane
            title="Major Requirement"
            data={majorCompletionObj}
          />
          {/* Option requirement */}
          <OptionsRequirementsPane
            title="MSCI Option"
            data={optionCompletionObj}
          />
          {/* {sampleRequirementsData.map((requirement, ind) => (
            <RequirementsPane key={`${requirement}-${ind}`} {...requirement} />
          ))} */}
        </div>
      </div>
    </div>
  );
};
