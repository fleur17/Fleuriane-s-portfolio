"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

/* ========================= HERO CAROUSEL ========================= */
const carouselImages = [
  "/images/projects/newfaces/home-page-2.svg",
  "/images/projects/newfaces/courses-page.svg",
  "/images/projects/newfaces/portfolio.svg",
  "/images/projects/newfaces/final-page.svg",
];

function HeroCarousel() {
  const totalWidth = carouselImages.length * 360; // approximate card width + gap
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
        dragConstraints={{ left: -totalWidth + innerWidth, right: 0 }}
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
              alt={`Interface ${idx + 1}`}
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
export default function NewFacesUXPage() {
  return (
    <main className="w-full bg-white font-serif text-black">
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="relative w-full overflow-hidden bg-[#f4ede4] py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
          <motion.h1
            className="text-5xl leading-snug font-bold md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            NewFaces — Your Fashion Learning Platform
          </motion.h1>
          <motion.p
            className="max-w-3xl text-lg leading-relaxed md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I designed NewFace a fictionnal user-centric platform to streamline
            talent discovery for actors, models, and agencies, enhancing profile
            visibility and engagement through intuitive UX/UI design.
          </motion.p>

          {/* Full-width Hero Carousel */}
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
            To understand the needs of actors, models, and agencies, I conducted
            user interviews, surveys, and competitive analysis. Key pain points
            emerged around profile discoverability, navigation, and visual
            clarity.
          </motion.p>
          <ul className="list-inside list-disc space-y-3 text-lg text-black">
            <li>Users struggle to quickly find relevant talent profiles.</li>
            <li>
              Mobile navigation is often cumbersome in existing platforms.
            </li>
            <li>
              Agencies need clear indicators of talent availability and
              experience.
            </li>
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
              alt="User Research"
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
          Based on the research, I created detailed personas to guide design
          decisions.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          <PersonaCard
            name="Emma, Model"
            age="24"
            goals="Find opportunities and showcase portfolio easily"
            painPoints="Navigation confusion, poor image layout"
            img="/images/common/woman.png"
          />
          <PersonaCard
            name="Lucas, Actor"
            age="28"
            goals="Get noticed by agencies quickly"
            painPoints="Unclear profile visibility and metrics"
            img="/images/common/man.png"
          />
          <PersonaCard
            name="Agency Manager"
            age="35"
            goals="Efficiently discover and manage talent"
            painPoints="Difficult filtering and slow loading profiles"
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
        Low-Fidelity Prototyping
      </motion.h2>
      <p className="mx-auto mb-12 max-w-3xl text-lg">
        To quickly iterate on design concepts, I developed low-fidelity
        wireframes focusing on layout, navigation, and core functionalities.
      </p>

      <motion.div
        className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="images/projects/newfaces/proto-1.svg"
          width={350}
          height={550}
          alt="Wireframe 1"
          className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
        />

        <Image
          src="/images/projects/newfaces/proto-2.svg"
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
          Interactive prototypes were created to validate flows and test
          usability before development.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <PrototypeCard
            img="/images/projects/newfaces/home-page-2.svg"
            title="Landing Page"
          />
          <PrototypeCard
            img="/images/projects/newfaces/courses-page.svg"
            title="Courses"
          />
          <PrototypeCard
            img="/images/projects/newfaces/portfolio.svg"
            title="Portfolio Detail"
          />
          <PrototypeCard
            img="/images/projects/newfaces/final-page.svg"
            title="Portfolio Detail"
          />
        </div>
      </section>

      <div className="my-14 h-[2px] w-full bg-black"></div>

      {/* ========================= NEXT STEPS ========================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-6 text-4xl font-bold">Next Steps</h2>
        <p className="mx-auto max-w-3xl text-lg">
          Conduct usability testing with real users, refine micro-interactions,
          and collaborate with developers to ensure design fidelity during
          implementation.
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
      className="rounded-3xl bg-[#fff] p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
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
