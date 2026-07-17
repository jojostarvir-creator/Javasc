"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LangProvider } from "@/context/LangContext";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <LangProvider>{children}</LangProvider>
    </NextThemesProvider>
  );
}
