import type { Account } from "@/lib/types/account";

export async function getAccounts(): Promise<Account[]> {
  return [
    {
      id: "acc-adcb",
      userId: "user-1",
      name: "ADCB **** 1234",
      type: "bank",
      currency: "AED",
      institutionName: "ADCB",
      mask: "1234",
      icon: "bank",
      balance: 45230.12,
      isVisible: true,
      sortOrder: 1,
      createdAt: "2026-04-01T10:00:00.000Z",
      updatedAt: "2026-04-23T10:00:00.000Z",
    },
  ];
}
