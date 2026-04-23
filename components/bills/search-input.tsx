import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="card-surface flex h-[44px] min-w-0 flex-1 items-center rounded-[15px] px-3">
      <Search className="mr-2 h-4 w-4 shrink-0 text-[var(--text-tertiary)]" strokeWidth={1.9} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="搜索账单、商家、备注"
        className="w-full min-w-0 border-none bg-transparent text-[13px] font-medium leading-4 text-[var(--text-primary)] outline-none placeholder:text-[12px] placeholder:leading-4 placeholder:text-[var(--text-tertiary)]"
      />
    </label>
  );
}
