"use client";

import { useState } from "react";
import type { BillRange, BillType } from "@/lib/types/bill";

export function useBillFilters() {
  const [activeCategory, setActiveCategory] = useState<BillType | "all">("all");
  const [activeRange, setActiveRange] = useState<BillRange>("day");
  const [searchValue, setSearchValue] = useState("");

  return {
    activeCategory,
    setActiveCategory,
    activeRange,
    setActiveRange,
    searchValue,
    setSearchValue,
  };
}
