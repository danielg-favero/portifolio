"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import { useTypewritter } from "./useTypewritter";
import { useTypewritterCursor } from "./useTypeWritterCursos";

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
  const cursor = useTypewritterCursor({ delay: 500 });

  return (
    <p {...props}>
      {animatedText} {cursor}
    </p>
  );
};
