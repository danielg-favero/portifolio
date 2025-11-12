import { ProjectsCarroussel, Section, SectionTitle } from "@/components";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <Section id="projects">
      <SectionTitle>Projetos</SectionTitle>
      <ProjectsCarroussel projects={slice.items} />
    </Section>
  );
};

export default Projects;
