"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* ========================= HERO CAROUSEL ========================= */
const carouselImages = [
  "/images/projects/ai-fashion/home.svg",
  "/images/projects/ai-fashion/calendar.svg",
  "/images/projects/ai-fashion/chat.svg",
];

function HeroCarousel() {
  const totalWidth = carouselImages.length * 360;
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const update = () => setInnerWidth(window.innerWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="mt-12 w-full overflow-hidden">
      <motion.div
        className="while-tap:cursor-grabbing flex cursor-grab gap-4"
        drag="x"
        dragConstraints={{
          left: -totalWidth + innerWidth,
          right: 0,
        }}
        dragElastic={0.1}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        whileHover={{ scale: 1.01 }}
      >
        {carouselImages.concat(carouselImages).map((img, idx) => (
          <div
            key={idx}
            className="w-[250px] flex-shrink-0 sm:w-[280px] md:w-[320px] lg:w-[350px]"
          >
            <Image
              src={img}
              alt={`AI Fashion Interface ${idx + 1}`}
              width={350}
              height={500}
              className="h-auto w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ========================= MAIN PAGE ========================= */

export default function AIFashionCaseStudy() {
  return (
    <main className="w-full bg-white font-serif text-black">
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="bg-beige relative w-full overflow-hidden py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
          <motion.h1
            className="text-5xl leading-snug font-bold md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Fashion Intelligent Styling Experience
          </motion.h1>

          <motion.p
            className="max-w-3xl text-lg leading-relaxed md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I designed a fictionnal UI/UX IA fashion app that helps people find
            style recommendations being able to virtually try on clothes and get
            personalized outfit ideas using artificial intelligence.
          </motion.p>

          <HeroCarousel />
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* ========================= USER RESEARCH ========================= */}

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
            Through research including surveys and interviews with fashion
            shoppers, i manage to find some relevant points that could be
            resolved through my app.
          </motion.p>

          <ul className="list-inside list-disc space-y-3 text-lg text-black">
            <li>Users want personalized outfit suggestions.</li>
            <li>
              Fashion professionals struggle to keep their schedules updated.
            </li>
            <li>Retailers need smarter ways to showcase products with AI.</li>
          </ul>
        </div>

        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-[600px] overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/common/desk.jpg"
              alt="AI Fashion research"
              width={200}
              height={200}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* ========================= USER PERSONAS ========================= */}

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
          Thos are fictionnal personas that helped me define user needs and
          refine AI-powered features.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          <PersonaCard
            name="Mia, Trend-Seeker"
            age="22"
            goals="Discover new outfits instantly using AI"
            painPoints="Hard to match clothes with her style"
            img="/images/common/woman.png"
          />
          <PersonaCard
            name="Daniel, Profesional model"
            age="30"
            goals="Being more informed about the fashion world"
            painPoints="Not enough time to stay properly informed"
            img="/images/common/man.png"
          />
          <PersonaCard
            name="Retail Fashion Manager"
            age="38"
            goals="Improve product visibility and boost customer engagement with AI styling"
            painPoints="Low visibility, low engagement, and high returns"
            img="/images/common/woman.png"
          />
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* ========================= WIREFRAMES ========================= */}

      <motion.h2
        className="mb-6 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Low-Fidelity Wireframes
      </motion.h2>

      <p className="mx-auto mb-12 max-w-3xl text-lg">
        Sketches and wireframes mapping out AI-driven user flows
      </p>

      <motion.div
        className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/projects/ai-fashion/home_proto.svg"
          width={350}
          height={550}
          alt="Wireframe 1"
          className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
        />

        <Image
          src="/images/projects/ai-fashion/calendar-proto.svg"
          width={350}
          height={550}
          alt="Wireframe 2"
          className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* ========================= PROTOTYPE ========================= */}

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
          Prototypes showcasing AI features and the different pages of the app
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <PrototypeCard
            img="/images/projects/ai-fashion/home.svg"
            title="Home page"
          />
          <PrototypeCard
            img="/images/projects/ai-fashion/calendar.svg"
            title="Calendar page"
          />
          <PrototypeCard
            img="/images/projects/ai-fashion/chat.svg"
            title="Chatbot page"
          />
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* ========================= NEXT STEPS ========================= */}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold">Next Steps</h2>
        <p className="mx-auto max-w-3xl text-lg">
          Further user testing to refine AI recommendations and to improve the
          user flow of the app
        </p>
      </section>

      {/* Back Button */}
      <div className="flex w-full justify-center pb-20">
        <Link
          href="/"
          className="bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>

      <Footer />
    </main>
  );
}

/* ========================= REUSABLE COMPONENTS ========================= */

interface PersonaCardProps {
  name: string;
  age: string;
  goals: string;
  painPoints: string;
  img: string;
}

function PersonaCard({ name, age, goals, painPoints, img }: PersonaCardProps) {
  return (
    <motion.div
      className="rounded-3xl bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        width={200}
        height={200}
        alt={name}
        className="mx-auto mb-4 rounded-full"
      />
      <h3 className="text-xl font-bold">
        {name}, {age}
      </h3>

      <p className="mt-2 text-black">
        <strong>Goals:</strong> {goals}
      </p>

      <p className="mt-1 text-black">
        <strong>Pain Points:</strong> {painPoints}
      </p>
    </motion.div>
  );
}

function PrototypeCard({ img, title }: { img: string; title: string }) {
  return (
    <motion.div
      className="w-[300px] overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        width={300}
        height={500}
        alt={title}
        className="h-auto w-full"
      />
      <h3 className="mt-2 mb-4 text-center text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}
