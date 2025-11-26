import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";

const posts = {
  "planejamento-juridico-empresarial": {
    title: "Planejamento jurídico empresarial: por que começar agora",
    category: "Direito Empresarial",
    date: "15 nov 2025",
    author: "Dr. Ricardo Navarro",
    readTime: "5 min",
    excerpt:
      "Entenda como um plano jurídico preventivo reduz litígios e garante decisões estratégicas para o negócio.",
    content: {
      introduction:
        "O planejamento jurídico empresarial é uma ferramenta fundamental para empresas que desejam crescer de forma sustentável e segura. Não se trata apenas de reagir a problemas legais, mas de antecipar riscos e criar estruturas sólidas que protejam o negócio.",
      sections: [
        {
          title: "O que é planejamento jurídico empresarial?",
          paragraphs: [
            "O planejamento jurídico empresarial consiste em mapear todos os aspectos legais relevantes para a operação de uma empresa, desde a constituição societária até contratos, relações trabalhistas, propriedade intelectual e compliance.",
            "Trata-se de uma abordagem preventiva que visa identificar riscos antes que eles se transformem em litígios custosos, além de garantir que a empresa esteja em conformidade com todas as exigências legais aplicáveis ao seu segmento.",
          ],
        },
        {
          title: "Por que começar agora?",
          paragraphs: [
            "Muitas empresas ainda adotam uma postura reativa em relação a questões jurídicas, buscando assessoria apenas quando já enfrentam um problema. Essa abordagem pode ser extremamente prejudicial, resultando em custos elevados, perda de tempo e até mesmo danos à reputação.",
            "Iniciar o planejamento jurídico quanto antes permite que a empresa construa bases sólidas, evite armadilhas comuns e esteja preparada para crescer de forma segura. Além disso, investidores e parceiros comerciais valorizam empresas que demonstram governança corporativa e conformidade legal.",
          ],
        },
        {
          title: "Principais pilares do planejamento jurídico",
          paragraphs: [
            "Um planejamento jurídico eficaz deve contemplar diversos aspectos, incluindo: estrutura societária adequada ao modelo de negócio, contratos bem elaborados com fornecedores e clientes, políticas de compliance e prevenção de riscos trabalhistas.",
            "Também é essencial realizar auditorias periódicas para identificar vulnerabilidades e atualizar práticas conforme mudanças na legislação. A proteção de propriedade intelectual e dados também deve fazer parte da estratégia jurídica da empresa.",
          ],
        },
        {
          title: "Como implementar na prática",
          paragraphs: [
            "O primeiro passo é realizar um diagnóstico completo da situação jurídica atual da empresa, identificando gaps e prioridades. A partir daí, é possível criar um plano de ação com metas e cronogramas realistas.",
            "Contar com assessoria jurídica especializada é fundamental para garantir que o planejamento seja adequado às necessidades específicas do negócio. O ideal é estabelecer uma relação de parceria contínua, e não apenas consultoria pontual.",
          ],
        },
      ],
      conclusion:
        "Investir em planejamento jurídico empresarial é investir na longevidade e segurança do seu negócio. Não espere por problemas para agir - antecipe-se a eles e construa uma empresa mais forte e preparada para os desafios do mercado.",
    },
  },
  "negociacao-trabalhista-eficiente": {
    title: "Negociação trabalhista eficiente em cenários de crise",
    category: "Direito do Trabalho",
    date: "02 nov 2025",
    author: "Dr. Ricardo Navarro",
    readTime: "6 min",
    excerpt:
      "Boas práticas para conduzir negociações coletivas e individuais com foco em preservação financeira.",
    content: {
      introduction:
        "Em momentos de crise econômica, as negociações trabalhistas tornam-se ainda mais sensíveis e estratégicas. É fundamental encontrar soluções que preservem tanto a saúde financeira da empresa quanto os direitos dos colaboradores.",
      sections: [
        {
          title: "O contexto das negociações em crise",
          paragraphs: [
            "Crises econômicas exigem que empresas e colaboradores busquem alternativas criativas e equilibradas. A rigidez pode levar a demissões em massa, ações judiciais e deterioração do clima organizacional.",
            "Por outro lado, negociações bem conduzidas podem resultar em acordos que beneficiem ambas as partes, preservando empregos e permitindo que a empresa atravesse momentos difíceis sem comprometer sua recuperação futura.",
          ],
        },
        {
          title: "Princípios para uma negociação eficiente",
          paragraphs: [
            "Transparência é essencial: os colaboradores precisam entender a real situação da empresa. Compartilhar dados relevantes cria confiança e facilita o diálogo construtivo.",
            "Outro princípio fundamental é a boa-fé nas negociações. Propostas devem ser realistas e viáveis, evitando promessas que não possam ser cumpridas. A participação de representantes sindicais também deve ser respeitada e incentivada.",
          ],
        },
        {
          title: "Alternativas à demissão",
          paragraphs: [
            "Antes de optar por dispensas, é importante explorar alternativas como redução proporcional de jornada e salário, férias coletivas, suspensão temporária de contratos com qualificação profissional, e programas de aposentadoria incentivada.",
            "A legislação brasileira oferece diversos instrumentos que podem ser utilizados em acordos coletivos. O importante é avaliar cada opção considerando o impacto financeiro e social, sempre com assessoria jurídica adequada.",
          ],
        },
        {
          title: "Documentação e formalização",
          paragraphs: [
            "Todo acordo trabalhista deve ser devidamente documentado e, quando aplicável, homologado pelo sindicato ou pelo Ministério Público do Trabalho. Isso garante segurança jurídica para ambas as partes.",
            "Termos de acordo devem ser claros quanto a prazos, condições de retorno à normalidade e eventuais compensações futuras. A falta de formalização adequada pode gerar passivos trabalhistas significativos.",
          ],
        },
      ],
      conclusion:
        "Negociações trabalhistas em tempos de crise requerem sensibilidade, transparência e conhecimento técnico. Com a abordagem correta, é possível encontrar soluções que preservem o capital humano da empresa e mantenham relações de trabalho saudáveis.",
    },
  },
  "contratos-digitais-seguros": {
    title: "Como estruturar contratos digitais seguros",
    category: "Direito Civil",
    date: "20 out 2025",
    author: "Dr. Ricardo Navarro",
    readTime: "7 min",
    excerpt:
      "Saiba quais cláusulas não podem faltar em contratos digitais para proteger dados e garantir validade jurídica.",
    content: {
      introduction:
        "Com a digitalização dos negócios, contratos eletrônicos tornaram-se cada vez mais comuns. No entanto, é fundamental garantir que esses documentos atendam aos requisitos legais e ofereçam a mesma segurança jurídica dos contratos tradicionais.",
      sections: [
        {
          title: "Validade jurídica dos contratos digitais",
          paragraphs: [
            "No Brasil, a Lei nº 14.063/2020 regulamenta o uso de assinaturas eletrônicas em diferentes níveis de segurança. Contratos assinados digitalmente têm a mesma validade jurídica que contratos em papel, desde que observadas as formalidades legais.",
            "É importante entender que existem três tipos de assinatura eletrônica: simples, avançada e qualificada. Cada uma oferece um nível diferente de segurança e é adequada para tipos específicos de transações.",
          ],
        },
        {
          title: "Cláusulas essenciais em contratos digitais",
          paragraphs: [
            "Todo contrato digital deve conter cláusulas claras sobre identificação das partes, objeto do contrato, preço e forma de pagamento, prazo de vigência, condições de rescisão e foro competente para resolução de conflitos.",
            "Além disso, é fundamental incluir disposições específicas sobre proteção de dados pessoais em conformidade com a LGPD, especialmente quando o contrato envolve tratamento de informações sensíveis.",
          ],
        },
        {
          title: "Proteção de dados e privacidade",
          paragraphs: [
            "A Lei Geral de Proteção de Dados (LGPD) estabelece obrigações rigorosas para empresas que coletam, armazenam e processam dados pessoais. Contratos digitais devem contemplar cláusulas específicas sobre essas questões.",
            "É necessário definir claramente quem é o controlador e quem é o operador de dados, quais são as finalidades do tratamento, por quanto tempo os dados serão mantidos e quais medidas de segurança serão adotadas.",
          ],
        },
        {
          title: "Segurança e armazenamento",
          paragraphs: [
            "Contratos digitais devem ser armazenados de forma segura, com backups regulares e controles de acesso adequados. A integridade do documento precisa ser preservada ao longo do tempo.",
            "Plataformas de assinatura eletrônica confiáveis oferecem recursos como certificação digital, timestamps e trilhas de auditoria que garantem a autenticidade e a não-repúdio dos documentos assinados.",
          ],
        },
      ],
      conclusion:
        "Contratos digitais bem estruturados oferecem praticidade sem comprometer a segurança jurídica. Investir em processos adequados de elaboração, assinatura e armazenamento é essencial para proteger os interesses de todas as partes envolvidas.",
    },
  },
} as const;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

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
            <span className="inline-block rounded-full bg-(--color-surface-alt) px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--color-primary-soft) md:px-4 md:py-1.5 md:text-xs">
              {post.category}
            </span>
            <h1 className="text-2xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs text-(--color-muted) md:gap-4 md:text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
          <p className="text-base leading-relaxed text-(--color-foreground-muted) md:text-lg">
            {post.content.introduction}
          </p>

          {post.content.sections.map((section, index) => (
            <section key={index} className="space-y-3 md:space-y-4">
              <h2 className="text-xl font-semibold text-(--color-primary-strong) md:text-2xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-sm leading-relaxed text-(--color-foreground-muted) md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 transition-colors duration-300 md:rounded-3xl md:p-8">
            <h3 className="text-lg font-semibold text-(--color-primary-strong) md:text-xl">
              Conclusão
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-(--color-foreground-muted) md:mt-4 md:text-base">
              {post.content.conclusion}
            </p>
          </div>

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
              href="/#contato"
              className="mt-4 inline-flex rounded-full bg-(--color-cta-bg) px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover) md:mt-6 md:px-6 md:py-3 md:text-sm"
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
