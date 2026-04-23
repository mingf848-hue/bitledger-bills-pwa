import { CalendarDays, ChevronDown } from "lucide-react";

type MonthPickerProps = {
  monthLabel: string;
};

export function MonthPicker({ monthLabel }: MonthPickerProps) {
  return (
    <button
      type="button"
      className="card-surface flex h-12 w-[132px] shrink-0 items-center justify-between rounded-2xl px-[14px]"
    >
      <span className="flex min-w-0 flex-1 items-center gap-[6px] whitespace-nowrap">
        <CalendarDays className="h-4 w-4 shrink-0 text-[var(--text-primary)]" strokeWidth={1.9} />
        <span className="min-w-0 whitespace-nowrap text-[14px] font-semibold leading-[14px] text-[var(--text-primary)]">
          {monthLabel}
        </span>
      </span>
      <ChevronDown className="h-[14px] w-[14px] shrink-0 text-[var(--text-secondary)]" strokeWidth={1.9} />
    </button>
  );
}
