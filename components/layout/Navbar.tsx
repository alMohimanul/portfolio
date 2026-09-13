"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-card sticky top-4 z-50 mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-6 py-3">
      <Link href="/" className="gradient-text text-lg font-bold">
        Al Mohimanul
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "gradient-text text-sm font-semibold"
                : "text-sm font-medium opacity-80 transition hover:opacity-100"
            }
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      <button
        type="button"
        className="md:hidden"
        aria-label="Toggle navigation menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {isMenuOpen ? (
        <nav
          data-testid="mobile-menu"
          className="glass-card absolute left-0 right-0 top-full mt-2 flex flex-col gap-3 rounded-2xl p-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      ) : null}
    </header>
  );
}
