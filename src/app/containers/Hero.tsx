import { Section } from "@/components";
import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <Section>
      <div>
        <p>Olá, me chamo</p>
        <h1>Daniel Gustavo Favero</h1>
        <p>Frontend developer x UI / UX Designer</p>
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
    </Section>
  );
};
