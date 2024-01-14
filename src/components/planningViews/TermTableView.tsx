import { CourseViewProps } from "~/pages/PlanningPage";
import { CourseSmall } from "../courseSmall/CourseSmall";
import { CourseLarge } from "../courseLarge/CourseLarge";

export const TermTableView = ({
  courseData,
  focusedTerm,
  maxCoursesInATerm,
  setCourseData,
  setFocusedTerm,
}: CourseViewProps) => {
  const setNewCourse = (term: string, index: number) => {
    setCourseData((prev) => {
      const newCourseData = { ...prev };
      // check to see if the length is long enough
      if (!newCourseData[term][index]) {
        newCourseData[term].push({
          courseCode: "CCC 100",
          longName: "New Course",
          tags: [{ name: "Chemistry", color: "red" }],
        });
      } else {
        newCourseData[term][index] = {
          courseCode: "CCC 100",
          longName: "New Course",
          tags: [{ name: "Chemistry", color: "red" }],
        };
      }
      return newCourseData;
    });
  };

  const selectedCourseData = Object.fromEntries(
    Object.entries(courseData).filter((_, ind) => ind === focusedTerm)
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="border-separate border-spacing-2 overflow-x-auto ">
        <thead>
          <tr>
            {Object.keys(selectedCourseData).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(maxCoursesInATerm + 1)
            .fill(0)
            .map((_, i) => {
              return (
                <tr key={`course-${i}`}>
                  {Object.keys(selectedCourseData).map((term) => {
                    const course = selectedCourseData?.[term]?.[i];
                    if (course) {
                      const { courseCode, longName, tags } = course;
                      return (
                        <td
                          key={`${term}-${course.courseCode}`}
                          className="h-full"
                        >
                          <CourseLarge
                            courseCode={courseCode}
                            longName={longName}
                            tags={tags}
                          />
                        </td>
                      );
                    } else if (selectedCourseData?.[term]?.[i - 1]) {
                      // if the previous box in the term has a course, we add a plus button
                      return (
                        <td key={`${term}-${i}`} className="align-top">
                          <button
                            className="bg-white rounded-lg w-full flex justify-center items-center"
                            onClick={() => setNewCourse(term, i)}
                          >
                            <div className="text-4xl">+</div>
                          </button>
                        </td>
                      );
                    } else {
                      return <td key={`${term}-${i}`} />;
                    }
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
