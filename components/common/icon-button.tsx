import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/classnames";

type IconButtonProps = PropsWithChildren<{
  className?: string;
}>;

export function IconButton({ children, className }: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-primary)] transition-transform duration-150 active:scale-95",
        className,
      )}
    >
      {children}
    </button>
  );
}
