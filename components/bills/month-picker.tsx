import { CalendarDays, ChevronDown } from "lucide-react";

type MonthPickerProps = {
  monthLabel: string;
};

export function MonthPicker({ monthLabel }: MonthPickerProps) {
  return (
    <button
      type="button"
      className="card-surface flex h-14 w-[122px] items-center justify-between rounded-[18px] px-4"
    >
      <span className="flex items-center gap-3">
        <CalendarDays className="h-5 w-5 text-[var(--text-primary)]" strokeWidth={1.9} />
        <span className="text-[18px] font-semibold leading-7 text-[var(--text-primary)]">
          {monthLabel}
        </span>
      </span>
      <ChevronDown className="h-5 w-5 text-[var(--text-secondary)]" strokeWidth={1.9} />
    </button>
  );
}
