"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ElastupPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="w-full bg-white font-serif text-black">

      <Header />

      {/* ================= HERO ================= */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-32 md:py-40 text-center"
        style={{ backgroundImage: "url('/Bg_elastup.svg')" }}
      >
        <h1 className="text-6xl font-serif font-bold drop-shadow-lg">
          Elastup
        </h1>
        <p className="mt-4 text-xl font-serif font-light drop-shadow-lg">
          A multifunctional elastic band turned fashionable
        </p>
      </section>

      <div className="w-full h-[2px] bg-black my-0"></div>

      {/* ================= PRODUCT DESCRIPTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Description Column */}
        <div className="flex flex-col justify-start md:ml-15">
          <h2 className="text-5xl font-bold mb-6">Description of the product</h2>
          <p className="text-lg leading-relaxed mt-6 md:mt-10">
            The Elastup is a versatile and stylish accessory designed to tackle everyday challenges.
            Combining a durable elastic band with croûte de veau leather, this innovative product features
            horizontal slots that securely hold pens, cutlery, and other small essentials.
          </p>
        </div>

        {/* Topics Column */}
        <div className="flex flex-col justify-start md:ml-50 mt-10 md:mt-0">
          <h2 className="text-5xl font-bold mb-20">Topics</h2>
          <ul className="list-none space-y-4 text-lg">
            <li><span className="border-b border-black inline-block w-1/2 pb-1">Business project</span></li>
            <li><span className="border-b border-black inline-block w-1/2 pb-1">Multifunctional elastic</span></li>
            <li><span className="inline-block w-1/2 pb-1">A fashion item</span></li>
          </ul>
        </div>

        {/* Full-width Elastup Image */}
        <div className="w-full mt-10 md:col-span-2 flex justify-center">
          <Image
            src="/group_elastup.svg"
            alt="Elastup Showcase"
            width={2000}
            height={800}
            className="w-[2000px] max-w-full h-auto"
          />
        </div>

      </section>

      <div className="w-full h-[2px] bg-black my-16"></div>

      {/* ================= DESIGN PROCESS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        <h2 className="text-5xl font-bold mb-6">Design Process</h2>

        <p className="text-lg leading-relaxed">
          After several long brainstorming sessions without success, our idea finally came when a team member arrived with a tupperware held together by an elastic band — a simple workaround that inspired the project.
        </p>

        <p className="text-lg leading-relaxed">
          We came up with the idea of a stylish cutlery holder for tupperware, using a wider elastic band for better stability and a leather finish for elegance. Soon, the concept expanded to notebooks, iPads, and more — that is how Elastup was born.
        </p>

        <div className="w-full flex justify-center mt-10">
          <Image
            src="/design_process.svg"
            alt="Prototype 1"
            width={2000}
            height={800}
            className="w-[2000px] max-w-full h-auto"
          />
        </div>

        <div className="w-full flex justify-center mt-10">
          <Image
            src="/prototypes.svg"
            alt="Prototype 2"
            width={2000}
            height={800}
            className="w-[2000px] max-w-full h-auto"
          />
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-16"></div>

      {/* ================= POSTERS ================= */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-5xl font-bold mb-6">Posters of our campaign</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <Image src="/blue_elastup.svg" width={400} height={600} alt="Poster 1" className="w-[400px] max-w-full h-auto rounded-lg" />
          <Image src="/grey_elastup.svg" width={400} height={600} alt="Poster 2" className="w-[400px] max-w-full h-auto rounded-lg" />
          <Image src="/green_elastup.svg" width={400} height={600} alt="Poster 3" className="w-[400px] max-w-full h-auto rounded-lg" />
        </div>
      </section>

      <div className="w-full h-[2px] bg-black my-16"></div>

      {/* ================= VIDEO ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-10">Campaign Video</h2>

        {isPlaying ? (
          <video
        src="/video_elastup/video_elastup.mp4"
        controls
        autoPlay
        className="w-[800px] max-w-full h-auto rounded-lg mx-auto"
          />
        ) : (
          <div
        className="px-6 py-3 text-white font-bold hover:opacity-80 cursor-pointer transition-opacity inline-block rounded-lg"
        onClick={() => setIsPlaying(true)}
          >
        <Image
          src="/play_video.svg"
          alt="Video Preview"
          width={800}
          height={450}
          className="w-[800px] max-w-full h-auto"
        />
          </div>
        )}
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
