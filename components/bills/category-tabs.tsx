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
    <div className="flex items-center gap-[10px]">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-11 min-w-14 items-center justify-center rounded-[14px] px-[18px] text-[16px] font-semibold leading-6 transition-colors",
              active
                ? "bg-[var(--brand-primary)] text-white shadow-[0_8px_18px_rgba(47,107,255,0.22)]"
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
