"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";

/* ========================= UI IMAGES ========================= */
const uiImages = [
  { src: "/timer_project.svg", label: "Timer Project – UI Exploration" },
  { src: "/iphone_interface.svg", label: "iPhone Interface – Visual Concept" },
  { src: "/Nadz_model.svg", label: "Fashion social media – App UI" },
  { src: "/spotify_redesign.svg", label: "Spotify Redesign – UI Concept" },
  { src: "/be_real_emotions.svg", label: "Emotion Capture – UI Design" },
];

/* ========================= PAGE ========================= */
export default function UIShowcasePage() {
  return (
    <main className="w-full bg-white text-black font-serif">
      <Header />

      {/* ========================= PAGE HEADER ========================= */}
      <section className="max-w-4xl mx-auto px-6 pt-24 text-center">
        <h1 className="text-6xl font-bold mb-4">UI Showcase</h1>
        <p className="text-lg text-gray-700 font-light">
          Some concept designs and UI explorations I created as side projects 
          
        </p>
      </section>

      {/* ========================= HERO IMAGE WALL ========================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {uiImages.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={500}
                height={700}
                className="w-full h-auto object-cover"
              />

              {/* DESCRIPTION */}
              <div className="p-4 text-center bg-white">
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
