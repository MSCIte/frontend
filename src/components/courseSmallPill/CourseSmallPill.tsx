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
        "mr-1 inline-block rounded-full px-2 py-1 text-xs text-white",
        `bg-${tag.color}`,
      )}
      style={{ background: tag.color }}
    />
  ));
