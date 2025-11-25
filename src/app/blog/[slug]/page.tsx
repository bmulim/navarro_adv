import { notFound } from "next/navigation";
import { Container } from "@/components/Container";

const posts = {
  "planejamento-juridico-empresarial": {
    title: "Planejamento jurídico empresarial: por que começar agora",
    content:
      "Mesmo em um projeto exclusivamente front-end, esta página demonstra como um artigo completo poderá ser apresentado futuramente.",
  },
  "negociacao-trabalhista-eficiente": {
    title: "Negociação trabalhista eficiente em cenários de crise",
    content:
      "Utilize este espaço para compilar análises, decisões recentes e orientações práticas para o leitor.",
  },
  "contratos-digitais-seguros": {
    title: "Como estruturar contratos digitais seguros",
    content:
      "Destaque insights e recomendações que reforcem a autoridade do escritório na área abordada.",
  },
} as const;

type BlogPostPageProps = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-(--color-background) transition-colors duration-300">
      <Container className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-(--color-primary-soft)">
          Artigo
        </p>
        <h1 className="text-4xl font-semibold text-(--color-primary-strong) md:text-5xl">
          {post.title}
        </h1>
        <div className="space-y-4 rounded-3xl border border-(--color-border) bg-(--color-surface-alt) p-8 text-sm leading-relaxed text-(--color-foreground-muted)">
          <p>{post.content}</p>
          <p>
            Utilize este layout como base para os conteúdos reais, acrescentando
            subtítulos, imagens e chamadas para ação conforme necessário.
          </p>
        </div>
      </Container>
    </article>
  );
}
