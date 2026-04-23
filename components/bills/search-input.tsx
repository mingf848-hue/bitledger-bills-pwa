import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="card-surface flex h-14 flex-1 items-center rounded-[18px] px-[18px]">
      <Search className="mr-3 h-5 w-5 text-[var(--text-tertiary)]" strokeWidth={1.9} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="搜索账单、商家、备注"
        className="w-full border-none bg-transparent text-[16px] font-medium leading-6 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
      />
    </label>
  );
}
