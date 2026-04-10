"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import AppProjectPage from "@/components/pages/AppProjectPage";
import BusinessProjectPage from "@/components/pages/BusinessProjectPage";
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

  switch (project.layout) {
    case "app-project":
      return <AppProjectPage project={project} />;
    case "business-project":
      return <BusinessProjectPage project={project} />;
    default:
      notFound();
  }
}
