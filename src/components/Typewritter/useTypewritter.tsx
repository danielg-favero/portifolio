import { useEffect, useState } from "react";

enum LoopState {
  FORWARD,
  BACKWARD,
}

interface UseTypewritterParams {
  text: string;
  delay?: number;
  infinite?: boolean;
}

export const useTypewritter = ({
  text,
  delay,
  infinite,
}: UseTypewritterParams) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loopState, setLoopState] = useState<LoopState>(LoopState.FORWARD);

  const isAtWordBeginning = (index: number) => {
    return index === 0;
  };

  const isAtWordEnd = (text: string, index: number) => {
    return text.length === index;
  };

  const forwardText = (
    fullText: string,
    currentText: string,
    index: number
  ): [string, number] => {
    if (isAtWordEnd(fullText, index)) return [currentText, index];

    return [currentText + fullText[index], index + 1];
  };

  const backwardText = (
    currentText: string,
    index: number
  ): [string, number] => {
    if (isAtWordBeginning(index)) return [currentText, index];

    return [currentText.slice(0, -1), index - 1];
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loopState === LoopState.FORWARD) {
        const [newText, newIndex] = forwardText(
          text,
          currentText,
          currentIndex
        );
        setCurrentText(newText);
        setCurrentIndex(newIndex);

        if (isAtWordEnd(text, newIndex)) {
          setLoopState(LoopState.BACKWARD);
        }
      } else if (infinite && loopState === LoopState.BACKWARD) {
        const [newText, newIndex] = backwardText(currentText, currentIndex);
        setCurrentText(newText);
        setCurrentIndex(newIndex);

        if (isAtWordBeginning(newIndex)) {
          setLoopState(LoopState.FORWARD);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, loopState]);

  return currentText;
};
