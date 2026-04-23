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
    <div className="sticky bottom-0 mt-auto pt-4">
      <nav className="card-surface flex h-[94px] items-start justify-between rounded-[26px] px-[18px] pt-[10px]">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="flex w-[58px] flex-col items-center gap-1.5 pt-1"
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-[14px] transition-colors",
                  active ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                )}
              >
                <Icon className={cn("h-5 w-5", active && "fill-current/0")} strokeWidth={1.9} />
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
