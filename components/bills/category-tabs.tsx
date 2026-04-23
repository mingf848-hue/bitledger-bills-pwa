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
    <div className="flex items-center gap-2">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-[38px] min-w-[50px] items-center justify-center rounded-[12px] px-[14px] text-[14px] font-medium leading-5 transition-colors",
              active
                ? "bg-[var(--brand-primary)] text-white shadow-[0_6px_14px_rgba(47,107,255,0.18)]"
                : "bg-[var(--chip-bg)] text-[var(--text-primary)]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
