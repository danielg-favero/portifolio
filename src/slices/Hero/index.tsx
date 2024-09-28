import {
  Badge,
  Header,
  HexagonButton,
  Icon,
  IconKeys,
  Image,
  RichText,
} from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { lazy } from "react";
import {} from "react-icons/fa";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="w-full px-4 mt-6 lg:mt-12 max-w-7xl">
      {/* <Header /> */}
      <div className="flex flex-col items-center w-full mt-24 lg:flex-row lg:justify-between gap-14 lg:mt-44">
        <div className="flex flex-col items-center gap-14 lg:items-start lg:justify-between lg:h-[532px]">
          <div className="flex flex-col items-center gap-6 lg:gap-8 lg:items-start">
            <div className="flex flex-col items-center gap-4 lg:gap-6 lg:items-start">
              <Badge>Olá, me chamo</Badge>
              <RichText
                field={slice.primary.title}
                className="text-center lg:text-left"
              />
            </div>
            <RichText
              field={slice.primary.description}
              className="text-center lg:text-left"
            />
          </div>
          <div className="flex gap-4">
            {slice.items.map((item) => {
              return (
                <HexagonButton
                  key={item.sociallink.text}
                  field={item.sociallink}
                >
                  <Icon name={item.icon as IconKeys} />
                </HexagonButton>
              );
            })}
          </div>
        </div>
        <Image field={slice.primary.image} width={624} height={767} />
      </div>
    </section>
  );
};

export default Hero;
