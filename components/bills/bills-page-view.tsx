"use client";

import { useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import type { BillEntry, BillPageSnapshot, BillType } from "@/lib/types/bill";
import { BillDetailModal } from "@/components/bills/bill-detail-modal";
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

type BillsPageViewProps = {
  initialData: BillPageSnapshot;
};

const monthOptions = ["2026年2月", "2026年3月", "2026年4月"];

export function BillsPageView({ initialData }: BillsPageViewProps) {
  const { data, isSavingNote, saveBillNote } = useBillsQuery(initialData);
  const {
    activeCategory,
    setActiveCategory,
    activeRange,
    setActiveRange,
    searchValue,
    setSearchValue,
  } = useBillFilters();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [monthIndex, setMonthIndex] = useState(() => {
    const matchedIndex = monthOptions.indexOf(data.monthLabel);
    return matchedIndex >= 0 ? matchedIndex : monthOptions.length - 1;
  });
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<"notifications" | "profile" | null>(null);
  const [selectedBill, setSelectedBill] = useState<BillEntry | null>(null);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [statusMessage, setStatusMessage] = useState("已加载本月账单");

  function cycleMonth() {
    setMonthIndex((current) => (current + 1) % monthOptions.length);
    setStatusMessage(`已切换到 ${monthOptions[(monthIndex + 1) % monthOptions.length]}`);
  }

  function focusSearch() {
    searchInputRef.current?.focus();
    setStatusMessage("可以直接输入搜索账单、商家或备注");
  }

  function toggleFilterPanel() {
    setIsFilterPanelOpen((current) => !current);
    setActiveOverlay(null);
    setStatusMessage(isFilterPanelOpen ? "已收起筛选面板" : "已展开筛选面板");
  }

  function openNotifications() {
    setActiveOverlay((current) => (current === "notifications" ? null : "notifications"));
    setIsFilterPanelOpen(false);
    setHasUnreadNotifications(false);
    setStatusMessage("通知面板已更新");
  }

  function openProfile() {
    setActiveOverlay((current) => (current === "profile" ? null : "profile"));
    setIsFilterPanelOpen(false);
    setStatusMessage("个人面板已展开");
  }

  function setCategoryWithFeedback(category: BillType | "all", label: string) {
    setActiveCategory(category);
    setStatusMessage(`已切换到${label}`);
  }

  function setRangeWithFeedback(range: "day" | "week" | "month", label: string) {
    setActiveRange(range);
    setStatusMessage(`已切换到${label}视图`);
  }

  function resetFilters() {
    setActiveCategory("all");
    setActiveRange("day");
    setSearchValue("");
    setStatusMessage("筛选条件已重置");
  }

  function openBillDetail(item: BillEntry) {
    setSelectedBill(item);
    setStatusMessage(`已打开 ${item.title} 的详情`);
  }

  async function handleSaveBillNote(note: string | null) {
    if (!selectedBill) {
      return;
    }

    const snapshot = await saveBillNote(selectedBill.id, note);
    const updatedBill =
      snapshot.groups.flatMap((group) => group.items).find((item) => item.id === selectedBill.id) ?? null;

    setSelectedBill(updatedBill);
    setStatusMessage(note ? "备注已保存" : "备注已清空");
  }

  const filteredGroups = useMemo(
    () =>
      filterBillGroups(data.groups, {
        category: activeCategory,
        range: activeRange,
        search: searchValue,
      }),
    [activeCategory, activeRange, data.groups, searchValue],
  );
  const monthLabel = monthOptions[monthIndex] ?? data.monthLabel;
  const activeFilterCount = Number(activeCategory !== "all") + Number(activeRange !== "day") + Number(Boolean(searchValue.trim()));

  return (
    <MobilePwaShell className="gap-1.5">
      <AppHeader
        onSearchClick={focusSearch}
        onNotificationsClick={openNotifications}
        onProfileClick={openProfile}
        showNotificationDot={hasUnreadNotifications}
      />

      <div className="rounded-[14px] bg-[rgba(255,255,255,0.7)] px-3 py-2 text-[11px] font-medium leading-4 text-[var(--text-secondary)] shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
        {statusMessage}
      </div>

      {activeOverlay ? (
        <div className="card-surface rounded-[16px] px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[13px] font-semibold leading-4 text-[var(--text-primary)]">
                {activeOverlay === "notifications" ? "通知中心" : "个人面板"}
              </div>
              <div className="mt-1 text-[11px] leading-4 text-[var(--text-secondary)]">
                {activeOverlay === "notifications"
                  ? "今天有 3 条账单变动提醒，最新一条来自 OKX 理财收益。"
                  : "当前账号：BitLedger Pro，已同步 4 个账户，数据更新时间为刚刚。"}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveOverlay(null)}
              className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[var(--chip-bg)] text-[var(--text-secondary)]"
              aria-label="Close overlay"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex items-center gap-2 pt-0.5">
        <MonthPicker monthLabel={monthLabel} onClick={cycleMonth} />
        <SearchInput value={searchValue} onChange={setSearchValue} inputRef={searchInputRef} />
        <FilterButton active={isFilterPanelOpen || activeFilterCount > 0} onClick={toggleFilterPanel} />
      </div>

      {isFilterPanelOpen ? (
        <div className="card-surface rounded-[16px] px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold leading-4 text-[var(--text-primary)]">快速筛选</div>
            <button
              type="button"
              onClick={resetFilters}
              className="text-[11px] font-medium leading-4 text-[var(--brand-primary)]"
            >
              重置
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategoryWithFeedback("expense", "支出")}
              className="rounded-[10px] bg-[var(--expense-soft)] px-3 py-1.5 text-[11px] font-medium text-[var(--expense)]"
            >
              只看支出
            </button>
            <button
              type="button"
              onClick={() => setCategoryWithFeedback("income", "收入")}
              className="rounded-[10px] bg-[var(--brand-primary-soft)] px-3 py-1.5 text-[11px] font-medium text-[var(--brand-primary)]"
            >
              只看收入
            </button>
            <button
              type="button"
              onClick={() => setRangeWithFeedback("week", "周")}
              className="rounded-[10px] bg-[var(--chip-bg)] px-3 py-1.5 text-[11px] font-medium text-[var(--text-primary)]"
            >
              最近 7 天
            </button>
            <button
              type="button"
              onClick={() => setSearchValue("")}
              className="rounded-[10px] bg-[var(--chip-bg)] px-3 py-1.5 text-[11px] font-medium text-[var(--text-primary)]"
            >
              清空搜索
            </button>
          </div>
        </div>
      ) : null}

      <div className="relative h-[48px] rounded-[22px] bg-[var(--filter-group-bg)]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <CategoryTabs
            value={activeCategory}
            onChange={(category) => setCategoryWithFeedback(category, category === "all" ? "全部" : category === "expense" ? "支出" : category === "income" ? "收入" : category === "wealth" ? "理财" : "转账")}
          />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <RangeTabs
            value={activeRange}
            onChange={(range) => setRangeWithFeedback(range, range === "day" ? "日" : range === "week" ? "周" : "月")}
          />
        </div>
      </div>

      <SummaryDualCard
        summary={data.summary}
        activeCategory={activeCategory}
        onExpenseClick={() => setCategoryWithFeedback("expense", "支出")}
        onIncomeClick={() => setCategoryWithFeedback("income", "收入")}
      />

      <div className="flex flex-col gap-1.5">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => <BillDateGroup key={group.id} group={group} onItemClick={openBillDetail} />)
        ) : (
          <EmptyState />
        )}
      </div>

      <BottomTabBar />

      {selectedBill ? (
        <BillDetailModal
          key={selectedBill.id}
          bill={selectedBill}
          isSaving={isSavingNote}
          onClose={() => setSelectedBill(null)}
          onSave={handleSaveBillNote}
        />
      ) : null}
    </MobilePwaShell>
  );
}
