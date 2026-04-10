"use client";

import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* --------------------------- PROJECT DATA --------------------------- */
const projects = [
  {
    slug: "neuroportal",
    title: "The NeuroPortal",
    category: "Art / UX Design",
    description:
      "A modern art-focused platform exploring interactive digital experiences.",
    image: "/images/projects/neuroportal/neuroportal.png",
  },
  {
    slug: "elastup",
    title: "The Elastup",
    category: "Business / UX Design",
    description:
      "A kickstarter project that turns cutlery holder into a fashion project.",
    image: "/images/projects/elastup/elastup.png",
  },
  {
    slug: "new-models",
    title: "Fashion courses app",
    category: "App / UX-UI Design",
    description:
      "A platform connecting models with agencies while giving fashion courses.",
    image: "/images/projects/newfaces/home-page.svg",
  },
  {
    slug: "images/projects/ai-fashion/ai-fashion",
    title: "IA Fashion",
    category: "App / UI-UX Design",
    description:
      "An app that help users to discover fashion styles using AI technology.",
    image: "/images/projects/ai-fashion/home.svg",
  },
  {
    slug: "ui-projects",
    title: "UI projects",
    category: "Social media app / UI Design",
    description:
      "Some of my side UI/UX project design works for fictionnal apps.",
    image: "/images/projects/ui-projects/nadz-model.svg",
  },
];

/* --------------------------- PROJECT CARD --------------------------- */
function ProjectCard({
  slug,
  title,
  category,
  description,
  image,
}: {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}) {
  const projectLinks: { [key: string]: string } = {
    neuroportal: "/neuroportal",
    elastup: "/elastup",
    "new-models": "/newfaces",
    "images/projects/ai-fashion/ai-fashion": "/ai-fashion",
    "ui-projects": "/ui-projects",
  };

  return (
    <Link href={projectLinks[slug] || "#"}>
      <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="mb-1 font-['Shippori_Mincho_B1:Medium'] text-sm text-gray-500">
            {category}
          </p>
          <h3 className="mb-2 font-['Shippori_Mincho_B1:ExtraBold'] text-2xl text-black">
            {title}
          </h3>
          <p className="font-sans text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}

/* --------------------------- MAIN PAGE --------------------------- */
export default function UXUIProjects() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="mx-auto max-w-[1440px] flex-1 px-8 py-16">
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
          {projects.map((proj) => (
            <ProjectCard
              key={proj.slug}
              slug={proj.slug}
              title={proj.title}
              category={proj.category}
              description={proj.description}
              image={proj.image}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
