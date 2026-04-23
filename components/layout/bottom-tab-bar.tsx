"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChartPie, FileText, Home, Wallet } from "lucide-react";
import { appRoutes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/classnames";

const items = [
  { href: appRoutes.home, label: "首页", icon: Home },
  { href: appRoutes.bills, label: "账单", icon: FileText },
  { href: appRoutes.stats, label: "统计", icon: ChartPie },
  { href: appRoutes.assets, label: "资产", icon: Wallet },
];

export function BottomTabBar() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 mt-auto pt-2.5">
      <nav className="card-surface flex h-[82px] items-start justify-between rounded-[24px] px-4 pt-[10px] pb-[10px]">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="flex w-[56px] flex-col items-center gap-1 pt-0.5"
            >
              <span
                className={cn(
                  "flex h-[34px] w-[34px] items-center justify-center rounded-[12px] transition-colors",
                  active ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                )}
              >
                <Icon className={cn("h-[21px] w-[21px]", active && "fill-current/0")} strokeWidth={1.9} />
              </span>
              <span
                className={cn(
                  "text-[12px] font-medium leading-4",
                  active ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
