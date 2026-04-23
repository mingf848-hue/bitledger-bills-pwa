import { SlidersHorizontal } from "lucide-react";

export function FilterButton() {
  return (
    <button
      type="button"
      className="card-surface flex h-[44px] w-[64px] shrink-0 items-center justify-center gap-1 rounded-[15px] text-[13px] font-semibold leading-4 text-[var(--text-primary)]"
    >
      <span className="whitespace-nowrap">筛选</span>
      <SlidersHorizontal className="h-4 w-4 shrink-0" strokeWidth={1.9} />
    </button>
  );
}
