import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  CourseWithTagsSchema,
  TagSchema,
  useGetAllTagsTagsGet,
  useSearchCoursesCoursesSearchGet,
} from "~/api/endpoints";
import { usePlanStore } from "~/stores";

import { Dialog, Transition } from "@headlessui/react";
import { Pane } from "../pane/Pane";
import { ModalMode } from "~/pages/PlanningPage";
import { twMerge } from "tailwind-merge";
import { CourseBlock } from "./CourseBlock";

interface CourseSelectionPaneProps {
  initialCourse?: CourseWithTagsSchema;
  onCourseAccept?: (course: CourseWithTagsSchema) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCancel?: () => void;
  mode?: ModalMode;
}

export const colorVariants = {
  red: "bg-red-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
  blue: "bg-blue-400",
  indigo: "bg-indigo-600",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  slate: "bg-slate-400",
  orange: "bg-orange-400",
  sky: "bg-sky-200",
  rose: "bg-rose-200",
};

// This will be inside another pane (rounded courners padding etc.)
// could be a modal (when you add a course), or maybe replaces the right sidebar in year/term view
export const CourseSelectionPane = ({
  initialCourse,
  onCourseAccept,
  isOpen,
  setIsOpen,
  onCancel,
  mode,
}: CourseSelectionPaneProps) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<
    CourseWithTagsSchema | undefined
  >(initialCourse);

  const { data: allTags, isLoading: isTagsLoading } = useGetAllTagsTagsGet();

  const searchButtonRef = useRef<HTMLInputElement>(null);

  const { major, option } = usePlanStore();

  const [searchTag, setSearchTag] = useState<string | null>(null);

  const searchTagChoices = useMemo<TagSchema[]>(() => {
    if (allTags?.data) {
      return [
        {
          code: "all",
          longName: "All",
          color: "gray",
          shortName: "All",
        },
        ...allTags.data,
      ];
    } else {
      return [
        {
          code: "all",
          longName: "All",
          color: "gray",
          shortName: "All",
        },
      ];
    }
  }, [allTags]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data } = useSearchCoursesCoursesSearchGet({
    q: searchQuery,
    degree_name: major.name,
    degree_year: major.year.toString(),
    option_name: option.name,
    option_year: option.year.toString(),
    tag: searchTag,
  });

  useEffect(() => {
    setSelectedCourse(initialCourse);
    if (initialCourse?.courseCode && searchQuery == null) {
      setSearchQuery(initialCourse?.courseCode);
    }
    setSearchTag("all");
  }, [initialCourse, searchQuery]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  const SearchElement = (
    <div className="sticky top-0 flex bg-gray-100">
      <label
        htmlFor="courseSearch"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <button
        id="dropdown-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        All courses{" "}
        <svg
          className="ms-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={twMerge(
          "z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700",
          isDropdownOpen ? "block" : "hidden",
        )}
      >
        <ul
          className="bg-red-800 py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col"
          aria-labelledby="dropdown-button"
        >
          {isTagsLoading ? (
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Loading...
              </button>
            </li>
          ) : (
            searchTagChoices.map((tag) => (
              <li key={tag.code}>
                <button
                  type="button"
                  className="inline-flex w-full bg-blue-700 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {tag.longName}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="relative w-full">
        <input
          ref={searchButtonRef}
          type="search"
          id="courseSearch"
          className="block w-full rounded-r-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search for a course"
          value={searchQuery || ""}
          onChange={(e) => setSearchQuery(e.target.value)}
        />{" "}
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
            <Dialog.Panel className="h-[90svh] w-[80svw] 2xl:h-[50rem] 2xl:w-[80rem]">
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
                    {selectedCourse?.courseCode ? (
                      <>
                        <h1 className="text-3xl">
                          {selectedCourse?.courseCode}:{" "}
                          {selectedCourse?.courseName}
                        </h1>
                        <div className="space-x-2">
                          <span>Degree Requirements: </span>
                          {selectedCourse?.tags?.map((tag) => (
                            <span
                              key={tag.code}
                              className={clsx(
                                "inline-block rounded-full px-2 py-1 text-white",
                                colorVariants?.[
                                  tag.color as keyof typeof colorVariants
                                ],
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
                          {mode === "replace"
                            ? "Replace Course"
                            : "+ Add to Course List"}
                        </button>
                      </>
                    ) : (
                      <h1 className="text-3xl">Select a Course to Add</h1>
                    )}
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
