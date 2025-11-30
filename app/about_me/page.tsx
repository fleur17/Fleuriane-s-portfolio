"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutMePage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* ---------------- HERO / ABOUT SECTION ---------------- */}
      <section className="relative w-full bg-[#f4ede4] py-36 md:py-40 overflow-hidden">

        <h1 className="absolute top-6 left-8 md:top-10 md:left-12 text-[38px] md:text-[80px] font-serif font-bold text-black/10 select-none leading-none">
  About Me
</h1>



        {/* CONTENT GRID */}
        <div className="relative grid md:grid-cols-2 gap-20 max-w-7xl mx-auto px-8 mt-10">

          {/* LEFT COLUMN — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/photo_gallery.svg"
              alt="Portrait or creative image"
              width={900}
              height={1100}
            />
          </div>

         {/* RIGHT COLUMN — TEXT */}
<div className="flex flex-col justify-center z-10">
  <p className="text-xl md:text-[26px] leading-snug font-serif text-black">
    I’m <span className="font-bold">Fleuriane LAM</span> an engineering student
    majoring in Creative Technology.
    <br /><br />
    I love exploring visual design, UX/UI, and creative experimentation,
    and here you’ll find a selection of projects shaped by curiosity and aesthetics.
    <br /><br />
    Feel free to reach out anytime.
  </p>
</div>


        </div>
      </section>

      <Footer />
    </main>
  );
}
