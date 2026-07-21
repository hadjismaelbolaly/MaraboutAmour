import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light";
  external?: boolean;
  icon?: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-wider transition-all duration-300";

  const styles = {
    solid: "bg-or text-noir hover:bg-or-clair hover:shadow-gold",
    outline: "border border-or text-or hover:bg-or hover:text-noir",
    "outline-light": "border border-noir/30 text-noir hover:bg-noir hover:text-creme",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]}`} {...props}>
      {children}
      {icon}
    </Link>
  );
}
