import { Badge, Section } from "@/components";
import Image from "next/image";
import React from "react";

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
        <div>
          <button>Instagram</button>
          <button>Linkedin</button>
          <button>Github</button>
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
