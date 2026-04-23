import type { PropsWithChildren } from "react";

export function SafeAreaProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}
