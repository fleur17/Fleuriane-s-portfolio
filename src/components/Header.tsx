"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CustomLink from "@/components/CustomLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow-sm">
      <div className="mx-auto flex w-[95%] max-w-480 items-center justify-between py-1">
        {/* Logo + Name */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/images/common/logo-f.svg"
              alt="Logo"
              width={100}
              height={100}
              style={{ width: 100, height: 122 }}
              className="cursor-pointer object-contain"
            />
          </Link>

          <CustomLink href="/" className="font-serif text-2xl text-black">
            Fleuriane Lam
          </CustomLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav hidden gap-12 text-lg text-black md:flex">
          <CustomLink href="/projects">Projects</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>
          <CustomLink href="/about-me">About</CustomLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-2xl text-black md:hidden"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex w-full flex-col gap-4 bg-white px-6 py-4 text-black shadow-md md:hidden">
          <CustomLink href="/projects">Projects</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>
          <CustomLink href="/about-me">About</CustomLink>
        </nav>
      )}
    </header>
  );
}
