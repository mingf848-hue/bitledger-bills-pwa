import { SlidersHorizontal } from "lucide-react";

export function FilterButton() {
  return (
    <button
      type="button"
      className="card-surface flex h-[48px] w-[72px] items-center justify-center gap-1.5 rounded-[16px] text-[14px] font-semibold leading-5 text-[var(--text-primary)]"
    >
      <span>筛选</span>
      <SlidersHorizontal className="h-[17px] w-[17px]" strokeWidth={1.9} />
    </button>
  );
}
