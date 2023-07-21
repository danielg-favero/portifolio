"use client";

import { Section, SectionTitle, Tab } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export const Projects: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Projetos</SectionTitle>
      <div className="flex flex-col gap-12">
        <Tab tabs={["Desenvolvedor", "Designer"]}>
          <p className="text-neutral-100">a</p>
          <p className="text-neutral-100">b</p>
        </Tab>
        <div className="flex flex-col justify-center gap-6">
          <h3 className="w-full text-lg font-medium text-center uppercase text-primary-30">
            Ferramentas e Linguagens
          </h3>
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
