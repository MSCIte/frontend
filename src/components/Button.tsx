import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={twMerge("rounded-md p-3 bg-blue-500 text-white", props?.className)}
    >
      {props.text}
    </button>
  );
};
