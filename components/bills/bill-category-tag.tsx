import { cn } from "@/lib/utils/classnames";

type BillCategoryTagProps = {
  label: string;
  tone: "expense" | "income" | "wealth" | "transfer";
};

const toneMap = {
  expense: "bg-[var(--expense-soft)] text-[var(--expense)]",
  income: "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]",
  wealth: "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]",
  transfer: "bg-[var(--warning-soft)] text-[var(--warning)]",
} as const;

export function BillCategoryTag({ label, tone }: BillCategoryTagProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 min-w-[46px] items-center justify-center whitespace-nowrap rounded-[10px] px-2 text-[12px] font-medium leading-4",
        toneMap[tone],
      )}
    >
      {label}
    </span>
  );
}
