import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export interface IProjectsTabsProps {
  projects: SliceComponentProps<Content.ProjectsSlice>["slice"]["items"];
}
