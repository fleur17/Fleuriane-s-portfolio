"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import BlockRenderer from "@/components/blocks/BlockRendered";
import Separator from "@/components/Separator";
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
    <>
      {project.steps.map((step, idx) => {
        return (
          <>
            <section
              className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20"
              key={`step-${idx}`}
            >
              {step.blocks.map((block, idx) => (
                <BlockRenderer key={idx} block={block} />
              ))}
            </section>
            {idx < project.steps.length - 1 && <Separator />}
          </>
        );
      })}
    </>
  );
}
