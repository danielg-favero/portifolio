"use client";

import { HTMLAttributes } from "react";
import { useMultiTypewritter } from "./useMultiTypewritter";
import { Typewritter } from "../Typewritter";

interface MultiTypewritterProps extends HTMLAttributes<HTMLParagraphElement> {
  words: string[];
  delay?: number;
}

export const MultiTypewritter: React.FC<MultiTypewritterProps> = ({
  words,
  delay = 100,
  ...props
}) => {
  const currentAnimatedWord = useMultiTypewritter({ words, delay });

  return (
    <Typewritter
      key={currentAnimatedWord}
      text={currentAnimatedWord}
      infinite={true}
      delay={delay}
      {...props}
    />
  );
};
