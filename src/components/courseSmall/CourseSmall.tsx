import clsx from "clsx";
import { Pane } from "../pane/Pane";
import styles from "./CourseSmall.module.css";
interface Tag {
  name: string;
  color: string;
}

interface CourseProps {
  courseCode: string;
  longName: string;
  tags: Tag[];
  courseColor?: string;
}

export const CourseSmall = (props: CourseProps) => {
  return (
    <Pane className="h-full w-36">
      <div className={clsx(styles.header)}>{props.courseCode}</div>
      <div>
        <div className={styles.description}>{props.longName}</div>
      </div>
      <div className={styles.pillWrapper}>
        {props.tags.map((tag) => (
          <div
            className={styles.colorPill}
            style={{ background: tag.color }}
          ></div>
        ))}
      </div>
    </Pane>
  );
};
