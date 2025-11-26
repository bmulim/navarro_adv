import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

const practiceAreas = [
  {
    id: "empresarial",
    title: "Direito Empresarial",
    description:
      "Consultoria completa para empresas em todas as fases de crescimento, com foco em governança, contratos e resolução estratégica de conflitos.",
    services: [
      "Elaboração e revisão de contratos",
      "Constituição e reorganização societária",
      "Due diligence e compliance",
      "Resolução de disputas comerciais",
    ],
  },
  {
    id: "civil",
    title: "Direito Civil",
    description:
      "Atuação em demandas cíveis complexas, priorizando acordos eficientes e proteção patrimonial para pessoas físicas e jurídicas.",
    services: [
      "Planejamento sucessório",
      "Responsabilidade civil",
      "Recuperação de créditos",
      "Mediação e arbitragem",
    ],
  },
  {
    id: "trabalhista",
    title: "Direito do Trabalho",
    description:
      "Estratégias preventivas e contenciosas alinhadas às demandas do mercado atual, reduzindo riscos e fortalecendo relações de trabalho.",
    services: [
      "Consultoria preventiva para RH",
      "Defesa em reclamatórias",
      "Negociação coletiva",
      "Auditorias e compliance trabalhista",
    ],
  },
];

export default function AreaDeAtuacaoPage() {
  return (
    <div className="bg-(--color-background) pb-10 transition-colors duration-300 md:pb-16">
      <PageHeader
        eyebrow="Especialidades"
        title="Áreas de atuação"
        description="Selecionamos abaixo as principais frentes do escritório. Clique em cada área para visualizar os principais serviços e diferenciais oferecidos."
      />

      <Container className="gap-6 py-8 md:gap-10 md:py-12 lg:flex">
        <nav className="mb-6 lg:mb-0 lg:w-56">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:flex-col lg:space-y-3 lg:overflow-visible lg:pb-0">
            {practiceAreas.map((area) => (
              <li key={area.id} className="shrink-0 lg:shrink">
                <a
                  className="block whitespace-nowrap rounded-xl border border-transparent bg-(--color-surface-alt) px-3 py-2 text-xs font-semibold text-(--color-primary-soft) transition hover:border-(--color-border) md:px-4 md:py-3 md:text-sm lg:whitespace-normal"
                  href={`#${area.id}`}
                >
                  {area.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 space-y-8 md:space-y-12">
          {practiceAreas.map((area) => (
            <section
              key={area.id}
              id={area.id}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 shadow-sm transition-colors duration-300 md:rounded-3xl md:p-8"
            >
              <h2 className="text-xl font-semibold text-(--color-primary-strong) md:text-2xl">
                {area.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-(--color-foreground-muted) md:mt-3 md:text-sm">
                {area.description}
              </p>
              <div className="mt-4 space-y-2 md:mt-6 md:space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-(--color-primary-soft) md:text-sm">
                  Principais serviços
                </p>
                <ul className="grid gap-2 text-xs text-(--color-foreground-muted) md:grid-cols-2 md:text-sm">
                  {area.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-xl border border-(--color-border) bg-(--color-card-alt) px-3 py-2 transition-colors duration-300 md:px-4 md:py-3"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
