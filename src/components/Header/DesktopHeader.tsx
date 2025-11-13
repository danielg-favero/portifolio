import { GroupField } from "@prismicio/client";

import { HeaderLink } from "./HeaderLink";
import {
  PageHeaderDocumentDataLinksItem,
  Simplify,
} from "../../../prismicio-types";

interface DesktopHeaderProps {
  links: GroupField<Simplify<PageHeaderDocumentDataLinksItem>>;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ links }) => {
  return (
    <nav className="flex-col lg:flex-row lg:justify-center hidden lg:flex absolute right-1/2 translate-x-1/2 top-4 z-10">
      {links.map((link) => (
        <HeaderLink link={link} key={link.label}>
          {link.label}
        </HeaderLink>
      ))}
    </nav>
  );
};
