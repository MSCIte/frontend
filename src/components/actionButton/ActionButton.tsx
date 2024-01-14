import clsx from "clsx";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  icon: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export const ActionButton = (props: ActionButtonProps) => {
  return (
    <div className={props.className}>
      <button
        className={clsx(
          "rounded bg-transparent border-gray-400 border text-white hover:bg-gray-200 hover:border-transparent py-1 px-2 flex items-center justify-center space-x-2",
          props.isActive && "bg-gray-200 border-transparent cursor-default"
        )}
        onClick={props.onClick}
      >
        <div>{props.icon}</div>
        <div className="text-xs text-gray-500">{props.text}</div>
      </button>
    </div>
  );
};
