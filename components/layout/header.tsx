// layout/Header.tsx
"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navigation/nav-link";
import { navItems } from "./navigation/nav-items";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C] py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          <span className="text-[#E84E36]">Q</span>Autex
          <span className="text-sm block -mt-1">INNOVATION</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="lg:hidden absolute top-14 left-0 w-full bg-[#1C1C1C] flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>
        )}

        <button className="bg-[#E84E36] text-white px-6 py-2 rounded hover:bg-[#d03d27] transition-colors hidden lg:inline-block">
          LET&apos;S TALK
        </button>
      </div>
    </header>
  );
};

export default Header;
