"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authApi } from "@/lib/api";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Verificar se precisa de setup
    const checkSetup = async () => {
      try {
        const response = await authApi.checkSetup();
        if (response.data.needsSetup) {
          // Redirecionar para tela de setup
          router.push("/admin/setup");
        }
      } catch (error) {
        console.error("Erro ao verificar setup:", error);
      } finally {
        setChecking(false);
      }
    };

    checkSetup();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authApi.login({ email, password });

      // Salvar token no localStorage
      localStorage.setItem("admin-token", response.data.access_token);

      // Redirecionar para admin
      router.push("/admin");
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error?.response?.message || "Email ou senha incorretos");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-lg transition-colors duration-300 md:rounded-3xl md:p-8">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-(--color-border) border-t-(--color-primary-soft)" />
        </div>
      </div>
    );
  }

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
    </div>
  );
}
