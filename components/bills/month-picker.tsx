import { CalendarDays, ChevronDown } from "lucide-react";

type MonthPickerProps = {
  monthLabel: string;
};

export function MonthPicker({ monthLabel }: MonthPickerProps) {
  return (
    <button
      type="button"
      className="card-surface flex h-[48px] w-[122px] items-center justify-between rounded-[16px] px-[14px]"
    >
      <span className="flex items-center gap-2.5">
        <CalendarDays className="h-[18px] w-[18px] text-[var(--text-primary)]" strokeWidth={1.9} />
        <span className="text-[16px] font-semibold leading-6 text-[var(--text-primary)]">
          {monthLabel}
        </span>
      </span>
      <ChevronDown className="h-[18px] w-[18px] text-[var(--text-secondary)]" strokeWidth={1.9} />
    </button>
  );
}
