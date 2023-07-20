import { Badge, Section, IconButton } from "@/components";
import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Hero: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <Badge>Olá, me chamo</Badge>
            <h1 className="text-3xl font-bold text-center w-fit text-primary-50">
              Daniel Gustavo Favero
            </h1>
          </div>
          <p className="text-sm font-light text-center text-neutral-100">
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
        <Image
          src="/hero_photo.png"
          alt="Foto de Daniel Gustavo Favero"
          width={500}
          height={700}
        />
      </div>
    </Section>
  );
};
