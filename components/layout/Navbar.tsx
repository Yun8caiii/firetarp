'use client'

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import { ThemeChanger } from "@/components/Theme-changer";
import { Flame, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 z-50 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-2">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl flex items-center relative">
            <Flame className="inline-block w-9 h-9 mb-2 relative top-1 ml-4 sm:ml-0" />
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex-1 flex justify-center ml-24">
          <ul className="hidden sm:flex flex-wrap gap-4">
            {navLinks.map((link) => (
              <li
                key={link.title}
                className="transition-transform transform hover:scale-125"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 items-center mt-4 sm:mt-0">
          <ThemeChanger />
          <Link href="/contact">
            <Button className="mr-4 sm:ml-auto">Get Started</Button>
          </Link>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="sm:hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li
                key={link.title}
                className="transition-transform transform hover:scale-10"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
