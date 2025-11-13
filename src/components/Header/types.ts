import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

import {
  PageHeaderDocumentDataLinksItem,
  Simplify,
} from "../../../prismicio-types";

export interface IHeaderLinkProps extends PropsWithChildren {
  link: Simplify<PageHeaderDocumentDataLinksItem>;
  className?: string;
}
