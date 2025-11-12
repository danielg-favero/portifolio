import { cn } from "@/utils";

import { HeaderLink } from "./HeaderLink";

export const DesktopHeader: React.FC = () => {
  return (
    <nav className="flex-col lg:flex-row lg:justify-center hidden lg:flex absolute right-1/2 translate-x-1/2 top-4">
      <HeaderLink href="#projects">Projetos</HeaderLink>
      <HeaderLink href="#experience">Experiências profissionais</HeaderLink>
      <HeaderLink href="#midia">Na mídia</HeaderLink>
      <HeaderLink href="#about">Sobre mim</HeaderLink>
    </nav>
  );
};
