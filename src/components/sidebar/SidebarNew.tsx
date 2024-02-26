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

const bruh = {
  data: [
    {
      name: "te",
      courses: {
        // True if taken, false if not taken
        MSCI100: true,
        MSCI211: false,
        MSCI311: false,
      },
      // Number of courses in the list that must be taken
      totalCourseToComplete: 5,
    },
  ],
};

// const sampleRequirementsData = [
//   {
//     title: "Degree Requirements",
//     data: [
//       {
//         name: "Mandatory Courses",
//         requirementsCompleted: 15,
//         requirementsTotal: 20,
//         color: "red",
//       },
//       {
//         name: "Technical Electives",
//         requirementsCompleted: 0,
//         requirementsTotal: 6,
//         color: "blue",
//       },
//       {
//         name: "Complementary Studies Electives",
//         requirementsCompleted: 0,
//         requirementsTotal: 2,
//         color: "blue",
//       },
//       {
//         name: "Free Electives",
//         requirementsCompleted: 1,
//         requirementsTotal: 2,
//         color: "blue",
//       },
//       {
//         name: "Degree Completion",
//         requirementsCompleted: 36,
//         requirementsTotal: 45,
//         color: "green",
//       },
//     ],
//   },
//   {
//     title: "MSCI Option Requirements",
//     data: [
//       {
//         name: "Mandatory Courses",
//         requirementsCompleted: 15,
//         requirementsTotal: 20,
//         color: "red",
//       },
//       {
//         name: "Dept. of Management Sciences Courses",
//         requirementsCompleted: 3,
//         requirementsTotal: 6,
//         color: "blue",
//       },
//       {
//         name: "Additional Elective",
//         requirementsCompleted: 0,
//         requirementsTotal: 2,
//         color: "blue",
//       },
//       {
//         name: "Option Completion",
//         requirementsCompleted: 36,
//         requirementsTotal: 45,
//         color: "green",
//       },
//     ],
//   },
// ];

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { major, courses, completedCourseCodes } = usePlanStore();

  const { data: missingDegreeReqs, mutateAsync: getDegreeMissingReqs } =
    useDegreeMissingReqsDegreeDegreeIdMissingReqsPost({
      degreeId: major.name,
      courseCodesTaken: completedCourseCodes(),
      year: major.year.toString(),
    });

  // console.log("missingDegreeReqs", missingDegreeReqs?.data);

  const { data: missingOptionReqs, mutate: getOptionMissingReqs } =
    useOptionsMissingReqsOptionOptIdMissingReqsPost();

  // console.log("missingOptionReqs", missingOptionReqs?.data);

  useEffect(() => {
    getOptionMissingReqs({
      optId: "management_sciences_option",
      data: {
        courseCodesTaken: completedCourseCodes(),
        year: major.year.toString(),
      },
    });

    getDegreeMissingReqs({
      degreeId: major.name,
      data: {
        courseCodesTaken: completedCourseCodes(),
        year: major.year.toString(),
      },
    });
  }, [major, courses]);

  const majorCompletionObj = useMemo<RequirementData[]>(() => {
    if (!missingDegreeReqs?.data?.additionalReqs) {
      return [];
    }

    const { data } = missingDegreeReqs;

    let statusBarMajor: RequirementData[] = [
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

    console.log("missingOptionReqs", data);

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

    console.log("reqStatus", reqStatus);

    return reqStatus;
  }, [missingOptionReqs?.data]);

  // const { data: degreeMissingReqs } =
  //   useDegreeMissingReqsDegreeDegreeIdMissingReqsGet(major.name, {
  //     courseCodesTaken: completedCourseCodes(),
  //     year: major.year.toString(),
  //   });

  // const degreeMissingReqs = {} as any;

  // const majorCompletionStatus = useMemo<RequirementData[]>(() => {
  //   if (!degreeReqs?.data || !degreeMissingReqs?.data) {
  //     return [];
  //   }

  //   // additional reqs
  //   // degreeReqs.data.additionalReqs
  //   const reqData: RequirementData[] = [];

  //   reqData.push({
  //     name: "Mandatory Courses",
  //     requirementsCompleted:
  //       degreeReqs.data.mandatoryCourses.length -
  //       degreeMissingReqs.data.mandatoryCourses.length,
  //     requirementsTotal: degreeReqs.data.mandatoryCourses.length,
  //     color: "red",
  //   });

  //   Object.entries(degreeMissingReqs.data.additionalReqs).forEach(
  //     ([reqName, completionStatus]) => {
  //       reqData.push({
  //         name: reqName,
  //         requirementsCompleted: Number.parseInt(completionStatus.completed),
  //         requirementsTotal: Number.parseInt(completionStatus.total),
  //         color: "blue",
  //       });
  //     },
  //   );
  //   return reqData;
  // }, [degreeReqs, degreeMissingReqs?.data]);

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
          <RequirementsPane
            key={`req-option`}
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
