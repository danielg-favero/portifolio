import React from "react";
import { IIconButtonProps } from "./types";

export * from "./types";

export const IconButton: React.FC<IIconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="p-5 py-6 text-2xl hexagon text-neutral-100 bg-primary-50"
      {...rest}
    >
      {children}
    </button>
  );
};
