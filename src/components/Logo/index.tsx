import Image, { ImageProps } from "next/image";
import logotipo from "./log_transparent.png";

type LogoProps = Omit<ImageProps, "src" | "alt"> & {
  alt?: string;
};

export function Logo({
  alt = "Logotipo",
  className,
  priority,
  ...props
}: LogoProps) {
  const baseClass = "w-[120px] h-[120px]";
  const composedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <Image
      src={logotipo}
      alt={alt}
      className={composedClass}
      priority={priority}
      {...props}
    />
  );
}
