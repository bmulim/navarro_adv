"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-header-bg) backdrop-blur transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-4 transition-colors duration-300 md:gap-4 md:px-6 md:py-5 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-(--color-header-text) transition-colors duration-300 md:gap-3"
        >
          <Logo className="h-10 w-10 md:h-14 md:w-14" priority />
          <div className="text-sm font-semibold tracking-wide md:text-base lg:text-lg">
            Navarro Advocacia
          </div>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-(--color-header-text) transition-colors duration-300 lg:gap-10">
              <li>
                <Link
                  className="transition hover:text-(--color-muted)"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-(--color-muted)"
                  href="/areadeatuacao"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-(--color-muted)"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-(--color-muted)"
                  href="/#contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-2 text-(--color-header-text) transition hover:text-(--color-muted)"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <ThemeToggle className="shrink-0" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full border-t border-(--color-border) bg-(--color-header-bg) shadow-lg backdrop-blur transition-all duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 py-4">
          <ul className="space-y-4 text-sm font-medium uppercase tracking-wide text-(--color-header-text)">
            <li>
              <Link
                className="block py-2 transition hover:text-(--color-muted)"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 transition hover:text-(--color-muted)"
                href="/areadeatuacao"
                onClick={() => setIsMenuOpen(false)}
              >
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 transition hover:text-(--color-muted)"
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 transition hover:text-(--color-muted)"
                href="/#contato"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
