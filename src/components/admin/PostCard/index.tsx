type PostCardProps = {
  id: string;
  title: string;
  category: string;
  date: string;
  status: "published" | "draft";
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export function PostCard({
  id,
  title,
  category,
  date,
  status,
  onEdit,
  onDelete,
}: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-5 transition-colors duration-300 md:flex-row md:items-center md:justify-between md:p-6">
      <div className="flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-(--color-primary-soft) px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white md:text-xs">
            {category}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide md:text-xs ${
              status === "published"
                ? "bg-green-100 text-green-800"
                : "bg-orange-100 text-orange-800"
            }`}
          >
            {status === "published" ? "Publicado" : "Rascunho"}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-(--color-primary-strong) md:text-xl">
          {title}
        </h3>
        <p className="mt-1 text-xs text-(--color-muted) md:text-sm">{date}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(id)}
          className="rounded-lg border border-(--color-border) bg-(--color-background) px-4 py-2 text-xs font-semibold text-(--color-foreground) transition hover:bg-(--color-surface-alt) md:text-sm"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(id)}
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 transition hover:bg-red-100 md:text-sm"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
