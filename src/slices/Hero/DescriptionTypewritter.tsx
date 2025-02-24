"use client";

import { Typewritter } from "@/components";
import { MultiTypewritter } from "@/components/MultiTypewritter";

interface DescriptionTypewritterProps {
  descriptions: string;
}

export const DescriptionTypewritter: React.FC<DescriptionTypewritterProps> = ({
  descriptions,
}) => {
  const splittedDescriptions = descriptions
    .split(",")
    .map((word) => word + "...");

  return (
    <MultiTypewritter
      className="font-light text-sm lg:text-xl text-neutral-100 text-center lg:text-left"
      words={splittedDescriptions}
      delay={150}
    />
  );
};
