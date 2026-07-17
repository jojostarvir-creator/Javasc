"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "fr" | "en";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangCtx>({ lang: "fr", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  const toggle = () =>
    setLang((l) => {
      const next = l === "fr" ? "en" : "fr";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
