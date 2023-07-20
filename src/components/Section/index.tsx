import React, { PropsWithChildren } from "react";

import { ISectionProps } from "./types";

export * from "./types";

export const Section: React.FC<ISectionProps> = ({ children }) => {
  return <section className="w-full px-4 py-20 ">{children}</section>;
};
