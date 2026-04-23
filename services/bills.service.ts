import type { BillPageSnapshot, UpdateBillNoteInput } from "@/lib/types/bill";

async function parseSnapshotResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`Bills request failed with ${response.status}`);
  }

  return (await response.json()) as BillPageSnapshot;
}

export async function getBillPageSnapshot(): Promise<BillPageSnapshot> {
  const response = await fetch("/api/bills", {
    method: "GET",
    cache: "no-store",
  });

  return parseSnapshotResponse(response);
}

export async function updateBillNote(input: UpdateBillNoteInput): Promise<BillPageSnapshot> {
  const response = await fetch(`/api/bills/${input.billId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ note: input.note }),
  });

  return parseSnapshotResponse(response);
}
