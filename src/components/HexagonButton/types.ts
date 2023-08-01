import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IHexagonButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: string
}