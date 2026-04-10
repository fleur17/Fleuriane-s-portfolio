import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeroCarousel from "@/components/HeroCarousel";
import PersonaCard from "@/components/PersonaCard";
import PrototypeCard from "@/components/PrototypeCard";
import Separator from "@/components/Separator";
import { AppProject } from "@/types";

interface AppProjectPageProps {
  project: AppProject;
}

export default function AppProjectPage({ project }: AppProjectPageProps) {
  return (
    <main className="w-full bg-white font-serif text-black">
      <section className="bg-beige relative w-full overflow-hidden py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
          <motion.h1
            className="text-5xl leading-snug font-bold md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="max-w-3xl text-lg leading-relaxed md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          <HeroCarousel carousel={project.carousel} />
        </div>
      </section>

      <Separator />

      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:flex-row">
        <div className="flex-1 space-y-6">
          <motion.h2
            className="mb-6 text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            User Research & Insights
          </motion.h2>
          <motion.p
            className="max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {project.researchInsights.research}
          </motion.p>
          <ul className="list-inside list-disc space-y-3 text-lg text-black">
            {project.researchInsights.insights.map((insight, idx) => {
              return <li key={idx}>{insight}</li>;
            })}
          </ul>
        </div>

        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-150 overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-500 hover:scale-105">
            <Image
              src={project.researchInsights.image.src}
              alt={project.researchInsights.image.alt ?? ""}
              width={project.researchInsights.image.width ?? 200}
              height={project.researchInsights.image.height ?? 200}
              className={`h-auto w-full object-cover ${project.researchInsights.image.className}`}
            />
          </div>
        </motion.div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          className="mb-6 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          User Personas
        </motion.h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg">
          {project.userPersonas.description}
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {project.userPersonas.personas.map((persona) => {
            return (
              <PersonaCard
                key={persona.name}
                name={persona.name}
                age={persona.age}
                goals={persona.goals}
                painPoints={persona.painPoints}
                img={persona.image.src}
              />
            );
          })}
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <motion.h2
          className="mb-6 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Low-Fidelity Prototyping
        </motion.h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg">
          {project.lowFidelityPrototyping.description}
        </p>

        <motion.div
          className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {project.lowFidelityPrototyping.images.map((image, idx) => {
            return (
              <Image
                key={idx}
                src={image.src}
                width={image.width ?? 350}
                height={image.height ?? 550}
                alt={`Wireframe ${idx + 1}`}
                className={`rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 ${image.className}`}
              />
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <motion.h2
          className="mb-6 text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          High-Fidelity Prototyping
        </motion.h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg">
          {project.highFidelityPrototyping.description}
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {project.highFidelityPrototyping.images.map((image, idx) => {
            return <PrototypeCard key={idx} image={image} />;
          })}
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold">Next Steps</h2>
        <p className="mx-auto max-w-3xl text-lg">{project.nextSteps}</p>
      </section>

      <div className="flex w-full justify-center pb-20">
        <Link
          href="/"
          className="bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
