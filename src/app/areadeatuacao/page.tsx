import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { areasApi } from "@/lib/api";

async function getAreas() {
  try {
    const response = await areasApi.getAll();
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar áreas:", error);
    return [];
  }
}

export default async function AreaDeAtuacaoPage() {
  const areas = await getAreas();
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
            {areas.map((area) => (
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
          {areas.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-(--color-foreground-muted)">
                Nenhuma área de atuação cadastrada ainda.
              </p>
            </div>
          ) : (
            areas.map((area) => (
              <section
                key={area.id}
                id={area.id}
                className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 shadow-sm transition-colors duration-300 md:rounded-3xl md:p-8"
              >
                {area.imageUrl && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3">
                  {area.icon && <span className="text-2xl">{area.icon}</span>}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-(--color-primary-strong) md:text-2xl">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-(--color-foreground-muted) md:mt-3 md:text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      </Container>
    </div>
  );
}
