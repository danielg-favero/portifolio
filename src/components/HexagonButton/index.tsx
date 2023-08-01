import React from "react";
import { IHexagonButtonProps } from "./types";
import { PrismicNextLink } from "@prismicio/next";

export * from "./types";

export const HexagonButton: React.FC<IHexagonButtonProps> = ({
  children,
  field,
  ...rest
}) => {
  const hexagonButtonContent = (
    <button
      className="px-5 py-6 text-2xl transition-transform lg:px-6 lg:py-7 lg:text-3xl hexagon text-neutral-100 bg-primary-50 hover:bg-primary-60 hover:scale-105 active:bg-primary-40 active:scale-95"
      {...rest}
    >
      {children}
    </button>
  );

  if (!field) hexagonButtonContent;

  return (
    <PrismicNextLink field={field} target="_blank">
      {hexagonButtonContent}
    </PrismicNextLink>
  );
};
