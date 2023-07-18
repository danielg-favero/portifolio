import { Section } from "@/components";
import Image from "next/image";
import React from "react";

export const Projects: React.FC = () => {
  return (
    <Section>
      <h2>Projetos</h2>
      <div>
        <div>
          <button>Desenvolvedor</button>
          <button>Designer</button>
        </div>
        <Image
          src="/izi_bus.png"
          alt="Projeto Izi Bus"
          width={600}
          height={400}
        />
      </div>
      <div>
        <h3>Ferramentas e Linguagens</h3>
        <div></div>
      </div>
    </Section>
  );
};
