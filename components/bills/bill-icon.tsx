import {
  Banknote,
  Flame,
  Landmark,
  ShoppingBag,
  Sparkles,
  SquareGanttChart,
  WalletCards,
} from "lucide-react";
import { cn } from "@/lib/utils/classnames";

type BillIconProps = {
  iconKey: string;
};

function iconContent(iconKey: string) {
  switch (iconKey) {
    case "apple":
      return {
        className: "bg-black text-white",
        node: <span className="text-[18px] font-bold tracking-[-0.08em]"></span>,
      };
    case "ai":
      return {
        className: "bg-[#10A37F] text-white",
        node: <Sparkles className="h-[18px] w-[18px]" strokeWidth={2.1} />,
      };
    case "okx":
      return {
        className: "bg-black text-white",
        node: <SquareGanttChart className="h-[18px] w-[18px]" strokeWidth={2.2} />,
      };
    case "bank":
      return {
        className: "bg-[#4C84FF] text-white",
        node: <Landmark className="h-[18px] w-[18px]" strokeWidth={2} />,
      };
    case "fire":
      return {
        className: "bg-[#FF6A00] text-white",
        node: <Flame className="h-[18px] w-[18px]" strokeWidth={2.1} />,
      };
    case "bitget":
      return {
        className: "bg-black text-[#2DE0FF]",
        node: <WalletCards className="h-[18px] w-[18px]" strokeWidth={2.2} />,
      };
    case "amazon":
      return {
        className: "bg-[#232F3E] text-[#FF9900]",
        node: <span className="text-[18px] font-extrabold tracking-[-0.06em]">a</span>,
      };
    case "card":
      return {
        className: "bg-white text-[#FF6B6B] ring-1 ring-[rgba(15,23,42,0.06)]",
        node: <Banknote className="h-[18px] w-[18px]" strokeWidth={2} />,
      };
    case "shop":
    default:
      return {
        className: "bg-[#84BD00] text-white",
        node: <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />,
      };
  }
}

export function BillIcon({ iconKey }: BillIconProps) {
  const icon = iconContent(iconKey);

  return (
    <span
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full text-center shadow-[0_4px_10px_rgba(15,23,42,0.05)]",
        icon.className,
      )}
    >
      {icon.node}
    </span>
  );
}
