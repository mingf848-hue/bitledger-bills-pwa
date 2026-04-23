import { AppHeader } from "@/components/layout/app-header";
import { BottomTabBar } from "@/components/layout/bottom-tab-bar";
import { MobilePwaShell } from "@/components/layout/mobile-pwa-shell";
import { SectionCard } from "@/components/common/section-card";

type PlaceholderDashboardPageProps = {
  title: string;
  description: string;
};

export function PlaceholderDashboardPage({
  title,
  description,
}: PlaceholderDashboardPageProps) {
  return (
    <MobilePwaShell className="gap-4">
      <AppHeader />
      <div className="pt-4">
        <h1 className="text-[40px] font-bold leading-[46px] tracking-[-0.04em]">{title}</h1>
      </div>
      <SectionCard className="px-5 py-6">
        <h2 className="text-[20px] font-semibold leading-[28px] text-[var(--text-primary)]">
          模块已预留
        </h2>
        <p className="mt-2 text-[15px] leading-[24px] text-[var(--text-secondary)]">
          {description}
        </p>
      </SectionCard>
      <SectionCard className="px-5 py-6">
        <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
          当前重点已完成账单页高保真实现，其余页面保留统一的 PWA 外壳、导航与扩展位，便于后续继续接入 Supabase 数据和业务逻辑。
        </p>
      </SectionCard>
      <BottomTabBar />
    </MobilePwaShell>
  );
}
