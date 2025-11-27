"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulação de login (apenas frontend)
    setTimeout(() => {
      if (email === "admin@navarroadv.com" && password === "admin123") {
        // Salvar token simulado no localStorage
        localStorage.setItem("admin-token", "fake-jwt-token");
        router.push("/admin");
      } else {
        setError("Email ou senha incorretos");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-lg transition-colors duration-300 md:rounded-3xl md:p-8">
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-(--color-foreground) mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
            placeholder="admin@navarroadv.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-(--color-foreground) mb-2"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover) disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="text-xs text-(--color-muted) transition hover:text-(--color-primary-soft)"
        >
          ← Voltar ao site
        </Link>
      </div>

      <div className="mt-6 rounded-lg border border-(--color-border) bg-(--color-background) p-4">
        <p className="text-xs text-(--color-muted) mb-2">
          <strong>Demo:</strong> Use as credenciais abaixo para testar:
        </p>
        <p className="text-xs text-(--color-foreground-muted)">
          Email:{" "}
          <code className="bg-(--color-surface-alt) px-1 py-0.5 rounded">
            admin@navarroadv.com
          </code>
        </p>
        <p className="text-xs text-(--color-foreground-muted)">
          Senha:{" "}
          <code className="bg-(--color-surface-alt) px-1 py-0.5 rounded">
            admin123
          </code>
        </p>
      </div>
    </div>
  );
}
