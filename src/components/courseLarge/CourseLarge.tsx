import { Pane } from "../pane/Pane";
import styles from "./CourseLarge.module.css";
import clsx from "clsx";
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

export const CourseLarge = (props: CourseProps) => {
  return (
    <Pane className={styles.accentColor}>
      {/* <div className={clsx(styles.wrapper, styles.accentColor)}> */}
        <div className={styles.header}>{props.courseCode}</div>
        <div>
          <div className={styles.description}>{props.longName}</div>
        </div>
        <div className={styles.pillWrapper}>
          {props.tags.map((tag) => (
            <div
              className={styles.textPill}
              style={{ border: `1px solid ${tag.color}` }}
            >
              {tag.name}
            </div>
          ))}
        </div>
      {/* </div> */}
    </Pane>
  );
};
