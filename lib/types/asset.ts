export type Asset = {
  id: string;
  userId: string;
  name: string;
  type: "cash" | "wallet" | "exchange" | "bank";
  platform: string;
  currency: string;
  amount: number;
  valuationAmount: number;
  valuationCurrency: string;
  costBasis: number | null;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
};
