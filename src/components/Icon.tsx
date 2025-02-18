"use client";

import { IconBaseProps, IconType } from "react-icons";
import * as ReactIcons from "react-icons/fa6";

export type IconKeys =
  | "linkedin"
  | "mail"
  | "github"
  | "download"
  | "graduation-cap"
  | "school"
  | "pin"
  | "arrow-left"
  | "arrow-right"
  | "link"
  | "bars"
  | "close";

const iconNames: Record<IconKeys, string> = {
  linkedin: "FaLinkedin",
  mail: "FaEnvelope",
  github: "FaGithub",
  download: "FaDownload",
  "graduation-cap": "FaGraduationCap",
  school: "FaSchool",
  pin: "FaMapPin",
  "arrow-left": "FaCaretLeft",
  "arrow-right": "FaCaretRight",
  link: "FaLink",
  bars: "FaBars",
  close: "FaXmark",
};

interface IconProps extends IconBaseProps {
  name: IconKeys;
}

export function Icon({ name, ...rest }: IconProps) {
  // @ts-ignore
  const Component = ReactIcons[iconNames[name]] as IconType;
  return <Component style={{ fontSize: "1.5rem" }} {...rest} />;
}
