import { Section } from "@/components";
import Image from "next/image";
import React from "react";

export const Experience: React.FC = () => {
  return (
    <Section>
      <h2>Experiências Profissionais</h2>
      <div>
        <Image
          src="/logo_empresa.png"
          alt="Logo Empresa"
          width={300}
          height={200}
        />
        <div>
          <div>
            <p>Menor Aprendiz</p>
            <p>fev. 2017 - dez. 2017</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            tortor quis augue mollis luctus. Integer pharetra.{" "}
          </p>
        </div>
      </div>
    </Section>
  );
};
