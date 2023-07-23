import { Badge, Section, IconButton, Header } from "@/components";
import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 mt-6 lg:mt-12 max-w-7xl">
      <Header />
      <div className="flex flex-col items-center w-full mt-24 lg:flex-row lg:justify-between gap-14 lg:mt-44">
        <div className="flex flex-col items-center gap-14 lg:items-start lg:justify-between lg:h-[532px]">
          <div className="flex flex-col items-center gap-6 lg:gap-8 lg:items-start">
            <div className="flex flex-col items-center gap-4 lg:gap-6 lg:items-start">
              <Badge>Olá, me chamo</Badge>
              <h1 className="text-3xl font-bold leading-6 text-center lg:text-6xl lg:text-left w-fit text-primary-50">
                Daniel Gustavo Favero
              </h1>
            </div>
            <p className="text-sm font-light text-center lg:text-xl text-neutral-100">
              Frontend developer x UI / UX Designer
            </p>
          </div>
          <div className="flex gap-4">
            <IconButton>
              <FaInstagram />
            </IconButton>
            <IconButton>
              <FaLinkedin />
            </IconButton>
            <IconButton>
              <FaGithub />
            </IconButton>
          </div>
        </div>
        <Image
          src="/hero_photo.png"
          alt="Foto de Daniel Gustavo Favero"
          width={624}
          height={767}
        />
      </div>
    </section>
  );
};
