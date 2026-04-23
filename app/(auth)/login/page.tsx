import Link from "next/link";
import { MobilePwaShell } from "@/components/layout/mobile-pwa-shell";
import { SectionCard } from "@/components/common/section-card";

export default function LoginPage() {
  return (
    <MobilePwaShell className="justify-center gap-4">
      <SectionCard className="px-6 py-8">
        <h1 className="text-[28px] font-bold leading-[34px] tracking-[-0.03em] text-[var(--text-primary)]">
          登录
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[var(--text-secondary)]">
          已预留 Supabase Auth 接入位。后续将使用邮箱密码或 magic link 完成用户登录。
        </p>
        <div className="mt-6">
          <Link
            href="/register"
            className="inline-flex h-12 items-center rounded-[16px] bg-[var(--brand-primary)] px-5 text-[15px] font-semibold text-white"
          >
            去注册
          </Link>
        </div>
      </SectionCard>
    </MobilePwaShell>
  );
}
