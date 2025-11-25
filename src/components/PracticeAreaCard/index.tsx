type PracticeAreaCardProps = {
  title: string;
  description: string;
};

export function PracticeAreaCard({
  title,
  description,
}: PracticeAreaCardProps) {
  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(1,17,38,0.2)]">
      <h3 className="text-xl font-semibold text-(--color-primary-strong)">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-(--color-foreground-muted)">
        {description}
      </p>
    </div>
  );
}
