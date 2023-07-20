import React from "react";
import { ISectionTitleProps } from "./types";

export * from "./types";

export const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  ...rest
}) => {
  return (
    <div className="flex items-center gap-3 mb-20">
      <div className="w-6 h-6 bg-primary-50" />
      <h2 className="text-2xl font-medium leading-5 text-neutral-100" {...rest}>
        {children}
      </h2>
    </div>
  );
};
