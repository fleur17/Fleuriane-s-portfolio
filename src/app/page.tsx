"use client";

import { Fragment } from "react/jsx-runtime";

import HomePageHero from "@/components/HomePageHero";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import { projectsDisplays } from "@/data/projects-displays";

export default function HomePage() {
  return (
    <main className="w-full">
      <HomePageHero />
      <div className="h-5 w-full bg-black"></div>

      {projectsDisplays.map((project, index) => {
        return (
          <Fragment key={project.textSection.name}>
            <ProjectSection project={project} />
            {index < projectsDisplays.length - 1 && <Separator />}
          </Fragment>
        );
      })}
    </main>
  );
}
