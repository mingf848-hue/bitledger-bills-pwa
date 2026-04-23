import { ChevronRight } from "lucide-react";
import type { BillEntry } from "@/lib/types/bill";
import { BillCategoryTag } from "@/components/bills/bill-category-tag";
import { BillIcon } from "@/components/bills/bill-icon";
import { formatSignedAmount } from "@/lib/utils/currency";
import { cn } from "@/lib/utils/classnames";

type BillItemProps = {
  item: BillEntry;
  first?: boolean;
};

export function BillItem({ item, first = false }: BillItemProps) {
  const isPositive = item.amount > 0;

  return (
    <div
      className={cn(
        "grid h-20 grid-cols-[36px_minmax(0,1fr)_64px_132px_18px] items-center gap-3 px-4",
        !first && "border-t border-[var(--divider)]",
      )}
    >
      <BillIcon iconKey={item.iconKey} />

      <div className="min-w-0">
        <div className="min-w-0">
          <div className="truncate text-[15px] font-medium leading-5 text-[var(--text-primary)]">
            {item.title}
          </div>
          <div className="mt-1 truncate text-[12px] font-medium leading-4 text-[var(--text-secondary)]">
            {item.accountName}
          </div>
        </div>
      </div>

      <div className="flex w-16 justify-center">
        <BillCategoryTag label={item.tagLabel} tone={item.tagTone} />
      </div>

      <div className="w-[132px] text-right">
        <div
          className={cn(
            "whitespace-nowrap text-[15px] font-semibold leading-[18px] tracking-[-0.02em]",
            isPositive ? "text-[var(--income)]" : "text-[var(--expense)]",
          )}
        >
          {formatSignedAmount(item.amount, item.currency)}
        </div>
        <div className="mt-1 ml-auto w-[52px] whitespace-nowrap text-[12px] font-medium leading-[14px] text-[var(--text-secondary)]">
          {new Date(item.occurredAt).toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
      </div>

      <ChevronRight className="h-[14px] w-[14px] justify-self-end text-[var(--text-secondary)]" strokeWidth={2} />
    </div>
  );
}
