"use client";

import {
  Badge,
  Icon,
  Image,
  LinkButton,
  NextSlideButon,
  PreviousSlideButon,
  RichText,
} from "@/components";
import { IProjectsTabsProps } from "./types";

export const ProjectsTabs: React.FC<IProjectsTabsProps> = ({ projects }) => {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div
          className="flex flex-col gap-12 lg:gap-16"
          key={`${project.title}`}
        >
          <div className="flex flex-col gap-4">
            <RichText field={project.title} />
            <RichText field={project.description} />
          </div>
          <div className="relative flex items-center justify-between gap-6">
            <PreviousSlideButon>
              <Icon name="arrow-left" />
            </PreviousSlideButon>
            <div className="relative w-full lg:w-4/5">
              <div className="absolute w-3 h-3 border-2 -top-1 -left-1 border-primary-60 bg-primary-40" />
              <div className="absolute right-4 top-4">
                <LinkButton field={project.link}>
                  <Icon name="link" />
                </LinkButton>
              </div>
              <Image
                field={project.image}
                className="border-4 border-primary-50"
              />
              <div className="absolute w-3 h-3 border-2 -bottom-1 -right-1 border-primary-60 bg-primary-40" />
            </div>
            <NextSlideButon>
              <Icon name="arrow-right" />
            </NextSlideButon>
          </div>
          <div className="flex gap-4 flex-wrap justify-start lg:justify-center">
            {project.tags?.split(",").map((tag) => (
              <Badge key={tag} variant="tertiary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
