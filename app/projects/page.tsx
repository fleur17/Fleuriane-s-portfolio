"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

/* --------------------------- PROJECT DATA --------------------------- */
const projects = [
  {
    slug: "neuroportal",
    title: "The NeuroPortal",
    category: "Art / UX Design",
    description: "A modern art-focused platform exploring interactive digital experiences.",
    image: "/3.png",
  },
  {
    slug: "elastup",
    title: "The Elastup",
    category: "Business / UX Design",
    description: "A kickstarter project that turns cutlery holder into a fashion project.",
    image: "/1.png",
  },
  {
    slug: "new-models",
    title: "Fashion courses app",
    category: "App / UX-UI Design",
    description: "A platform connecting models with agencies while giving fashion courses.",
    image: "/Home_Page_new_version.svg",
  },
  {
    slug: "ia-fashion",
    title: "IA Fashion",
    category: "App / UI-UX Design",
    description: "An app that help users to discover fashion styles using AI technology.",
    image: "/IA_fashion_home.svg",
  },
  {
    slug: "ui-projects",
    title: "UI projects",
    category: "Social media app / UI Design",
    description: "Some of my side UI/UX project design works for fictionnal apps.",
    image: "/Nadz_model.svg",
  },
];

/* --------------------------- PROJECT CARD --------------------------- */
function ProjectCard({ slug, title, category, description, image }: { slug: string; title: string; category: string; description: string; image: string }) {
  const projectLinks: { [key: string]: string } = {
    neuroportal: "/neuroportal",
    elastup: "/elastup",
    "new-models": "/newfaces",
    "ia-fashion": "/IA_Fashion",
    "ui-projects": "/UI_projects",
  };

  return (
    <Link href={projectLinks[slug] || '#'}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
        <div className="h-64 w-full relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-500 font-['Shippori_Mincho_B1:Medium'] text-sm mb-1">{category}</p>
          <h3 className="font-['Shippori_Mincho_B1:ExtraBold'] text-black text-2xl mb-2">{title}</h3>
          <p className="text-gray-700 font-sans text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}

/* --------------------------- MAIN PAGE --------------------------- */
export default function UXUIProjects() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 px-8 py-16 max-w-[1440px] mx-auto">
        <section className="mb-16 text-center">
          <h1 className="font-['Shippori_Mincho_B1:ExtraBold'] text-5xl text-black mb-4">
            Selected Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my gallery of projects showcasing UX/UI design, art installation, business innovation, and digital experiences across various platforms
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
