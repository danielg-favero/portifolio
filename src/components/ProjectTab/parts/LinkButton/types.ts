import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ILinkButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href: string
}