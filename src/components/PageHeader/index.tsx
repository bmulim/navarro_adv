import { Container } from "@/components/Container";
import { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string | ReactNode;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-(--color-border) bg-(--color-background) py-8 transition-colors duration-300 md:py-12 lg:py-16">
      <Container className="space-y-3 py-0 md:space-y-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-(--color-muted) md:text-xs lg:text-sm">
          {eyebrow}
        </p>
        <h1 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h1>
        {typeof description === "string" ? (
          <p className="max-w-3xl text-xs text-(--color-foreground-muted) md:text-sm lg:text-base">
            {description}
          </p>
        ) : (
          description
        )}
      </Container>
    </div>
  );
}
