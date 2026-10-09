"use client";

import { AdventProgressProvider } from "@/src/context/AdventProgressContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AdventProgressProvider>{children}</AdventProgressProvider>;
}
