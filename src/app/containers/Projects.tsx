"use client";

import { Section, SectionTitle, Tab } from "@/components";
import React, { useEffect, useState } from "react";

import { ProjectsDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

import "swiper/css";
import "swiper/css/pagination";
import { ProjectTab } from "@/components/ProjectTab";

export const Projects: React.FC = () => {
  const [devProjects, setDevProjects] = useState<Array<ProjectsDocument>>([]);
  const [designProjects, setDesignProjects] = useState<Array<ProjectsDocument>>(
    []
  );

  useEffect(() => {
    const getProjects = async () => {
      const prismic = createClient();
      const projects = await prismic.getAllByType("projects");

      setDevProjects(projects.filter((project) => project.data.type === "dev"));
      setDesignProjects(
        projects.filter((project) => project.data.type === "design")
      );
    };

    getProjects();
  }, []);

  return (
    <Section>
      <SectionTitle id="projects">Projetos</SectionTitle>
      <div className="flex flex-col">
        <Tab tabs={["Desenvolvedor", "Designer"]}>
          <div>
            {devProjects.map((devProject) => (
              <ProjectTab key={devProject.uid} project={devProject} />
            ))}
          </div>
          <div>
            {designProjects.map((designProject) => (
              <ProjectTab key={designProject.uid} project={designProject} />
            ))}
          </div>
        </Tab>
      </div>
    </Section>
  );
};
