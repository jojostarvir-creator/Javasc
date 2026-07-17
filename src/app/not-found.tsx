import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — DevDonald",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "#0d0d1f" }}>

      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 text-2xl font-bold text-white">
        <span className="text-[#7b68ee] font-mono">&lt;/&gt;</span>
        Dev<span className="text-[#7b68ee]">Donald</span>
      </div>

      {/* 404 big */}
      <div className="relative mb-6 select-none">
        <p className="text-[120px] sm:text-[160px] font-black leading-none text-white/5">404</p>
        <p className="absolute inset-0 flex items-center justify-center text-[120px] sm:text-[160px] font-black leading-none bg-gradient-to-br from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent blur-[2px] opacity-40">404</p>
        <p className="absolute inset-0 flex items-center justify-center text-[120px] sm:text-[160px] font-black leading-none bg-gradient-to-br from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">404</p>
      </div>

      {/* Code card style */}
      <div className="mb-8 rounded-xl border border-white/10 bg-white/2 p-4 font-mono text-left text-sm max-w-xs w-full">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <p className="text-slate-500">// page not found</p>
        <p><span className="text-[#7b68ee]">throw</span> <span className="text-red-400">new Error</span><span className="text-white">(</span></p>
        <p className="pl-4 text-emerald-400">&quot;Page introuvable&quot;</p>
        <p className="text-white">);</p>
      </div>

      <p className="text-slate-400 mb-8 max-w-sm">
        Cette page n&apos;existe pas ou a été déplacée. Retourne à l&apos;accueil pour continuer.
      </p>

      <Link href="/"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
        style={{ background: "#7b68ee" }}>
        ← Retour à l&apos;accueil
      </Link>

      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#7b68ee]/6 blur-[120px]" />
      </div>
    </div>
  );
}
