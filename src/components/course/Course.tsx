import styles from "./Course.module.css";

interface Tag {
  name: string;
  color: string;
}

interface CourseProps {
  courseCode: string;
  longName: string;
  tags: Tag[];
}

export const Course = (props: CourseProps) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{props.courseCode}</h1>
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
};
