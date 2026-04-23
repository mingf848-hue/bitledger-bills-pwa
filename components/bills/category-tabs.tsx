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
    <div className="flex min-w-0 flex-1 items-center justify-start gap-1.5">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-[30px] min-w-[36px] shrink-0 items-center justify-center whitespace-nowrap rounded-[15px] px-2 text-[12px] font-medium leading-4 transition-[background-color,color,box-shadow,border-color]",
              active
                ? "bg-[var(--brand-primary-strong)] text-white shadow-[0_2px_6px_rgba(22,101,245,0.14)]"
                : "border border-transparent bg-[var(--filter-chip-bg)] text-[var(--filter-chip-text)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
