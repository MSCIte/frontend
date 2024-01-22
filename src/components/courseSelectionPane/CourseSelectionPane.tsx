import { useMemo, useState } from "react";
import { Course, courseList } from "~/sampleData";
import { stringSimilarity } from "~/utils";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { CourseBlock } from "./CourseBlock";
import clsx from "clsx";
import { ActionButton } from "../actionButton/ActionButton";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface CourseSelectionPaneProps {
  initialCourse?: Course;
  onCourseAccept?: (course: Course) => void;
  onCancel?: () => void;
}

const stringSearchScore = (searchQuery: string, s1: string, s2: string) => {
  return stringSimilarity(searchQuery, s2) - stringSimilarity(searchQuery, s1);
};

// This will be inside another pane (rounded courners padding etc.)
// could be a modal (when you add a course), or maybe replaces the right sidebar in year/term view
export const CourseSelectionPane = ({
  initialCourse,
  onCourseAccept,
  onCancel,
}: CourseSelectionPaneProps) => {
  // TODO: Call backend API
  const entireCourseList = courseList;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>(
    initialCourse || entireCourseList[0],
  );

  // Ideally backend can search across title, description, tags, etc.
  const selectedCourseList = useMemo(() => {
    if (!searchQuery) {
      return entireCourseList;
    } else {
      // slice to avoid mutating the original array
      return entireCourseList.slice(0).sort((a, b) => {
        let cmpScore = 0;
        cmpScore += stringSearchScore(searchQuery, a.longName, b.longName);
        cmpScore +=
          2 * stringSearchScore(searchQuery, a.courseCode, b.courseCode);
        cmpScore += stringSearchScore(
          searchQuery,
          a.tags.map((tag) => tag.name).join(" "),
          b.tags.map((tag) => tag.name).join(" "),
        );
        if (a.description && b.description) {
          cmpScore += stringSearchScore(
            searchQuery,
            a.description,
            b.description,
          );
        }
        return cmpScore;
      });
    }
  }, [searchQuery, entireCourseList]);

  const SearchElement = (
    <div className="bg-gray-100 sticky top-0">
      <label
        htmlFor="courseSearch"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="courseSearch"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for a course"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-4 mx-4 overflow-y-hidden h-full">
      <div className="overflow-y-scroll">
        {SearchElement}
        <div className="col-span-1 bg-gray-100 rounded-lg p-4  space-y-2">
          <div className="space-y-2">
            {selectedCourseList.map((course) => (
              <CourseBlock
                course={course}
                onClick={() => setSelectedCourse(course)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-2 p-8 space-y-4">
        <h1 className="text-3xl">
          {selectedCourse?.courseCode}: {selectedCourse?.longName}
        </h1>
        <div className="space-x-2">
          <span>Degree Requirements: </span>
          {selectedCourse?.tags.map((tag) => (
            <span
              key={tag.name}
              className={clsx(
                "inline-block rounded-full text-white py-1 px-2",
                `bg-${tag.color}-400`,
              )}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div>
          <span>Description: </span>
          {selectedCourse?.description}
        </div>

        <button
          className="bg-gray-300 p-2 rounded-lg mr-0 ml-auto !mt-auto"
          onClick={() => onCourseAccept?.(selectedCourse!)}
        >
          + Add to Course List
        </button>
      </div>
    </div>
  );
};
