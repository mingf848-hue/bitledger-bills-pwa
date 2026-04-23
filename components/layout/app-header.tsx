import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { IconButton } from "@/components/common/icon-button";

type AppHeaderProps = {
  onSearchClick?: () => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  showNotificationDot?: boolean;
};

export function AppHeader({
  onSearchClick,
  onNotificationsClick,
  onProfileClick,
  showNotificationDot = true,
}: AppHeaderProps) {
  return (
    <header className="flex h-[46px] items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/logos/bitledger-mark.svg"
          alt="BitLedger logo"
          width={26}
          height={26}
          priority
          className="h-[26px] w-[26px]"
        />
        <div className="text-[17px] font-semibold leading-5 tracking-[-0.04em] text-[var(--text-primary)]">
          <span>BitLedger </span>
          <span className="text-[var(--brand-primary)]">Pro</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <IconButton onClick={onSearchClick}>
          <Search className="h-[18px] w-[18px] stroke-[1.9]" />
        </IconButton>
        <IconButton className="overflow-visible" onClick={onNotificationsClick}>
          <Bell className="h-[18px] w-[18px] stroke-[1.9]" />
          {showNotificationDot ? (
            <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[var(--expense)]" />
          ) : null}
        </IconButton>
        <button
          type="button"
          onClick={onProfileClick}
          className="h-[26px] w-[26px] overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,#65A8FF_0%,#2F6BFF_48%,#17338B_100%)] shadow-[0_6px_12px_rgba(47,107,255,0.14)]"
          aria-label="Open profile"
        >
          <span className="sr-only">Profile</span>
          <span className="block h-full w-full bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.95)_0,rgba(255,255,255,0.15)_20%,transparent_38%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.75)_0,rgba(255,255,255,0)_38%)]" />
        </button>
      </div>
    </header>
  );
}
