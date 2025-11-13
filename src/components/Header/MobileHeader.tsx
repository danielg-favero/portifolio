"use client";

import { useState } from "react";

import { cn } from "@/utils";
import { GroupField } from "@prismicio/client";

import { Icon } from "../Icon";
import { HeaderLink } from "./HeaderLink";

import {
  PageHeaderDocumentDataLinksItem,
  Simplify,
} from "../../../prismicio-types";

interface MobileHeaderProps {
  links: GroupField<Simplify<PageHeaderDocumentDataLinksItem>>;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ links }) => {
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
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toogleIsOpen}
      >
        {links.map((link) => (
          <HeaderLink
            link={link}
            key={link.label}
            className="flex items-center justify-center w-full"
          >
            {link.label}
          </HeaderLink>
        ))}
      </nav>
    </>
  );
};
