import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/classnames";

type MobilePwaShellProps = PropsWithChildren<{
  className?: string;
}>;

export function MobilePwaShell({ children, className }: MobilePwaShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] justify-center">
        <div
          className={cn(
            "flex min-h-[932px] w-full flex-col px-4 pt-[max(16px,env(safe-area-inset-top))] pb-[max(12px,env(safe-area-inset-bottom))]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
