import clsx from "clsx";
import styles from "./Pane.module.css";

interface PaneProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Pane = (props: PaneProps) => {
  return (
    <div className={clsx(styles.wrapper, props.className)} style={props?.style} onClick={props?.onClick}>
      {props.children}
    </div>
  );
};
