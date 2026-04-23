import { NextResponse } from "next/server";
import { getBillPageSnapshotServer } from "@/lib/server/bills-repository";

export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await getBillPageSnapshotServer();
  return NextResponse.json(snapshot);
}
