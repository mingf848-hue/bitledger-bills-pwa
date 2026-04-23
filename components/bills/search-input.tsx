import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="card-surface flex h-[48px] flex-1 items-center rounded-[16px] px-[15px]">
      <Search className="mr-2.5 h-[18px] w-[18px] text-[var(--text-tertiary)]" strokeWidth={1.9} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="搜索账单、商家、备注"
        className="w-full border-none bg-transparent text-[14px] font-medium leading-5 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
      />
    </label>
  );
}
