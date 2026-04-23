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
    <div className="flex h-11 w-28 items-center rounded-[14px] bg-[var(--chip-bg)] p-1">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-9 w-[34px] items-center justify-center rounded-[10px] text-[16px] font-semibold leading-6 transition-colors",
              active ? "bg-white text-[var(--brand-primary)] shadow-[0_4px_12px_rgba(15,23,42,0.06)]" : "text-[var(--text-secondary)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
