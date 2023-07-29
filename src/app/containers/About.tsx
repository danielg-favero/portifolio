import { Button, InfoCard, Section, SectionTitle } from "@/components";
import { MdDownload } from "react-icons/md";
import universityIcon from "@/assets/icons/university.svg";
import pinLocationIcon from "@/assets/icons/pinLocation.svg";
import graduationCapIcon from "@/assets/icons/graduationCap.svg";
import React from "react";
import Image from "next/image";
import { createClient } from "@/prismicio";
import Link from "next/link";

export const About: React.FC = async () => {
  const prismic = createClient();
  const about = await prismic.getByUID("abstract", "about");

  console.log(about.data.curiculum);

  return (
    <Section>
      <SectionTitle id="about">Sobre Mim</SectionTitle>
      <div className="flex flex-col w-full gap-4 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
          <InfoCard>
            <Image src={graduationCapIcon} alt="Ícone de curso" />
            {about.data.graduation}
          </InfoCard>
          <InfoCard>
            <Image src={universityIcon} alt="Ícone de universidade" />
            {about.data.university}
          </InfoCard>
          <InfoCard>
            <Image src={pinLocationIcon} alt="Ícone de localização" />
            {about.data.city}
          </InfoCard>
        </div>
        <div className="flex flex-col gap-4 lg:justify-between lg:w-1/2">
          <p className="text-lg font-light text-neutral-100">
            {about.data.abstract}
          </p>
          <Link href={about.data.curiculum.url} target="_blank">
            <Button>
              <MdDownload />
              Currículo
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
