"use client";

import React from "react";
import { cn } from "@/utils";

import { IHeaderLinkProps } from "./types";
import { LinkButton } from "../LinkButton";

export const HeaderLink: React.FC<IHeaderLinkProps> = ({
  children,
  className,
  link,
  ...rest
}) => {
  return (
    <LinkButton
      {...rest}
      field={link.internal_link}
      target="_self"
      className={cn(
        "px-6 py-4 text-2xl font-medium text-center lg:text-base text-primary-40 hover:text-primary-50 active:text-primary-60",
        className
      )}
    >
      {children}
    </LinkButton>
  );
};
