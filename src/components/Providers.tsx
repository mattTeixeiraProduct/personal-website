"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { PageTransitionProvider } from "./PageTransitionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PageTransitionProvider>
        {children}
      </PageTransitionProvider>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}
