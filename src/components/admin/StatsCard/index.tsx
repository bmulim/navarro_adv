type StatsCardProps = {
  label: string;
  value: number;
  color?: "default" | "green" | "orange";
};

export function StatsCard({ label, value, color = "default" }: StatsCardProps) {
  const colorClasses = {
    default: "text-(--color-primary-strong)",
    green: "text-green-600",
    orange: "text-orange-600",
  };

  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 transition-colors duration-300">
      <p className="text-sm text-(--color-muted)">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${colorClasses[color]}`}>
        {value}
      </p>
    </div>
  );
}
