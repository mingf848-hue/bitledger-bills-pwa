export function EmptyState() {
  return (
    <div className="card-surface rounded-[24px] px-6 py-10 text-center">
      <h3 className="text-[18px] font-semibold leading-[26px] text-[var(--text-primary)]">
        暂无匹配账单
      </h3>
      <p className="mt-2 text-[14px] leading-[20px] text-[var(--text-secondary)]">
        调整搜索词、分类或时间范围后再试一次。
      </p>
    </div>
  );
}
