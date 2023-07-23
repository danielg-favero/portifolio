import React, { PropsWithChildren } from "react";

export const InfoCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center gap-4 p-4 text-sm font-medium rounded bg-primary-80 text-neutral-100 lg:text-xl lg:p-6 lg:gap-6">
      {children}
    </div>
  );
};
