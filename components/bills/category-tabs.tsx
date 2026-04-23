import type { BillType } from "@/lib/types/bill";
import { cn } from "@/lib/utils/classnames";

const items: Array<{ label: string; value: BillType | "all" }> = [
  { label: "全部", value: "all" },
  { label: "支出", value: "expense" },
  { label: "收入", value: "income" },
  { label: "理财", value: "wealth" },
  { label: "转账", value: "transfer" },
];

type CategoryTabsProps = {
  value: BillType | "all";
  onChange: (value: BillType | "all") => void;
};

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <div className="scrollbar-hidden flex min-w-0 flex-1 items-center justify-start gap-[10.16px] overflow-x-auto">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-[28px] w-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-[16px] border px-3 text-[14px] font-medium leading-5 transition-[background-color,color,box-shadow,border-color]",
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
