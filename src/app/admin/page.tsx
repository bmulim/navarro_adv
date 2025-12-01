"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/Container";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { PostCard } from "@/components/admin/PostCard";
import { PostEditor } from "@/components/admin/PostEditor";
import { ConfirmModal } from "@/components/admin/ConfirmModal";
import { postsApi, areasApi, schedulesApi } from "@/lib/api";
import type { Post, Area, Schedule } from "@/types/api";

type Tab = "blog" | "schedule" | "areas";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("blog");
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);
  const [posts, setPosts] = useState<Post[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [practiceAreas, setPracticeAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string>("");
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: "success" | "info" | "warning";
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
    onConfirm: () => {},
  });

  useEffect(() => {
    // Verificar autenticação
    const savedToken = localStorage.getItem("admin-token");
    if (!savedToken) {
      router.push("/admin/login");
      return;
    }
    setToken(savedToken);

    // Carregar dados
    loadData(savedToken);
  }, [router]);

  const loadData = async (authToken: string) => {
    try {
      setLoading(true);
      const [postsRes, areasRes, schedulesRes] = await Promise.all([
        postsApi.getAll(authToken),
        areasApi.getAll(authToken),
        schedulesApi.getAll(authToken),
      ]);

      setPosts(Array.isArray(postsRes.data) ? postsRes.data : []);
      setPracticeAreas(Array.isArray(areasRes.data) ? areasRes.data : []);
      setSchedules(Array.isArray(schedulesRes.data) ? schedulesRes.data : []);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    const post = posts.find((p) => p.id === id);
    if (post) {
      setEditingPost(post);
      setShowEditor(true);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;

    try {
      await postsApi.delete(id, token);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Erro ao excluir post:", error);
      alert("Erro ao excluir artigo");
    }
  };

  const handleSavePost = async (post: Post) => {
    try {
      if (editingPost) {
        // Editar post existente
        const response = await postsApi.update(post.id, post, token);
        setPosts(posts.map((p) => (p.id === post.id ? response.data : p)));

        // Modal de confirmação de edição
        setModal({
          isOpen: true,
          title: "Artigo Atualizado!",
          message:
            "As alterações foram salvas com sucesso.\n\nO artigo foi atualizado e as mudanças já estão visíveis.",
          type: "success",
          onConfirm: () => {
            setModal({ ...modal, isOpen: false });
            setShowEditor(false);
            setEditingPost(undefined);
            loadData(token);
          },
        });
      } else {
        // Adicionar novo post
        const response = await postsApi.create(post, token);
        setPosts([response.data, ...posts]);

        // Modal de confirmação de criação
        const status = post.published ? "publicado" : "salvo como rascunho";
        setModal({
          isOpen: true,
          title: post.published ? "Artigo Publicado!" : "Rascunho Salvo!",
          message: `O artigo foi ${status} com sucesso.\n\n${
            post.published
              ? "Agora ele está visível no blog."
              : "Você pode editá-lo e publicá-lo quando quiser."
          } `,
          type: "success",
          onConfirm: () => {
            setModal({ ...modal, isOpen: false });
            setShowEditor(false);
            setEditingPost(undefined);
            loadData(token);
          },
        });
      }
    } catch (error) {
      console.error("Erro ao salvar post:", error);
      setModal({
        isOpen: true,
        title: "Erro ao Salvar",
        message: "Não foi possível salvar o artigo.\n\nTente novamente.",
        type: "warning",
        onConfirm: () => setModal({ ...modal, isOpen: false }),
      });
    }
  };

  const handleCancelEdit = () => {
    setShowEditor(false);
    setEditingPost(undefined);
  };

  const handleUpdateArea = async (id: string, data: Partial<Area>) => {
    try {
      const response = await areasApi.update(id, data, token);
      setPracticeAreas(
        practiceAreas.map((a) => (a.id === id ? response.data : a))
      );
    } catch (error) {
      console.error("Erro ao atualizar área:", error);
      alert("Erro ao atualizar área");
    }
  };

  const handleDeleteArea = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta área?")) return;

    try {
      await areasApi.delete(id, token);
      setPracticeAreas(practiceAreas.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Erro ao excluir área:", error);
      alert("Erro ao excluir área");
    }
  };

  const handleUpdateSchedule = async (id: string, data: Partial<Schedule>) => {
    try {
      const response = await schedulesApi.update(id, data, token);
      setSchedules(schedules.map((s) => (s.id === id ? response.data : s)));
    } catch (error) {
      console.error("Erro ao atualizar horário:", error);
      alert("Erro ao atualizar horário");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-(--color-background) flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-(--color-border) border-t-(--color-primary-soft) mx-auto" />
          <p className="mt-4 text-sm text-(--color-muted)">
            Carregando dados...
          </p>
        </div>
      </div>
    );
  }

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

      <ConfirmModal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onConfirm={modal.onConfirm}
      />

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
                value={posts.filter((p) => p.published).length}
                color="green"
              />
              <StatsCard
                label="Rascunhos"
                value={posts.filter((p) => !p.published).length}
                color="orange"
              />
            </div>

            {/* Lista de Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  category={post.category || "Sem categoria"}
                  date={new Date(post.createdAt).toLocaleDateString("pt-BR")}
                  status={post.published ? "published" : "draft"}
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

            {/* Horários */}
            <div className="space-y-4">
              {schedules.map((schedule) => (
                <div
                  key={schedule.id}
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
                          value={schedule.dayOfWeek}
                          onChange={(e) => {
                            handleUpdateSchedule(schedule.id, {
                              dayOfWeek: e.target.value,
                            });
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
                            handleUpdateSchedule(schedule.id, {
                              hours: e.target.value,
                            });
                          }}
                          className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          handleUpdateSchedule(schedule.id, {
                            isOpen: !schedule.isOpen,
                          });
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
                  alert("Horários atualizados em tempo real!");
                }}
                className="rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)"
              >
                Salvar Horários
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
                          handleUpdateArea(area.id, { title: e.target.value });
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
                          handleUpdateArea(area.id, {
                            description: e.target.value,
                          });
                        }}
                        rows={3}
                        className="w-full rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2.5 text-sm text-(--color-foreground) transition focus:border-(--color-primary-soft) focus:outline-none focus:ring-2 focus:ring-(--color-primary-soft)/20 resize-none"
                      />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleDeleteArea(area.id)}
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
