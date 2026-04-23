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
        "flex h-[70px] items-center gap-2.5 px-4 py-[10px]",
        !first && "border-t border-[var(--divider)]",
      )}
    >
      <BillIcon iconKey={item.iconKey} />

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2.5">
          <div className="min-w-0">
            <div className="truncate text-[13px] font-medium leading-5 text-[var(--text-primary)]">
              {item.title}
            </div>
            <div className="mt-0.5 truncate text-[11px] font-medium leading-4 text-[var(--text-secondary)]">
              {item.accountName}
            </div>
          </div>
          <BillCategoryTag label={item.tagLabel} tone={item.tagTone} />
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="text-right">
          <div
            className={cn(
              "text-[13px] font-semibold leading-5 tracking-[-0.02em]",
              isPositive ? "text-[var(--income)]" : "text-[var(--expense)]",
            )}
          >
            {formatSignedAmount(item.amount, item.currency)}
          </div>
          <div className="mt-0.5 text-[11px] font-medium leading-4 text-[var(--text-secondary)]">
            {new Date(item.occurredAt).toLocaleTimeString("zh-CN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
        </div>
        <ChevronRight className="h-[14px] w-[14px] text-[var(--text-secondary)]" strokeWidth={2} />
      </div>
    </div>
  );
}
