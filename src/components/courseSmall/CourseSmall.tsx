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
    <Pane className="h-36 w-36">
      <div className="flex flex-col h-full justify-between">
        <div className={clsx(styles.header)}>{props.courseCode}</div>
        <div>
          <div className={styles.description}>{props.longName}</div>
        </div>
        <div className={styles.pillWrapper}>
          {props.tags.map((tag) => (
            <div
              key={props.courseCode + tag.name}
              className={styles.colorPill}
              style={{ background: tag.color }}
            />
          ))}
        </div>
      </div>
    </Pane>
  );
};
