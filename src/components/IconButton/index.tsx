import React from "react";
import { IIconButtonProps } from "./types";

export * from "./types";

export const IconButton: React.FC<IIconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="px-5 py-6 text-2xl transition-transform lg:px-6 lg:py-7 lg:text-3xl hexagon text-neutral-100 bg-primary-50 hover:bg-primary-60 hover:scale-105 active:bg-primary-40 active:scale-95"
      {...rest}
    >
      {children}
    </button>
  );
};
