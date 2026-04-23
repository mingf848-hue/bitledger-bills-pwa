"use client";

export function useSafeAreaInsets() {
  return {
    top: "max(16px, env(safe-area-inset-top))",
    bottom: "max(12px, env(safe-area-inset-bottom))",
  };
}
