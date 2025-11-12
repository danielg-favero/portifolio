"use client";

import { IExperiencesCarrousselProps } from "./types";

import { DateField } from "@prismicio/client";

import { Badge } from "../Badge";
import { Image, RichText } from "../prismic";
import { FadeIn } from "../FadeIn";

export const ExperiencesCarroussel: React.FC<IExperiencesCarrousselProps> = ({
  experiences,
}) => {
  const formatDate = (dateField?: DateField): string => {
    if (!dateField) return "Até o Momento";

    const date = new Date(dateField);
    const maxChar = 3;

    const fullMonth = date.toLocaleString("pt-br", { month: "long" });
    const abbreviatedMonth = fullMonth.substring(0, maxChar);

    const year = date.getFullYear();

    return abbreviatedMonth + ". " + year;
  };

  return (
    <div className="flex flex-col gap-24">
      {experiences.map((item, index) => (
        <FadeIn key={JSON.stringify(item.description)}>
          <div className={`flex gap-10 lg:gap-14 w-3/4`}>
            <Image field={item.logo} className="max-h-9 lg:max-h-10 !w-96" />

            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col">
                <RichText field={item.title} className="!font-bold" />
                <p className="text-xs font-light text-primary-40 lg:text-base">
                  {formatDate(item.start_date)} - {formatDate(item.end_date)}
                </p>
              </div>
              <RichText field={item.description} />
              <div className="flex gap-2 flex-wrap">
                {item.tags?.split(",").map((tag) => (
                  <Badge key={tag} size="sm" variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};
