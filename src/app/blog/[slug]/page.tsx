import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { postsApi } from "@/lib/api";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  try {
    const response = await postsApi.getBySlug(slug);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const response = await postsApi.getPublished();
    return response.data.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Erro ao gerar params:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-(--color-background) transition-colors duration-300">
      <div className="border-b border-(--color-border) bg-(--color-hero-bg) py-8 text-(--color-hero-text) transition-colors duration-300 md:py-12">
        <Container className="space-y-4 py-0 md:space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-(--color-primary-soft) transition hover:text-(--color-primary-strong) md:text-sm"
          >
            ← Voltar ao blog
          </Link>
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs text-(--color-muted) md:gap-4 md:text-sm">
              <span>
                {new Date(post.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {post.imageUrl && (
        <div className="relative h-64 w-full md:h-96 lg:h-[500px]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      )}

      <Container className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
          <div
            className="prose prose-sm md:prose-base max-w-none prose-headings:text-(--color-primary-strong) prose-p:text-(--color-foreground-muted)"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="rounded-2xl border border-(--color-border) bg-(--color-hero-bg) p-5 text-(--color-hero-text) transition-colors duration-300 md:rounded-3xl md:p-8">
            <h3 className="text-lg font-semibold md:text-xl">
              Precisa de orientação jurídica?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-(--color-hero-muted) md:mt-3 md:text-sm">
              Nossa equipe está pronta para analisar seu caso e desenvolver uma
              estratégia personalizada. Entre em contato e agende uma
              consultoria.
            </p>
            <Link
              href="/contato"
              className="mt-4 inline-flex rounded-full bg-[#102d40] dark:bg-[#98a1a6] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white dark:text-[#011126] shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:brightness-110 md:mt-6 md:px-6 md:py-3 md:text-sm"
            >
              Fale conosco
            </Link>
          </div>

          <div className="border-t border-(--color-border) pt-6 md:pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-(--color-primary-soft) transition hover:text-(--color-primary-strong) md:text-sm"
            >
              ← Ver todos os artigos
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
