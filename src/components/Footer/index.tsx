import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-(--color-footer-bg) text-(--color-footer-text) transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 transition-colors duration-300 md:flex-row md:items-center md:justify-between md:px-6 md:py-10 lg:px-10">
        <div>
          <p className="text-base font-semibold md:text-lg">
            Navarro Advocacia
          </p>
          <p className="text-xs text-(--color-muted) md:text-sm">
            Soluções jurídicas sob medida para pessoas e empresas.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-xs md:text-right md:text-sm">
          <Link
            className="transition hover:text-(--color-primary-soft)"
            href="/"
          >
            Home
          </Link>
          <Link
            className="transition hover:text-(--color-primary-soft)"
            href="/areadeatuacao"
          >
            Áreas de Atuação
          </Link>
          <Link
            className="transition hover:text-(--color-primary-soft)"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
      <div className="border-t border-(--color-border) py-3 text-center text-[10px] text-(--color-muted) md:py-4 md:text-xs">
        © {new Date().getFullYear()} Navarro Advocacia. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
