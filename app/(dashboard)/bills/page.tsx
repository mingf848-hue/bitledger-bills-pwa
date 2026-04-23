import { BillsPageView } from "@/components/bills/bills-page-view";
import { getBillPageSnapshotServer } from "@/lib/server/bills-repository";

export const dynamic = "force-dynamic";

export default async function BillsPage() {
  const initialData = await getBillPageSnapshotServer();
  return <BillsPageView initialData={initialData} />;
}
