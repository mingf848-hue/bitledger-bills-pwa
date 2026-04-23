import { SlidersHorizontal } from "lucide-react";

export function FilterButton() {
  return (
    <button
      type="button"
      className="card-surface flex h-12 w-20 shrink-0 items-center justify-center gap-[6px] rounded-2xl text-[14px] font-semibold leading-4 text-[var(--text-primary)]"
    >
      <span className="whitespace-nowrap">筛选</span>
      <SlidersHorizontal className="h-4 w-4 shrink-0" strokeWidth={1.9} />
    </button>
  );
}
