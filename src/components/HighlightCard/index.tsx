type HighlightCardProps = {
  title: string;
  description: string;
};

export function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <li className="rounded-xl border border-(--color-border) bg-(--color-card-alt) p-4 transition-colors duration-300">
      <p className="font-semibold text-(--color-primary-strong)">{title}</p>
      <p className="text-(--color-foreground-muted)">{description}</p>
    </li>
  );
}
