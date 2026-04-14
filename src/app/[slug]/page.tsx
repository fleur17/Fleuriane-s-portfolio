"use client";

import { notFound } from "next/navigation";
import { Fragment, use } from "react";

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
          <Fragment key={`frag-${idx}`}>
            <section className="mx-auto flex max-w-6xl flex-col px-6 py-20">
              {step.blocks.map((block, idx) => (
                <BlockRenderer key={idx} block={block} />
              ))}
            </section>
            {idx < project.steps.length - 1 && <Separator />}
          </Fragment>
        );
      })}
    </>
  );
}
