"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactCard } from "@/components/ContactCard";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio (apenas frontend)
    setTimeout(() => {
      console.log("Formulário enviado:", formData);
      setSuccess(true);
      setLoading(false);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-(--color-background) transition-colors duration-300">
      <PageHeader
        eyebrow="Contato"
        title="Entre em contato conosco"
        description="Estamos prontos para ouvir suas necessidades jurídicas e oferecer a melhor solução personalizada para você ou sua empresa."
      />

      <Container className="py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
                Fale Conosco
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-(--color-foreground-muted) md:text-base">
                Nossa equipe está disponível para atendê-lo através dos canais
                abaixo. Retornaremos o mais breve possível.
              </p>
            </div>

            <div className="space-y-4">
              <ContactCard
                label="Telefone"
                value="(11) 98888-0000"
                href="tel:+5511988880000"
              />
              <ContactCard
                label="E-mail"
                value="contato@navarroadv.com"
                href="mailto:contato@navarroadv.com"
              />
              <ContactCard
                label="Endereço"
                value="Av. Paulista, 1000 • São Paulo/SP"
              />
            </div>

            <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 transition-colors duration-300 md:rounded-3xl">
              <h3 className="text-lg font-semibold text-(--color-primary-soft) md:text-xl">
                Horário de Atendimento
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-(--color-foreground-muted)">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium text-(--color-foreground)">
                    9h às 18h
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium text-(--color-foreground)">
                    9h às 13h
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-(--color-muted)">
                    Fechado
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-lg transition-colors duration-300 md:rounded-3xl md:p-8">
            <h3 className="text-xl font-semibold text-(--color-primary-strong) md:text-2xl">
              Envie sua Mensagem
            </h3>
            <p className="mt-2 text-sm text-(--color-muted)">
              Preencha o formulário abaixo e entraremos em contato.
            </p>

            {success && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-(--color-foreground) mb-2"
                >
                  Nome completo *
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-(--color-foreground) mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-(--color-foreground) mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                    placeholder="(11) 98888-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-(--color-foreground) mb-2"
                >
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="direito-empresarial">
                    Direito Empresarial
                  </option>
                  <option value="direito-civil">Direito Civil</option>
                  <option value="direito-trabalho">Direito do Trabalho</option>
                  <option value="consultoria">Consultoria Jurídica</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-(--color-foreground) mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20 resize-none"
                  placeholder="Descreva sua necessidade jurídica..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover) disabled:opacity-50 disabled:cursor-not-allowed md:text-base"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>

              <p className="text-xs text-(--color-muted) text-center">
                * Campos obrigatórios
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
