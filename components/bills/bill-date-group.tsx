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
      <div className="flex h-[42px] items-center justify-between px-4">
        <div>
          <div className="flex items-baseline gap-[10px]">
            <h2 className="text-[16px] font-semibold leading-5 text-[var(--text-primary)]">
              {group.label}
            </h2>
            <span className="text-[13px] font-medium leading-4 text-[var(--text-secondary)]">
              {group.subtitle}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-[10px] whitespace-nowrap text-[13px] leading-4">
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
