"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CustomLink from "@/components/CustomLink";
import Navbar from "@/components/Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow-sm">
      <div className="mx-auto flex w-[95%] max-w-480 items-center justify-between py-1">
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

        <Navbar />

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-2xl text-black md:hidden"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </div>

      {menuOpen && <Navbar mobile={true} />}
    </header>
  );
}
