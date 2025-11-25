import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { HighlightCard } from "@/components/HighlightCard";
import { ContactCard } from "@/components/ContactCard";

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
        secondaryCtaHref="/#contato"
        statsTitle="Compromisso com resultados"
        statsDescription="Mais de 10 anos de atuação em consultoria e contencioso estratégico, com presença em demandas de alto impacto e construção de soluções preventivas para nossos clientes."
        stats={[
          { value: "+120", label: "casos atendidos" },
          { value: "95%", label: "índice de êxito" },
        ]}
      />

      <section className="bg-(--color-background) transition-colors duration-300">
        <Container className="space-y-10">
          <h2 className="text-3xl font-semibold text-(--color-primary-strong) md:text-4xl">
            Principais áreas de atuação
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
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
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-(--color-primary-strong)">
              Como podemos apoiar o seu negócio
            </h2>
            <p className="text-base leading-relaxed text-(--color-foreground-muted)">
              Do diagnóstico jurídico completo ao acompanhamento de audiências e
              negociações, nossa equipe atua ao seu lado para antecipar riscos,
              fortalecer contratos e construir soluções de longo prazo.
            </p>
            <ul className="space-y-3 text-sm">
              {highlights.map((item) => (
                <HighlightCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-(--color-border) bg-(--color-surface-alt) p-8 shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-semibold text-(--color-primary-soft)">
              Diferenciais do escritório
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-(--color-foreground-muted)">
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

      <section
        id="contato"
        className="bg-(--color-surface) transition-colors duration-300"
      >
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-(--color-primary-strong)">
            Pronto para conversar?
          </h2>
          <p className="max-w-2xl text-sm text-(--color-foreground-muted) md:text-base">
            Conte-nos sobre a sua necessidade jurídica e retornaremos com um
            plano de ação personalizado.
          </p>
          <div className="grid gap-4 text-sm md:grid-cols-3">
            <ContactCard
              label="Telefone"
              value="(11) 98888-0000"
              href="tel:+5511988880000"
            />
            <ContactCard
              label="E-mail"
              value="contato@navarroadv.com"
              href="mailto:contato@navarroadv.com"
            />
            <ContactCard
              label="Endereço"
              value="Av. Paulista, 1000 • São Paulo/SP"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
