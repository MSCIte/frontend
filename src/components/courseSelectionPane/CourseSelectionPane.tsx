import { useMemo, useState } from "react";
import { CourseBlock } from "./CourseBlock";
import clsx from "clsx";
import {
  CourseWithTagsSchema,
  useSearchCoursesCoursesSearchGet,
} from "~/api/endpoints";

interface CourseSelectionPaneProps {
  initialCourse?: CourseWithTagsSchema;
  onCourseAccept?: (course: CourseWithTagsSchema) => void;
  onCancel?: () => void;
}

// This will be inside another pane (rounded courners padding etc.)
// could be a modal (when you add a course), or maybe replaces the right sidebar in year/term view
export const CourseSelectionPane = ({
  initialCourse,
  onCourseAccept,
}: CourseSelectionPaneProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<
    CourseWithTagsSchema | undefined
  >(initialCourse);

  const { data } = useSearchCoursesCoursesSearchGet({
    q: searchQuery,
  });

  // Ideally backend can search across title, description, tags, etc.
  // Here we fill in the tags maybe (?)
  const selectedCourseList = useMemo(() => {
    return data?.data;
  }, [data]);

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
            {selectedCourseList?.map((course) => (
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
          {selectedCourse?.courseCode}: {selectedCourse?.courseName}
        </h1>
        <div className="space-x-2">
          <span>Degree Requirements: </span>
          {selectedCourse?.tags?.map((tag) => (
            <span
              key={tag.code}
              className={clsx(
                "inline-block rounded-full text-white py-1 px-2",
                `bg-${tag.color}-400`
              )}
            >
              {tag.longName}
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
