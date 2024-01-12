import styles from "./Course.module.css";

interface Tag {
  name: string;
  color: string;
}

interface CourseProps {
  courseCode: string;
  longName: string;
  tags: Tag[];
  isExtended: boolean;
}

export const Course = (props: CourseProps) => {
  if (props.isExtended) {
    return (
      <div className={styles.wrapper}>
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
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>{props.courseCode}</div>
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
      </div>
    );
  }
};
