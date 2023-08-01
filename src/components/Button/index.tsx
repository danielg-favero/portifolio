import React from "react";
import { IButtonProps } from "./types";
import { PrismicNextLink } from "@prismicio/next";

export * from "./types";

export const Button: React.FC<IButtonProps> = ({
  children,
  field,
  ...rest
}) => {
  const buttonContent = (
    <button
      className="flex items-center justify-center w-full gap-4 px-12 py-3 text-base font-light tracking-widest text-center uppercase transition-transform rounded lg:py-4 lg:text-xl lg:w-fit hover:bg-primary-60 hover:scale-105 active:bg-primary-40 active:scale-95 bg-primary-50 text-neutral-100"
      {...rest}
    >
      {children}
    </button>
  );

  if (!field) return buttonContent;

  return (
    <PrismicNextLink field={field} target="_blank">
      {buttonContent}
    </PrismicNextLink>
  );
};
