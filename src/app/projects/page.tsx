"use client";

import ProjectCard from "@/components/ProjectCard";
import { projectsShowcases } from "@/data/projects-showcases";

export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="mx-auto max-w-360 flex-1 px-8 py-16">
        <section className="mb-16 text-center">
          <h1 className="mb-4 font-['Shippori_Mincho_B1:ExtraBold'] text-5xl text-black">
            Selected Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore my gallery of projects showcasing UX/UI design, art
            installation, business innovation, and digital experiences across
            various platforms
          </p>
        </section>

        <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectsShowcases.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
