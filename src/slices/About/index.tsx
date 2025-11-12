import {
  Button,
  FadeIn,
  Icon,
  IconKeys,
  InfoCard,
  RichText,
  Section,
  SectionTitle,
} from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Section id="about">
      <SectionTitle>Sobre Mim</SectionTitle>
      <div className="flex flex-col w-full gap-4 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
          {slice.items.map((item) => (
            <FadeIn key={item.icon}>
              <InfoCard>
                <Icon
                  className="w-6 h-6 lg:w-8 lg:h-8"
                  name={item.icon as IconKeys}
                />
                <RichText field={item.information} />
              </InfoCard>
            </FadeIn>
          ))}
        </div>
        <div className="flex flex-col gap-4 lg:justify-between lg:w-1/2">
          <FadeIn>
            <RichText field={slice.primary.abstract} />
          </FadeIn>
          <FadeIn>
            <Button field={slice.primary.curriculum}>
              <Icon name="download" />
              Currículo
            </Button>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

export default About;
