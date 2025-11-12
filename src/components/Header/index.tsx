"use client";

import React from "react";

import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
export * from "./HeaderLink";
export * from "./types";

const Header = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

export default Header;
