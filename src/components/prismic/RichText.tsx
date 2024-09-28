import { RichTextField } from "@prismicio/client";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import React from "react";
import { IPrismicComponentsProps } from "./types";

export const RichText: React.FC<
  IPrismicComponentsProps<RichTextField> & PrismicRichTextProps
> = ({ className, field, ...rest }) => {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children }) => (
          <h1
            className={`${className} font-bold text-3xl lg:text-6xl text-primary-50 `}
          >
            {children}
          </h1>
        ),
        heading3: ({ children }) => (
          <h3
            className={`${className} font-bold text-xl lg:text-3xl text-neutral-100 `}
          >
            {children}
          </h3>
        ),
        paragraph: ({ children }) => (
          <p
            className={`${className} font-light text-sm lg:text-xl text-neutral-100 `}
          >
            {children}
          </p>
        ),
      }}
      {...rest}
    />
  );
};
