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
    <header className="nav-bar sticky top-0 z-50">
      <div className="relative mx-auto flex max-w-5xl items-center justify-end gap-4 px-6 py-4">
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "gradient-text text-sm font-semibold"
                  : "text-sm font-medium opacity-70 transition hover:opacity-100"
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
            className="glass-card absolute left-0 right-0 top-full mt-2 flex flex-col gap-3 p-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        ) : null}
      </div>
    </header>
  );
}
