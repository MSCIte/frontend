import { CourseSmall } from "../courseSmall/CourseSmall";
import { CourseViewProps } from "~/pages/PlanningPage";

export const AllTermsTableView = ({
  courseData,
  maxCoursesInATerm,
  setCourseData,
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

  return (
    <div className="w-full overflow-x-auto">
      <table className="border-separate border-spacing-2 overflow-x-auto ">
        <thead>
          <tr>
            {Object.keys(courseData).map((key) => (
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
                  {Object.keys(courseData).map((term) => {
                    const course = courseData?.[term]?.[i];
                    if (course) {
                      return (
                        <td
                          key={`${term}-${course.courseCode}`}
                          className="h-full"
                        >
                          <CourseSmall {...course} />
                        </td>
                      );
                    } else if (courseData?.[term]?.[i - 1]) {
                      // if the previous box in the term has a course, we add a plus button
                      return (
                        <td key={`${term}-${i}`} className="align-top">
                          <button
                            className="flex w-full items-center justify-center rounded-lg bg-white"
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
