import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export interface IHeaderLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {}
