import { cn } from "@/lib/utils/classnames";
import { formatPlainAmount, formatSignedAmount } from "@/lib/utils/currency";

type CurrencyAmountProps = {
  amount: number;
  currency: string;
  withSign?: boolean;
  className?: string;
};

export function CurrencyAmount({
  amount,
  currency,
  withSign = false,
  className,
}: CurrencyAmountProps) {
  return (
    <span className={cn(className)}>
      {withSign ? formatSignedAmount(amount, currency) : formatPlainAmount(amount)}
    </span>
  );
}
