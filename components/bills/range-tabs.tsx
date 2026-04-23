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
    <div className="flex h-9 shrink-0 items-center gap-1 rounded-[10px] bg-[var(--chip-bg)] p-[3px]">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-[30px] min-w-[44px] items-center justify-center whitespace-nowrap rounded-[9px] px-[10px] text-[13px] font-medium leading-[13px] transition-colors",
              active
                ? "border border-[#D9E6FF] bg-white text-[var(--brand-primary)]"
                : "bg-transparent text-[var(--text-secondary)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
