import { LinkField } from "@prismicio/client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ILinkButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    field: LinkField
}