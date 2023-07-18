import React, { PropsWithChildren } from "react";

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className="w-full px-4 py-20 ">{children}</section>;
};
