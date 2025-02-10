"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { IExperiencesCarrousselProps } from "./types";

import { DateField } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Badge } from "../Badge";
import { Image, RichText } from "../prismic";
import { FadeIn } from "../FadeIn";

export const ExperiencesCarroussel: React.FC<IExperiencesCarrousselProps> = ({
  experiences,
}) => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const heights = slidesRef.current.map((slide) => slide?.offsetHeight || 0);
    const maxSlideHeight = Math.max(...heights);
    setMaxHeight(maxSlideHeight);
  }, [experiences]);

  const formatDate = (dateField?: DateField): string => {
    if (!dateField) return "Até o Momento";

    const date = new Date(dateField);
    const maxChar = 3;

    const fullMonth = date.toLocaleString("pt-br", { month: "long" });
    const abbreviatedMonth = fullMonth.substring(0, maxChar);

    const year = date.getFullYear();

    return abbreviatedMonth + ". " + year;
  };

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={64}
      className="w-screen pr-80 lg:!pr-96"
      grabCursor
    >
      {experiences.map((item, index) => (
        <SwiperSlide key={`${item.description}`} className="!w-auto">
          <FadeIn>
            <div
              ref={(el) => (slidesRef.current[index] = el!)}
              style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
              className={`${!item.end_date && "border-2 border-primary-60"} flex flex-col gap-10 lg:gap-14 px-6 py-10 lg:px-12 lg:py-14 bg-primary-80 max-w-[400px] lg:max-w-[536px]`}
            >
              <Image field={item.logo} className="max-h-9 lg:max-h-10 w-fit" />
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-col">
                  <RichText field={item.title} className="!font-bold" />
                  <p className="text-xs font-light text-primary-40 lg:text-base">
                    {formatDate(item.start_date)} - {formatDate(item.end_date)}
                  </p>
                </div>
                <RichText field={item.description} />
              </div>
              <div className="flex gap-2 flex-wrap">
                {item.tags?.split(",").map((tag) => (
                  <Badge key={tag} size="sm" variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
