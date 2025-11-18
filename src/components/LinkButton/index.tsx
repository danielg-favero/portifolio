import React from "react";

import { cn } from "@/utils";
import { PrismicNextLink } from "@prismicio/next";

import { ILinkButtonProps } from "./types";
export * from "./types";

export const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  field,
  target = "_blank",
  ...rest
}) => {
  return (
    <PrismicNextLink field={field} target={target}>
      <button
        {...rest}
        className={cn(
          "px-2 py-2 text-2xl transition-all rounded-lg shadow-lg hover:opacity-70 text-primary-40 lg:flex h-fit lg:px-4 lg:py-4 lg:text-3xl hover:scale-105 active:scale-95 active:opacity-60",
          rest.className
        )}
      >
        {children}
      </button>
    </PrismicNextLink>
  );
};
