import { Section } from "@/components";
import React from "react";

export const About: React.FC = () => {
  return (
    <Section>
      <h2>Sobre mim</h2>
      <div>
        <p>Engenharia de Computação</p>
        <p>UTFPR - Pato Branco</p>
        <p>Pato Branco - PR</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          tortor quis augue mollis luctus. Integer pharetra, enim et placerat
          convallis, diam purus rhoncus magna, vitae ullamcorper sem magna eget
          nibh. Mauris at finibus mauris. Maecenas eu tellus vel diam fringilla
          feugiat ut sed metus.
        </p>
        <button>Currículo</button>
      </div>
    </Section>
  );
};
