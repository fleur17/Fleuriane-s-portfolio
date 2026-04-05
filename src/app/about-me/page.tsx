"use client";

import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutMePage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />

      {/* ---------------- HERO / ABOUT SECTION ---------------- */}
      <section className="relative w-full overflow-hidden bg-[#f4ede4] py-36 md:py-40">
        <h1 className="absolute top-6 left-8 font-serif text-[38px] leading-none font-bold text-black/10 select-none md:top-10 md:left-12 md:text-[80px]">
          About Me
        </h1>

        {/* CONTENT GRID */}
        <div className="relative mx-auto mt-10 grid max-w-7xl gap-20 px-8 md:grid-cols-2">
          {/* LEFT COLUMN — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/about/photo-gallery.svg"
              alt="Portrait or creative image"
              width={900}
              height={1100}
            />
          </div>

          {/* RIGHT COLUMN — TEXT */}
          <div className="z-10 flex flex-col justify-center">
            <p className="font-serif text-xl leading-snug text-black md:text-[26px]">
              I’m <span className="font-bold">Fleuriane LAM</span> an
              engineering student majoring in Creative Technology.
              <br />
              <br />
              I love exploring visual design, UX/UI, and creative
              experimentation, and here you’ll find a selection of projects
              shaped by curiosity and aesthetics.
              <br />
              <br />
              Feel free to reach out anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
