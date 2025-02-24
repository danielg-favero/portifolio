"use client";

import { useEffect, useState } from "react";

interface UseTypewritterParams {
  words: string[];
  delay?: number;
}

export const useMultiTypewritter = ({
  words,
  delay = 100,
}: UseTypewritterParams) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (currentIndex === words.length - 1) {
          setCurrentWord(words[0]);
          setCurrentIndex(0);
        } else {
          setCurrentWord(words[currentIndex + 1]);
          setCurrentIndex((previousIndex) => previousIndex + 1);
        }
      },
      currentWord.length * 2 * delay
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, words, currentWord]);

  return currentWord;
};
