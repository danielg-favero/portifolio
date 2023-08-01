import { LinkField } from "@prismicio/client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IHexagonButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    field?: LinkField
}