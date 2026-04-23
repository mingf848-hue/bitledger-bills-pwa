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
    <div className="flex w-full flex-col gap-2">
      <div className="text-[13px] font-medium leading-5 text-[var(--text-secondary)]">
        {label}（{currency}）
      </div>
      <CurrencyAmount
        amount={amount}
        currency={currency}
        className={cn(
          "text-[22px] font-bold leading-[28px] tracking-[-0.03em]",
          positiveTone ? "text-[var(--income)]" : "text-[var(--expense)]",
        )}
      />
      <div className="mt-0.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[13px] leading-5">
          <span className="text-[var(--text-secondary)]">较上月</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 font-semibold",
              positiveTone ? "text-[var(--income)]" : "text-[var(--expense)]",
            )}
          >
            <span
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded-full text-white",
                positiveTone ? "bg-[var(--income)]" : "bg-[var(--expense)]",
              )}
            >
              <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={2.6} />
            </span>
            {trend.toFixed(1)}%
          </span>
        </div>
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-[12px]",
            positiveTone ? "bg-[var(--income-soft)] text-[var(--income)]" : "bg-[var(--expense-soft)] text-[var(--expense)]",
          )}
        >
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </span>
      </div>
    </div>
  );
}
