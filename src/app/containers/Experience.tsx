"use client";

import { ExperienceCard, Section, SectionTitle } from "@/components";
import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";

export const Experience: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Experiências Profissionais</SectionTitle>
      <Swiper slidesPerView="auto">
        <SwiperSlide>
          <ExperienceCard
            companyImage="/logo_empresa.png"
            companyImageAlt="Logo Empresa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            tortor quis augue mollis luctus. Integer pharetra."
            endDate={new Date()}
            startDate={new Date()}
            title="Menor Aprendiz"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceCard
            companyImage="/logo_empresa.png"
            companyImageAlt="Logo Empresa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            tortor quis augue mollis luctus. Integer pharetra."
            endDate={new Date()}
            startDate={new Date()}
            title="Menor Aprendiz"
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};
