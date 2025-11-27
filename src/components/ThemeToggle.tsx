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
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-lg transition-all duration-500 hover:rotate-180 ${
        className ?? ""
      }`.trim()}
    >
      <span
        aria-hidden
        className="opacity-50 transition-opacity duration-300 hover:opacity-80"
      >
        {icon}
      </span>
    </button>
  );
}
