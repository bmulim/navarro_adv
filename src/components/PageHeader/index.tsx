import { Container } from "@/components/Container";
import { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string | ReactNode;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-(--color-border) bg-(--color-background) py-16 transition-colors duration-300">
      <Container className="space-y-4 py-0">
        <p className="text-sm uppercase tracking-[0.3em] text-(--color-muted)">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-semibold text-(--color-primary-strong) md:text-5xl">
          {title}
        </h1>
        {typeof description === "string" ? (
          <p className="max-w-3xl text-sm text-(--color-foreground-muted) md:text-base">
            {description}
          </p>
        ) : (
          description
        )}
      </Container>
    </div>
  );
}
