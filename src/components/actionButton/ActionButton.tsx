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
          "flex items-center justify-center space-x-2 rounded border border-gray-400 bg-transparent px-2 py-1 text-white hover:border-gray-200 hover:bg-gray-200",
          props.isActive && "cursor-default border-transparent bg-gray-200",
        )}
        onClick={props.onClick}
      >
        <div>{props.icon}</div>
        <div className="text-xs text-gray-500">{props.text}</div>
      </button>
    </div>
  );
};
