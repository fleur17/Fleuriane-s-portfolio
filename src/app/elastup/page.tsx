"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ElastupPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="w-full bg-white font-serif text-black">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-32 text-center md:py-40"
        style={{
          backgroundImage: "url('/images/projects/elastup/background.svg')",
        }}
      >
        <h1 className="font-serif text-6xl font-bold drop-shadow-lg">
          Elastup
        </h1>
        <p className="mt-4 font-serif text-xl font-light drop-shadow-lg">
          A multifunctional elastic band turned fashionable
        </p>
      </section>

      <div className="my-0 h-[2px] w-full bg-black"></div>

      {/* ================= PRODUCT DESCRIPTION ================= */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        {/* Description Column */}
        <div className="flex flex-col justify-start md:ml-15">
          <h2 className="mb-6 text-5xl font-bold">
            Description of the product
          </h2>
          <p className="mt-6 text-lg leading-relaxed md:mt-10">
            The Elastup is a versatile and stylish accessory designed to tackle
            everyday challenges. Combining a durable elastic band with croûte de
            veau leather, this innovative product features horizontal slots that
            securely hold pens, cutlery, and other small essentials.
          </p>
        </div>

        {/* Topics Column */}
        <div className="mt-10 flex flex-col justify-start md:mt-0 md:ml-50">
          <h2 className="mb-20 text-5xl font-bold">Topics</h2>
          <ul className="list-none space-y-4 text-lg">
            <li>
              <span className="inline-block w-1/2 border-b border-black pb-1">
                Business project
              </span>
            </li>
            <li>
              <span className="inline-block w-1/2 border-b border-black pb-1">
                Multifunctional elastic
              </span>
            </li>
            <li>
              <span className="inline-block w-1/2 pb-1">A fashion item</span>
            </li>
          </ul>
        </div>

        {/* Full-width Elastup Image */}
        <div className="mt-10 flex w-full justify-center md:col-span-2">
          <Image
            src="/images/projects/elastup/elastup-group-2.svg"
            alt="Elastup Showcase"
            width={2000}
            height={800}
            className="h-auto w-[2000px] max-w-full"
          />
        </div>
      </section>

      <div className="my-16 h-[2px] w-full bg-black"></div>

      {/* ================= DESIGN PROCESS ================= */}
      <section className="mx-auto max-w-5xl space-y-10 px-6 py-10">
        <h2 className="mb-6 text-5xl font-bold">Design Process</h2>

        <p className="text-lg leading-relaxed">
          After several long brainstorming sessions without success, our idea
          finally came when a team member arrived with a tupperware held
          together by an elastic band — a simple workaround that inspired the
          project.
        </p>

        <p className="text-lg leading-relaxed">
          We came up with the idea of a stylish cutlery holder for tupperware,
          using a wider elastic band for better stability and a leather finish
          for elegance. Soon, the concept expanded to notebooks, iPads, and more
          — that is how Elastup was born.
        </p>

        <div className="mt-10 flex w-full justify-center">
          <Image
            src="/images/projects/elastup/design-process.svg"
            alt="Prototype 1"
            width={2000}
            height={800}
            className="h-auto w-[2000px] max-w-full"
          />
        </div>

        <div className="mt-10 flex w-full justify-center">
          <Image
            src="/images/projects/elastup/prototypes.svg"
            alt="Prototype 2"
            width={2000}
            height={800}
            className="h-auto w-[2000px] max-w-full"
          />
        </div>
      </section>

      <div className="my-16 h-[2px] w-full bg-black"></div>

      {/* ================= POSTERS ================= */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="mb-6 text-5xl font-bold">Posters of our campaign</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
          <Image
            src="/images/projects/elastup/blue-elastup.svg"
            width={400}
            height={600}
            alt="Poster 1"
            className="h-auto w-[400px] max-w-full rounded-lg"
          />
          <Image
            src="/images/projects/elastup/grey-elastup.svg"
            width={400}
            height={600}
            alt="Poster 2"
            className="h-auto w-[400px] max-w-full rounded-lg"
          />
          <Image
            src="/images/projects/elastup/green-elastup.svg"
            width={400}
            height={600}
            alt="Poster 3"
            className="h-auto w-[400px] max-w-full rounded-lg"
          />
        </div>
      </section>

      <div className="my-16 h-[2px] w-full bg-black"></div>

      {/* ================= VIDEO ================= */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-10 text-5xl font-bold">Campaign Video</h2>

        {isPlaying ? (
          <video
            src="/videos/projects/elastup/elastup.mp4"
            controls
            autoPlay
            className="mx-auto h-auto w-[800px] max-w-full rounded-lg"
          />
        ) : (
          <div
            className="inline-block cursor-pointer rounded-lg px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src="/images/projects/elastup/play-video.svg"
              alt="Video Preview"
              width={800}
              height={450}
              className="h-auto w-[800px] max-w-full"
            />
          </div>
        )}
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
