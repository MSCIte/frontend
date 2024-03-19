import { Fragment, useEffect, useRef, useState } from "react";
import {
  CourseWithTagsSchema,
  TagSchema,
  useSearchCoursesCoursesSearchGet,
} from "~/api/endpoints";
import { usePlanStore } from "~/stores";

import { Dialog, Transition } from "@headlessui/react";
import { Pane } from "../pane/Pane";
import { ModalMode } from "~/pages/PlanningPage";
import { twMerge } from "tailwind-merge";
import { CourseBlock } from "./CourseBlock";
import { useClickOutside } from "~/utils";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

interface CourseSelectionPaneProps {
  initialCourse?: CourseWithTagsSchema;
  onCourseAccept?: (course: CourseWithTagsSchema) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCancel?: () => void;
  mode?: ModalMode;
}

export const colorVariants = {
  red: {
    fg: "text-red-400",
    bg: "bg-red-400",
  },
  yellow: {
    fg: "text-yellow-400",
    bg: "bg-yellow-400",
  },
  green: {
    fg: "text-green-400",
    bg: "bg-green-400",
  },
  blue: {
    fg: "text-blue-400",
    bg: "bg-blue-400",
  },
  indigo: {
    fg: "text-indigo-600",
    bg: "bg-indigo-600",
  },
  purple: {
    fg: "text-purple-400",
    bg: "bg-purple-400",
  },
  pink: {
    fg: "text-pink-400",
    bg: "bg-pink-400",
  },
  slate: {
    fg: "text-slate-400",
    bg: "bg-slate-400",
  },
  orange: {
    fg: "text-orange-400",
    bg: "bg-orange-400",
  },
  sky: {
    fg: "text-sky-200",
    bg: "bg-sky-200",
  },
  rose: {
    fg: "text-rose-200",
    bg: "bg-rose-200",
  },
  gray: {
    fg: "text-gray-400",
    bg: "bg-gray-400",
  },
};

export const allowedTags: TagSchema[] = [
  {
    code: "",
    color: "red",
    shortName: "All",
    longName: "All",
  },
  {
    code: "CSE",
    color: "indigo",
    shortName: "CSE",
    longName: "Complimentary Studies Elective",
  },
  {
    code: "NSE",
    color: "yellow",
    shortName: "NSE",
    longName: "Natural Science Elective",
  },
  {
    code: "TE",
    color: "rose",
    shortName: "TE",
    longName: "Technical Elective",
  },
  {
    code: "elective",
    color: "green",
    shortName: "Opt Elective",
    longName: "Option Elective",
  },
  {
    code: "organizational_studies",
    color: "red",
    shortName: "Org Studies",
    longName: "Organizational Studies",
  },
  {
    code: "eng_econ",
    color: "orange",
    shortName: "Eng Econ",
    longName: "Engineering Economics",
  },
  {
    code: "opti_1",
    color: "yellow",
    shortName: "Optimization",
    longName: "Optimization",
  },
];

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

  // const { data: allTags, isLoading: isTagsLoading } = useGetAllTagsTagsGet();

  const searchButtonRef = useRef<HTMLInputElement>(null);
  const searchElementRef = useRef<HTMLDivElement>(null);

  const { major, option } = usePlanStore();

  const [searchTag, setSearchTag] = useState<string | undefined>("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useClickOutside(searchElementRef, () => {
    setIsDropdownOpen(false);
  });

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
  }, [initialCourse, searchQuery]);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  const SearchElement = (
    <div className="sticky top-0 flex bg-gray-100" ref={searchElementRef}>
      <label
        htmlFor="courseSearch"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>

      <button
        className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 "
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {
          <AcademicCapIcon
            className={twMerge(
              "h-6 w-6",
              colorVariants?.[
                allowedTags.find((tag) => tag.code === searchTag)?.color ||
                  "gray"
              ].fg,
            )}
          />
        }{" "}
        {allowedTags.find((tag) => tag.code === searchTag)?.shortName || "All"}
        <svg
          className="ms-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={twMerge(
          "z-10 flex w-44 flex-col divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700",
          isDropdownOpen ? "absolute top-16" : "hidden",
        )}
      >
        <ul
          className=" py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdown-button"
        >
          {allowedTags.map((tag) => (
            <li
              key={tag.code}
              className="flex items-center px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <AcademicCapIcon
                className={twMerge("h-6 w-6", colorVariants?.[tag.color].fg)}
              />{" "}
              <button
                type="button"
                onClick={() => {
                  setSearchTag(tag.code);
                  setIsDropdownOpen(false);
                }}
                className="inline-flex w-full px-4 py-2 text-left "
              >
                {tag.longName}
              </button>
            </li>
          ))}
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
                <div className="mx-4 grid h-full grid-cols-5 gap-4 overflow-y-hidden">
                  <div className="col-span-2 overflow-y-scroll">
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
                  <div className="col-span-3 flex flex-col space-y-4 p-8">
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
                              className={twMerge(
                                "inline-block rounded-full px-2 py-1 text-white",
                                colorVariants?.[
                                  tag.color as keyof typeof colorVariants
                                ].bg,
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
