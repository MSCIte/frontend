import { useState } from "react";
import { CourseViewProps, ModalMode } from "~/pages/PlanningPage";
import { CourseSelectionPane } from "../courseSelectionPane/CourseSelectionPane";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { toast } from "react-toastify";
import { TermColumn } from "./TermColumn";

export const AllTermsTableView = ({
  courseData,
  setCourseData,
}: CourseViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string>("1A");
  const [selectedCourse, setSelectedCourse] = useState<CourseWithTagsSchema>({
    courseCode: "",
    courseName: "",
  });
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

  return (
    <div className="z-10 h-[calc(100vh-10rem)] w-full overflow-x-auto">
      <CourseSelectionPane
        initialCourse={selectedCourse}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onCourseAccept={onAcceptCourse}
        onCancel={unsetCourseSelections}
        mode={modalMode}
      />
      <div className="flex space-x-4">
        {Object.keys(courseData).map((term) => {
          return (
            <TermColumn
              key={term}
              term={term}
              onDeleteCourse={onDeleteCourse}
              openModal={openModal}
              courseData={courseData}
              setSelectedCourse={setSelectedCourse}
              courseWidth="small"
            />
          );
        })}

        <div className="flex w-36 flex-col">
          <h2 className="my-2 border-none bg-none text-center text-xl font-semibold">
            Next Term
          </h2>
          <button
            className="h-96 w-36 rounded-md border-2 border-dashed border-gray-400 bg-gray-200"
            onClick={() => toast("Not implemented yet")}
          >
            + New Term
          </button>
        </div>
      </div>
    </div>
  );
};
