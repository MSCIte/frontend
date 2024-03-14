import { CourseViewProps, ModalMode } from "~/pages/PlanningPage";
import { useState } from "react";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { CourseSelectionPane } from "../courseSelectionPane/CourseSelectionPane";
import { toast } from "react-toastify";
import { TermColumn } from "./TermColumn";
import { CourseInfoPane } from "./CourseInfoPane";
import { usePlanStore } from "~/stores";

export const TermTableView = ({
  focusedTerm,
}: CourseViewProps) => {


  const { setCourses, courses: courseData } = usePlanStore();

  const selectedCourseData = Object.fromEntries(
    Object.entries(courseData).filter((_, ind) => ind === focusedTerm),
  );

  const firstSelectedCourse =
    selectedCourseData[Object.keys(selectedCourseData)[0]][
      Object.keys(selectedCourseData[Object.keys(selectedCourseData)[0]])[0]
    ];
  const [selectedCourse, setSelectedCourse] = useState<CourseWithTagsSchema>(
    firstSelectedCourse || {
      courseCode: "",
      courseName: "",
    },
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string>("1A");

  const [modalMode, setModalMode] = useState<ModalMode>("add");

  const openModal = (
    term: string,
    options?: {
      course?: CourseWithTagsSchema;
      mode?: ModalMode;
    },
  ) => {
    setSelectedTerm(term);
    if (options?.course) {
      setSelectedCourse(options.course);
    }
    if (options?.mode) {
      setModalMode(options.mode);
    }

    setIsModalOpen(true);
  };

  const onAcceptCourse = (course: CourseWithTagsSchema) => {
    setCourses((prev) => {
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
    setCourses((prev) => {
      const newCourseData = { ...prev };
      delete newCourseData[term][courseCode.replace(" ", "")];
      return newCourseData;
    });
  };

  const unsetCourseSelections = () => {
    setSelectedTerm("");
    setSelectedCourse({ courseCode: "", courseName: "" });
  };

  return (
    <div className="flex h-[calc(100vh-10rem)] w-full justify-between overflow-x-auto">
      <CourseSelectionPane
        initialCourse={selectedCourse}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onCourseAccept={onAcceptCourse}
        onCancel={unsetCourseSelections}
        mode={modalMode}
      />
      <div className="mr-4 flex space-x-4 overflow-x-scroll">
        {Object.keys(selectedCourseData).map((term) => {
          return (
            <TermColumn
              key={term}
              term={term}
              onDeleteCourse={onDeleteCourse}
              openModal={openModal}
              courseData={selectedCourseData}
              setSelectedCourse={setSelectedCourse}
              courseWidth="large"
            />
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
      <CourseInfoPane selectedCourse={selectedCourse} />
    </div>
  );
};
