"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LangProvider } from "@/context/LangContext";
import LangHtmlSync from "@/components/ui/LangHtmlSync";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <LangProvider>
        <LangHtmlSync />
        {children}
      </LangProvider>
    </NextThemesProvider>
  );
}
