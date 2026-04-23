import type { BillRange } from "@/lib/types/bill";
import { cn } from "@/lib/utils/classnames";

const items: Array<{ label: string; value: BillRange }> = [
  { label: "日", value: "day" },
  { label: "周", value: "week" },
  { label: "月", value: "month" },
];

type RangeTabsProps = {
  value: BillRange;
  onChange: (value: BillRange) => void;
};

export function RangeTabs({ value, onChange }: RangeTabsProps) {
  return (
    <div className="flex shrink-0 items-center justify-center gap-2">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-6 w-8 items-center justify-center rounded-[12px] border bg-white text-[12px] font-medium leading-4 transition-[border-color,color,box-shadow]",
              active
                ? "border-[var(--brand-primary-strong)] text-[var(--brand-primary-strong)] shadow-[0_2px_6px_rgba(22,101,245,0.08)]"
                : "border-[var(--filter-segment-border)] text-[var(--filter-segment-text)] shadow-[0_1px_2px_rgba(15,23,42,0.05)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
