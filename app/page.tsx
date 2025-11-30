"use client";

import React from "react";
import Header from "../components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
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
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] h-[120%] bg-[#F4EDE4] -z-10
          md:w-1/2 md:left-1/4 md:-translate-x-1/2"
        />

        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] mx-auto mt-10 px-6 gap-12">
          {/* Image */}
          <div className="rounded-lg w-full md:w-1/2 flex justify-center transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/Home_page.svg"
              alt="Fleuriane"
              width={510}
              height={718}
              className="rounded-lg w-full h-auto max-w-[380px] md:max-w-none"
            />
          </div>

          {/* Text */}
          <div
            className="opacity-0 translate-y-0 transition-all duration-700 ease-out animate-fadeInUp 
            w-full md:w-1/2 text-black font-serif space-y-4 text-center md:text-left
            mb-10 md:ml-40"
          >
            <p className="text-2xl md:text-3xl leading-snug">Hi there</p>
            <p className="text-2xl md:text-3xl leading-snug">
              I am <span className="text-[#69363d]">Fleuriane Lam</span>, a
            </p>
            <p className="text-2xl md:text-3xl leading-snug italic font-light">
              Creative Technologist.
            </p>
            <p className="text-2xl md:text-3xl leading-snug">
              Welcome to my world, where design meets{" "}
              <span className="font-bold text-[#69363d]">emotion</span>, and{" "}
              <span className="font-bold text-[#69363d]">technology</span>{" "}
              becomes{" "}
              <span className="font-bold italic text-[#69363d]">poetry</span>.
            </p>

            <Link
              href="/about_me"
              className="px-0 py-3 underline text-black font-bold hover:opacity-80 cursor-pointer transition-opacity inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Séparation */}
      <div className="w-full h-[20px] bg-black my-20"></div>

      {/* ========================= SECTION NEUROPORTAL ========================= */}
      <section className="relative max-w-[1400px] mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-16">
        <p className="font-serif tracking-[4px] text-black text-[16px] uppercase 
  lg:absolute lg:-left-10 lg:top-4 lg:-rotate-90">
  ART PROJECT
</p>


        {/* Contenu texte */}
        <div className="flex-1 space-y-6 lg:ml-[100px] mt-10">
          <h2 className="font-serif font-bold text-[40px] text-black">The NeuroPortals</h2>

          <p className="text-[24px] leading-tight font-serif max-w-[350px] text-black">
            What if you can be the master of your brain through art ?
          </p>

          <Link
            href="/neuroportal"
            className="px-6 py-3 bg-black text-white font-bold hover:opacity-80 cursor-pointer transition-opacity inline-block"
          >
            Read More
          </Link>

          <Image src="/touchdesigner.svg" width={150} height={50} alt="Touchdesigner" className="mt-4" />
        </div>

        {/* Image */}
        <div className="flex-1 w-full flex justify-center group">
          <div className="bg-[#f4ede4] shadow-md rounded-lg overflow-hidden w-full max-w-[650px]">
            <Image
              src="/Neuro.svg"
              alt="Neuro background"
              width={800}
              height={800}
              className="w-full h-auto object-cover group-hover:hidden"
            />
            <Image
              src="/hover_neuro_home.svg"
              alt="Neuro background hover"
              width={800}
              height={800}
              className="w-full h-auto object-cover hidden group-hover:block"
            />
          </div>
        </div>
      </section>

      {/* Ligne séparation */}
      <div className="w-full h-[2px] bg-black my-20"></div>

      {/* ========================= SECTION ELASTUP ========================= */}
      <section className="relative max-w-[1400px] mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-16">
        <p className="font-serif tracking-[4px] text-black text-[16px] uppercase 
  lg:absolute lg:right-0 lg:top-0 lg:rotate-[-90deg] lg:origin-top-right">
  BUSINESS PROJECT
</p>


        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="shadow-md rounded-lg overflow-hidden w-full max-w-[600px]">
            <Image
              src="/elastup_group.svg"
              alt="Elastup"
              width={700}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="flex-1 space-y-6 lg:ml-[95px] mt-10 lg:mt-0">
          <h2 className="font-serif font-bold text-[40px] text-black">The Elastup</h2>

          <p className="text-[24px] leading-tight font-serif max-w-[350px] text-black">
            For your notebook, Tupperware and more ...
          </p>

          <Link
            href="/elastup"
            className="px-6 py-3 bg-black text-white font-bold hover:opacity-80 cursor-pointer transition-opacity inline-block"
          >
            Read More
          </Link>

          <Image src="/kickstarter_logo.svg" width={200} height={100} alt="Kickstarter" className="lg:ml-[-12px]" />
        </div>
      </section>

      {/* Ligne séparation */}
      <div className="w-full h-[2px] bg-black my-20"></div>

      {/* ========================= SECTION NEWFACES ========================= */}
      <section className="relative max-w-[1400px] mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-16">
      <p className="font-serif tracking-[4px] text-black text-[16px] uppercase 
  lg:absolute lg:-left-10 lg:top-4 lg:-rotate-90">
  UX/UI PROJECT
</p>




        <div className="flex-1 space-y-6 lg:ml-[100px] mt-10">
          <h2 className="font-serif font-bold text-[40px] text-black">NewFaces</h2>

          <p className="text-[24px] leading-tight font-serif max-w-[350px] text-black">
            The App that will teach you all about fashion!
          </p>

          <Link
            href="/newfaces"
            className="px-6 py-3 bg-black text-white font-bold hover:opacity-80 cursor-pointer transition-opacity inline-block"
          >
            Read More
          </Link>

          <Image src="/figma_logo.svg" width={150} height={50} alt="Touchdesigner" className="mt-4" />
        </div>

        <div className="flex-1 w-full flex justify-center">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[650px]">
            <Image
              src="/newfaces.png"
              alt="New Faces background"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ligne séparation */}
      <div className="w-full h-[2px] bg-black my-20"></div>

      {/* ========================= SECTION IA FASHION ========================= */}
      <section className="relative max-w-[1400px] mx-auto px-6 py-10 flex flex-col lg:flex-row items-center gap-16">
        <p className="font-serif tracking-[4px] text-black text-[16px] uppercase 
  lg:absolute lg:right-0 lg:top-0 lg:-rotate-90 lg:origin-top-right">
  UX/UI PROJECT
</p>



        <div className="flex-1 flex justify-center">
          <div className="shadow-md rounded-lg overflow-hidden w-full max-w-[650px]">
            <Image
              src="/IA-fashion.svg"
              alt="IA_fashion"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6 lg:ml-[95px] mt-20 lg:mt-0">
          <h2 className="font-serif font-bold text-[40px] text-black">IA Fashion</h2>

          <p className="text-[24px] leading-tight font-serif max-w-[350px] text-black">
            Designing an AI-powered fashion ecosystem
          </p>

          <Link
            href="/IA_Fashion"
            className="px-6 py-3 bg-black text-white font-bold hover:opacity-80 cursor-pointer transition-opacity inline-block"
          >
            Read More
          </Link>

          <Image src="/figma_logo.svg" width={100} height={100} alt="Kickstarter" className="lg:ml-[-12px]" />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
