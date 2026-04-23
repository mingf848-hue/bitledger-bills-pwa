export function formatSignedAmount(amount: number, currency: string) {
  const prefix = amount > 0 ? "+" : amount < 0 ? "-" : "";
  return `${prefix}${Math.abs(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${currency}`;
}

export function formatPlainAmount(amount: number) {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
