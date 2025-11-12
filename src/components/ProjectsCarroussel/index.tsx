/* eslint-disable jsx-a11y/alt-text */
"use client";

import { FadeIn, Icon, NextSlideButon, PreviousSlideButon } from "@/components";
import { IProjectsTabsProps } from "./types";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "./carroussel.css";
import { ProjectCard } from "./ProjectCard";

export const ProjectsCarroussel: React.FC<IProjectsTabsProps> = ({
  projects,
}) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title.toString()}>
            <FadeIn>
              <ProjectCard {...project} />
            </FadeIn>
          </SwiperSlide>
        ))}
        <div className="hidden lg:flex items-center justify-between lg:justify-center gap-16 mt-10 lg:mt-16 max-w-7xl ">
          <PreviousSlideButon>
            <Icon name="arrow-left" />
          </PreviousSlideButon>
          <NextSlideButon>
            <Icon name="arrow-right" />
          </NextSlideButon>
        </div>
      </Swiper>
    </div>
  );
};
