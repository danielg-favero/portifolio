"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

import "./styles.css";

export const FadeIn = ({ children }: PropsWithChildren) => {
  const domRef = useRef<HTMLSelectElement>(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!domRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (!domRef.current) return;

      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={domRef}
      className={`fadein-section ${isVisible ? "fadein-visible-section" : ""}`}
    >
      {children}
    </section>
  );
};
