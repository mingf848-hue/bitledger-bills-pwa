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
      <nav className="card-surface flex h-[78px] items-start justify-between rounded-[22px] px-[14px] pt-[7px]">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="flex w-[50px] flex-col items-center gap-1 pt-1"
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-[10px] transition-colors",
                  active ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                )}
              >
                <Icon className={cn("h-4 w-4", active && "fill-current/0")} strokeWidth={1.9} />
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium leading-3",
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
