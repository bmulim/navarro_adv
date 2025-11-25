"use client";

import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <button
        type="button"
        aria-label="Alternar tema"
        className={`h-9 w-9 rounded-full border border-(--color-border) bg-(--color-background)/60 text-xs font-medium text-(--color-muted) transition ${
          className ?? ""
        }`.trim()}
        disabled
      />
    );
  }

  const label = theme === "light" ? "Ativar modo escuro" : "Ativar modo claro";
  const icon = theme === "light" ? "☀️" : "🌙";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={toggleTheme}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border) bg-(--color-background)/70 text-sm transition hover:border-(--color-primary-soft) hover:text-(--color-primary-strong) ${
        className ?? ""
      }`.trim()}
    >
      <span aria-hidden>{icon}</span>
    </button>
  );
}
