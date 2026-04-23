import type { BillEntry, BillGroup, BillRange } from "@/lib/types/bill";
import { getDayKey } from "@/lib/utils/date";

function inSelectedRange(date: Date, range: BillRange) {
  const anchor = new Date("2026-04-23T23:59:59");

  if (range === "day") {
    return getDayKey(date) === "2026-04-23";
  }

  if (range === "week") {
    const start = new Date(anchor);
    start.setDate(anchor.getDate() - 6);
    return date >= start && date <= anchor;
  }

  return date.getMonth() === 3 && date.getFullYear() === 2026;
}

export function filterBillGroups(
  groups: BillGroup[],
  {
    category,
    range,
    search,
  }: {
    category: BillEntry["type"] | "all";
    range: BillRange;
    search: string;
  },
) {
  const normalizedSearch = search.trim().toLowerCase();

  return groups
    .map((group) => {
      const items = group.items.filter((item) => {
        const occurredAt = new Date(item.occurredAt);
        const matchesRange = inSelectedRange(occurredAt, range);
        const matchesCategory = category === "all" || item.type === category;
        const haystack = `${item.title} ${item.accountName} ${item.note ?? ""} ${item.tagLabel}`.toLowerCase();
        const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);

        return matchesRange && matchesCategory && matchesSearch;
      });

      return {
        ...group,
        items,
      };
    })
    .filter((group) => group.items.length > 0);
}
