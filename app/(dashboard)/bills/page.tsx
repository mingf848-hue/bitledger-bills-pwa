import { BillsPageView } from "@/components/bills/bills-page-view";
import { getBillPageSnapshot } from "@/services/bills.service";

export default async function BillsPage() {
  const initialData = await getBillPageSnapshot();
  return <BillsPageView initialData={initialData} />;
}
