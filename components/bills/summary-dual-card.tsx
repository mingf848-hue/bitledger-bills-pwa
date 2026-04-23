import { SectionCard } from "@/components/common/section-card";
import type { BillSummary } from "@/lib/types/bill";
import { SummaryPanel } from "@/components/bills/summary-panel";

type SummaryDualCardProps = {
  summary: BillSummary;
};

export function SummaryDualCard({ summary }: SummaryDualCardProps) {
  return (
    <SectionCard className="grid h-[132px] grid-cols-2 px-4 py-4">
      <div className="pr-4">
        <SummaryPanel
          label="本月支出"
          amount={summary.expenseAmount}
          trend={summary.expenseTrend}
          currency={summary.currency}
          tone="expense"
        />
      </div>
      <div className="border-l border-[var(--divider)] pl-4">
        <SummaryPanel
          label="本月收入"
          amount={summary.incomeAmount}
          trend={summary.incomeTrend}
          currency={summary.currency}
          tone="income"
        />
      </div>
    </SectionCard>
  );
}
