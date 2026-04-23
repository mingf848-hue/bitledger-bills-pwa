import { NextResponse } from "next/server";
import type { UpdateBillNoteInput } from "@/lib/types/bill";
import { updateBillNoteServer } from "@/lib/server/bills-repository";

export const dynamic = "force-dynamic";

type RouteParams = {
  params: Promise<{
    billId: string;
  }>;
};

export async function PATCH(request: Request, context: RouteParams) {
  const { billId } = await context.params;
  const body = (await request.json()) as Pick<UpdateBillNoteInput, "note">;
  const snapshot = await updateBillNoteServer({
    billId,
    note: typeof body.note === "string" ? body.note : null,
  });

  return NextResponse.json(snapshot);
}
