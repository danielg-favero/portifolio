"use server";
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {
  Badge,
  FadeIn,
  HexagonButton,
  Icon,
  IconKeys,
  RichText,
  Section,
} from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { DescriptionTypewritter } from "./DescriptionTypewritter";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Section className="h-screen flex flex-col items-center justify-center relative">
      <div className="flex flex-col justify-center items-center gap-14">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <FadeIn>
            <div className="flex flex-col items-center justify-center gap-4">
              <Badge variant="secondary">{slice.primary.greetings}</Badge>
              <RichText
                field={slice.primary.title}
                className="text-center lg:text-left"
              />
              {slice.primary.description && (
                <DescriptionTypewritter
                  descriptions={slice.primary.description}
                />
              )}
            </div>
          </FadeIn>
        </div>
        <div className="flex gap-4 lg:absolute lg:bottom-32">
          {slice.items.map((item) => {
            return (
              <FadeIn key={item.sociallink.text}>
                <HexagonButton
                  field={item.sociallink}
                  aria-label={item.icon as string}
                  role="link"
                >
                  <Icon name={item.icon as IconKeys} />
                </HexagonButton>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
