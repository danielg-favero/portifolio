import React from "react";

import { IProjectTabProps } from "./types";
import { PrismicNextImage } from "@prismicio/next";
import { Divider } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { NextSlideButon, PreviousSlideButon, LinkButton } from "./parts";
import { FaCaretRight, FaCaretLeft, FaLink } from "react-icons/fa";

export * from "./types";

import "swiper/css";

export const ProjectTab: React.FC<IProjectTabProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-12 lg:gap-16" key={project.uid}>
      <div className="relative flex items-center justify-between gap-6 mt-16">
        <PreviousSlideButon>
          <FaCaretLeft />
        </PreviousSlideButon>
        <div className="relative w-full lg:w-4/5">
          <div className="absolute w-3 h-3 border-2 -top-1 -left-1 border-primary-60 bg-primary-40" />
          <div className="absolute right-4 top-4">
            <LinkButton href={project.data.project_url.url}>
              <FaLink />
            </LinkButton>
          </div>
          <PrismicNextImage
            field={project.data.thumbnail}
            className="border-4 border-primary-50"
          />
          <div className="absolute w-3 h-3 border-2 -bottom-1 -right-1 border-primary-60 bg-primary-40" />
        </div>
        <NextSlideButon>
          <FaCaretRight />
        </NextSlideButon>
      </div>
      <div className="flex flex-col justify-center gap-6 lg:gap-8">
        <div className="flex items-center gap-8">
          <Divider />
          <h3 className="w-full text-lg font-medium text-center uppercase text-primary-30 lg:text-2xl">
            Ferramentas e Linguagens
          </h3>
          <Divider />
        </div>
        <div className="relative">
          <div className="absolute z-10 w-full h-8 pointer-events-none lg:h-12 bg-primary-70 mix-blend-darken opacity-90" />
          <Swiper
            slidesPerView="auto"
            spaceBetween={44}
            className="flex justify-center w-screen bg-primary-100"
          >
            {project.data.icons.map((icon) => (
              <SwiperSlide key={icon.icon.alt} className="!w-auto">
                <PrismicNextImage
                  field={icon.icon}
                  className="h-8 transition-transform lg:h-12 w-fit hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
