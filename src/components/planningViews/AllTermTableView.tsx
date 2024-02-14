import { useState } from "react";
import { CourseSmall } from "../courseSmall/CourseSmall";
import { CourseViewProps } from "~/pages/PlanningPage";
import { CourseSelectionPane } from "../courseSelectionPane/CourseSelectionPane";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { toast } from "react-toastify";

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

  return (
    <div className="h-[calc(100vh-10rem)] w-full overflow-x-auto">
      <CourseSelectionPane
        initialCourse={selectedCourse}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onCourseAccept={onAcceptCourse}
        onCancel={unsetCourseSelections}
      />
      <div className="flex space-x-4">
        {Object.keys(courseData).map((term) => {
          return (
            <div key={term} className="flex w-36 flex-col">
              <h2 className="my-2 text-center text-xl font-semibold">{term}</h2>
              <div className="h-96 space-y-4">
                {Object.values(courseData?.[term])?.map((course) => {
                  if (course) {
                    return (
                      <CourseSmall
                        key={`${term}-${course.courseCode}`}
                        onDelete={() => {
                          console.log("clicked");
                          onDeleteCourse(term, course.courseCode);
                        }}
                        onReplace={() => {}}
                        onClick={() => {
                          openModal(term, course);
                        }}
                        {...course}
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

        <div className="flex w-36 flex-col">
          <h2 className="my-2 border-none bg-none text-center text-xl font-semibold">
            Next Term
          </h2>
          <button className="h-96 rounded-md border-2 border-dashed border-gray-400 bg-gray-200" onClick={() => toast("Not implemented yet")}>
            + New Term
          </button>
        </div>
      </div>
    </div>
  );
};
