"use client";

import React from "react";
import { ISliderButtonProps } from "./types";
import { SliderButton } from ".";
import { useSwiper } from "swiper/react";

export * from "./types";

export const PreviousSlideButon: React.FC<ISliderButtonProps> = ({
  children,
  ...rest
}) => {
  const swiper = useSwiper();

  const slidePrevHandler = () => {
    if (!swiper) return;
    if (!swiper.slidePrev) return;

    swiper.slidePrev();
  };

  return (
    <SliderButton onClick={slidePrevHandler} {...rest}>
      {children}
    </SliderButton>
  );
};
