"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0f]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-8 md:px-10 lg:px-14">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold tracking-[0.18em] text-zinc-100"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          HAILEY
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition ${
                  isActive ? "text-rose-400" : "text-zinc-200 hover:text-rose-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="brand-button">
            Work With Me
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-100 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav" className="border-t border-white/10 bg-[#0b0b0f] px-4 py-4 sm:px-8 md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-rose-400/70 bg-rose-500/20 text-rose-300"
                      : "border-white/10 bg-white/5 text-zinc-100 hover:border-white/25"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={closeMenu} className="brand-button mt-1 w-full">
              Work With Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
