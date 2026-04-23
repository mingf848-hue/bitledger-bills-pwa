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
      <div className="flex items-start justify-between px-5 pt-[18px] pb-[10px]">
        <div>
          <div className="flex items-baseline gap-3">
            <h2 className="text-[18px] font-bold leading-[26px] text-[var(--text-primary)]">
              {group.label}
            </h2>
            <span className="text-[14px] font-semibold leading-5 text-[var(--text-secondary)]">
              {group.subtitle}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 text-[14px] leading-5">
          <span className="text-[var(--text-secondary)]">
            支出{" "}
            <span className="font-semibold text-[var(--expense)]">
              {formatPlainAmount(group.expenseTotal)} {group.currency}
            </span>
          </span>
          <span className="text-[var(--text-secondary)]">
            收入{" "}
            <span className="font-semibold text-[var(--income)]">
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
