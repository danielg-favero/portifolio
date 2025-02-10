import {
  Badge,
  FadeIn,
  Image,
  RichText,
  Section,
  SectionTitle,
} from "@/components";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `OnTv`.
 */
export type OnTvProps = SliceComponentProps<Content.OnTvSlice>;

/**
 * Component for "OnTv" Slices.
 */
const OnTv = ({ slice }: OnTvProps): JSX.Element => {
  return (
    <Section>
      <SectionTitle id="na-midia">Na Midia</SectionTitle>
      <div className="flex gap-8 flex-wrap ">
        {slice.items.map((item, index) => (
          <FadeIn key={index}>
            <PrismicLink field={item.link}>
              <div className="w-full lg:w-[400px] h-full max-w-md flex flex-col bg-primary-95 hover:scale-105 transition-all active:scale-95 active:opacity-75">
                <Image
                  field={item.thumbnail}
                  className="rounded-t-lg object-cover w-full max-w-md lg:w-[400px] h-[200px]"
                />
                <div
                  style={{ height: "inherit" }}
                  className="bg-primary-80 p-3 lg:p-4 rounded-b-lg flex flex-col gap-2"
                >
                  <Badge size="sm" variant="secondary">
                    {item.post_type}
                  </Badge>
                  <RichText
                    field={item.post_title}
                    className="font-medium text-xs lg:!text-base"
                  />
                </div>
              </div>
            </PrismicLink>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default OnTv;
