import { TagSchema } from "~/api/endpoints";
import { Pane } from "../pane/Pane";
import styles from "./CourseLarge.module.css";
export interface Tag {
  name: string;
  color: string;
}

interface CourseProps {
  courseCode: string;
  longName: string;
  tags: TagSchema[];
  courseColor?: string;
  onClick?: () => void;
}

export const CourseLarge = (props: CourseProps) => {
  return (
    <Pane className={styles.accentColor} onClick={props?.onClick}>
      <div className={styles.header}>{props.courseCode}</div>
      <div>
        <div className={styles.description}>{props.longName}</div>
      </div>
      <div className={styles.pillWrapper}>
        {props.tags.map((tag) => (
          <div
            className={styles.textPill}
            key={`${props.courseCode}-${tag.longName}`}
            style={{ border: `1px solid ${tag.color}` }}
          >
            {tag.longName}
          </div>
        ))}
      </div>
      {/* </div> */}
    </Pane>
  );
};
