import React from "react";

import { cn } from "@/utils";

import { ISectionProps } from "./types";

export * from "./types";

export const Section: React.FC<ISectionProps> = ({ children, ...rest }) => {
  return (
    <section {...rest} className={cn("w-full px-4 py-20", rest.className)}>
      <div className="m-auto max-w-7xl">{children}</div>
    </section>
  );
};
