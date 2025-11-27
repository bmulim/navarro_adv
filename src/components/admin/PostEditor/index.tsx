"use client";

import { useState } from "react";
import Image from "next/image";

type Post = {
  id: string;
  title: string;
  category: string;
  date: string;
  status: "published" | "draft";
  excerpt: string;
  content: string;
  imageUrl?: string;
};

type PostEditorProps = {
  post?: Post;
  onSave: (post: Post) => void;
  onCancel: () => void;
};

export function PostEditor({ post, onSave, onCancel }: PostEditorProps) {
  const [formData, setFormData] = useState<Post>(
    post || {
      id: "",
      title: "",
      category: "",
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "draft",
      excerpt: "",
      content: "",
      imageUrl: "",
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Gerar ID se for novo post
    const postToSave = {
      ...formData,
      id: formData.id || Date.now().toString(),
    };

    onSave(postToSave);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="w-full max-w-4xl rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-2xl transition-colors duration-300 md:p-8 my-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
            {post ? "Editar Artigo" : "Novo Artigo"}
          </h2>
          <button
            onClick={onCancel}
            className="text-2xl text-(--color-muted) transition hover:text-(--color-foreground)"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-(--color-foreground) mb-2"
              >
                Título *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                placeholder="Título do artigo"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-(--color-foreground) mb-2"
              >
                Categoria *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
              >
                <option value="">Selecione uma categoria</option>
                <option value="Direito Empresarial">Direito Empresarial</option>
                <option value="Direito Civil">Direito Civil</option>
                <option value="Direito do Trabalho">Direito do Trabalho</option>
                <option value="Direito Tributário">Direito Tributário</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-(--color-foreground) mb-2"
            >
              URL da Imagem (opcional)
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={formData.imageUrl || ""}
              onChange={handleChange}
              className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
              placeholder="https://exemplo.com/imagem.jpg"
            />
            {formData.imageUrl && (
              <div className="mt-3">
                <p className="text-xs text-(--color-muted) mb-2">Preview:</p>
                <div className="relative h-32 w-full rounded-lg overflow-hidden">
                  <Image
                    src={formData.imageUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="excerpt"
              className="block text-sm font-medium text-(--color-foreground) mb-2"
            >
              Resumo *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20 resize-none"
              placeholder="Breve descrição do artigo"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-(--color-foreground) mb-2"
            >
              Conteúdo *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={12}
              className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20 resize-none font-mono"
              placeholder="Conteúdo completo do artigo..."
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-(--color-foreground) mb-2"
            >
              Status *
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
            >
              <option value="draft">Rascunho</option>
              <option value="published">Publicado</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)"
            >
              {post ? "Salvar Alterações" : "Publicar Artigo"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 rounded-full border border-(--color-border) bg-(--color-background) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-foreground) transition hover:bg-(--color-surface-alt)"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
