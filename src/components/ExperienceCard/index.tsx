import React from "react";
import { IExperienceCardProps } from "./types";
import { PrismicNextImage } from "@prismicio/next";
import { DateField } from "@prismicio/client";

export * from "./types";

export const ExperienceCard: React.FC<IExperienceCardProps> = ({
  companyImage,
  description,
  endDate,
  startDate,
  title,
}) => {
  const formatDate = (dateField: DateField): string => {
    if (!dateField) return "Até o Momento";

    const date = new Date(dateField);
    const maxChar = 3;

    const fullMonth = date.toLocaleString("pt-br", { month: "long" });
    const abbreviatedMonth = fullMonth.substring(0, maxChar);

    const year = date.getFullYear();

    return abbreviatedMonth + ". " + year;
  };

  return (
    <div
      className={`${
        !endDate && "border-2 border-primary-60"
      } h-[600px] flex flex-col gap-10 lg:gap-14 px-6 py-10 lg:px-12 lg:py-14 bg-primary-80 max-w-[400px] lg:max-w-[536px]`}
    >
      <PrismicNextImage
        field={companyImage}
        className="max-h-9 lg:max-h-10 w-fit"
      />
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-neutral-100 lg:text-xl">
            {title}
          </p>
          <p className="text-xs font-light text-primary-40 lg:text-base">
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
        </div>
        <p className="text-lg font-light text-neutral-100 lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};
