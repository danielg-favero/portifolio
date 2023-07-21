import React, { PropsWithChildren } from "react";

export const Badge: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-8 py-2 rounded-full bg-primary-50 w-fit">
      <p className="text-xs font-normal text-center lg:text-base text-neutral-100">
        {children}
      </p>
    </div>
  );
};
