import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-(--color-footer-bg) text-(--color-footer-text) transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 transition-colors duration-300 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-lg font-semibold">Navarro Advocacia</p>
          <p className="text-sm text-(--color-muted)">
            Soluções jurídicas sob medida para pessoas e empresas.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:text-right">
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
      <div className="border-t border-(--color-border) py-4 text-center text-xs text-(--color-muted)">
        © {new Date().getFullYear()} Navarro Advocacia. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
