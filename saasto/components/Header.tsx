"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 border-b relative">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={"/images/saasto-logo.svg"}
            alt="Saasto Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <h1 className="text-xl font-bold">Saasto</h1>
        </div>

        {/* Nav Links (centered absolutely) */}
        <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-purple-800"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons (right) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-3 py-1 bg-[#8976FD] text-white rounded hover:bg-purple-800"
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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center text-center gap-4 p-4 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:bg-purple-800"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4">
            <Link
              href="/login"
              className="border-[#8976FD] px-3 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#8976FD] text-white px-3 py-1 rounded"
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
