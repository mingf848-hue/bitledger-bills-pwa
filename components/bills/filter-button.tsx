import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils/classnames";

type FilterButtonProps = {
  active?: boolean;
  onClick?: () => void;
};

export function FilterButton({ active = false, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card-surface flex h-[42px] w-[60px] shrink-0 items-center justify-center gap-1 rounded-[15px] text-[12px] font-semibold leading-4 text-[var(--text-primary)] transition-colors",
        active && "border-[rgba(22,101,245,0.25)] bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]",
      )}
    >
      <span className="whitespace-nowrap">筛选</span>
      <SlidersHorizontal className="h-[15px] w-[15px] shrink-0" strokeWidth={1.9} />
    </button>
  );
}
