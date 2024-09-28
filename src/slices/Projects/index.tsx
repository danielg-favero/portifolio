import { ProjectsTabs, Section, SectionTitle } from "@/components";
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
    <Section>
      <SectionTitle id="projects">Projetos</SectionTitle>
      <ProjectsTabs projects={slice.items} />
    </Section>
  );
};

export default Projects;
