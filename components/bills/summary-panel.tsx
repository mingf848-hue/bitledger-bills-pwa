import { ArrowUpRight } from "lucide-react";
import { CurrencyAmount } from "@/components/common/currency-amount";
import { cn } from "@/lib/utils/classnames";

type SummaryPanelProps = {
  label: string;
  amount: number;
  trend: number;
  currency: string;
  tone: "income" | "expense";
};

export function SummaryPanel({
  label,
  amount,
  trend,
  currency,
  tone,
}: SummaryPanelProps) {
  const positiveTone = tone === "income";

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="text-[15px] font-medium leading-[22px] text-[var(--text-secondary)]">
        {label}（{currency}）
      </div>
      <CurrencyAmount
        amount={amount}
        currency={currency}
        className={cn(
          "text-[28px] font-bold leading-[36px] tracking-[-0.03em]",
          positiveTone ? "text-[var(--income)]" : "text-[var(--expense)]",
        )}
      />
      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[15px] leading-[22px]">
          <span className="text-[var(--text-secondary)]">较上月</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 font-semibold",
              positiveTone ? "text-[var(--income)]" : "text-[var(--expense)]",
            )}
          >
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full text-white",
                positiveTone ? "bg-[var(--income)]" : "bg-[var(--expense)]",
              )}
            >
              <ArrowUpRight className="h-3 w-3" strokeWidth={2.6} />
            </span>
            {trend.toFixed(1)}%
          </span>
        </div>
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-[14px]",
            positiveTone ? "bg-[var(--income-soft)] text-[var(--income)]" : "bg-[var(--expense-soft)] text-[var(--expense)]",
          )}
        >
          <ArrowUpRight className="h-[22px] w-[22px]" strokeWidth={2.1} />
        </span>
      </div>
    </div>
  );
}
