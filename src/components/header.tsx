"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow-sm">
      <div className="mx-auto flex w-[95%] max-w-[1920px] items-center justify-between py-1">
        {/* Logo + Name */}
        <div className="mt-4 flex items-center gap-8">
          <Link href="/">
            <Image
              src="/images/common/logo-f.svg"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer object-contain"
            />
          </Link>

          <Link
            href="/"
            className="font-serif text-2xl text-black hover:opacity-70"
          >
            Fleuriane Lam
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-12 font-serif text-lg text-black md:flex">
          <Link href="/projects" className="hover:opacity-70">
            Projects
          </Link>

          <Link href="/contact" className="hover:opacity-70">
            Contact
          </Link>
          <Link href="/about-me" className="hover:opacity-70">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-2xl text-black md:hidden"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex w-full flex-col gap-4 bg-white px-6 py-4 font-serif text-black shadow-md md:hidden">
          <a
            href="/projects"
            className="font-serif text-black transition-opacity hover:opacity-80"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="font-serif text-black transition-opacity hover:opacity-80"
          >
            Contact
          </a>
          <a
            href="/about-me"
            className="font-serif text-black transition-opacity hover:opacity-80"
          >
            About
          </a>
        </nav>
      )}
    </header>
  );
}
