"use client";

import { useMemo } from "react";
import type { BillPageSnapshot } from "@/lib/types/bill";
import { filterBillGroups } from "@/lib/utils/grouping";
import { AppHeader } from "@/components/layout/app-header";
import { BottomTabBar } from "@/components/layout/bottom-tab-bar";
import { MobilePwaShell } from "@/components/layout/mobile-pwa-shell";
import { MonthPicker } from "@/components/bills/month-picker";
import { SearchInput } from "@/components/bills/search-input";
import { FilterButton } from "@/components/bills/filter-button";
import { CategoryTabs } from "@/components/bills/category-tabs";
import { RangeTabs } from "@/components/bills/range-tabs";
import { SummaryDualCard } from "@/components/bills/summary-dual-card";
import { BillDateGroup } from "@/components/bills/bill-date-group";
import { EmptyState } from "@/components/common/empty-state";
import { useBillFilters } from "@/hooks/use-bill-filters";
import { useBillsQuery } from "@/hooks/use-bills-query";
import { useMonthPicker } from "@/hooks/use-month-picker";

type BillsPageViewProps = {
  initialData: BillPageSnapshot;
};

export function BillsPageView({ initialData }: BillsPageViewProps) {
  const { data } = useBillsQuery(initialData);
  const { monthLabel } = useMonthPicker(data.monthLabel);
  const {
    activeCategory,
    setActiveCategory,
    activeRange,
    setActiveRange,
    searchValue,
    setSearchValue,
  } = useBillFilters();

  const filteredGroups = useMemo(
    () =>
      filterBillGroups(data.groups, {
        category: activeCategory,
        range: activeRange,
        search: searchValue,
      }),
    [activeCategory, activeRange, data.groups, searchValue],
  );

  return (
    <MobilePwaShell className="gap-1.5">
      <AppHeader />

      <div className="flex items-center gap-2 pt-0.5">
        <MonthPicker monthLabel={monthLabel} />
        <SearchInput value={searchValue} onChange={setSearchValue} />
        <FilterButton />
      </div>

      <div className="flex min-w-0 items-center gap-3 rounded-[22px] bg-[var(--filter-group-bg)] pr-3 py-3">
        <CategoryTabs value={activeCategory} onChange={setActiveCategory} />
        <RangeTabs value={activeRange} onChange={setActiveRange} />
      </div>

      <SummaryDualCard summary={data.summary} />

      <div className="flex flex-col gap-1.5">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => <BillDateGroup key={group.id} group={group} />)
        ) : (
          <EmptyState />
        )}
      </div>

      <BottomTabBar />
    </MobilePwaShell>
  );
}
