"use client";

import { useSwiper } from "swiper/react";
import { SliderButton } from ".";
import { ISliderButtonProps } from "./types";

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
