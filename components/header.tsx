"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 w-full bg-white z-20 shadow-sm">
      <div className="max-w-[1920px] mx-auto w-[95%] flex items-center justify-between py-1">

       {/* Logo + Name */}
<div className="flex items-center gap-8 mt-4">
  <Link href="/">
    <Image
      src="/Lofog_F.svg"
      alt="Logo"
      width={100}
      height={100}
      className="object-contain cursor-pointer"
    />
  </Link>

  <Link href="/" className="text-2xl font-serif text-black hover:opacity-70">
    Fleuriane Lam
  </Link>
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 text-lg font-serif text-black">
          <Link href="/projects" className="hover:opacity-70">Projects</Link>

 
                  <Link href="/contact" className="hover:opacity-70">Contact</Link>
          <Link href="/about_me" className="hover:opacity-70">About</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 text-black"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

     {/* Mobile Navigation */}
{menuOpen && (
  <nav className="flex flex-col gap-4 bg-white w-full py-4 px-6 md:hidden shadow-md font-serif text-black">
    <a
      href="/projects"
      className="text-black font-serif hover:opacity-80 transition-opacity"
    >
      Projects
    </a>
    <a
      href="/contact"
      className="text-black font-serif hover:opacity-80 transition-opacity"
    >
      Contact
    </a>
    <a
      href="/about_me"
      className="text-black font-serif hover:opacity-80 transition-opacity"
    >
      About
    </a>
  </nav>
)}

    </header>
  );
}
