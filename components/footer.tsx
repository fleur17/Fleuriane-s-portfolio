"use client";

import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* NAVIGATION */}
<div className="flex flex-wrap justify-center gap-10 mb-16">
  <Link
    href="/about_me"
    className="font-serif text-2xl md:text-[29px] text-white cursor-pointer hover:opacity-70 transition-opacity"
  >
    About
  </Link>

  <Link
    href="/projects"
    className="font-serif text-2xl md:text-[29px] text-white cursor-pointer hover:opacity-70 transition-opacity"
  >
    Projects
  </Link>

  <Link
    href="/contact"
    className="font-serif text-2xl md:text-[29px] text-white cursor-pointer hover:opacity-70 transition-opacity"
  >
    Contact
  </Link>
</div>


        {/* CENTER TEXT */}
        <p className="font-serif text-xl md:text-[29px] text-white text-center mb-10">
          Website Made By Fleuriane
        </p>

        {/* BOTTOM RIGHT ON DESKTOP – CENTER ON MOBILE */}
        <p className="font-serif text-xl md:text-[29px] text-white text-center md:self-end">
          @2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
