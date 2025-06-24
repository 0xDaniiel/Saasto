"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Demo", href: "/" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFF8F2] border-b  ">
      <div className="px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/t-icon.svg"
            alt="Saasto Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <h1 className="text-xl font-bold">Saasto</h1>
        </div>

        {/* Nav Links (centered on large screens) */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#FF553E]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons (right) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="px-3 py-1 border rounded hover:bg-gray-100">
            Login
          </Link>
          <Link
            href="#"
            className="px-5 py-2 bg-[#FF553E] text-white rounded-full hover:bg-orange-800"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#FFF8F2 shadow-md flex flex-col items-center text-center gap-4 p-4 z-[999]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#FF553E]"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4">
            <Link
              href="/login"
              className="border-[#FF553E] px-3 py-1 border rounded"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 bg-[#FF553E] text-white rounded-full hover:bg-orange-800"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
