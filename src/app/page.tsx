import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { HighlightCard } from "@/components/HighlightCard";

const practiceAreas = [
  {
    title: "Direito Empresarial",
    description:
      "Assessoria completa para empresas que buscam segurança jurídica em contratos, governança e resolução de conflitos.",
  },
  {
    title: "Direito Civil",
    description:
      "Atuação estratégica em demandas cíveis, com foco na proteção de patrimônio e em acordos eficientes.",
  },
  {
    title: "Direito do Trabalho",
    description:
      "Consultoria e contencioso trabalhista preventivo para empresas e profissionais liberais.",
  },
];

const highlights = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada caso é tratado de forma individual, com comunicação clara e disponibilidade total ao cliente.",
  },
  {
    title: "Estratégia orientada a resultados",
    description:
      "Planejamento jurídico alinhado aos objetivos de negócio para garantir decisões seguras.",
  },
  {
    title: "Transparência e confiança",
    description:
      "Relatórios periódicos e acompanhamento próximo em todas as etapas do processo.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col transition-colors duration-300">
      <HeroSection
        title="Advocacia especializada"
        subtitle="Soluções jurídicas sob medida para proteger o que é mais importante."
        description="O escritório Navarro Advocacia acompanha empresas e profissionais liberais em todas as fases de seus negócios, oferecendo consultoria e contencioso com foco em eficiência, clareza e segurança."
        primaryCtaText="Conheça as áreas"
        primaryCtaHref="/areadeatuacao"
        secondaryCtaText="Fale conosco"
        secondaryCtaHref="/contato"
        statsTitle="Compromisso com resultados"
        statsDescription="Mais de 10 anos de atuação em consultoria e contencioso estratégico, com presença em demandas de alto impacto e construção de soluções preventivas para nossos clientes."
        stats={[
          { value: "+120", label: "casos atendidos" },
          { value: "95%", label: "índice de êxito" },
        ]}
      />

      <section className="bg-(--color-background) transition-colors duration-300">
        <Container className="space-y-6 md:space-y-10">
          <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl lg:text-4xl">
            Principais áreas de atuação
          </h2>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.title}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-(--color-surface) transition-colors duration-300">
        <Container className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 md:space-y-5">
            <h2 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
              Como podemos apoiar o seu negócio
            </h2>
            <p className="text-sm leading-relaxed text-(--color-foreground-muted) md:text-base">
              Do diagnóstico jurídico completo ao acompanhamento de audiências e
              negociações, nossa equipe atua ao seu lado para antecipar riscos,
              fortalecer contratos e construir soluções de longo prazo.
            </p>
            <ul className="space-y-2 text-sm md:space-y-3">
              {highlights.map((item) => (
                <HighlightCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-lg transition-colors duration-300 md:rounded-3xl md:p-8">
            <h3 className="text-lg font-semibold text-(--color-primary-soft) md:text-xl">
              Diferenciais do escritório
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-(--color-foreground-muted) md:mt-6 md:space-y-4 md:text-sm">
              <li>
                • Relatórios mensais com indicadores e etapas do processo.
              </li>
              <li>• Atendimento híbrido: presencial, on-line e in company.</li>
              <li>
                • Rede de parceiros multidisciplinares para demandas complexas.
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
