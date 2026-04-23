"use client";

import { useEffect, useState } from "react";
import type { BillPageSnapshot } from "@/lib/types/bill";
import { getBillPageSnapshot, updateBillNote } from "@/services/bills.service";

export function useBillsQuery(initialData: BillPageSnapshot) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingNote, setIsSavingNote] = useState(false);

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

  async function saveBillNote(billId: string, note: string | null) {
    setIsSavingNote(true);

    try {
      const snapshot = await updateBillNote({ billId, note });
      setData(snapshot);
      return snapshot;
    } finally {
      setIsSavingNote(false);
    }
  }

  return { data, isLoading, isSavingNote, saveBillNote };
}
