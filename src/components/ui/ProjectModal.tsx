"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { useLang } from "@/context/LangContext";
import { tr } from "@/data/translations";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const { lang } = useLang();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[300] bg-black/75 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[301] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 pointer-events-auto"
              style={{ background: "linear-gradient(160deg, #0b0e24 0%, #0d1030 100%)" }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <FiX className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="672px"
                  className="object-cover"
                  unoptimized={project.image.endsWith(".svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e24] via-transparent to-transparent" />

                {/* Year badge */}
                <div className="absolute bottom-4 left-5 flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 text-xs text-slate-300"
                  style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
                  <FiCalendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">

                {/* Title + category */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
                    <span className="text-xs text-[#7b68ee] font-semibold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  {/* Links */}
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 border border-white/10 hover:border-[#7b68ee]/40 hover:text-white transition-all"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        <FiGithub className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white border border-[#7b68ee]/40 hover:border-[#7b68ee] transition-all"
                        style={{ background: "rgba(123,104,238,0.15)" }}
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        {lang === "fr" ? "Voir le site" : "View live"}
                      </a>
                    )}
                  </div>
                </div>

                {/* Long description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {tr(project.longDescription, lang)}
                </p>

                {/* Stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    {lang === "fr" ? "Technologies" : "Tech Stack"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t}
                        className="px-3 py-1 text-xs font-medium text-[#7b68ee] border border-[#7b68ee]/25 rounded-full"
                        style={{ background: "rgba(123,104,238,0.08)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    {lang === "fr" ? "Fonctionnalités" : "Features"}
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f.fr} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7b68ee] flex-shrink-0" />
                        {tr(f, lang)}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
