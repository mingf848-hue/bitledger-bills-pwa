import { SectionCard } from "@/components/common/section-card";
import { BillItem } from "@/components/bills/bill-item";
import type { BillGroup } from "@/lib/types/bill";
import { formatPlainAmount } from "@/lib/utils/currency";

type BillDateGroupProps = {
  group: BillGroup;
};

export function BillDateGroup({ group }: BillDateGroupProps) {
  return (
    <SectionCard className="overflow-hidden">
      <div className="flex items-start justify-between px-3 pt-[10px] pb-1.5">
        <div>
          <div className="flex items-baseline gap-1.5">
            <h2 className="text-[13px] font-semibold leading-4 text-[var(--text-primary)]">
              {group.label}
            </h2>
            <span className="text-[10px] font-medium leading-3 text-[var(--text-secondary)]">
              {group.subtitle}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[10px] leading-3">
          <span className="whitespace-nowrap text-[var(--text-secondary)]">
            支出{" "}
            <span className="whitespace-nowrap font-medium text-[var(--expense)]">
              {formatPlainAmount(group.expenseTotal)} {group.currency}
            </span>
          </span>
          <span className="whitespace-nowrap text-[var(--text-secondary)]">
            收入{" "}
            <span className="whitespace-nowrap font-medium text-[var(--income)]">
              {formatPlainAmount(group.incomeTotal)} {group.currency}
            </span>
          </span>
        </div>
      </div>

      <div>
        {group.items.map((item, index) => (
          <BillItem key={item.id} item={item} first={index === 0} />
        ))}
      </div>
    </SectionCard>
  );
}
