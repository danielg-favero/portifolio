"use client";

import { useSwiper, useSwiperSlide } from "swiper/react";
import { SliderButton } from ".";
import { ISliderButtonProps } from "./types";

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
