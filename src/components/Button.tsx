import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-blue-500 p-3 text-white",
        props?.className,
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
