"use client";

import { useState } from "react";

import { cn } from "@/utils";

import { Icon } from "../Icon";
import { HeaderLink } from "./HeaderLink";

export const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toogleIsOpen}
        className={cn(
          "text-primary-40 top-4 right-4 flex z-20 lg:hidden",
          isOpen ? "fixed" : "absolute"
        )}
      >
        <Icon name={isOpen ? "close" : "bars"} />
      </button>
      <nav
        className={cn(
          "fixed top-0 right-0 z-10 h-screen bg-primary-95 flex flex-col gap-4 justify-center lg:hidden w-full",
          "transition-all",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={toogleIsOpen}
      >
        <HeaderLink href="#projects">Projetos</HeaderLink>
        <HeaderLink href="#experience">Experiências profissionais</HeaderLink>
        <HeaderLink href="#midia">Na mídia</HeaderLink>
        <HeaderLink href="#about">Sobre mim</HeaderLink>
      </nav>
    </>
  );
};
