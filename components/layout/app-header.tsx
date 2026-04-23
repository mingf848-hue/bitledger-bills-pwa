import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { IconButton } from "@/components/common/icon-button";

export function AppHeader() {
  return (
    <header className="flex h-14 items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Image
          src="/logos/bitledger-mark.svg"
          alt="BitLedger logo"
          width={30}
          height={30}
          priority
          className="h-[30px] w-[30px]"
        />
        <div className="text-[20px] font-semibold leading-[26px] tracking-[-0.04em] text-[var(--text-primary)]">
          <span>BitLedger </span>
          <span className="text-[var(--brand-primary)]">Pro</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <IconButton>
          <Search className="h-[21px] w-[21px] stroke-[1.9]" />
        </IconButton>
        <IconButton className="overflow-visible">
          <Bell className="h-[21px] w-[21px] stroke-[1.9]" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[var(--expense)]" />
        </IconButton>
        <button
          type="button"
          className="h-8 w-8 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,#65A8FF_0%,#2F6BFF_48%,#17338B_100%)] shadow-[0_8px_16px_rgba(47,107,255,0.16)]"
          aria-label="Open profile"
        >
          <span className="sr-only">Profile</span>
          <span className="block h-full w-full bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.95)_0,rgba(255,255,255,0.15)_20%,transparent_38%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.75)_0,rgba(255,255,255,0)_38%)]" />
        </button>
      </div>
    </header>
  );
}
