import Link from "next/link";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  statsTitle: string;
  statsDescription: string;
  stats: Array<{ value: string; label: string }>;
};

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  statsTitle,
  statsDescription,
  stats,
}: HeroSectionProps) {
  return (
    <section className="bg-(--color-background) text-(--color-foreground) transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 transition-colors duration-300 md:flex-row md:items-center md:px-10">
        <div className="flex-1 space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-(--color-muted)">
            {title}
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-(--color-foreground) md:text-5xl">
            {subtitle}
          </h1>
          <p className="max-w-xl text-base text-(--color-foreground-muted) md:text-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryCtaHref}
              className="rounded-full bg-(--color-cta-bg) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)"
            >
              {primaryCtaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="rounded-full border border-(--color-cta-border) px-6 py-3 text-sm font-semibold uppercase tracking-wide text-(--color-foreground) transition hover:border-(--color-muted) hover:text-(--color-muted)"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-(--color-border) bg-(--color-surface-alt) p-10 shadow-xl shadow-[rgba(1,17,38,0.1)] transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-(--color-primary-strong)">
            {statsTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-(--color-foreground-muted)">
            {statsDescription}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 text-center text-sm">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold text-(--color-primary-strong)">
                  {stat.value}
                </p>
                <span className="text-(--color-muted)">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
