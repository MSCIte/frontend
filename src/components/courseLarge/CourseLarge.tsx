import { CourseWithTagsSchema, TagSchema } from "~/api/endpoints";
import { Pane } from "../pane/Pane";
import styles from "./CourseLarge.module.css";
export interface Tag {
  name: string;
  color: string;
}

interface CourseProps {
  course: CourseWithTagsSchema;
  onClick?: () => void;
}

export const CourseLarge = ({ course, onClick }: CourseProps) => {
  return (
    <Pane className={styles.accentColor} onClick={onClick}>
      <div className={styles.header}>{course.courseCode}</div>
      <div>
        <div className={styles.description}>{course.courseName}</div>
      </div>
      <div className={styles.pillWrapper}>
        {course?.tags &&
          course.tags.map((tag) => (
            <div
              className={styles.textPill}
              key={`${course.courseCode}-${tag.longName}`}
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
