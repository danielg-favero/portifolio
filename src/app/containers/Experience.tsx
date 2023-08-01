"use client";

import { ExperienceCard, Section, SectionTitle } from "@/components";
import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import { createClient } from "@/prismicio";
import { ExperienceDocument } from "../../../prismicio-types";

export const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<Array<ExperienceDocument>>([]);

  useEffect(() => {
    const getExperiences = async () => {
      const prismic = createClient();
      const res = await prismic.getAllByType("experience", {
        orderings: [{ field: "my.experience.start_date", direction: "desc" }],
      });
      setExperiences(res);
    };

    getExperiences();
  }, []);

  return (
    <Section>
      <SectionTitle id="experience">Experiências Profissionais</SectionTitle>
      <Swiper
        slidesPerView="auto"
        spaceBetween={64}
        className="w-screen !pr-96"
        grabCursor
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.uid} className="!w-auto">
            <ExperienceCard
              companyImage={experience.data.company_logo}
              description={experience.data.description}
              endDate={experience.data.end_date}
              startDate={experience.data.start_date}
              title={experience.data.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
