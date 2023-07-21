import React from "react";
import { IButtonProps } from "./types";

export * from "./types";

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-4 py-3 font-light tracking-widest text-center uppercase transition-transform rounded hover:bg-primary-60 hover:scale-105 active:bg-primary-40 active:scale-95 bg-primary-50 text-neutral-100"
      {...rest}
    >
      {children}
    </button>
  );
};
