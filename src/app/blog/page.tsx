import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { postsApi } from "@/lib/api";

async function getPosts() {
  try {
    const response = await postsApi.getPublished();
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  const postsList = Array.isArray(posts) ? posts : [];

  return (
    <div className="bg-(--color-background) transition-colors duration-300">
      <PageHeader
        eyebrow="Artigos e notícias"
        title="Blog Navarro"
        description="Análises, atualizações legislativas e comentários sobre tendências que impactam o dia a dia de empresas e profissionais liberais."
      />

      <Container className="grid gap-4 py-8 md:grid-cols-2 md:gap-6 md:py-12 lg:grid-cols-3">
        {postsList.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-(--color-foreground-muted)">
              Nenhum artigo publicado ainda.
            </p>
          </div>
        ) : (
          postsList.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(1,17,38,0.35)] md:rounded-3xl md:p-6"
            >
              <h2 className="mt-2 text-lg font-semibold text-(--color-primary-strong) md:mt-3 md:text-xl">
                {post.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-(--color-foreground-muted) md:mt-3 md:text-sm">
                {post.excerpt || "Sem descrição disponível"}
              </p>
              <div className="mt-auto pt-4 text-[10px] uppercase tracking-wide text-(--color-muted) md:pt-6 md:text-xs">
                {new Date(post.createdAt).toLocaleDateString("pt-BR")}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-flex text-xs font-semibold text-(--color-primary-soft) transition hover:text-(--color-primary-strong) md:mt-4 md:text-sm"
              >
                Ler artigo completo →
              </Link>
            </article>
          ))
        )}
      </Container>
    </div>
  );
}
