import { SectionCard } from "@/components/common/section-card";
import { cn } from "@/lib/utils/classnames";
import type { BillSummary } from "@/lib/types/bill";
import type { BillType } from "@/lib/types/bill";
import { SummaryPanel } from "@/components/bills/summary-panel";

type SummaryDualCardProps = {
  summary: BillSummary;
  activeCategory?: BillType | "all";
  onExpenseClick?: () => void;
  onIncomeClick?: () => void;
};

export function SummaryDualCard({
  summary,
  activeCategory = "all",
  onExpenseClick,
  onIncomeClick,
}: SummaryDualCardProps) {
  return (
    <SectionCard className="grid h-[108px] grid-cols-2 rounded-[16px] px-3 py-3">
      <button
        type="button"
        onClick={onExpenseClick}
        className={cn(
          "rounded-[12px] pr-3 text-left transition-colors",
          activeCategory === "expense" && "bg-[var(--expense-soft)]/50",
        )}
      >
        <SummaryPanel
          label="本月支出"
          amount={summary.expenseAmount}
          trend={summary.expenseTrend}
          currency={summary.currency}
          tone="expense"
        />
      </button>
      <button
        type="button"
        onClick={onIncomeClick}
        className={cn(
          "rounded-[12px] border-l border-[var(--divider)] pl-3 text-left transition-colors",
          activeCategory === "income" && "bg-[var(--income-soft)]/50",
        )}
      >
        <SummaryPanel
          label="本月收入"
          amount={summary.incomeAmount}
          trend={summary.incomeTrend}
          currency={summary.currency}
          tone="income"
        />
      </button>
    </SectionCard>
  );
}
