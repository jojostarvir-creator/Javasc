"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiRefreshCw, FiArrowLeft, FiArrowRight, FiMaximize2 } from "react-icons/fi";

interface Props {
  project: { title: string; url: string; live: string } | null;
  onClose: () => void;
}

export default function LivePreviewModal({ project, onClose }: Props) {
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const [key, setKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!project) return;
    setLoading(true);
    setBlocked(false);
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    /* Heuristic: if still loading after 6s, site likely blocks iframes */
    const timer = setTimeout(() => {
      setLoading(false);
      setBlocked(true);
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, key, onClose]);

  const reload = () => {
    setKey((k) => k + 1);
    setLoading(true);
    setBlocked(false);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="live-preview"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 280, damping: 32 }}
          className="fixed inset-0 z-[400] flex flex-col"
          style={{ background: "#0d0f1a" }}
        >
          {/* ── Toolbar ── */}
          <div
            className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 flex-shrink-0"
            style={{ background: "#1a1d2e" }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.04)" }}
              title="Fermer"
            >
              <FiX className="w-4 h-4" />
            </button>

            {/* Nav buttons */}
            <div className="flex gap-1 flex-shrink-0">
              <button
                onClick={() => iframeRef.current?.contentWindow?.history.back()}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-300 transition-colors"
              >
                <FiArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => iframeRef.current?.contentWindow?.history.forward()}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-300 transition-colors"
              >
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={reload}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-300 transition-colors"
              >
                <FiRefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              </button>
            </div>

            {/* URL bar */}
            <div
              className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 truncate"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              {/* Lock icon */}
              <svg className="w-3 h-3 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="truncate">{project.live}</span>
            </div>

            {/* Title */}
            <span className="text-xs font-semibold text-slate-300 flex-shrink-0 hidden sm:block px-1">
              {project.title}
            </span>

            {/* Open in tab */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all flex-shrink-0 border border-[#7b68ee]/30 hover:border-[#7b68ee]"
              style={{ background: "rgba(123,104,238,0.15)" }}
            >
              <FiMaximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">Ouvrir</span>
            </a>
          </div>

          {/* ── Frame area ── */}
          <div className="flex-1 relative overflow-hidden">

            {/* Loading skeleton */}
            <AnimatePresence>
              {loading && !blocked && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4"
                  style={{ background: "#0d0f1a" }}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#7b68ee]/30 border-t-[#7b68ee] animate-spin" />
                  <p className="text-slate-500 text-sm">Chargement de {project.title}…</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Blocked fallback */}
            {blocked && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center px-6"
                style={{ background: "#0d0f1a" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10"
                  style={{ background: "rgba(123,104,238,0.1)" }}>
                  <FiExternalLink className="w-7 h-7 text-[#7b68ee]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-2">Aperçu bloqué par le site</p>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Ce site interdit l'affichage dans un cadre. Ouvre-le directement dans un onglet pour le visiter.
                  </p>
                </div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "#7b68ee" }}
                >
                  <FiExternalLink className="w-4 h-4" />
                  Visiter {project.title}
                </a>
              </div>
            )}

            {/* Iframe */}
            {!blocked && (
              <iframe
                key={key}
                ref={iframeRef}
                src={project.live}
                title={`Aperçu — ${project.title}`}
                className="w-full h-full border-0"
                onLoad={() => setLoading(false)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
