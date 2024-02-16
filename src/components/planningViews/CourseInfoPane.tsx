import { twMerge } from "tailwind-merge";
import { Pane } from "../pane/Pane";
import { CourseWithTagsSchema } from "~/api/endpoints";

interface InfoPaneProps {
  selectedCourse: CourseWithTagsSchema;
}

export const CourseInfoPane = ({ selectedCourse }: InfoPaneProps) => {
  return (
    <Pane className="flex-1 space-y-4 px-6 py-4 md:min-w-40 lg:min-w-60 xl:min-w-80">
      <h2 className="text-4xl">{selectedCourse?.courseCode}</h2>
      <h3 className="text-2xl">{selectedCourse?.courseName}</h3>
      <div
        className={twMerge(
          "h-6 w-28 rounded-xl",
          selectedCourse?.tags?.[0].color &&
            `bg-${selectedCourse?.tags?.[0].color}-400`,
        )}
      />
      <div>{selectedCourse?.description}</div>
    </Pane>
  );
};
