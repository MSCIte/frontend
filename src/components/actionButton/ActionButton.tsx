import clsx from "clsx";

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const ActionButton = (props: ActionButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-full w-12 h-12 bg-slate-500 text-white hover:bg-slate-600",
        props.className
      )}
      onClick={props.onClick}
    >
      <span>{props.icon && <div>{props.icon}</div>}</span>
      <span className="text-xs">{props.text}</span>
    </button>
  );
};
