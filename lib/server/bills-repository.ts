import "server-only";

import type { BillEntry, BillGroup, BillPageSnapshot, BillSummary, UpdateBillNoteInput } from "@/lib/types/bill";
import { createServerSupabaseClient, hasSupabaseServerConfig } from "@/lib/supabase/server";

type BillsRepository = {
  getBillPageSnapshot: () => Promise<BillPageSnapshot>;
  updateBillNote: (input: UpdateBillNoteInput) => Promise<BillPageSnapshot>;
};

type BillsTableRow = {
  id: string;
  user_id: string;
  account_id: string;
  category_id: string | null;
  type: string;
  title: string;
  note: string | null;
  amount: number;
  currency: string;
  occurred_at: string;
  merchant_name: string | null;
  accounts:
    | {
        name: string | null;
        institution_name: string | null;
        icon: string | null;
        mask: string | null;
      }
    | Array<{
        name: string | null;
        institution_name: string | null;
        icon: string | null;
        mask: string | null;
      }>
    | null;
  categories:
    | {
        name: string | null;
        type: string | null;
        icon: string | null;
        color: string | null;
      }
    | Array<{
        name: string | null;
        type: string | null;
        icon: string | null;
        color: string | null;
      }>
    | null;
};

const mockGroups: BillGroup[] = [
  {
    id: "2026-04-23",
    label: "今天",
    subtitle: "4月23日",
    expenseTotal: 522.45,
    incomeTotal: 3100,
    currency: "AED",
    items: [
      {
        id: "bill-1",
        userId: "user-1",
        accountId: "acc-adcb",
        categoryId: "cat-shopping",
        type: "expense",
        title: "Apple Pay 自动记账",
        note: null,
        amount: -89.9,
        currency: "AED",
        occurredAt: "2026-04-23T18:45:00.000Z",
        merchantName: "Apple Pay",
        accountName: "ADCB **** 1234",
        iconKey: "apple",
        tagLabel: "购物",
        tagTone: "expense",
      },
      {
        id: "bill-2",
        userId: "user-1",
        accountId: "acc-adcb",
        categoryId: "cat-subscription",
        type: "expense",
        title: "Ai",
        note: null,
        amount: -19.99,
        currency: "AED",
        occurredAt: "2026-04-23T16:32:00.000Z",
        merchantName: "OpenAI",
        accountName: "ADCB **** 1234",
        iconKey: "ai",
        tagLabel: "订阅",
        tagTone: "income",
      },
      {
        id: "bill-3",
        userId: "user-1",
        accountId: "acc-okx",
        categoryId: "cat-wealth",
        type: "wealth",
        title: "OKX 理财收益",
        note: null,
        amount: 1200,
        currency: "USDT",
        occurredAt: "2026-04-23T09:15:00.000Z",
        merchantName: "OKX",
        accountName: "OKX 资金账户",
        iconKey: "okx",
        tagLabel: "理财",
        tagTone: "wealth",
      },
      {
        id: "bill-4",
        userId: "user-1",
        accountId: "acc-adcb",
        categoryId: "cat-transfer",
        type: "transfer",
        title: "转账给张三",
        note: null,
        amount: -500,
        currency: "AED",
        occurredAt: "2026-04-23T08:20:00.000Z",
        merchantName: null,
        accountName: "ADCB **** 1234",
        iconKey: "bank",
        tagLabel: "转账",
        tagTone: "transfer",
      },
    ],
  },
  {
    id: "2026-04-22",
    label: "昨天",
    subtitle: "4月22日",
    expenseTotal: 1245.6,
    incomeTotal: 6500,
    currency: "AED",
    items: [
      {
        id: "bill-5",
        userId: "user-1",
        accountId: "acc-huobi",
        categoryId: "cat-wealth",
        type: "wealth",
        title: "火币 理财收益",
        note: null,
        amount: 2500,
        currency: "USDT",
        occurredAt: "2026-04-22T21:35:00.000Z",
        merchantName: "Huobi",
        accountName: "火币 资金账户",
        iconKey: "fire",
        tagLabel: "理财",
        tagTone: "wealth",
      },
      {
        id: "bill-6",
        userId: "user-1",
        accountId: "acc-bitget",
        categoryId: "cat-wealth",
        type: "wealth",
        title: "Bitget 理财收益",
        note: null,
        amount: 4000,
        currency: "USDT",
        occurredAt: "2026-04-22T14:10:00.000Z",
        merchantName: "Bitget",
        accountName: "Bitget 资金账户",
        iconKey: "bitget",
        tagLabel: "理财",
        tagTone: "wealth",
      },
      {
        id: "bill-7",
        userId: "user-1",
        accountId: "acc-adcb",
        categoryId: "cat-shopping",
        type: "expense",
        title: "Noon",
        note: null,
        amount: -245.6,
        currency: "AED",
        occurredAt: "2026-04-22T11:05:00.000Z",
        merchantName: "Noon",
        accountName: "ADCB **** 1234",
        iconKey: "shop",
        tagLabel: "购物",
        tagTone: "expense",
      },
    ],
  },
  {
    id: "2026-04-21",
    label: "4月21日",
    subtitle: "星期一",
    expenseTotal: 1862.36,
    incomeTotal: 2300,
    currency: "AED",
    items: [
      {
        id: "bill-8",
        userId: "user-1",
        accountId: "acc-adcb",
        categoryId: "cat-shopping",
        type: "expense",
        title: "Amazon.ae",
        note: null,
        amount: -112.36,
        currency: "AED",
        occurredAt: "2026-04-21T20:22:00.000Z",
        merchantName: "Amazon",
        accountName: "ADCB **** 1234",
        iconKey: "amazon",
        tagLabel: "购物",
        tagTone: "expense",
      },
      {
        id: "bill-9",
        userId: "user-1",
        accountId: "acc-adcb",
        categoryId: "cat-transport",
        type: "expense",
        title: "Careem",
        note: null,
        amount: -35,
        currency: "AED",
        occurredAt: "2026-04-21T18:08:00.000Z",
        merchantName: "Careem",
        accountName: "ADCB **** 1234",
        iconKey: "card",
        tagLabel: "交通",
        tagTone: "income",
      },
      {
        id: "bill-10",
        userId: "user-1",
        accountId: "acc-okx",
        categoryId: "cat-wealth",
        type: "wealth",
        title: "OKX 理财收益",
        note: null,
        amount: 2300,
        currency: "USDT",
        occurredAt: "2026-04-21T10:30:00.000Z",
        merchantName: "OKX",
        accountName: "OKX 资金账户",
        iconKey: "okx",
        tagLabel: "理财",
        tagTone: "wealth",
      },
    ],
  },
];

function cloneSnapshot(snapshot: BillPageSnapshot): BillPageSnapshot {
  return {
    ...snapshot,
    groups: snapshot.groups.map((group) => ({
      ...group,
      items: group.items.map((item) => ({ ...item })),
    })),
  };
}

function createMockSnapshot(groups: BillGroup[] = mockGroups): BillPageSnapshot {
  return {
    monthLabel: "2026年4月",
    summary: {
      expenseAmount: 7109.71,
      expenseTrend: 13.2,
      incomeAmount: 47556.16,
      incomeTrend: 18.7,
      currency: "AED",
    },
    groups: groups.map((group) => ({
      ...group,
      items: group.items.map((item) => ({ ...item })),
    })),
  };
}

let mockSnapshot = createMockSnapshot();

function asSingleObject<T>(value: T | T[] | null | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

function toBillType(value: string): BillEntry["type"] {
  switch (value) {
    case "income":
    case "wealth":
    case "transfer":
      return value;
    default:
      return "expense";
  }
}

function toTagTone(value: string): BillEntry["tagTone"] {
  switch (value) {
    case "income":
    case "wealth":
    case "transfer":
      return value;
    default:
      return "expense";
  }
}

function formatAccountName(account: BillsTableRow["accounts"]) {
  const item = asSingleObject(account);

  if (!item) {
    return "未命名账户";
  }

  if (item.mask) {
    return `${item.name ?? item.institution_name ?? "账户"} **** ${item.mask}`;
  }

  return item.name ?? item.institution_name ?? "未命名账户";
}

function inferIconKey(row: BillsTableRow) {
  const title = `${row.title} ${row.merchant_name ?? ""}`.toLowerCase();
  const account = `${asSingleObject(row.accounts)?.name ?? ""} ${asSingleObject(row.accounts)?.institution_name ?? ""}`.toLowerCase();
  const categoryName = `${asSingleObject(row.categories)?.name ?? ""}`.toLowerCase();

  if (title.includes("apple")) return "apple";
  if (title.includes("openai") || title.includes("ai")) return "ai";
  if (title.includes("okx") || account.includes("okx")) return "okx";
  if (title.includes("bitget") || account.includes("bitget")) return "bitget";
  if (title.includes("huobi") || title.includes("火币")) return "fire";
  if (title.includes("amazon")) return "amazon";
  if (title.includes("careem")) return "card";
  if (title.includes("转账") || categoryName.includes("转账")) return "bank";
  return "shop";
}

function formatMonthLabel(date: Date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

function formatGroupHeading(date: Date) {
  const today = new Date();
  const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayDiff = Math.round((normalizedToday.getTime() - normalizedDate.getTime()) / 86400000);

  if (dayDiff === 0) {
    return { label: "今天", subtitle: `${date.getMonth() + 1}月${date.getDate()}日` };
  }

  if (dayDiff === 1) {
    return { label: "昨天", subtitle: `${date.getMonth() + 1}月${date.getDate()}日` };
  }

  const weekdayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return {
    label: `${date.getMonth() + 1}月${date.getDate()}日`,
    subtitle: weekdayNames[date.getDay()] ?? "",
  };
}

function computeSummary(items: BillEntry[]): BillSummary {
  const expenseAmount = items
    .filter((item) => item.amount < 0)
    .reduce((sum, item) => sum + Math.abs(item.amount), 0);
  const incomeAmount = items
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => sum + item.amount, 0);

  return {
    expenseAmount,
    expenseTrend: 13.2,
    incomeAmount,
    incomeTrend: 18.7,
    currency: items[0]?.currency ?? "AED",
  };
}

function groupBills(items: BillEntry[]) {
  const buckets = new Map<string, BillEntry[]>();

  for (const item of items) {
    const occurredDate = new Date(item.occurredAt);
    const key = occurredDate.toISOString().slice(0, 10);
    const groupItems = buckets.get(key);

    if (groupItems) {
      groupItems.push(item);
    } else {
      buckets.set(key, [item]);
    }
  }

  return Array.from(buckets.entries())
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([key, groupItems]) => {
      const date = new Date(`${key}T00:00:00`);
      const heading = formatGroupHeading(date);
      const expenseTotal = groupItems
        .filter((item) => item.amount < 0)
        .reduce((sum, item) => sum + Math.abs(item.amount), 0);
      const incomeTotal = groupItems
        .filter((item) => item.amount > 0)
        .reduce((sum, item) => sum + item.amount, 0);

      return {
        id: key,
        label: heading.label,
        subtitle: heading.subtitle,
        expenseTotal,
        incomeTotal,
        currency: groupItems[0]?.currency ?? "AED",
        items: groupItems.sort((a, b) => (a.occurredAt < b.occurredAt ? 1 : -1)),
      };
    });
}

function buildSnapshotFromItems(items: BillEntry[]): BillPageSnapshot {
  const latestDate = items[0] ? new Date(items[0].occurredAt) : new Date();

  return {
    monthLabel: formatMonthLabel(latestDate),
    summary: computeSummary(items),
    groups: groupBills(items),
  };
}

function mapRowToBillEntry(row: BillsTableRow): BillEntry {
  const category = asSingleObject(row.categories);

  return {
    id: row.id,
    userId: row.user_id,
    accountId: row.account_id,
    categoryId: row.category_id ?? "",
    type: toBillType(row.type),
    title: row.title,
    note: row.note,
    amount: Number(row.amount),
    currency: row.currency,
    occurredAt: row.occurred_at,
    merchantName: row.merchant_name,
    accountName: formatAccountName(row.accounts),
    iconKey: inferIconKey(row),
    tagLabel: category?.name ?? "未分类",
    tagTone: toTagTone(category?.type ?? row.type),
  };
}

async function listBillsFromSupabase() {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("bills")
    .select(
      `
        id,
        user_id,
        account_id,
        category_id,
        type,
        title,
        note,
        amount,
        currency,
        occurred_at,
        merchant_name,
        accounts ( name, institution_name, icon, mask ),
        categories ( name, type, icon, color )
      `,
    )
    .order("occurred_at", { ascending: false });

  if (error) {
    throw error;
  }

  return ((data ?? []) as BillsTableRow[]).map(mapRowToBillEntry);
}

const mockBillsRepository: BillsRepository = {
  async getBillPageSnapshot() {
    return cloneSnapshot(mockSnapshot);
  },
  async updateBillNote({ billId, note }) {
    const nextTitle = note?.trim();

    mockSnapshot = {
      ...mockSnapshot,
      groups: mockSnapshot.groups.map((group) => ({
        ...group,
        items: group.items.map((item) =>
          item.id === billId
            ? {
                ...item,
                title: nextTitle || item.title,
                note: nextTitle || null,
              }
            : item,
        ),
      })),
    };

    return cloneSnapshot(mockSnapshot);
  },
};

const supabaseBillsRepository: BillsRepository = {
  async getBillPageSnapshot() {
    const items = await listBillsFromSupabase();
    return buildSnapshotFromItems(items);
  },
  async updateBillNote({ billId, note }) {
    const supabase = createServerSupabaseClient();
    const nextTitle = note?.trim();
    const payload: { note: string | null; updated_at?: string; title?: string } = {
      note: nextTitle || null,
      updated_at: new Date().toISOString(),
    };

    if (nextTitle) {
      payload.title = nextTitle;
    }

    const { error } = await supabase.from("bills").update(payload).eq("id", billId);

    if (error) {
      throw error;
    }

    const items = await listBillsFromSupabase();
    return buildSnapshotFromItems(items);
  },
};

function getBillsRepository() {
  return hasSupabaseServerConfig() ? supabaseBillsRepository : mockBillsRepository;
}

export async function getBillPageSnapshotServer() {
  try {
    return await getBillsRepository().getBillPageSnapshot();
  } catch (error) {
    console.error("Failed to load bills from Supabase, falling back to mock snapshot.", error);
    return mockBillsRepository.getBillPageSnapshot();
  }
}

export async function updateBillNoteServer(input: UpdateBillNoteInput) {
  try {
    return await getBillsRepository().updateBillNote(input);
  } catch (error) {
    console.error("Failed to update bill in Supabase, falling back to mock snapshot.", error);
    return mockBillsRepository.updateBillNote(input);
  }
}
