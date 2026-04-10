"use client";

import { Fragment } from "react/jsx-runtime";

import HomePageHero from "@/components/HomePageHero";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import { projectsShowcases } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="w-full">
      <HomePageHero />
      <div className="h-5 w-full bg-black"></div>

      {projectsShowcases.map((project, index) => {
        return (
          <Fragment key={project.textSection.name}>
            <ProjectSection project={project} />
            {index < projectsShowcases.length - 1 && <Separator />}
          </Fragment>
        );
      })}
    </main>
  );
}
