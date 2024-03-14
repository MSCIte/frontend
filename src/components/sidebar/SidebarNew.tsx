import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { RequirementData } from "../requirementsPane/RequirementsPane";
import { usePlanStore } from "~/stores";
import {
  useDegreeMissingReqsDegreeDegreeIdMissingReqsPost,
  useOptionsMissingReqsOptionOptIdMissingReqsPost,
} from "~/api/endpoints";
import { MajorRequirementsPane } from "../requirementsPane/MajorRequirementsPane";
import { OptionsRequirementsPane } from "../requirementsPane/OptionRequirementsPane";
import { Pane } from "../pane/Pane";
import { ActionButton } from "../actionButton/ActionButton";
import { TrashIcon } from "@heroicons/react/24/outline";
import { groupBy } from "~/utils";
import { toast } from "react-toastify";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { major, option, courses, completedCourseCodes } = usePlanStore();

  const { data: missingDegreeReqs, mutateAsync: getDegreeMissingReqs } =
    useDegreeMissingReqsDegreeDegreeIdMissingReqsPost();

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
  }, [major, courses, completedCourseCodes, getDegreeMissingReqs]);

  useEffect(() => {
    getOptionMissingReqs({
      optId: "management_sciences_option",
      data: {
        courseCodesTaken: completedCourseCodes(),
        year: option.year.toString(),
      },
    });
  }, [option, courses, completedCourseCodes, getOptionMissingReqs]);

  const majorCompletionObj = useMemo<RequirementData[]>(() => {
    if (!missingDegreeReqs?.data?.additionalReqs) {
      return [];
    }

    const { data } = missingDegreeReqs;

    const statusBarMajor: RequirementData[] = [
      {
        name: "Mandatory",
        requirementsCompleted:
          data.numberOfMandatoryCourses - data.mandatoryCourses.length,
        requirementsTotal: data.numberOfMandatoryCourses,
        color: data.tag.color,
      },
    ];

    for (const [categoryCode, completionStatus] of Object.entries(
      data.additionalReqs,
    )) {
      statusBarMajor.push({
        name: categoryCode,
        requirementsCompleted: parseInt(completionStatus.completed),
        requirementsTotal: parseInt(completionStatus.total),
        color: completionStatus.tag.color,
      });
    }

    // console.log("statusBarMajor", statusBarMajor);
    return statusBarMajor;
  }, [missingDegreeReqs]);

  const optionCompletionObj = useMemo<RequirementData[]>(() => {
    if (!missingOptionReqs?.data) {
      return [];
    }

    const { data } = missingOptionReqs;

    const reqStatus = data.lists
      .map((req) => {
        return {
          name: req.listName,
          requirementsCompleted: Object.values(req.courses).filter(
            (course) => course,
          ).length,
          requirementsTotal: req.totalCourseToComplete,
          color: req.tag.color,
        };
      })
      .sort((a, b) => a.requirementsTotal - b.requirementsTotal);

    return reqStatus;
  }, [missingOptionReqs]);

  const toggleSidebar = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const warnings = usePlanStore((state) => state.warnings);

  return (
    <div
      className={clsx(
        "flex h-[calc(100vh-6rem)] flex-shrink-0 flex-grow-0 flex-col overflow-hidden transition-width",
        isExpanded ? "w-80 border-r-2" : "w-16",
      )}
    >
      <div className="h-full">
        <div className="flex items-center justify-around p-4">
          <h2 className={clsx("text-xl", !isExpanded && "hidden")}>
            Academic Summary
          </h2>
          <button
            onClick={toggleSidebar}
            className="m-auto mr-0 h-8 w-8 rounded-full border border-gray-300 p-1 hover:scale-110"
          >
            {isExpanded ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </button>
        </div>

        {!isExpanded && (
          <div className={clsx("lineDownCenter mt-4 h-full w-full")} />
        )}

        <div
          className={clsx(
            "h-[calc(100%-4rem)] space-y-4 overflow-y-auto p-4 pt-0",
            !isExpanded && "hidden",
          )}
        >
          <MajorRequirementsPane
            title="Major Requirement"
            data={majorCompletionObj}
          />
          {/* Option requirement */}
          <OptionsRequirementsPane
            title="MSCI Option"
            data={optionCompletionObj}
          />

          <Pane className="space-y-4">
            <h2 className="text-lg font-medium">
              Warnings{" "}
              {warnings?.length > 0 && (
                <ExclamationTriangleIcon className="inline-block h-6 w-6 text-yellow-400" />
              )}{" "}
            </h2>
            {warnings?.length > 0 ? (
              <div className="space-y-2">
                {Object.entries(
                  groupBy<(typeof warnings)[0]>(
                    warnings,
                    (warn) => warn.affectedCourse.term,
                  ),
                ).map(([term, warnings]) => {
                  return (
                    <div key={term}>
                      <h3 className="font-medium">{term}</h3>
                      {warnings.map((warning) => {
                        return (
                          <div className="text-sm" key={warning.id}>
                            <p>
                              {warning.affectedCourse.code}: {warning.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Congrats, no warnings!</p>
            )}
          </Pane>

          <Pane className="space-y-4">
            <h2 className="text-2xl">Debug Menu</h2>
            <ActionButton
              text="Clear Localstorage"
              icon={<TrashIcon className="h-6 w-6 text-gray-400" />}
              onClick={() => {
                localStorage.clear();
                toast("Cleared, please reload!");
              }}
            />
          </Pane>
          {/* {sampleRequirementsData.map((requirement, ind) => (
            <RequirementsPane key={`${requirement}-${ind}`} {...requirement} />
          ))} */}
        </div>
      </div>
    </div>
  );
};
