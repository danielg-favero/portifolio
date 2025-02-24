"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import { useTypewritter } from "./useTypewritter";

interface TypewritterProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  delay?: number;
  infinite?: boolean;
}

export const Typewritter: React.FC<TypewritterProps> = ({
  text,
  delay = 100,
  infinite = true,
  ...props
}) => {
  const animatedText = useTypewritter({ text, delay, infinite });

  return <p {...props}>{animatedText}</p>;
};
