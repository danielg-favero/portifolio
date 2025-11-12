import { ExperiencesCarroussel, Section, SectionTitle } from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Professional`.
 */
export type ProfessionalProps = SliceComponentProps<Content.ProfessionalSlice>;

/**
 * Component for "Professional" Slices.
 */
const Professional = ({ slice }: ProfessionalProps): JSX.Element => {
  return (
    <Section className="pb-20 lg:pb-0" id="experience">
      <SectionTitle>Experiências Profissionais</SectionTitle>
      <ExperiencesCarroussel experiences={slice.items} />
    </Section>
  );
};

export default Professional;
