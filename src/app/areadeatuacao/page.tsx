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
    <div className="bg-(--color-background) pb-16 transition-colors duration-300">
      <PageHeader
        eyebrow="Especialidades"
        title="Áreas de atuação"
        description="Selecionamos abaixo as principais frentes do escritório. Clique em cada área para visualizar os principais serviços e diferenciais oferecidos."
      />

      <Container className="gap-10 py-12 md:flex">
        <nav className="md:w-56">
          <ul className="sticky top-28 space-y-3">
            {practiceAreas.map((area) => (
              <li key={area.id}>
                <a
                  className="block rounded-xl border border-transparent bg-(--color-surface-alt) px-4 py-3 text-sm font-semibold text-(--color-primary-soft) transition hover:border-(--color-border)"
                  href={`#${area.id}`}
                >
                  {area.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 space-y-12">
          {practiceAreas.map((area) => (
            <section
              key={area.id}
              id={area.id}
              className="rounded-3xl border border-(--color-border) bg-(--color-surface-alt) p-8 shadow-sm transition-colors duration-300"
            >
              <h2 className="text-2xl font-semibold text-(--color-primary-strong)">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-(--color-foreground-muted)">
                {area.description}
              </p>
              <div className="mt-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-(--color-primary-soft)">
                  Principais serviços
                </p>
                <ul className="grid gap-2 text-sm text-(--color-foreground-muted) md:grid-cols-2">
                  {area.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-xl border border-(--color-border) bg-(--color-card-alt) px-4 py-3 transition-colors duration-300"
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
