import { Button, InfoCard, Section, SectionTitle } from "@/components";
import { FaGraduationCap, FaUniversity, FaDownload } from "react-icons/fa";
import { MdLocationPin, MdDownload } from "react-icons/md";
import React from "react";

export const About: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Sobre Mim</SectionTitle>
      <div className="flex flex-col gap-4">
        <InfoCard>
          <FaGraduationCap />
          Engenharia de Computação
        </InfoCard>
        <InfoCard>
          <FaUniversity />
          UTFPR - Pato Branco
        </InfoCard>
        <InfoCard>
          <MdLocationPin />
          Pato Branco - PR
        </InfoCard>
        <p className="text-lg font-light text-neutral-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          tortor quis augue mollis luctus. Integer pharetra, enim et placerat
          convallis, diam purus rhoncus magna, vitae ullamcorper sem magna eget
          nibh. Mauris at finibus mauris. Maecenas eu tellus vel diam fringilla
          feugiat ut sed metus.
        </p>
        <Button>
          <MdDownload />
          Currículo
        </Button>
      </div>
    </Section>
  );
};
