import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="flex justify-center w-full p-8 bg-primary-95 lg:p-12">
      <p className="text-sm font-light text-neutral-100 lg:text-xl">
        Copyright © {`${new Date().getFullYear()}`} - Daniel Gustavo Favero
      </p>
    </div>
  );
};
