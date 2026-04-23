export type Account = {
  id: string;
  userId: string;
  name: string;
  type: "bank" | "wallet" | "exchange" | "cash";
  currency: string;
  institutionName: string;
  mask: string | null;
  icon: string;
  balance: number;
  isVisible: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};
