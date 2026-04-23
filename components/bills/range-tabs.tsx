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
    <div className="flex h-[34px] w-[92px] shrink-0 items-center rounded-[11px] bg-[var(--chip-bg)] p-[3px]">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-7 w-[28px] items-center justify-center rounded-[8px] text-[13px] font-medium leading-4 transition-colors",
              active ? "bg-white text-[var(--brand-primary)] shadow-[0_2px_8px_rgba(15,23,42,0.05)]" : "text-[var(--text-secondary)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
