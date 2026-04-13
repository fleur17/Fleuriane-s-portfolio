"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Media from "@/components/Media";
import MediaDisplay from "@/components/MediaDisplay";
import Separator from "@/components/Separator";
import { Medias } from "@/types";

export default function Page() {
  const medias: Medias = {
    medias: [
      {
        src: "/images/projects/secret-valentines/ui.jpg",
        alt: "UI",
        width: 1414,
        height: 1885,
      },
      {
        src: "/images/projects/secret-valentines/secret-valentines.jpg",
        alt: "Secret Valentines",
        width: 1414,
        height: 2000,
      },
      {
        src: "/images/projects/secret-valentines/letter.jpg",
        alt: "Letter",
        width: 731,
        height: 908,
      },
    ],
    mediaLayout: "grid",
  };

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
            Secret Valentines
          </motion.h1>
          <motion.p
            className="max-w-3xl text-lg leading-relaxed md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A modern, digital love letter delivery system for Valentine's Day.
          </motion.p>
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
            About
          </motion.h2>
          <motion.p
            className="max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Secret Valentine is an application designed to allow people to
            express their love and appreciation anonymously to their crush,
            friends, and loved ones. Think of it as a modern-day pigeon
            delivering your secret love letters, dressed up in a beautiful rosé,
            pink, and purple color palette representing the code of love.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-150 overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-500 hover:scale-105">
            <Media
              src="/images/projects/secret-valentines/discover.png"
              alt="Discover your letters"
              width={1414}
              height={2000}
              className={`h-auto w-full object-cover`}
            />
          </div>
        </motion.div>
      </section>

      <Separator />

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-30">
        <div className="space-y-6">
          <motion.h2
            className="mb-6 text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Goal & Purpose
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our purpose is to deliver a fun, safe, and engaging way to reveal
            your secret love. In a world that is overly connected, taking a
            moment to send an anonymous, thoughtful message brings back the
            charm of traditional love letters, modernized for today.
          </motion.p>
        </div>

        <MediaDisplay medias={medias} />
      </section>

      <Separator />

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-30">
        <h2 className="mb-6 text-5xl font-bold">Background & Story</h2>
        <p className="text-lg leading-relaxed">
          We launched the first version of this app last year, and it was a
          massive success at our school! However, we became victims of our own
          success: our free-plan database quickly reached its maximum capacity,
          forcing us to constantly migrate between different email addresses to
          keep the service running.
        </p>
        <p className="text-lg leading-relaxed">
          This new and improved version is built to be more robust, scalable,
          and beautifully designed using modern web technologies to handle all
          the love letters you can send!
        </p>
      </section>

      <Separator />

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-30">
        <h2 className="mb-6 text-5xl font-bold">Artistic Direction</h2>
        <ul className="list-inside list-disc space-y-3 text-lg text-black">
          <li>
            <em>Theme:</em> Saint Valentine's Day.
          </li>
          <li>
            <em>Color Palette:</em> Rosé, shades of pink, and deep purples.
          </li>
          <li>
            <em>Vibe:</em> Romantic, mysterious, modern, and engaging.
          </li>
        </ul>
      </section>

      <Separator />

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-30">
        <h2 className="mb-6 text-5xl font-bold">Tech Stack & Architecture</h2>
        <p className="text-lg leading-relaxed">
          Inside the app folder, this project has been reimagined with a modern
          stack to avoid the database issues from the past:
        </p>
        <ul className="list-inside list-disc space-y-3 text-lg text-black">
          <li>
            <em>Frontend:</em> React + TypeScript, Vite
          </li>
          <li>
            <em>Styling:</em> Tailwind CSS + Radix UI components (for
            accessible, elegant UI)
          </li>
          <li>
            <em>Animations:</em> Framer Motion (for smooth, lovely transitions)
          </li>
          <li>
            <em>Backend & Database:</em> Firebase (to support an active user
            base, ensuring reliable and scalable delivery of anonymous messages)
          </li>
        </ul>
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
