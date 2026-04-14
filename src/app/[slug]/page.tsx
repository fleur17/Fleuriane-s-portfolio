"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import HeroBlock from "@/components/blocks/HeroBlock";
import Separator from "@/components/Separator";
import StepRenderer from "@/components/StepRenderer";
import { projects } from "@/data/projects";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-white font-serif text-black">
      <HeroBlock block={project.hero} />
      <Separator />
      {project.steps.map((step, idx) => (
        <StepRenderer
          key={`step-${idx}`}
          step={step}
          index={idx}
          totalSteps={project.steps.length}
        />
      ))}
    </main>
  );
}
