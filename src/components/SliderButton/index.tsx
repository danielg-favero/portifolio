"use client";

import { ISliderButtonProps } from "./types";

export * from "./next";
export * from "./previous";
export * from "./types";

export const SliderButton: React.FC<ISliderButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="hidden px-5 py-6 text-2xl transition-transform bg-transparent rounded-lg text-primary-40 lg:flex h-fit lg:px-4 lg:py-4 lg:text-3xl hover:bg-primary-80 hover:scale-105 active:bg-primary-70 active:scale-95"
      {...rest}
    >
      {children}
    </button>
  );
};
