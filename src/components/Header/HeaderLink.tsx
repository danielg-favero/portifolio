"use client";

import Link from "next/link";
import React from "react";
import { IHeaderLinkProps } from "./types";
import { cn } from "@/utils";

export const HeaderLink: React.FC<IHeaderLinkProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      scroll
      className={cn(
        "px-6 py-4 text-2xl font-medium text-center lg:text-base text-primary-40 hover:text-primary-50 active:text-primary-60",
        className
      )}
    >
      {children}
    </Link>
  );
};
