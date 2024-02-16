import { CourseViewProps } from "~/pages/PlanningPage";
import { CourseLarge } from "../courseLarge/CourseLarge";
import { Pane } from "../pane/Pane";
import clsx from "clsx";
import { useState } from "react";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { CourseSelectionPane } from "../courseSelectionPane/CourseSelectionPane";
import { toast } from "react-toastify";
import { TermTitle } from "./TermTitle";

export const TermTableView = ({
  courseData,
  focusedTerm,
  setCourseData,
}: CourseViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string>("1A");
  const [selectedCourse, setSelectedCourse] = useState<CourseWithTagsSchema>({
    courseCode: "",
    courseName: "",
  });

  const openModal = (term: string, selectedCourse?: CourseWithTagsSchema) => {
    setSelectedTerm(term);
    if (selectedCourse) {
      setSelectedCourse(selectedCourse);
    }
    setIsModalOpen(true);
  };

  const onAcceptCourse = (course: CourseWithTagsSchema) => {
    setCourseData((prev) => {
      if (course.courseCode === selectedCourse.courseCode) {
        return prev;
      }

      const newCourseData = { ...prev };
      newCourseData[selectedTerm] = {
        ...newCourseData[selectedTerm],
        [course.courseCode]: course,
      };
      delete newCourseData[selectedTerm][selectedCourse.courseCode];
      return newCourseData;
    });
    setIsModalOpen(false);
    unsetCourseSelections();
  };

  const onDeleteCourse = (term: string, courseCode: string) => {
    console.log("onDeleteCourse", term, courseCode);
    setCourseData((prev) => {
      const newCourseData = { ...prev };
      delete newCourseData[term][courseCode.replace(" ", "")];
      return newCourseData;
    });
  };

  const unsetCourseSelections = () => {
    setSelectedTerm("");
    setSelectedCourse({ courseCode: "", courseName: "" });
  };
  const selectedCourseData = Object.fromEntries(
    Object.entries(courseData).filter((_, ind) => ind === focusedTerm),
  );

  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-x-auto">
      <CourseSelectionPane
        initialCourse={selectedCourse}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onCourseAccept={onAcceptCourse}
        onCancel={unsetCourseSelections}
      />
      <div className="mr-4 flex space-x-4">
        {Object.keys(selectedCourseData).map((term) => {
          return (
            <div
              key={term}
              className="flex w-36 flex-col md:w-52 lg:w-80 xl:w-128"
            >
              <TermTitle termName={term} />
              <div className="h-128 space-y-4">
                {Object.values(courseData?.[term])?.map((course) => {
                  if (course) {
                    return (
                      <CourseLarge
                        className="h-32 cursor-pointer"
                        key={`${term}-${course.courseCode}`}
                        onDelete={() => {
                          console.log("clicked");
                          onDeleteCourse(term, course.courseCode);
                        }}
                        onReplace={() => {
                          openModal(term, course);
                        }}
                        onClick={() => setSelectedCourse(course)}
                        course={course}
                      />
                    );
                  }
                })}
                <button
                  className="flex w-full items-center justify-center rounded-lg bg-white"
                  onClick={() => openModal(term)}
                >
                  <div className="text-4xl">+</div>
                </button>
              </div>
            </div>
          );
        })}

        {
          /* Check if it's the last or second last term */
          focusedTerm === Object.keys(courseData).length - 1 ? (
            <div className="flex w-36 flex-col">
              <h2 className="my-2 border-none bg-none text-center text-xl font-semibold">
                Next Term
              </h2>
              <button
                className="h-96 rounded-md border-2 border-dashed border-gray-400 bg-gray-200"
                onClick={() => toast("Not implemented yet")}
              >
                + New Term
              </button>
            </div>
          ) : null
        }
      </div>
      <Pane className="w-full space-y-4 px-6 py-4 md:min-w-72 lg:min-w-96 xl:min-w-fit">
        <h2 className="text-4xl">{selectedCourse?.courseCode}</h2>
        <h3 className="text-2xl">{selectedCourse?.courseName}</h3>
        <div
          className={clsx(
            "h-6 w-28 rounded-xl",
            selectedCourse?.tags?.[0].color &&
              `bg-${selectedCourse?.tags?.[0].color}-400`,
          )}
        />
        <div>{selectedCourse?.description}</div>
      </Pane>
    </div>
  );
};
