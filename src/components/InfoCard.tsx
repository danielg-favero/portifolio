import React, { PropsWithChildren } from "react";

export const InfoCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full gap-4 p-4 text-sm font-medium rounded bg-primary-80 text-neutral-100">
      {children}
    </div>
  );
};
