import { ImageField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";
import React from "react";
import { IPrismicComponentsProps } from "./types";

export const Image: React.FC<
  IPrismicComponentsProps<Omit<ImageField, "alt">> &
    Omit<PrismicNextImageProps, "alt">
> = ({ className, field, ...rest }) => {
  return (
    <PrismicNextImage
      className={className}
      field={field}
      fallback={field.alt}
      {...rest}
    />
  );
};
