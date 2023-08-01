"use client";

import React from "react";
import { ISliderButtonProps } from "./types";
import { SliderButton } from ".";
import { useSwiper } from "swiper/react";

export * from "./types";

export const NextSlideButon: React.FC<ISliderButtonProps> = ({
  children,
  ...rest
}) => {
  const swiper = useSwiper();

  const slideNextHandler = () => {
    if (!swiper) return;
    if (!swiper.slideNext) return;

    swiper.slideNext();
  };

  return (
    <SliderButton onClick={slideNextHandler} {...rest}>
      {children}
    </SliderButton>
  );
};
