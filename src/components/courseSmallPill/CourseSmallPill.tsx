import { TagSchema } from "~/api/endpoints";
import clsx from "clsx";

interface CoursePillsProps {
  courseCode: string;
  tags: TagSchema[];
}

export const CoursePills = ({ courseCode, tags }: CoursePillsProps) =>
  tags.map((tag) => (
    <div
      key={courseCode + tag.longName}
      className={clsx(
        "rounded-full text-white text-xs px-2 py-1 mr-1 inline-block",
        `bg-${tag.color}`,
      )}
      style={{ background: tag.color }}
    />
  ));
