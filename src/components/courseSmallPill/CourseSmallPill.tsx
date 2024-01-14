import { Tag } from "../courseLarge/CourseLarge";

interface CoursePillsProps {
  courseCode: string;
  tags: Tag[];
}

export const CoursePills = (props: CoursePillsProps) =>
  props.tags.map((tag) => (
    <div
      key={props.courseCode + tag.name}
      className="rounded-full text-white text-xs px-2 py-1 mr-1 inline-block"
      style={{ background: tag.color }}
    />
  ));
