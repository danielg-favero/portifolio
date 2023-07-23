import React from "react";
import { IHeaderLinkProps } from "./types";
import Link from "next/link";

export const HeaderLink: React.FC<IHeaderLinkProps> = ({
  children,
  ...rest
}) => {
  return (
    <Link
      scroll
      className="px-6 py-4 text-2xl font-medium text-center lg:text-base text-primary-40 hover:text-primary-50 active:text-primary-60"
      {...rest}
    >
      {children}
    </Link>
  );
};
