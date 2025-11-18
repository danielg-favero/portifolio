/* eslint-disable jsx-a11y/alt-text */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { FadeIn, Icon, SliderButton } from "@/components";
import { AvailableLocales } from "@/types";
import { useLocale } from "@/hooks";

import { IProjectsTabsProps } from "./types";
import { ProjectCard } from "./ProjectCard";
import { useNavigationButtons } from "./useNavigationButtons";

import "./carroussel.css";
import { asText } from "@prismicio/client";

const translations: Record<AvailableLocales, Record<string, string>> = {
  "en-us": {
    sliderNextButton: "Next slide",
    sliderPreviousButton: "Previous slide",
  },
  "pt-br": {
    sliderNextButton: "Próximo slide",
    sliderPreviousButton: "Slide anterior",
  },
};

export const ProjectsCarroussel: React.FC<IProjectsTabsProps> = ({
  projects,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [WheelGesturesPlugin()]);
  const { currentLocale } = useLocale();
  const localizedTranslations = translations[currentLocale];

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useNavigationButtons(emblaApi);

  return (
    <div className="flex flex-col gap-10 w-full embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <div className="embla__slide" key={asText(project.title)}>
              <FadeIn>
                <ProjectCard {...project} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between lg:justify-center gap-16 mt-10 lg:mt-16 max-w-7xl ">
        <SliderButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          aria-label={localizedTranslations.sliderPreviousButton}
        >
          <Icon name="arrow-left" />
        </SliderButton>
        <SliderButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          aria-label={localizedTranslations.sliderNextButton}
        >
          <Icon name="arrow-right" />
        </SliderButton>
      </div>
    </div>
  );
};
