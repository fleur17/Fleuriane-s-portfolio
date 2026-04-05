"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer";

import Header from "../components/header";
//import { useRouter } from "next/navigation";

export default function HomePage() {
  //const router = useRouter();

  //function onNavigate(path: string) {
  // router.push("/" + path.toLowerCase());
  //}

  return (
    <main className="w-full">
      {/* HEADER */}
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="relative w-full">
        <div className="absolute -top-10 left-1/2 -z-10 h-[120%] w-[80%] -translate-x-1/2 bg-[#F4EDE4] md:left-1/4 md:w-1/2 md:-translate-x-1/2" />

        <div className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center justify-center gap-12 px-6 md:flex-row">
          {/* Image */}
          <div className="flex w-full justify-center rounded-lg transition-transform duration-500 hover:scale-[1.02] md:w-1/2">
            <Image
              src="/images/about/home-page.svg"
              alt="Fleuriane"
              width={510}
              height={718}
              className="h-auto w-full max-w-[380px] rounded-lg md:max-w-none"
            />
          </div>

          {/* Text */}
          <div className="animate-fadeInUp mb-10 w-full translate-y-0 space-y-4 text-center font-serif text-black opacity-0 transition-all duration-700 ease-out md:ml-40 md:w-1/2 md:text-left">
            <p className="text-2xl leading-snug md:text-3xl">Hi there</p>
            <p className="text-2xl leading-snug md:text-3xl">
              I am <span className="text-[#69363d]">Fleuriane Lam</span>, a
            </p>
            <p className="text-2xl leading-snug font-light italic md:text-3xl">
              Creative Technologist.
            </p>
            <p className="text-2xl leading-snug md:text-3xl">
              Welcome to my world, where design meets{" "}
              <span className="font-bold text-[#69363d]">emotion</span>, and{" "}
              <span className="font-bold text-[#69363d]">technology</span>{" "}
              becomes{" "}
              <span className="font-bold text-[#69363d] italic">poetry</span>.
            </p>

            <Link
              href="/about_me"
              className="inline-block cursor-pointer px-0 py-3 font-bold text-black underline transition-opacity hover:opacity-80"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Séparation */}
      <div className="my-20 h-[20px] w-full bg-black"></div>

      {/* ========================= SECTION NEUROPORTAL ========================= */}
      <section className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6 py-10 lg:flex-row">
        <p className="font-serif text-[16px] tracking-[4px] text-black uppercase lg:absolute lg:top-4 lg:-left-10 lg:-rotate-90">
          ART PROJECT
        </p>

        {/* Contenu texte */}
        <div className="mt-10 flex-1 space-y-6 lg:ml-[100px]">
          <h2 className="font-serif text-[40px] font-bold text-black">
            The NeuroPortals
          </h2>

          <p className="max-w-[350px] font-serif text-[24px] leading-tight text-black">
            What if you can be the master of your brain through art ?
          </p>

          <Link
            href="/neuroportal"
            className="inline-block cursor-pointer bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
          >
            Read More
          </Link>

          <Image
            src="/images/common/touchdesigner.svg"
            width={150}
            height={50}
            alt="Touchdesigner"
            className="mt-4"
          />
        </div>

        {/* Image */}
        <div className="group flex w-full flex-1 justify-center">
          <div className="w-full max-w-[650px] overflow-hidden rounded-lg bg-[#f4ede4] shadow-md">
            <Image
              src="/images/projects/neuroportal/neuro.svg"
              alt="Neuro background"
              width={800}
              height={800}
              className="h-auto w-full object-cover group-hover:hidden"
            />
            <Image
              src="/images/projects/neuroportal/hover-neuro-home.svg"
              alt="Neuro background hover"
              width={800}
              height={800}
              className="hidden h-auto w-full object-cover group-hover:block"
            />
          </div>
        </div>
      </section>

      {/* Ligne séparation */}
      <div className="my-20 h-[2px] w-full bg-black"></div>

      {/* ========================= SECTION ELASTUP ========================= */}
      <section className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6 py-10 lg:flex-row">
        <p className="font-serif text-[16px] tracking-[4px] text-black uppercase lg:absolute lg:top-0 lg:right-0 lg:origin-top-right lg:rotate-[-90deg]">
          BUSINESS PROJECT
        </p>

        {/* Image */}
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-[600px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/projects/elastup/elastup-group.svg"
              alt="Elastup"
              width={700}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="mt-10 flex-1 space-y-6 lg:mt-0 lg:ml-[95px]">
          <h2 className="font-serif text-[40px] font-bold text-black">
            The Elastup
          </h2>

          <p className="max-w-[350px] font-serif text-[24px] leading-tight text-black">
            For your notebook, Tupperware and more ...
          </p>

          <Link
            href="/elastup"
            className="inline-block cursor-pointer bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
          >
            Read More
          </Link>

          <Image
            src="/images/common/kickstarter-logo.svg"
            width={200}
            height={100}
            alt="Kickstarter"
            className="lg:ml-[-12px]"
          />
        </div>
      </section>

      {/* Ligne séparation */}
      <div className="my-20 h-[2px] w-full bg-black"></div>

      {/* ========================= SECTION NEWFACES ========================= */}
      <section className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6 py-10 lg:flex-row">
        <p className="font-serif text-[16px] tracking-[4px] text-black uppercase lg:absolute lg:top-4 lg:-left-10 lg:-rotate-90">
          UX/UI PROJECT
        </p>

        <div className="mt-10 flex-1 space-y-6 lg:ml-[100px]">
          <h2 className="font-serif text-[40px] font-bold text-black">
            NewFaces
          </h2>

          <p className="max-w-[350px] font-serif text-[24px] leading-tight text-black">
            The App that will teach you all about fashion!
          </p>

          <Link
            href="/newfaces"
            className="inline-block cursor-pointer bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
          >
            Read More
          </Link>

          <Image
            src="/images/common/figma-logo.svg"
            width={150}
            height={50}
            alt="Touchdesigner"
            className="mt-4"
          />
        </div>

        <div className="flex w-full flex-1 justify-center">
          <div className="w-full max-w-[650px] overflow-hidden rounded-lg bg-white shadow-md">
            <Image
              src="/images/projects/newfaces/newfaces.png"
              alt="New Faces background"
              width={800}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ligne séparation */}
      <div className="my-20 h-[2px] w-full bg-black"></div>

      {/* ========================= SECTION IA FASHION ========================= */}
      <section className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6 py-10 lg:flex-row">
        <p className="font-serif text-[16px] tracking-[4px] text-black uppercase lg:absolute lg:top-0 lg:right-0 lg:origin-top-right lg:-rotate-90">
          UX/UI PROJECT
        </p>

        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-[650px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/projects/ai-fashion/ai-fashion.svg"
              alt="IA_fashion"
              width={800}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 flex-1 space-y-6 lg:mt-0 lg:ml-[95px]">
          <h2 className="font-serif text-[40px] font-bold text-black">
            IA Fashion
          </h2>

          <p className="max-w-[350px] font-serif text-[24px] leading-tight text-black">
            Designing an AI-powered fashion ecosystem
          </p>

          <Link
            href="/IA_Fashion"
            className="inline-block cursor-pointer bg-black px-6 py-3 font-bold text-white transition-opacity hover:opacity-80"
          >
            Read More
          </Link>

          <Image
            src="/images/common/figma-logo.svg"
            width={100}
            height={100}
            alt="Kickstarter"
            className="lg:ml-[-12px]"
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
