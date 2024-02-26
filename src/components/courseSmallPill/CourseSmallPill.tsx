import { TagSchema } from "~/api/endpoints";
import { twMerge } from "tailwind-merge";
import { backgroundColors } from "~/utils";

interface CoursePillsProps {
  courseCode: string;
  tags: TagSchema[];
}

export const CoursePills = ({ courseCode, tags }: CoursePillsProps) =>
  tags.map((tag) => (
    <div
      key={courseCode + tag.longName}
      className={twMerge(
        "mr-1 inline-block rounded-full px-2 py-1 text-xs text-white",
        backgroundColors[tag.color],
      )}
    />
  ));
