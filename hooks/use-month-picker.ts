"use client";

import { useState } from "react";

export function useMonthPicker(initialMonth: string) {
  const [monthLabel] = useState(initialMonth);
  return { monthLabel };
}
