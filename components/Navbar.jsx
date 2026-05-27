"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleJoinClick = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-sm md:h-14 md:w-14">
            <Image
              src="/SheCan.png"
              alt="She Can Foundation logo"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 56px, 48px"
              priority
            />
          </span>
          <span className="text-base font-semibold tracking-tight text-stone-900 md:text-lg">
            She Can Foundation
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
          <Button
            type="button"
            onClick={handleJoinClick}
            className="rounded-full bg-gradient-to-r from-[#e26d5a] to-[#ffb86b] text-white shadow-lg shadow-orange-200/70 hover:from-[#c65341] hover:to-[#f4a353]"
          >
            Join Us
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/80 p-2 text-stone-700 shadow-sm transition hover:bg-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-stone-100 bg-white/95 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              type="button"
              onClick={handleJoinClick}
              className="w-full rounded-full bg-gradient-to-r from-[#e26d5a] to-[#ffb86b] text-white shadow-lg shadow-orange-200/70 hover:from-[#c65341] hover:to-[#f4a353]"
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
