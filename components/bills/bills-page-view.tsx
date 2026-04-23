"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import {
  BatteryFull,
  Bell,
  CalendarDays,
  ChartPie,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  Search,
  SignalHigh,
  SlidersHorizontal,
  Wallet,
  Wifi,
} from "lucide-react";
import { BillCategoryTag } from "@/components/bills/bill-category-tag";
import { BillIcon } from "@/components/bills/bill-icon";
import { EmptyState } from "@/components/common/empty-state";
import { useBillFilters } from "@/hooks/use-bill-filters";
import { useBillsQuery } from "@/hooks/use-bills-query";
import { useMonthPicker } from "@/hooks/use-month-picker";
import { appRoutes } from "@/lib/constants/routes";
import type { BillGroup, BillPageSnapshot } from "@/lib/types/bill";
import { formatPlainAmount, formatSignedAmount } from "@/lib/utils/currency";
import { filterBillGroups } from "@/lib/utils/grouping";
import { cn } from "@/lib/utils/classnames";

const CATEGORY_ITEMS = [
  { label: "全部", value: "all" as const },
  { label: "支出", value: "expense" as const },
  { label: "收入", value: "income" as const },
  { label: "理财", value: "wealth" as const },
  { label: "转账", value: "transfer" as const },
];

const RANGE_ITEMS = [
  { label: "日", value: "day" as const },
  { label: "周", value: "week" as const },
  { label: "月", value: "month" as const },
];

const NAV_ITEMS = [
  { href: appRoutes.home, label: "首页", icon: Home },
  { href: appRoutes.bills, label: "账单", icon: FileText, active: true },
  { href: appRoutes.stats, label: "统计", icon: ChartPie },
  { href: appRoutes.assets, label: "资产", icon: Wallet },
];

const LIST_SECTION_HEIGHT = 585;
const GROUP_HEADER_HEIGHT = 35;
const ITEM_ROW_HEIGHT = 60;

type BillsPageViewProps = {
  initialData: BillPageSnapshot;
};

function fitGroupsToViewport(groups: BillGroup[]) {
  let remaining = LIST_SECTION_HEIGHT;

  return groups
    .map((group) => {
      if (remaining < GROUP_HEADER_HEIGHT) {
        return null;
      }

      remaining -= GROUP_HEADER_HEIGHT;
      const maxItems = Math.max(0, Math.min(group.items.length, Math.floor(remaining / ITEM_ROW_HEIGHT)));
      remaining -= maxItems * ITEM_ROW_HEIGHT;

      if (maxItems === 0) {
        return null;
      }

      return {
        ...group,
        items: group.items.slice(0, maxItems),
      };
    })
    .filter((group): group is NonNullable<typeof group> => group !== null);
}

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
  const visibleGroups = useMemo(() => fitGroupsToViewport(filteredGroups), [filteredGroups]);

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <div className="mx-auto w-full max-w-[430px]">
        <div className="h-[932px] overflow-hidden bg-[var(--bg-page)]">
          <div className="flex h-[30px] items-center justify-between px-5 text-[10px] font-semibold leading-none text-[#111827]">
            <span>14:00</span>
            <div className="flex items-center gap-1 text-[#111827]">
              <SignalHigh className="h-3.5 w-3.5" strokeWidth={2.2} />
              <Wifi className="h-3.5 w-3.5" strokeWidth={2.2} />
              <BatteryFull className="h-4 w-4" strokeWidth={2.2} />
            </div>
          </div>

          <header className="flex h-[60px] items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <Image
                src="/logos/bitledger-mark.svg"
                alt="BitLedger logo"
                width={30}
                height={30}
                priority
                className="h-[30px] w-[30px]"
              />
              <div className="text-[16px] font-semibold leading-5 tracking-[-0.03em] text-[var(--text-primary)]">
                <span>BitLedger</span>
                <span className="ml-0.5 text-[var(--brand-primary)]">Pro</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[var(--text-primary)]">
              <Search className="h-[18px] w-[18px]" strokeWidth={1.9} />
              <div className="relative">
                <Bell className="h-[18px] w-[18px]" strokeWidth={1.9} />
                <span className="absolute -top-1 right-0.5 h-1.5 w-1.5 rounded-full bg-[var(--expense)]" />
              </div>
              <button
                type="button"
                className="h-[28px] w-[28px] overflow-hidden rounded-full bg-[radial-gradient(circle_at_45%_30%,#6DB6FF_0%,#2F6BFF_48%,#17338B_100%)] shadow-[0_5px_10px_rgba(47,107,255,0.18)]"
                aria-label="Open profile"
              >
                <span className="sr-only">Profile</span>
              </button>
            </div>
          </header>

          <div className="flex h-[45px] items-center gap-[10px] pl-5 pr-2.5">
            <button
              type="button"
              className="card-surface flex h-[25px] w-[120px] items-center justify-between rounded-[13px] px-[10px]"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-semibold leading-3 text-[var(--text-primary)]">
                <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.9} />
                {monthLabel}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-[var(--text-secondary)]" strokeWidth={1.9} />
            </button>

            <label className="card-surface flex h-[25px] w-[230px] items-center rounded-[13px] px-[10px]">
              <Search className="mr-1.5 h-3.5 w-3.5 shrink-0 text-[var(--text-tertiary)]" strokeWidth={1.9} />
              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="搜索账单、商家、备注"
                className="w-full min-w-0 border-none bg-transparent text-[11px] font-medium leading-3 text-[var(--text-primary)] outline-none placeholder:text-[11px] placeholder:text-[var(--text-tertiary)]"
              />
            </label>

            <button
              type="button"
              className="card-surface flex h-[25px] w-[30px] items-center justify-center rounded-[13px] text-[var(--text-primary)]"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.9} />
            </button>
          </div>

          <div className="relative h-[35px]">
            <div className="absolute left-[15.47px] top-[3.5px] flex items-center gap-[10.16px]">
              {CATEGORY_ITEMS.map((item) => {
                const active = activeCategory === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setActiveCategory(item.value)}
                    className={cn(
                      "flex h-[28px] w-[44px] items-center justify-center whitespace-nowrap rounded-[16px] border text-[14px] font-medium leading-5 transition-colors",
                      active
                        ? "border-transparent bg-[#1665F5] text-white"
                        : "border-[#E6E8F2] bg-[#F5F7FA] text-[#4B5267]",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="absolute left-[299.39px] top-[3.5px] flex items-center gap-0">
              {RANGE_ITEMS.map((item) => {
                const active = activeRange === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setActiveRange(item.value)}
                    className={cn(
                      "flex h-[28px] w-[38px] items-center justify-center rounded-[16px] border text-[14px] font-medium leading-5 transition-colors",
                      active
                        ? "border-transparent bg-[#1665F5] text-white"
                        : "border-[#E6E8F2] bg-[#F5F7FA] text-[#4B5267]",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex h-[120px] px-[15px]">
            <div className="flex h-[120px] w-[200px] flex-col justify-between rounded-[28px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <div className="text-[11px] font-medium leading-4 text-[var(--text-secondary)]">本月支出（AED）</div>
              <div className="text-[18px] font-bold leading-5 tracking-[-0.03em] text-[var(--expense)]">
                {formatPlainAmount(data.summary.expenseAmount)}
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-1 text-[11px] leading-4">
                  <span className="text-[var(--text-secondary)]">较上月</span>
                  <span className="font-semibold text-[var(--expense)]">{data.summary.expenseTrend.toFixed(1)}%</span>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[var(--expense-soft)] text-[var(--expense)]">
                  ↗
                </span>
              </div>
            </div>

            <div className="flex h-[120px] w-[200px] flex-col justify-between rounded-[28px] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <div className="text-[11px] font-medium leading-4 text-[var(--text-secondary)]">本月收入（AED）</div>
              <div className="text-[18px] font-bold leading-5 tracking-[-0.03em] text-[var(--income)]">
                {formatPlainAmount(data.summary.incomeAmount)}
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-1 text-[11px] leading-4">
                  <span className="text-[var(--text-secondary)]">较上月</span>
                  <span className="font-semibold text-[var(--income)]">{data.summary.incomeTrend.toFixed(1)}%</span>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-[10px] bg-[var(--income-soft)] text-[var(--income)]">
                  ↗
                </span>
              </div>
            </div>
          </div>

          <div className="h-[585px] overflow-hidden">
            {visibleGroups.length > 0 ? (
              visibleGroups.map((group) => (
                <section
                  key={group.id}
                  className="mx-[15px] overflow-hidden rounded-[26px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-[35px] items-center justify-between px-3">
                    <div className="flex items-end gap-1.5">
                      <h2 className="text-[13px] font-semibold leading-4 text-[var(--text-primary)]">{group.label}</h2>
                      <span className="text-[10px] font-medium leading-3 text-[var(--text-secondary)]">{group.subtitle}</span>
                    </div>
                    <div className="flex items-center gap-1.5 whitespace-nowrap text-[10px] leading-3">
                      <span className="text-[var(--text-secondary)]">
                        支出 <span className="font-medium text-[var(--expense)]">{formatPlainAmount(group.expenseTotal)} {group.currency}</span>
                      </span>
                      <span className="text-[var(--text-secondary)]">
                        收入 <span className="font-medium text-[var(--income)]">{formatPlainAmount(group.incomeTotal)} {group.currency}</span>
                      </span>
                    </div>
                  </div>

                  {group.items.map((item, index) => {
                    const positive = item.amount > 0;

                    return (
                      <div
                        key={item.id}
                        className={cn(
                          "grid h-[60px] grid-cols-[40px_minmax(0,1fr)_44px_98px_12px] items-center gap-2 px-3",
                          index > 0 && "border-t border-[var(--divider)]",
                        )}
                      >
                        <BillIcon iconKey={item.iconKey} />
                        <div className="min-w-0">
                          <div className="truncate text-[11px] font-medium leading-4 text-[var(--text-primary)]">{item.title}</div>
                          <div className="mt-0.5 truncate text-[9px] font-medium leading-3 text-[var(--text-secondary)]">{item.accountName}</div>
                        </div>
                        <div className="flex justify-center">
                          <BillCategoryTag label={item.tagLabel} tone={item.tagTone} />
                        </div>
                        <div className="text-right">
                          <div
                            className={cn(
                              "whitespace-nowrap text-[11px] font-semibold leading-4",
                              positive ? "text-[var(--income)]" : "text-[var(--expense)]",
                            )}
                          >
                            {formatSignedAmount(item.amount, item.currency)}
                          </div>
                          <div className="mt-0.5 text-[9px] font-medium leading-3 text-[var(--text-secondary)]">
                            {new Date(item.occurredAt).toLocaleTimeString("zh-CN", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })}
                          </div>
                        </div>
                        <ChevronRight className="h-[10px] w-[10px] text-[var(--text-secondary)]" strokeWidth={2} />
                      </div>
                    );
                  })}
                </section>
              ))
            ) : (
              <div className="px-[15px]">
                <EmptyState />
              </div>
            )}
          </div>

          <div className="h-[57px] bg-white px-6 pt-1 shadow-[0_-8px_24px_rgba(15,23,42,0.05)]">
            <nav className="flex h-full items-center justify-between">
              {NAV_ITEMS.map(({ href, label, icon: Icon, active }) => (
                <Link key={href} href={href} className="flex w-[50px] flex-col items-center gap-1">
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-[10px]",
                      active ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-medium leading-3",
                      active ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                    )}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
