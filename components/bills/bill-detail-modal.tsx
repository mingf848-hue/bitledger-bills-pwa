"use client";

import { useState } from "react";
import { CalendarDays, PencilLine, Tag, WalletCards, X } from "lucide-react";
import type { BillEntry } from "@/lib/types/bill";
import { BillCategoryTag } from "@/components/bills/bill-category-tag";
import { BillIcon } from "@/components/bills/bill-icon";
import { formatSignedAmount } from "@/lib/utils/currency";
import { cn } from "@/lib/utils/classnames";

type BillDetailModalProps = {
  bill: BillEntry;
  isSaving: boolean;
  onClose: () => void;
  onSave: (note: string | null) => Promise<void>;
};

export function BillDetailModal({
  bill,
  isSaving,
  onClose,
  onSave,
}: BillDetailModalProps) {
  const [noteDraft, setNoteDraft] = useState(bill.note ?? "");

  const isPositive = bill.amount > 0;

  async function handleSave() {
    const normalizedNote = noteDraft.trim();
    await onSave(normalizedNote ? normalizedNote : null);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.24)] px-4">
      <div className="w-full max-w-[480px] rounded-[24px] bg-white px-5 pb-5 pt-3 shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
        <div className="mx-auto h-1 w-12 rounded-full bg-[#D7DBE3]" />

        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-[18px] font-semibold leading-6 text-[var(--text-primary)]">账单详情</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-secondary)]"
            aria-label="关闭账单详情"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-[18px] bg-[#FBFCFE] px-4 py-3">
          <BillIcon iconKey={bill.iconKey} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[16px] font-semibold leading-6 text-[var(--text-primary)]">
              {bill.title}
            </div>
          </div>
          <div
            className={cn(
              "whitespace-nowrap text-[16px] font-semibold leading-6",
              isPositive ? "text-[var(--income)]" : "text-[var(--expense)]",
            )}
          >
            {formatSignedAmount(bill.amount, bill.currency)}
          </div>
        </div>

        <div className="mt-4 divide-y divide-[rgba(15,23,42,0.06)] rounded-[18px] border border-[rgba(15,23,42,0.06)] bg-white">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <WalletCards className="h-4 w-4" strokeWidth={1.9} />
              <span className="text-[14px] font-medium leading-5">账户</span>
            </div>
            <span className="text-[14px] leading-5 text-[var(--text-primary)]">{bill.accountName}</span>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <Tag className="h-4 w-4" strokeWidth={1.9} />
              <span className="text-[14px] font-medium leading-5">分类</span>
            </div>
            <BillCategoryTag label={bill.tagLabel} tone={bill.tagTone} />
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <CalendarDays className="h-4 w-4" strokeWidth={1.9} />
              <span className="text-[14px] font-medium leading-5">时间</span>
            </div>
            <span className="text-[14px] leading-5 text-[var(--text-primary)]">
              {new Date(bill.occurredAt).toLocaleString("zh-CN", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 text-[14px] font-medium leading-5 text-[var(--text-primary)]">备注</div>
          <div className="relative rounded-[14px] border border-[#D6E4FF] bg-white shadow-[0_2px_8px_rgba(22,101,245,0.08)]">
            <textarea
              value={noteDraft}
              onChange={(event) => setNoteDraft(event.target.value)}
              rows={3}
              placeholder="填写备注"
              className="min-h-[104px] w-full resize-none rounded-[14px] border-none bg-transparent px-4 py-3 pr-12 text-[15px] leading-6 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
            />
            <button
              type="button"
              onClick={() => setNoteDraft("")}
              className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-[10px] text-[var(--text-secondary)] transition-colors hover:bg-[var(--chip-bg)]"
              aria-label="清空备注"
              title="清空备注"
            >
              <PencilLine className="h-4 w-4" strokeWidth={1.9} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-[14px] border border-[rgba(15,23,42,0.1)] bg-white px-4 py-3 text-[16px] font-medium leading-5 text-[var(--text-primary)]"
          >
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="flex-1 rounded-[14px] bg-[#1665F5] px-4 py-3 text-[16px] font-medium leading-5 text-white shadow-[0_12px_24px_rgba(22,101,245,0.18)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSaving ? "保存中..." : "保存"}
          </button>
        </div>
      </div>
    </div>
  );
}
