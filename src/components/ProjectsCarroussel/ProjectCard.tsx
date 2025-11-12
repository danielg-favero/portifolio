import { Tooltip } from "react-tooltip";
import { useState } from "react";

import { Badge } from "../Badge";
import { Icon } from "../Icon";
import { LinkButton } from "../LinkButton";
import { Image, RichText } from "../prismic";

import { ProjectsSliceDefaultItem, Simplify } from "../../../prismicio-types";
import { asHTML, asText, RichTextField } from "@prismicio/client";

export const ProjectCard: React.FC<Simplify<ProjectsSliceDefaultItem>> = (
  project
) => {
  const [showMore, setShowMore] = useState(false);

  const getProjectTags = (tags?: string, maxDisplayTags = 2) => {
    if (!tags)
      return {
        tagsToDisplay: [],
        tagsToHide: [],
      };

    const tagsToDisplay = tags.split(", ").slice(0, maxDisplayTags);
    const tagsToHide =
      tags.split(", ").slice(maxDisplayTags, tags.length - 1) || [];

    return {
      tagsToDisplay,
      tagsToHide,
    };
  };

  const summarizeDescription = (description?: string, limit = 100) => {
    if (!description) return "";
    if (description.length <= limit) return description || "";

    return `${description.slice(0, limit)}...`;
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const { tagsToDisplay, tagsToHide } = getProjectTags(
    project.tags?.toString()
  );

  const descriptionStr = asText(project.description);
  const summarizedDescription = summarizeDescription(descriptionStr);
  const isSummarized = summarizedDescription.length < descriptionStr.length;

  console.log(project);

  return (
    <div className="max-w-[288px] lg:max-w-md flex flex-col h-full mr-8 lg:mr-16">
      <Image field={project.image} className="object-cover aspect-video" />
      <div className="flex flex-col justify-between gap-8 p-6 pb-10 bg-primary-80 h-full">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <RichText field={project.title} className="!font-medium" />
            <div className="flex gap-2 items-center flex-wrap">
              {tagsToDisplay.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
              <a
                data-tooltip-id="project-tags-tooltip"
                data-tooltip-content={tagsToHide.join(", ")}
              >
                <Badge variant="secondary">+{tagsToHide.length}</Badge>
              </a>
              <Tooltip id="project-tags-tooltip" />
            </div>
          </div>
          <p className="flex h-full grow font-extralight text-sm lg:text-xl text-neutral-100">
            {showMore
              ? asText(project.description)
              : summarizeDescription(asText(project.description))}
          </p>
          {isSummarized && (
            <a
              className="text-lg lg:text-xl text-primary-30 underline cursor-pointer"
              onClick={toggleShowMore}
            >
              {showMore ? "Ver menos" : "Ver mais"}
            </a>
          )}
        </div>
        <div className="flex justify-end">
          {project.github_link.link_type !== "Any" && (
            <LinkButton field={project.github_link}>
              <Icon name="github" />
            </LinkButton>
          )}
          {project.project_link.link_type !== "Any" && (
            <LinkButton field={project.project_link}>
              <Icon name="send" />
            </LinkButton>
          )}
          {project.article_link.link_type !== "Any" && (
            <LinkButton field={project.article_link}>
              <Icon name="graduation-cap" />
            </LinkButton>
          )}
          {project.video_link.link_type !== "Any" && (
            <LinkButton field={project.video_link}>
              <Icon name="play" />
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
};
