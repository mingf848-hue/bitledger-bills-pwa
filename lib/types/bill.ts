export type BillType = "expense" | "income" | "wealth" | "transfer";
export type BillRange = "day" | "week" | "month";

export type BillEntry = {
  id: string;
  userId: string;
  accountId: string;
  categoryId: string;
  type: BillType;
  title: string;
  note: string | null;
  amount: number;
  currency: string;
  occurredAt: string;
  merchantName: string | null;
  accountName: string;
  iconKey: string;
  tagLabel: string;
  tagTone: "expense" | "income" | "wealth" | "transfer";
};

export type BillGroup = {
  id: string;
  label: string;
  subtitle: string;
  expenseTotal: number;
  incomeTotal: number;
  currency: string;
  items: BillEntry[];
};

export type BillSummary = {
  expenseAmount: number;
  expenseTrend: number;
  incomeAmount: number;
  incomeTrend: number;
  currency: string;
};

export type BillPageSnapshot = {
  monthLabel: string;
  summary: BillSummary;
  groups: BillGroup[];
};

export type UpdateBillNoteInput = {
  billId: string;
  note: string | null;
};
