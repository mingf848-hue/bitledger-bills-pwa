"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";

export type WalletTransaction = {
  id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  payment_method: string;
  date: string;
  note: string | null;
};

export type WalletAccount = {
  id: string;
  name: string;
  type: "bank" | "wallet" | "exchange" | "cash";
  balance: number;
};

type WalletSummary = {
  income: number;
  expense: number;
  balance: number;
  assets: number;
};

type WalletDataContextValue = {
  accounts: WalletAccount[];
  transactions: WalletTransaction[];
  summary: WalletSummary;
  isLoading: boolean;
  error: string | null;
  formatAmount: (value: number) => string;
};

const WalletDataContext = createContext<WalletDataContextValue | null>(null);

const currencyFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatAmount(value: number) {
  return currencyFormatter.format(Math.abs(value));
}

function normalizeTransaction(row: Record<string, unknown>): WalletTransaction {
  return {
    id: String(row.id),
    amount: Number(row.amount ?? 0),
    type: row.type === "income" ? "income" : "expense",
    category: String(row.category ?? "其他"),
    payment_method: String(row.payment_method ?? "未知账户"),
    date: String(row.date ?? new Date().toISOString()),
    note: row.note == null ? null : String(row.note),
  };
}

function normalizeAccount(row: Record<string, unknown>): WalletAccount {
  const rawType = String(row.type ?? "wallet");
  return {
    id: String(row.id),
    name: String(row.name ?? "未命名账户"),
    type: ["bank", "wallet", "exchange", "cash"].includes(rawType)
      ? (rawType as WalletAccount["type"])
      : "wallet",
    balance: Number(row.balance ?? 0),
  };
}

export function WalletDataProvider({ children }: { children: React.ReactNode }) {
  const [accounts, setAccounts] = useState<WalletAccount[]>([]);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadWalletData() {
      setIsLoading(true);
      setError(null);

      const [transactionsResult, accountsResult] = await Promise.all([
        supabase.from("transactions").select("id, amount, type, category, payment_method, date, note").order("date", { ascending: false }),
        supabase.from("accounts").select("id, name, type, balance").order("name", { ascending: true }),
      ]);

      if (!isMounted) {
        return;
      }

      if (transactionsResult.error || accountsResult.error) {
        setError(transactionsResult.error?.message ?? accountsResult.error?.message ?? "Supabase 数据读取失败");
      }

      setTransactions((transactionsResult.data ?? []).map((row) => normalizeTransaction(row)));
      setAccounts((accountsResult.data ?? []).map((row) => normalizeAccount(row)));
      setIsLoading(false);
    }

    loadWalletData();

    return () => {
      isMounted = false;
    };
  }, []);

  const summary = useMemo(() => {
    const income = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);
    const expense = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);
    const assets = accounts.reduce((total, account) => total + account.balance, 0);

    return {
      income,
      expense,
      balance: income - expense,
      assets,
    };
  }, [accounts, transactions]);

  const value = useMemo(
    () => ({
      accounts,
      transactions,
      summary,
      isLoading,
      error,
      formatAmount,
    }),
    [accounts, error, isLoading, summary, transactions],
  );

  return <WalletDataContext.Provider value={value}>{children}</WalletDataContext.Provider>;
}

export function useWalletDataContext() {
  const context = useContext(WalletDataContext);

  if (!context) {
    throw new Error("useWalletDataContext must be used inside WalletDataProvider");
  }

  return context;
}

