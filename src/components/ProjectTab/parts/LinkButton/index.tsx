import React from "react";
import { ILinkButtonProps } from "./types";
import { PrismicNextLink } from "@prismicio/next";

export * from "./types";

export const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  field,
  ...rest
}) => {
  return (
    <PrismicNextLink field={field} target="_blank">
      <button
        className="px-3 py-3 text-2xl transition-transform rounded-lg shadow-lg opacity-50 hover:opacity-100 bg-neutral-100 text-primary-60 lg:flex h-fit lg:px-4 lg:py-4 lg:text-3xl hover:scale-105 active:scale-95 active:opacity-90"
        {...rest}
      >
        {children}
      </button>
    </PrismicNextLink>
  );
};
