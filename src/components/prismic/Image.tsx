import { ImageField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";
import React from "react";
import { IPrismicComponentsProps } from "./types";

export const Image: React.FC<
  IPrismicComponentsProps<ImageField> & Omit<PrismicNextImageProps, "alt">
> = ({ className, field, ...rest }) => {
  return (
    <PrismicNextImage
      className={className}
      field={field}
      //@ts-ignore
      alt={field.alt}
      {...rest}
    />
  );
};
