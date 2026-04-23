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
        "grid h-[54px] grid-cols-[32px_minmax(0,1fr)_40px_88px_10px] items-center gap-2 px-3 py-[6px]",
        !first && "border-t border-[var(--divider)]",
      )}
    >
      <BillIcon iconKey={item.iconKey} />

      <div className="min-w-0">
        <div className="min-w-0">
          <div className="truncate text-[11px] font-medium leading-4 text-[var(--text-primary)]">
            {item.title}
          </div>
          <div className="mt-0.5 truncate text-[9px] font-medium leading-3 text-[var(--text-secondary)]">
            {item.accountName}
          </div>
        </div>
      </div>

      <div className="flex w-[40px] justify-center">
        <BillCategoryTag label={item.tagLabel} tone={item.tagTone} />
      </div>

      <div className="w-[88px] text-right">
        <div
          className={cn(
            "whitespace-nowrap text-[11px] font-semibold leading-4 tracking-[-0.02em]",
            isPositive ? "text-[var(--income)]" : "text-[var(--expense)]",
          )}
        >
          {formatSignedAmount(item.amount, item.currency)}
        </div>
        <div className="mt-0.5 whitespace-nowrap text-[9px] font-medium leading-3 text-[var(--text-secondary)]">
          {new Date(item.occurredAt).toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
      </div>

      <ChevronRight className="h-[10px] w-[10px] justify-self-end text-[var(--text-secondary)]" strokeWidth={2} />
    </div>
  );
}
