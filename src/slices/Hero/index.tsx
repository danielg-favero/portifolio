/* eslint-disable jsx-a11y/alt-text */
import {
  Badge,
  FadeIn,
  Header,
  HexagonButton,
  Icon,
  IconKeys,
  Image,
  RichText,
} from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { DescriptionTypewritter } from "./DescriptionTypewritter";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  console.log(slice.primary.description);
  return (
    <section className="w-full px-4 mt-6 lg:mt-12 max-w-7xl">
      {/* <Header /> */}
      <div className="flex flex-col items-center w-full mt-24 lg:flex-row lg:justify-between gap-14 lg:mt-44">
        <div className="flex flex-col items-center gap-14 lg:items-start lg:justify-between lg:h-[266px]">
          <div className="flex flex-col items-center gap-2 lg:gap-4 lg:items-start">
            <FadeIn>
              <div className="flex flex-col items-center gap-4 lg:gap-6 lg:items-start">
                <Badge>Olá, me chamo</Badge>
                <RichText
                  field={slice.primary.title}
                  className="text-center lg:text-left"
                />
              </div>
              {slice.primary.description && (
                <DescriptionTypewritter
                  descriptions={slice.primary.description}
                />
              )}
            </FadeIn>
          </div>
          <div className="flex gap-4">
            {slice.items.map((item) => {
              return (
                <FadeIn key={item.sociallink.text}>
                  <HexagonButton field={item.sociallink}>
                    <Icon name={item.icon as IconKeys} />
                  </HexagonButton>
                </FadeIn>
              );
            })}
          </div>
        </div>
        <FadeIn>
          <Image
            field={slice.primary.image}
            width={416}
            height={511}
            priority
            style={{ width: "416px", height: "511px" }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
