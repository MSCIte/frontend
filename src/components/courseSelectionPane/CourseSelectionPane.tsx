import { Fragment, useEffect, useRef, useState } from "react";
import { CourseBlock } from "./CourseBlock";
import clsx from "clsx";
import {
  CourseWithTagsSchema,
  useSearchCoursesCoursesSearchGet,
} from "~/api/endpoints";
import { usePlanStore } from "~/stores";

import { Dialog, Transition } from "@headlessui/react";
import { Pane } from "../pane/Pane";

export type CourseSelectionPaneModes = "add" | "replace";

interface CourseSelectionPaneProps {
  initialCourse?: CourseWithTagsSchema;
  onCourseAccept?: (course: CourseWithTagsSchema) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCancel?: () => void;
  mode?: CourseSelectionPaneModes;
}

// This will be inside another pane (rounded courners padding etc.)
// could be a modal (when you add a course), or maybe replaces the right sidebar in year/term view
export const CourseSelectionPane = ({
  initialCourse,
  onCourseAccept,
  isOpen,
  setIsOpen,
  onCancel,
}: CourseSelectionPaneProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<
    CourseWithTagsSchema | undefined
  >(initialCourse);

  const searchButtonRef = useRef<HTMLInputElement>(null);

  const { major } = usePlanStore();

  const { data } = useSearchCoursesCoursesSearchGet({
    q: searchQuery,
    degree_name: major.name,
    degree_year: major.year,
  });

  useEffect(() => {
    setSelectedCourse(initialCourse);
    if (initialCourse?.courseCode && !searchQuery) {
      setSearchQuery(initialCourse?.courseCode);
    }
  }, [initialCourse, searchQuery]);

  const SearchElement = (
    <div className="sticky top-0 bg-gray-100">
      <label
        htmlFor="courseSearch"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          ref={searchButtonRef}
          type="search"
          id="courseSearch"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search for a course"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <Transition
      show={isOpen}
      // enter="transition duration-100 ease-out"
      // enterFrom="transform scale-95 opacity-0"
      // enterTo="transform scale-100 opacity-100"
      // leave="transition duration-75 ease-out"
      // leaveFrom="transform scale-100 opacity-100"
      // leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSearchQuery("");
          setSelectedCourse(undefined);
          onCancel?.();
        }}
        className="relative z-50"
        initialFocus={searchButtonRef}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="h-[50rem] w-[80rem]">
              <Pane className="h-[inherit]">
                <div className="mx-4 grid h-full grid-cols-3 gap-4 overflow-y-hidden">
                  <div className="overflow-y-scroll">
                    {SearchElement}
                    <div className="col-span-1 space-y-2 rounded-lg bg-gray-100  p-4">
                      <div className="space-y-2">
                        {data?.data?.map((course) => (
                          <CourseBlock
                            course={course}
                            onClick={() => setSelectedCourse(course)}
                            key={`search-${course.courseCode}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col space-y-4 p-8">
                    <h1 className="text-3xl">
                      {selectedCourse?.courseCode}: {selectedCourse?.courseName}
                    </h1>
                    <div className="space-x-2">
                      <span>Degree Requirements: </span>
                      {selectedCourse?.tags?.map((tag) => (
                        <span
                          key={tag.code}
                          className={clsx(
                            "inline-block rounded-full px-2 py-1 text-white",
                            `bg-${tag.color}-400`,
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
                      className="!mt-auto ml-auto mr-0 rounded-lg bg-gray-300 p-2"
                      onClick={() => onCourseAccept?.(selectedCourse!)}
                    >
                      + Add to Course List
                    </button>
                  </div>
                </div>
              </Pane>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
