import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { IconButton } from "@/components/common/icon-button";

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/logos/bitledger-mark.svg"
          alt="BitLedger logo"
          width={40}
          height={40}
          priority
          className="h-10 w-10"
        />
        <div className="text-[24px] font-bold leading-[30px] tracking-[-0.04em] text-[var(--text-primary)]">
          <span>BitLedger </span>
          <span className="text-[var(--brand-primary)]">Pro</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IconButton>
          <Search className="h-6 w-6 stroke-[1.9]" />
        </IconButton>
        <IconButton className="overflow-visible">
          <Bell className="h-6 w-6 stroke-[1.9]" />
          <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-[var(--expense)]" />
        </IconButton>
        <button
          type="button"
          className="h-11 w-11 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,#65A8FF_0%,#2F6BFF_48%,#17338B_100%)] shadow-[0_10px_20px_rgba(47,107,255,0.18)]"
          aria-label="Open profile"
        >
          <span className="sr-only">Profile</span>
          <span className="block h-full w-full bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.95)_0,rgba(255,255,255,0.15)_20%,transparent_38%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.75)_0,rgba(255,255,255,0)_38%)]" />
        </button>
      </div>
    </header>
  );
}
