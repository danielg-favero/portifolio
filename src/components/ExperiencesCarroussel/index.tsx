"use client";

import { IExperiencesCarrousselProps } from "./types";

import { DateField } from "@prismicio/client";

import { Badge } from "../Badge";
import { RichText } from "../prismic";
import { FadeIn } from "../FadeIn";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

const ExperienceRod: React.FC<
  HTMLAttributes<HTMLDivElement> & { bg: string }
> = (props) => (
  <div
    {...props}
    className={cn(
      "flex justify-center items-center w-6 h-full absolute bottom-0 translate-x-[1.5px]",
      props.className
    )}
  >
    <div className={`w-1 h-full ${props.bg}`} />;
  </div>
);

export const ExperiencesCarroussel: React.FC<IExperiencesCarrousselProps> = ({
  experiences,
}) => {
  const formatDate = (dateField?: DateField): string => {
    if (!dateField) return "Ao Momento";

    const date = new Date(dateField);
    const maxChar = 3;

    const fullMonth = date.toLocaleString("pt-br", { month: "long" });
    const abbreviatedMonth = fullMonth.substring(0, maxChar);

    const year = date.getFullYear();

    return abbreviatedMonth + ". " + year;
  };

  return (
    <div className="flex flex-col lg:gap-0 gap-16">
      {experiences.map((item, index) => (
        <>
          <FadeIn key={JSON.stringify(item.description)}>
            <div className="flex flex-col gap-8 lg:16 w-full lg:flex-row">
              <div className="w-full lg:w-52">
                <p className="text-xs font-light text-primary-40 lg:w-52 lg:text-base">
                  {formatDate(item.start_date)} - {formatDate(item.end_date)}
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full lg:gap-6">
                <div className="flex flex-col gap-2 lg:gap-3 w-full">
                  <RichText
                    field={item.company_name}
                    className="!font-medium"
                  />
                  <RichText
                    field={item.title}
                    className="!font-regular text-primary-30"
                  />
                  <RichText field={item.description} />
                </div>
                <div className="flex gap-2 flex-wrap w-full">
                  {item.tags?.split(",").map((tag) => (
                    <Badge key={tag} size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex-col items-center justify-center relative hidden lg:flex">
                <ExperienceRod
                  className={cn(index > 0 ? "h-full" : "h-1/2")}
                  bg={item.end_date ? "bg-primary-70" : "bg-primary-50"}
                />
                <div
                  className={cn(
                    "hexagon w-7 h-8",
                    item.end_date ? "bg-primary-70" : "bg-primary-50"
                  )}
                />
              </div>
            </div>
          </FadeIn>
          <ExperienceRod
            className="h-24 relative self-end mr-[1.5px] hidden lg:flex"
            bg={item.end_date ? "bg-primary-70" : "bg-primary-50"}
          />
        </>
      ))}
    </div>
  );
};
