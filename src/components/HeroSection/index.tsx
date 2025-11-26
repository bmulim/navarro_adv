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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 transition-colors duration-300 md:gap-10 md:px-6 md:py-16 lg:flex-row lg:items-center lg:px-10 lg:py-20">
        <div className="flex-1 space-y-4 md:space-y-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-(--color-muted) md:text-xs lg:text-sm">
            {title}
          </span>
          <h1 className="text-2xl font-semibold leading-tight text-(--color-foreground) md:text-3xl lg:text-4xl xl:text-5xl">
            {subtitle}
          </h1>
          <p className="max-w-xl text-sm text-(--color-foreground-muted) md:text-base lg:text-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link
              href={primaryCtaHref}
              className="rounded-full bg-(--color-cta-bg) px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover) md:px-6 md:py-3 md:text-sm"
            >
              {primaryCtaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="rounded-full border border-(--color-cta-border) px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-(--color-foreground) transition hover:border-(--color-muted) hover:text-(--color-muted) md:px-6 md:py-3 md:text-sm"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-xl shadow-[rgba(1,17,38,0.1)] transition-colors duration-300 md:rounded-3xl md:p-8 lg:p-10">
          <h2 className="text-xl font-semibold text-(--color-primary-strong) md:text-2xl">
            {statsTitle}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-(--color-foreground-muted) md:mt-4 md:text-sm">
            {statsDescription}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 text-center text-sm md:mt-6 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-2xl font-bold text-(--color-primary-strong) md:text-3xl">
                  {stat.value}
                </p>
                <span className="text-xs text-(--color-muted) md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
