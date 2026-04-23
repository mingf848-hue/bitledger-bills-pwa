import { CalendarDays, ChevronDown } from "lucide-react";

type MonthPickerProps = {
  monthLabel: string;
};

export function MonthPicker({ monthLabel }: MonthPickerProps) {
  return (
    <button
      type="button"
      className="card-surface flex h-[44px] w-[132px] shrink-0 items-center justify-between rounded-[15px] px-3"
    >
      <span className="flex min-w-0 items-center gap-2 whitespace-nowrap">
        <CalendarDays className="h-4 w-4 shrink-0 text-[var(--text-primary)]" strokeWidth={1.9} />
        <span className="whitespace-nowrap text-[14px] font-semibold leading-5 text-[var(--text-primary)]">
          {monthLabel}
        </span>
      </span>
      <ChevronDown className="h-4 w-4 shrink-0 text-[var(--text-secondary)]" strokeWidth={1.9} />
    </button>
  );
}
