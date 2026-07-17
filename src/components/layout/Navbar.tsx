"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiArrowUpRight, FiSun, FiMoon } from "react-icons/fi";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted]       = useState(false);
  const { theme, setTheme }         = useTheme();
  const { lang, toggle: toggleLang } = useLang();

  const links = [
    { label: tr(T.nav.home,     lang), href: "#hero"     },
    { label: tr(T.nav.about,    lang), href: "#about"    },
    { label: tr(T.nav.skills,   lang), href: "#skills"   },
    { label: tr(T.nav.projects, lang), href: "#projects" },
    { label: tr(T.nav.contact,  lang), href: "#contact"  },
  ];

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0d0d1f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a href="#hero" onClick={(e) => { e.preventDefault(); go("#hero"); }}
            className="flex items-center gap-2 font-bold text-white text-lg">
            <span className="text-[#7b68ee] font-mono text-base">&lt;/&gt;</span>
            Dev<span className="text-[#7b68ee]">Donald</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={toggleLang}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#7b68ee]/40 transition-all text-xs font-bold"
              >
                {lang === "fr" ? "EN" : "FR"}
              </motion.button>
            )}
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#7b68ee]/40 transition-all"
              >
                {theme === "dark"
                  ? <FiSun className="w-4 h-4" />
                  : <FiMoon className="w-4 h-4" />
                }
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => go("#contact")}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ background: "#7b68ee" }}
            >
              {tr(T.nav.hire, lang)} <FiArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5">
              {mobileOpen ? <HiXMark className="w-5 h-5" /> : <HiBars3 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#0d0d1f] border-b border-white/5 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button key={l.href} onClick={() => go(l.href)}
                  className="text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  {l.label}
                </button>
              ))}
              <button onClick={() => go("#contact")}
                className="mt-2 py-3 rounded-xl text-sm font-semibold text-white text-center"
                style={{ background: "#7b68ee" }}>
                {tr(T.nav.hire, lang)}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
