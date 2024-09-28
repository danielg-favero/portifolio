import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export interface IExperiencesCarrousselProps {
  experiences: SliceComponentProps<Content.ProfessionalSlice>["slice"]["items"];
}
