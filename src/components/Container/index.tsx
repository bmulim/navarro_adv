import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const baseClass =
    "mx-auto w-full max-w-6xl px-6 py-12 transition-colors duration-300 md:px-10";
  const composedClass = className ? `${baseClass} ${className}` : baseClass;

  return <div className={composedClass}>{children}</div>;
}
