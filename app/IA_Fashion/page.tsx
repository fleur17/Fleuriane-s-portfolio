"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

/* ========================= HERO CAROUSEL ========================= */
const carouselImages = [
  "/IA_fashion_home.svg",
"/IA_fashion_calendar.svg",
  "/IA_fashion_chat.svg",
];

function HeroCarousel() {
  const totalWidth = carouselImages.length * 360;

  return (
    <div className="w-full overflow-hidden mt-12">
      <motion.div
        className="flex gap-4 cursor-grab while-tap:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: -totalWidth + window.innerWidth,
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
            className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px]"
          >
            <Image
              src={img}
              alt={`AI Fashion Interface ${idx + 1}`}
              width={350}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-md"
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
    <main className="w-full bg-white text-black font-serif">
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="relative w-full py-32 overflow-hidden bg-[#f4ede4]">
        <div className="flex flex-col items-center max-w-6xl mx-auto px-6 gap-12 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Fashion Intelligent Styling Experience
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I designed a fictionnal UI/UX IA fashion app that helps people find style recommendations
             being able to virtually try on clothes and get personalized outfit ideas using artificial intelligence.
          </motion.p>

          <HeroCarousel />
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* ========================= USER RESEARCH ========================= */}

      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-6">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            User Research & Insights
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed max-w-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Through research including surveys and interviews with fashion shoppers, i manage to find some relevant points that could be resolved through my app.
          </motion.p>

         <ul className="list-disc list-inside text-lg text-black space-y-3">
          <li>Users want personalized outfit suggestions.</li>
          <li>Fashion professionals struggle to keep their schedules updated.</li>
          <li>Retailers need smarter ways to showcase products with AI.</li>
        </ul>

        </div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-[600px] bg-white shadow-lg rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <Image
              src="/desk.jpg"
              alt="AI Fashion research"
              width={200}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* ========================= USER PERSONAS ========================= */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          User Personas
        </motion.h2>

        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Thos are fictionnal personas that helped me define user needs and refine AI-powered features.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <PersonaCard
            name="Mia, Trend-Seeker"
            age="22"
            goals="Discover new outfits instantly using AI"
            painPoints="Hard to match clothes with her style"
            img="/woman.png"
          />
          <PersonaCard
            name="Daniel, Profesional model"
            age="30"
            goals="Being more informed about the fashion world"
            painPoints="Not enough time to stay properly informed"
            img="/man.png"
          />
          <PersonaCard
            name="Retail Fashion Manager"
            age="38"
            goals="Improve product visibility and boost customer engagement with AI styling"
            painPoints="Low visibility, low engagement, and high returns"
            img="/woman.png"
          />


        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* ========================= WIREFRAMES ========================= */}

      <motion.h2
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Low-Fidelity Wireframes
      </motion.h2>

      <p className="text-lg max-w-3xl mx-auto mb-12">
        Sketches and wireframes mapping out AI-driven user flows
      </p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/IA_fashion_home_proto.svg"
          width={350}
          height={550}
          alt="Wireframe 1"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
        />

        <Image
          src="/IA_fashion_calendar_proto.svg"
          width={350}
          height={550}
          alt="Wireframe 2"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* ========================= PROTOTYPE ========================= */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          High-Fidelity Prototyping
        </motion.h2>

        <p className="text-lg max-w-3xl mx-auto mb-12">
          Prototypes showcasing AI features and the different pages of the app
        </p>

        <div className="flex justify-center flex-wrap gap-10">
          <PrototypeCard img="/IA_fashion_home.svg" title="Home page" />
          <PrototypeCard img="/IA_fashion_calendar.svg" title="Calendar page" />
          <PrototypeCard img="/IA_fashion_chat.svg" title="Chatbot page" />
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-14"></div>

      {/* ========================= NEXT STEPS ========================= */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Next Steps</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Further user testing to refine AI recommendations and to improve the user flow of the app 
        </p>
      </section>

      {/* Back Button */}
      <div className="w-full flex justify-center pb-20">
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white font-bold hover:opacity-80 transition-opacity"
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
      className="bg-[#fff] rounded-3xl shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        width={200}
        height={200}
        alt={name}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="font-bold text-xl">
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
      className="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-[300px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={img}
        width={300}
        height={500}
        alt={title}
        className="w-full h-auto"
      />
      <h3 className="text-center font-semibold text-lg mt-2 mb-4">
        {title}
      </h3>
    </motion.div>
  );
}
