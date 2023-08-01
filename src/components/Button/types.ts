import { LinkField } from "@prismicio/client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    field?: LinkField
}