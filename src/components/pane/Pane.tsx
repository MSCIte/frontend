import clsx from "clsx";
import styles from "./Pane.module.css";

interface PaneProps {
  children?: React.ReactNode;
  className?: string;
}

export const Pane = (props: PaneProps) => {
  return (
    <div className={clsx(styles.wrapper, props.className)}>
      {props.children}
    </div>
  );
};
