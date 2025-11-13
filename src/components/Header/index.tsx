"use client";

import React from "react";
import { GroupField } from "@prismicio/client";

import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
export * from "./HeaderLink";
export * from "./types";

import {
  PageHeaderDocumentDataLinksItem,
  Simplify,
} from "../../../prismicio-types";

interface HeaderProps {
  links: GroupField<Simplify<PageHeaderDocumentDataLinksItem>>;
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <>
      <DesktopHeader links={links} />
      <MobileHeader links={links} />
    </>
  );
};

export default Header;
