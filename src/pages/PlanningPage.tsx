import { ActionButton } from "~/components/actionButton/ActionButton";
import { Sidebar } from "~/components/sidebar/Sidebar";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { ShareIcon } from "@heroicons/react/24/solid";
import { courseData } from "~/sampleData";
import { CourseSmall } from "~/components/courseSmall/CourseSmall";

export const PlanningPage = () => {
  const maxCoursesInATerm = 5; //TODO: get this from the backend, or get it calculated

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-4 py-2 overflow-x-auto">
        <h1 className="text-3xl">My Plan</h1>
        <div className="flex justify-between my-2">
          <ul className="space-x-4">
            <ActionButton
              className="inline-block"
              text="All Terms"
              isActive
              icon={<AllTermsView />}
            />
            <ActionButton
              className="inline-block"
              text="Year"
              icon={<YearView />}
            />
            <ActionButton
              className="inline-block"
              text="Term"
              icon={<TermView />}
            />
          </ul>

          <div>
            <ActionButton text="Share" icon={<ShareIcon />} />
          </div>
        </div>
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
              {Array(maxCoursesInATerm)
                .fill(0)
                .map((_, i) => {
                  return (
                    <tr>
                      {Object.keys(courseData).map((term) => {
                        const course = courseData?.[term]?.[i];
                        if (course) {
                          const { courseCode, longName, tags } = course;
                          return (
                            <td
                              key={`${term}-${course.courseCode}`}
                              className="h-full"
                            >
                              <CourseSmall
                                courseCode={courseCode}
                                longName={longName}
                                tags={tags}
                              />
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

        <hr />
      </div>
    </div>
  );
};
