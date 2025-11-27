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
              className="rounded-full bg-[#102d40] dark:bg-[#98a1a6] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white dark:text-[#011126] shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:brightness-110 md:px-6 md:py-3 md:text-sm"
            >
              {primaryCtaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="rounded-full border-2 border-[#102d40] dark:border-[#98a1a6] bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#102d40] dark:text-[#98a1a6] transition-all hover:bg-[#102d40] hover:text-white dark:hover:bg-[#98a1a6] dark:hover:text-[#011126] md:px-6 md:py-3 md:text-sm"
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
