import { Fragment } from "react";
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
    <div className="flex h-8 shrink-0 items-center rounded-[16px] bg-[var(--filter-chip-bg)] px-1">
      {items.map((item, index) => {
        const active = item.value === value;

        return (
          <Fragment key={item.value}>
            {index > 0 ? <span className="mx-1 h-3.5 w-px bg-[var(--filter-segment-border)]" aria-hidden="true" /> : null}
            <button
              type="button"
              onClick={() => onChange(item.value)}
              className={cn(
                "flex h-6 min-w-[22px] items-center justify-center rounded-[12px] px-2 text-[12px] font-medium leading-4 transition-[border-color,color,box-shadow]",
                active
                  ? "border border-[var(--brand-primary-strong)] bg-white text-[var(--brand-primary-strong)] shadow-[0_2px_6px_rgba(22,101,245,0.08)]"
                  : "border border-transparent bg-transparent text-[var(--filter-segment-text)]",
              )}
            >
              {item.label}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
