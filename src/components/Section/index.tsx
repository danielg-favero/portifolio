import React, { PropsWithChildren } from "react";

import { ISectionProps } from "./types";

export * from "./types";

export const Section: React.FC<ISectionProps> = ({ children, ...rest }) => {
  return (
    <section className="w-full px-4 py-20" {...rest}>
      <div className="m-auto max-w-7xl">{children}</div>
    </section>
  );
};
