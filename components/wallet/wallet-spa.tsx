"use client";

import { useState } from "react";
import { AssetsScreen } from "@/components/wallet/screens/assets-screen";
import { BillsScreen } from "@/components/wallet/screens/bills-screen";
import { HomeScreen } from "@/components/wallet/screens/home-screen";
import { StatsScreen } from "@/components/wallet/screens/stats-screen";

type WalletTab = "home" | "bills" | "stats" | "assets";

export function WalletSpa() {
  const [activeTab, setActiveTab] = useState<WalletTab>("home");

  return (
    <>
      {activeTab === "home" ? <HomeScreen onTabChange={setActiveTab} /> : null}
      {activeTab === "bills" ? <BillsScreen onTabChange={setActiveTab} /> : null}
      {activeTab === "stats" ? <StatsScreen onTabChange={setActiveTab} /> : null}
      {activeTab === "assets" ? <AssetsScreen onTabChange={setActiveTab} /> : null}
    </>
  );
}
