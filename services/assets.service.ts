import type { Asset } from "@/lib/types/asset";

export async function getAssets(): Promise<Asset[]> {
  return [
    {
      id: "asset-okx",
      userId: "user-1",
      name: "OKX Earn",
      type: "exchange",
      platform: "OKX",
      currency: "USDT",
      amount: 3500,
      valuationAmount: 12870,
      valuationCurrency: "AED",
      costBasis: 12000,
      isVisible: true,
      createdAt: "2026-04-01T10:00:00.000Z",
      updatedAt: "2026-04-23T10:00:00.000Z",
    },
  ];
}
