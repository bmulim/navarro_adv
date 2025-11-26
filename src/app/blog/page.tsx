import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

const posts = [
  {
    slug: "planejamento-juridico-empresarial",
    title: "Planejamento jurídico empresarial: por que começar agora",
    excerpt:
      "Entenda como um plano jurídico preventivo reduz litígios e garante decisões estratégicas para o negócio.",
    category: "Direito Empresarial",
    date: "15 nov 2025",
  },
  {
    slug: "negociacao-trabalhista-eficiente",
    title: "Negociação trabalhista eficiente em cenários de crise",
    excerpt:
      "Boas práticas para conduzir negociações coletivas e individuais com foco em preservação financeira.",
    category: "Direito do Trabalho",
    date: "02 nov 2025",
  },
  {
    slug: "contratos-digitais-seguros",
    title: "Como estruturar contratos digitais seguros",
    excerpt:
      "Saiba quais cláusulas não podem faltar em contratos digitais para proteger dados e garantir validade jurídica.",
    category: "Direito Civil",
    date: "20 out 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-(--color-background) transition-colors duration-300">
      <PageHeader
        eyebrow="Artigos e notícias"
        title="Blog Navarro"
        description="Análises, atualizações legislativas e comentários sobre tendências que impactam o dia a dia de empresas e profissionais liberais."
      />

      <Container className="grid gap-4 py-8 md:grid-cols-2 md:gap-6 md:py-12 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(1,17,38,0.35)] md:rounded-3xl md:p-6"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wide text-(--color-primary-soft) md:text-xs">
              {post.category}
            </span>
            <h2 className="mt-2 text-lg font-semibold text-(--color-primary-strong) md:mt-3 md:text-xl">
              {post.title}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-(--color-foreground-muted) md:mt-3 md:text-sm">
              {post.excerpt}
            </p>
            <div className="mt-auto pt-4 text-[10px] uppercase tracking-wide text-(--color-muted) md:pt-6 md:text-xs">
              {post.date}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-flex text-xs font-semibold text-(--color-primary-soft) transition hover:text-(--color-primary-strong) md:mt-4 md:text-sm"
            >
              Ler artigo completo →
            </Link>
          </article>
        ))}
      </Container>
    </div>
  );
}
