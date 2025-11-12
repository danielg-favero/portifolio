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
      className="w-[72px] h-[72px] flex items-center justify-center text-2xl transition-all bg-primary-80 rounded-lg text-primary-30 lg:flex lg:px-4 lg:py-4 lg:text-3xl hover:opacity-75 hover:scale-105 active:opacity-50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
      {...rest}
    >
      {children}
    </button>
  );
};
