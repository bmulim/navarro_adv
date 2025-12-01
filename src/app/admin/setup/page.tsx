"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { authApi } from "@/lib/api";

export default function AdminSetupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Verificar se já existe admin
    const checkSetup = async () => {
      try {
        const response = await authApi.checkSetup();
        if (response.data.hasAdmin) {
          // Já existe admin, redirecionar para login
          router.push("/admin/login");
        }
      } catch (error) {
        console.error("Erro ao verificar setup:", error);
      } finally {
        setChecking(false);
      }
    };

    checkSetup();
  }, [router]);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validações
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      // Registrar primeiro admin
      const response = await authApi.register({ name, email, password });

      // Salvar token e redirecionar
      localStorage.setItem("admin-token", response.data.access_token);
      router.push("/admin");
    } catch (error: any) {
      setError(
        error?.response?.message || "Erro ao criar usuário administrador"
      );
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-(--color-background) flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-(--color-border) border-t-(--color-primary-soft) mx-auto" />
          <p className="mt-4 text-sm text-(--color-muted)">
            Verificando sistema...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--color-background) flex items-center justify-center px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16" />
          </div>
          <h1 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
            Configuração Inicial
          </h1>
          <p className="mt-2 text-sm text-(--color-muted)">
            Crie o primeiro usuário administrador
          </p>
        </div>

        <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-lg transition-colors duration-300 md:rounded-3xl md:p-8">
          <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3">
            <p className="text-sm text-blue-800">
              <strong>Bem-vindo!</strong> Este é o primeiro acesso ao sistema.
              Crie sua conta de administrador para começar.
            </p>
          </div>

          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-(--color-foreground) mb-2"
              >
                Nome Completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                placeholder="Seu nome"
              />
            </div>

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
                placeholder="seu@email.com"
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
                minLength={6}
                className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-(--color-foreground) mb-2"
              >
                Confirmar Senha
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                placeholder="Digite a senha novamente"
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
              {loading ? "Criando conta..." : "Criar Conta de Administrador"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
