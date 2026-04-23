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
    <div className="flex shrink-0 items-center gap-0">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-[28px] w-[38px] shrink-0 items-center justify-center rounded-[16px] border px-3 text-[14px] font-medium leading-5 transition-[border-color,color,box-shadow,background-color]",
              active
                ? "border-transparent bg-[#1665F5] text-white shadow-[0_2px_4px_rgba(15,23,42,0.08)]"
                : "border-[#E6E8F2] bg-[#F5F7FA] text-[#4B5267] shadow-[0_2px_4px_rgba(15,23,42,0.05)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
