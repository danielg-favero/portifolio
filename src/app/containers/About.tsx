import { Button, InfoCard, Section, SectionTitle } from "@/components";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { MdLocationPin, MdDownload } from "react-icons/md";
import universityIcon from "@/assets/icons/university.svg";
import pinLocationIcon from "@/assets/icons/pinLocation.svg";
import graduationCapIcon from "@/assets/icons/graduationCap.svg";
import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <Section>
      <SectionTitle id="about">Sobre Mim</SectionTitle>
      <div className="flex flex-col w-full gap-4 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
          <InfoCard>
            <Image src={graduationCapIcon} alt="Ícone de curso" />
            Engenharia de Computação
          </InfoCard>
          <InfoCard>
            <Image src={universityIcon} alt="Ícone de universidade" />
            UTFPR - Pato Branco
          </InfoCard>
          <InfoCard>
            <Image src={pinLocationIcon} alt="Ícone de localização" />
            Pato Branco - PR
          </InfoCard>
        </div>
        <div className="flex flex-col gap-4 lg:justify-between lg:w-1/2">
          <p className="text-lg font-light text-neutral-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            tortor quis augue mollis luctus. Integer pharetra, enim et placerat
            convallis, diam purus rhoncus magna, vitae ullamcorper sem magna
            eget nibh. Mauris at finibus mauris. Maecenas eu tellus vel diam
            fringilla feugiat ut sed metus.
          </p>
          <Button>
            <MdDownload />
            Currículo
          </Button>
        </div>
      </div>
    </Section>
  );
};
