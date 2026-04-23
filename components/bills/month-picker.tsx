import { CalendarDays, ChevronDown } from "lucide-react";

type MonthPickerProps = {
  monthLabel: string;
  onClick?: () => void;
};

export function MonthPicker({ monthLabel, onClick }: MonthPickerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="card-surface flex h-[42px] w-[140px] shrink-0 items-center justify-between rounded-[15px] px-[11px]"
    >
      <span className="flex min-w-0 flex-1 items-center gap-2 whitespace-nowrap">
        <CalendarDays className="h-[15px] w-[15px] shrink-0 text-[var(--text-primary)]" strokeWidth={1.9} />
        <span className="min-w-0 whitespace-nowrap text-[13px] font-semibold leading-4 text-[var(--text-primary)]">
          {monthLabel}
        </span>
      </span>
      <ChevronDown className="h-[15px] w-[15px] shrink-0 text-[var(--text-secondary)]" strokeWidth={1.9} />
    </button>
  );
}
