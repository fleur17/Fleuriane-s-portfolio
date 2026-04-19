"use client";

import CustomLink from "@/components/CustomLink";

export default function Footer() {
  const linkClasses = "text-2xl text-white md:text-[29px]";

  return (
    <footer className="w-full bg-black px-6 py-16">
      <div className="mx-auto flex max-w-360 flex-col items-center">
        <div className="mb-16 flex flex-wrap justify-center gap-10">
          <CustomLink href="/projects" className={linkClasses}>
            Projects
          </CustomLink>
          <CustomLink href="/contact" className={linkClasses}>
            Contact
          </CustomLink>
          <CustomLink href="/about-me" className={linkClasses}>
            About
          </CustomLink>
        </div>

        <p className="mb-10 text-center font-serif text-xl text-white md:text-[29px]">
          Website Made By Fleuriane
        </p>

        <p className="text-center font-serif text-xl text-white md:self-end md:text-[29px]">
          @2025 All rights reserved
        </p>
      </div>
    </footer>
  );
}
