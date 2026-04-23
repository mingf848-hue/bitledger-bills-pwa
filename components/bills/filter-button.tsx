import { SlidersHorizontal } from "lucide-react";

export function FilterButton() {
  return (
    <button
      type="button"
      className="card-surface flex h-14 w-[76px] items-center justify-center gap-2 rounded-[18px] text-[16px] font-semibold leading-6 text-[var(--text-primary)]"
    >
      <span>筛选</span>
      <SlidersHorizontal className="h-5 w-5" strokeWidth={1.9} />
    </button>
  );
}
