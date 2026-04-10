"use client";

import { notFound } from "next/navigation";
import { use } from "react";

import AppProjectPage from "@/components/AppProjectPage";
import { projects } from "@/data/projects";
import { LayoutKey } from "@/types";

const layouts = {
  "app-project": AppProjectPage,
};

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

  const Layout = layouts[project.layout as LayoutKey];
  return <Layout project={project} />;
}
