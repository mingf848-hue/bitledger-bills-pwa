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
    <div className="sticky bottom-0 mt-auto pt-5">
      <nav className="card-surface flex h-[108px] items-start justify-between rounded-[28px] px-[22px] pt-3">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="flex w-16 flex-col items-center gap-2 pt-1"
            >
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-2xl transition-colors",
                  active ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]" : "text-[var(--text-primary)]",
                )}
              >
                <Icon className={cn("h-6 w-6", active && "fill-current/0")} strokeWidth={1.9} />
              </span>
              <span
                className={cn(
                  "text-[14px] font-medium leading-5",
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
