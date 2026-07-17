"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";
import { FiMaximize2 } from "react-icons/fi";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Projects() {
  const { lang } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-4">
              <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">
                {tr(T.projects.badge, lang)}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {tr(T.projects.title, lang)}{" "}
              <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
                {tr(T.projects.titleHL, lang)}
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelected(project)}
                className="group relative flex flex-col rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 hover:bg-[#7b68ee]/4 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Number badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-3xl font-black text-white/5 group-hover:text-[#7b68ee]/20 transition-colors select-none font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/20"
                    style={{ background: "rgba(123,104,238,0.2)" }}>
                    <FiMaximize2 className="w-3.5 h-3.5 text-[#7b68ee]" />
                  </div>
                </div>

                {/* Preview image */}
                <div className="h-52 relative overflow-hidden border-b border-white/5 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={project.image.endsWith(".svg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-base group-hover:text-[#7b68ee] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] text-slate-600">{project.year}</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                    {tr(project.description, lang)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-medium text-slate-400 border border-white/6 rounded-full bg-white/2">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* "More coming soon" note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 text-xs mt-10"
          >
            {lang === "fr"
              ? "D'autres projets arrivent bientôt — contactez-moi pour voir mes réalisations complètes."
              : "More projects coming soon — contact me to see my full portfolio."}
          </motion.p>

        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
