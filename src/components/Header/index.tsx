import Link from "next/link";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-header-bg) backdrop-blur transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-(--color-header-text) transition-colors duration-300"
        >
          <Logo className="h-14 w-14" priority />
          <div className="text-base font-semibold tracking-wide md:text-lg">
            Navarro Advocacia
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-(--color-header-text) transition-colors duration-300 md:gap-10">
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
          <ThemeToggle className="shrink-0" />
        </div>
      </div>
    </header>
  );
}
