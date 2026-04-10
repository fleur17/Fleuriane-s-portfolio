"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* ========================= UI IMAGES ========================= */
const uiImages = [
  {
    src: "/images/projects/ui-projects/timer-project.svg",
    label: "Timer Project – UI Exploration",
  },
  {
    src: "/images/projects/ui-projects/iphone-interface.svg",
    label: "iPhone Interface – Visual Concept",
  },
  {
    src: "/images/projects/ui-projects/nadz-model.svg",
    label: "Fashion social media – App UI",
  },
  {
    src: "/images/projects/ui-projects/spotify-redesign.svg",
    label: "Spotify Redesign – UI Concept",
  },
  {
    src: "/images/projects/ui-projects/be-real-emotions.svg",
    label: "Emotion Capture – UI Design",
  },
];

/* ========================= PAGE ========================= */
export default function UIShowcasePage() {
  return (
    <main className="w-full bg-white font-serif text-black">
      <Header />

      {/* ========================= PAGE HEADER ========================= */}
      <section className="mx-auto max-w-4xl px-6 pt-24 text-center">
        <h1 className="mb-4 text-6xl font-bold">UI Showcase</h1>
        <p className="text-lg font-light text-gray-700">
          Some concept designs and UI explorations I created as side projects
        </p>
      </section>

      {/* ========================= HERO IMAGE WALL ========================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {uiImages.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={500}
                height={700}
                className="h-auto w-full object-cover"
              />

              {/* DESCRIPTION */}
              <div className="bg-white p-4 text-center">
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
