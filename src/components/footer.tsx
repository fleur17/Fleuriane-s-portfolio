"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-16">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        {/* NAVIGATION */}
        <div className="mb-16 flex flex-wrap justify-center gap-10">
          <Link
            href="/about-me"
            className="cursor-pointer font-serif text-2xl text-white transition-opacity hover:opacity-70 md:text-[29px]"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="cursor-pointer font-serif text-2xl text-white transition-opacity hover:opacity-70 md:text-[29px]"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="cursor-pointer font-serif text-2xl text-white transition-opacity hover:opacity-70 md:text-[29px]"
          >
            Contact
          </Link>
        </div>

        {/* CENTER TEXT */}
        <p className="mb-10 text-center font-serif text-xl text-white md:text-[29px]">
          Website Made By Fleuriane
        </p>

        {/* BOTTOM RIGHT ON DESKTOP – CENTER ON MOBILE */}
        <p className="text-center font-serif text-xl text-white md:self-end md:text-[29px]">
          @2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
