"use client";

import { Divider, Section, SectionTitle, Tab } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export const Projects: React.FC = () => {
  return (
    <Section>
      <SectionTitle id="projects">Projetos</SectionTitle>
      <div className="flex flex-col gap-12 lg:gap-16">
        <Tab tabs={["Desenvolvedor", "Designer"]}>
          <Image
            src="/izi_bus.png"
            alt="Projeto Izi Bus"
            width={300}
            height={200}
          />
          <Image
            src="/izi_bus.png"
            alt="Projeto Izi Bus"
            width={300}
            height={200}
          />
        </Tab>
        <div className="flex flex-col justify-center gap-6 lg:gap-8">
          <div className="flex items-center gap-8">
            <Divider />
            <h3 className="w-full text-lg font-medium text-center uppercase text-primary-30 lg:text-2xl">
              Ferramentas e Linguagens
            </h3>
            <Divider />
          </div>
          <Swiper slidesPerView="auto">
            <SwiperSlide>
              <Image
                src="/izi_bus.png"
                alt="Projeto Izi Bus"
                width={300}
                height={200}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/izi_bus.png"
                alt="Projeto Izi Bus"
                width={300}
                height={200}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Section>
  );
};
