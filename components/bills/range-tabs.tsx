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
    <div className="flex h-[28px] shrink-0 items-center rounded-[8px] border border-[#E6E8F2] bg-[#F4F5F7] px-[2px] shadow-[0_2px_4px_rgba(15,23,42,0.05)]">
      {items.map((item, index) => {
        const active = item.value === value;

        return (
          <div key={item.value} className="flex items-center">
            {index > 0 ? <span className="h-3.5 w-px bg-[#D8DCE5]" aria-hidden="true" /> : null}
            <button
              type="button"
              onClick={() => onChange(item.value)}
              className={cn(
                "flex h-[24px] w-[38px] shrink-0 items-center justify-center rounded-[8px] text-[12px] font-medium leading-4 transition-[border-color,color,box-shadow,background-color]",
                active
                  ? "bg-[#1665F5] text-white shadow-[0_2px_4px_rgba(15,23,42,0.08)]"
                  : "bg-transparent text-[#4B5267]",
              )}
            >
              {item.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
