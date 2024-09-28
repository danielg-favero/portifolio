"use client";

import { HeaderLink, Icon } from "@/components";
import React, { useState } from "react";

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
        <Icon name="bars" />
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
          <Icon name="bars" />
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
