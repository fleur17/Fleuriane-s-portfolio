"use client";

import HomePageHero from "@/components/HomePageHero";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import { projects } from "@/data/projects";
import { Fragment } from "react/jsx-runtime";

export default function HomePage() {
  return (
    <main className="w-full">
      <HomePageHero />
      <div className="h-5 w-full bg-black"></div>

      {projects.map((project, index) => {
        return (
          <Fragment key={project.textSection.name}>
            <ProjectSection project={project} />
            {index < projects.length - 1 && <Separator />}
          </Fragment>
        );
      })}
    </main>
  );
}
