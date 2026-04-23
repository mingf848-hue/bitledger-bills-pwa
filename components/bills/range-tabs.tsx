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
    <div className="flex h-[38px] w-[102px] items-center rounded-[12px] bg-[var(--chip-bg)] p-[3px]">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-[9px] text-[14px] font-medium leading-5 transition-colors",
              active ? "bg-white text-[var(--brand-primary)] shadow-[0_3px_10px_rgba(15,23,42,0.05)]" : "text-[var(--text-secondary)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
