type ContactCardProps = {
  label: string;
  value: string;
  href?: string;
};

export function ContactCard({ label, value, href }: ContactCardProps) {
  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 transition-colors duration-300">
      <p className="font-semibold uppercase tracking-wide text-(--color-primary-strong)">
        {label}
      </p>
      {href ? (
        <a
          className="mt-2 block text-(--color-primary-soft) transition hover:text-(--color-primary-strong)"
          href={href}
        >
          {value}
        </a>
      ) : (
        <span className="mt-2 block text-(--color-primary-soft)">{value}</span>
      )}
    </div>
  );
}
