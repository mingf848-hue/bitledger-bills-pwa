import type { BillType } from "@/lib/types/bill";
import { cn } from "@/lib/utils/classnames";

const items: Array<{ label: string; value: BillType | "all"; minWidthClassName: string }> = [
  { label: "全部", value: "all", minWidthClassName: "min-w-[64px]" },
  { label: "支出", value: "expense", minWidthClassName: "min-w-[66px]" },
  { label: "收入", value: "income", minWidthClassName: "min-w-[66px]" },
  { label: "理财", value: "wealth", minWidthClassName: "min-w-[66px]" },
  { label: "转账", value: "transfer", minWidthClassName: "min-w-[66px]" },
];

type CategoryTabsProps = {
  value: BillType | "all";
  onChange: (value: BillType | "all") => void;
};

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <div className="scrollbar-hidden flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-[12px] px-4 text-[15px] font-semibold leading-[15px] tracking-[0em] transition-colors",
              item.minWidthClassName,
              active
                ? "bg-[var(--brand-primary)] text-white shadow-[0_2px_8px_rgba(47,107,255,0.14)]"
                : "border border-[rgba(15,23,42,0.04)] bg-white text-[#344054] shadow-none",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
