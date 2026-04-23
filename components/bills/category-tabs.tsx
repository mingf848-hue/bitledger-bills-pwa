import type { BillType } from "@/lib/types/bill";
import { cn } from "@/lib/utils/classnames";

const items: Array<{ label: string; value: BillType | "all"; minWidthClassName: string }> = [
  { label: "全部", value: "all", minWidthClassName: "min-w-[46px]" },
  { label: "支出", value: "expense", minWidthClassName: "min-w-[48px]" },
  { label: "收入", value: "income", minWidthClassName: "min-w-[48px]" },
  { label: "理财", value: "wealth", minWidthClassName: "min-w-[48px]" },
  { label: "转账", value: "transfer", minWidthClassName: "min-w-[48px]" },
];

type CategoryTabsProps = {
  value: BillType | "all";
  onChange: (value: BillType | "all") => void;
};

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <div className="flex min-w-0 items-center gap-1.5">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-[30px] shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] px-[10px] text-[12px] font-medium leading-4 transition-colors",
              item.minWidthClassName,
              active
                ? "bg-[var(--brand-primary)] text-white shadow-[0_4px_10px_rgba(47,107,255,0.15)]"
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
