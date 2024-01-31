import clsx from "clsx";
import { Pane } from "../pane/Pane";
import styles from "./CourseSmall.module.css";
import { CoursePills } from "../courseSmallPill/CourseSmallPill";
import { CourseWithTagsSchema } from "~/api/endpoints";

export const CourseSmall = (props: CourseWithTagsSchema) => {
  return (
    <Pane className="h-36 w-36">
      <div className="flex h-full flex-col justify-between">
        <div className={clsx(styles.header)}>{props.courseCode}</div>
        <div>
          <div className={styles.description}>{props.courseName}</div>
        </div>
        <div className="mr-0 flex flex-row-reverse">
          <CoursePills courseCode={props.courseCode} tags={props.tags} />
        </div>
      </div>
    </Pane>
  );
};
