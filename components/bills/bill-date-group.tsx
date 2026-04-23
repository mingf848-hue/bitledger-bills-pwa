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
      <div className="flex items-start justify-between px-[14px] pt-3 pb-[6px]">
        <div>
          <div className="flex items-baseline gap-1.5">
            <h2 className="text-[14px] font-semibold leading-5 text-[var(--text-primary)]">
              {group.label}
            </h2>
            <span className="text-[11px] font-medium leading-4 text-[var(--text-secondary)]">
              {group.subtitle}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 whitespace-nowrap text-[11px] leading-4">
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
