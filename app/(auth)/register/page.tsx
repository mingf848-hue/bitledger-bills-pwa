import Link from "next/link";
import { MobilePwaShell } from "@/components/layout/mobile-pwa-shell";
import { SectionCard } from "@/components/common/section-card";

export default function RegisterPage() {
  return (
    <MobilePwaShell className="justify-center gap-4">
      <SectionCard className="px-6 py-8">
        <h1 className="text-[28px] font-bold leading-[34px] tracking-[-0.03em] text-[var(--text-primary)]">
          注册
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[var(--text-secondary)]">
          已预留 Supabase Auth 接入位。后续将按 profile、accounts、categories、assets 建立新用户初始数据。
        </p>
        <div className="mt-6">
          <Link
            href="/login"
            className="inline-flex h-12 items-center rounded-[16px] bg-[var(--brand-primary)] px-5 text-[15px] font-semibold text-white"
          >
            返回登录
          </Link>
        </div>
      </SectionCard>
    </MobilePwaShell>
  );
}
