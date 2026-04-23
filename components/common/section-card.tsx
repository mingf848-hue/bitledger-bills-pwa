import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/classnames";

type SectionCardProps = PropsWithChildren<{
  className?: string;
}>;

export function SectionCard({ children, className }: SectionCardProps) {
  return (
    <section
      className={cn(
        "card-surface rounded-[24px] bg-[var(--bg-card)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
