"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/Container";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { PostCard } from "@/components/admin/PostCard";
import { PostEditor } from "@/components/admin/PostEditor";

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

type Schedule = {
  day: string;
  hours: string;
  isOpen: boolean;
};

type PracticeArea = {
  id: string;
  title: string;
  description: string;
};

type Tab = "blog" | "schedule" | "areas";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("blog");
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Planejamento jurídico empresarial: por que começar agora",
      category: "Direito Empresarial",
      date: "15 nov 2025",
      status: "published",
      excerpt:
        "Entenda como um plano jurídico preventivo reduz litígios e garante decisões estratégicas para o negócio.",
      content:
        "O planejamento jurídico empresarial é essencial para o sucesso...",
      imageUrl: "",
    },
    {
      id: "2",
      title: "Negociação trabalhista eficiente em cenários de crise",
      category: "Direito do Trabalho",
      date: "02 nov 2025",
      status: "published",
      excerpt:
        "Boas práticas para conduzir negociações coletivas e individuais com foco em preservação financeira.",
      content:
        "Em momentos de crise econômica, as negociações trabalhistas tornam-se ainda mais sensíveis...",
      imageUrl: "",
    },
    {
      id: "3",
      title: "Como estruturar contratos digitais seguros",
      category: "Direito Civil",
      date: "20 out 2025",
      status: "published",
      excerpt:
        "Saiba quais cláusulas não podem faltar em contratos digitais para proteger dados e garantir validade jurídica.",
      content:
        "Com a digitalização dos negócios, contratos eletrônicos tornaram-se cada vez mais comuns...",
      imageUrl: "",
    },
  ]);

  const [schedules, setSchedules] = useState<Schedule[]>([
    { day: "Segunda a Sexta", hours: "9h às 18h", isOpen: true },
    { day: "Sábado", hours: "9h às 13h", isOpen: true },
    { day: "Domingo", hours: "Fechado", isOpen: false },
  ]);

  const [practiceAreas, setPracticeAreas] = useState<PracticeArea[]>([
    {
      id: "1",
      title: "Direito Empresarial",
      description:
        "Assessoria completa para empresas que buscam segurança jurídica em contratos, governança e resolução de conflitos.",
    },
    {
      id: "2",
      title: "Direito Civil",
      description:
        "Atuação estratégica em demandas cíveis, com foco na proteção de patrimônio e em acordos eficientes.",
    },
    {
      id: "3",
      title: "Direito do Trabalho",
      description:
        "Consultoria e contencioso trabalhista preventivo para empresas e profissionais liberais.",
    },
  ]);

  useEffect(() => {
    // Verificar autenticação
    const token = localStorage.getItem("admin-token");
    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleEdit = (id: string) => {
    const post = posts.find((p) => p.id === id);
    if (post) {
      setEditingPost(post);
      setShowEditor(true);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este artigo?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const handleSavePost = (post: Post) => {
    if (editingPost) {
      // Editar post existente
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
    } else {
      // Adicionar novo post
      setPosts([post, ...posts]);
    }
    setShowEditor(false);
    setEditingPost(undefined);
  };

  const handleCancelEdit = () => {
    setShowEditor(false);
    setEditingPost(undefined);
  };

  return (
    <div className="min-h-screen bg-(--color-background) transition-colors duration-300">
      <AdminHeader />

      {showEditor && (
        <PostEditor
          post={editingPost}
          onSave={handleSavePost}
          onCancel={handleCancelEdit}
        />
      )}

      <Container className="py-8 md:py-12">
        {/* Tabs Navigation */}
        <div className="mb-8 flex gap-2 border-b border-(--color-border) pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("blog")}
            className={`rounded-t-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${
              activeTab === "blog"
                ? "bg-(--color-surface-alt) text-(--color-primary-strong) border-b-2 border-(--color-primary-soft)"
                : "text-(--color-muted) hover:text-(--color-foreground)"
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`rounded-t-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${
              activeTab === "schedule"
                ? "bg-(--color-surface-alt) text-(--color-primary-strong) border-b-2 border-(--color-primary-soft)"
                : "text-(--color-muted) hover:text-(--color-foreground)"
            }`}
          >
            Horários
          </button>
          <button
            onClick={() => setActiveTab("areas")}
            className={`rounded-t-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${
              activeTab === "areas"
                ? "bg-(--color-surface-alt) text-(--color-primary-strong) border-b-2 border-(--color-primary-soft)"
                : "text-(--color-muted) hover:text-(--color-foreground)"
            }`}
          >
            Áreas de Atuação
          </button>
        </div>

        {/* Blog Tab */}
        {activeTab === "blog" && (
          <>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
                  Artigos do Blog
                </h2>
                <p className="mt-1 text-sm text-(--color-muted)">
                  Gerencie todos os artigos publicados
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingPost(undefined);
                  setShowEditor(true);
                }}
                className="rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)"
              >
                + Novo Artigo
              </button>
            </div>

            {/* Estatísticas */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <StatsCard label="Total de Artigos" value={posts.length} />
              <StatsCard
                label="Publicados"
                value={posts.filter((p) => p.status === "published").length}
                color="green"
              />
              <StatsCard
                label="Rascunhos"
                value={posts.filter((p) => p.status === "draft").length}
                color="orange"
              />
            </div>

            {/* Lista de Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  {...post}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="rounded-2xl border-2 border-dashed border-(--color-border) bg-(--color-surface-alt) p-12 text-center transition-colors duration-300">
                <p className="text-lg text-(--color-muted)">
                  Nenhum artigo encontrado
                </p>
                <p className="mt-2 text-sm text-(--color-foreground-muted)">
                  Clique em &ldquo;Novo Artigo&rdquo; para começar
                </p>
              </div>
            )}
          </>
        )}

        {/* Schedule Tab */}
        {activeTab === "schedule" && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
                Horários de Funcionamento
              </h2>
              <p className="mt-1 text-sm text-(--color-muted)">
                Gerencie os horários de atendimento exibidos na página de
                contato
              </p>
            </div>

            <div className="space-y-4">
              {schedules.map((schedule, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 transition-colors duration-300"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-(--color-foreground) mb-2">
                          Dia da Semana
                        </label>
                        <input
                          type="text"
                          value={schedule.day}
                          onChange={(e) => {
                            const newSchedules = [...schedules];
                            newSchedules[index].day = e.target.value;
                            setSchedules(newSchedules);
                          }}
                          className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-(--color-foreground) mb-2">
                          Horário
                        </label>
                        <input
                          type="text"
                          value={schedule.hours}
                          onChange={(e) => {
                            const newSchedules = [...schedules];
                            newSchedules[index].hours = e.target.value;
                            setSchedules(newSchedules);
                          }}
                          className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const newSchedules = [...schedules];
                          newSchedules[index].isOpen =
                            !newSchedules[index].isOpen;
                          setSchedules(newSchedules);
                        }}
                        className={`rounded-lg px-4 py-2 text-xs font-semibold transition md:text-sm ${
                          schedule.isOpen
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                        }`}
                      >
                        {schedule.isOpen ? "Aberto" : "Fechado"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  // Função de salvar horários (simulação)
                  alert("Horários salvos com sucesso!");
                }}
                className="rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)"
              >
                Salvar Horários
              </button>
              <button className="rounded-full border border-(--color-border) bg-(--color-background) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-foreground) transition hover:bg-(--color-surface-alt)">
                + Adicionar Horário
              </button>
            </div>
          </>
        )}

        {/* Practice Areas Tab */}
        {activeTab === "areas" && (
          <>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
                  Áreas de Atuação
                </h2>
                <p className="mt-1 text-sm text-(--color-muted)">
                  Gerencie as áreas de atuação do escritório
                </p>
              </div>
              <button className="rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)">
                + Nova Área
              </button>
            </div>

            <div className="space-y-4">
              {practiceAreas.map((area) => (
                <div
                  key={area.id}
                  className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 transition-colors duration-300"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-(--color-foreground) mb-2">
                        Título
                      </label>
                      <input
                        type="text"
                        value={area.title}
                        onChange={(e) => {
                          const newAreas = practiceAreas.map((a) =>
                            a.id === area.id
                              ? { ...a, title: e.target.value }
                              : a
                          );
                          setPracticeAreas(newAreas);
                        }}
                        className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-(--color-foreground) mb-2">
                        Descrição
                      </label>
                      <textarea
                        value={area.description}
                        onChange={(e) => {
                          const newAreas = practiceAreas.map((a) =>
                            a.id === area.id
                              ? { ...a, description: e.target.value }
                              : a
                          );
                          setPracticeAreas(newAreas);
                        }}
                        rows={3}
                        className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20 resize-none"
                      />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button className="rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2 text-xs font-semibold text-(--color-foreground) transition hover:bg-(--color-surface-alt) md:text-sm">
                        Salvar
                      </button>
                      <button
                        onClick={() => {
                          if (
                            confirm("Tem certeza que deseja excluir esta área?")
                          ) {
                            setPracticeAreas(
                              practiceAreas.filter((a) => a.id !== area.id)
                            );
                          }
                        }}
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 transition hover:bg-red-100 md:text-sm"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
