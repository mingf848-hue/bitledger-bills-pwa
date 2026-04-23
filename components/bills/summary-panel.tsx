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
    <div className="flex w-full flex-col gap-1">
      <div className="text-[11px] font-medium leading-4 text-[var(--text-secondary)]">
        {label}（{currency}）
      </div>
      <CurrencyAmount
        amount={amount}
        currency={currency}
        className={cn(
          "text-[18px] font-bold leading-5 tracking-[-0.03em]",
          positiveTone ? "text-[var(--income)]" : "text-[var(--expense)]",
        )}
      />
      <div className="mt-0.5 flex items-end justify-between">
        <div className="flex items-center gap-1 text-[11px] leading-4">
          <span className="text-[var(--text-secondary)]">较上月</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 font-semibold",
              positiveTone ? "text-[var(--income)]" : "text-[var(--expense)]",
            )}
          >
            <span
              className={cn(
                "flex h-3 w-3 items-center justify-center rounded-full text-white",
                positiveTone ? "bg-[var(--income)]" : "bg-[var(--expense)]",
              )}
            >
              <ArrowUpRight className="h-[6px] w-[6px]" strokeWidth={2.6} />
            </span>
            {trend.toFixed(1)}%
          </span>
        </div>
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-[9px]",
            positiveTone ? "bg-[var(--income-soft)] text-[var(--income)]" : "bg-[var(--expense-soft)] text-[var(--expense)]",
          )}
        >
          <ArrowUpRight className="h-[13px] w-[13px]" strokeWidth={2.1} />
        </span>
      </div>
    </div>
  );
}
