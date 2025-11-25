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

      <Container className="grid gap-6 py-12 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col rounded-3xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(1,17,38,0.35)]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-(--color-primary-soft)">
              {post.category}
            </span>
            <h2 className="mt-3 text-xl font-semibold text-(--color-primary-strong)">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-(--color-foreground-muted)">
              {post.excerpt}
            </p>
            <div className="mt-auto pt-6 text-xs uppercase tracking-wide text-(--color-muted)">
              {post.date}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-(--color-primary-soft) transition hover:text-(--color-primary-strong)"
            >
              Ler artigo completo →
            </Link>
          </article>
        ))}
      </Container>
    </div>
  );
}
