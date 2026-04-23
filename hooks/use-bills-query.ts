"use client";

import { useEffect, useState } from "react";
import type { BillPageSnapshot } from "@/lib/types/bill";
import { getBillPageSnapshot } from "@/services/bills.service";

export function useBillsQuery(initialData: BillPageSnapshot) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function hydrate() {
      setIsLoading(true);
      const snapshot = await getBillPageSnapshot();

      if (isMounted) {
        setData(snapshot);
        setIsLoading(false);
      }
    }

    void hydrate();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading };
}
