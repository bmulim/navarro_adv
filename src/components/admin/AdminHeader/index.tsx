"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";

export function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    router.push("/admin/login");
  };

  return (
    <header className="border-b border-(--color-border) bg-(--color-header-bg) transition-colors duration-300">
      <Container className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-xl font-semibold text-(--color-primary-strong) md:text-2xl">
            Painel Administrativo
          </h1>
          <p className="text-xs text-(--color-muted) md:text-sm">
            Gestão do Blog - Navarro Advocacia
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-(--color-muted) transition hover:text-(--color-primary-soft)"
          >
            Ver site
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-red-700 md:px-6 md:text-sm"
          >
            Sair
          </button>
        </div>
      </Container>
    </header>
  );
}
