import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: string
}