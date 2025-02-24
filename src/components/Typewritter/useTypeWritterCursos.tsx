import { useEffect, useState } from "react";

interface UseTypewritterCursorParams {
  delay?: number;
}

export const useTypewritterCursor = ({ delay }: UseTypewritterCursorParams) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible((currentVisible) => !currentVisible);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, visible]);

  return visible ? "|" : "";
};
