"use client";

import React, { useState } from "react";
import { HeaderLink } from "./HeaderLink";
import menuIcon from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";
import Image from "next/image";

export * from "./HeaderLink";
export * from "./types";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row-reverse">
      <button onClick={toogleIsOpen} className=" text-primary-40 lg:hidden">
        <Image src={menuIcon} alt="Botão dos links do header" />
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex top-0 left-0 absolute lg:bg-opacity-0  lg:relative flex-col bg-primary-95 w-full lg:h-auto h-screen z-10 py-6 px-4 lg:py-4`}
      >
        <button
          onClick={toogleIsOpen}
          className="self-end text-primary-40 lg:hidden w-fit"
        >
          <Image src={close} alt="Botão de fechar os links do header" />
        </button>
        <nav
          className="flex flex-col lg:flex-row lg:justify-center"
          onClick={toogleIsOpen}
        >
          <HeaderLink href="#about">sobre mim</HeaderLink>
          <HeaderLink href="#projects">projetos</HeaderLink>
          <HeaderLink href="#experience">experiências profissionais</HeaderLink>
        </nav>
      </div>
    </div>
  );
};
