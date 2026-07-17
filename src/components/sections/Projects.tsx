"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function Projects() {
  const displayed = projects.slice(0, 6);

  return (
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
            <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">Projets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Mes{" "}
            <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
              réalisations
            </span>
          </h2>
        </motion.div>

        {/* Numbered cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 hover:bg-[#7b68ee]/4 transition-all duration-300 overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-3xl font-black text-white/5 group-hover:text-[#7b68ee]/20 transition-colors select-none font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Preview area */}
              <div className="h-44 bg-gradient-to-br from-slate-900 to-[#0d0d1f] relative overflow-hidden border-b border-white/5">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(ellipse at ${i % 2 === 0 ? "30%" : "70%"} 50%, ${
                      ["#7b68ee", "#6366f1", "#8b5cf6", "#06b6d4", "#ec4899", "#f59e0b"][i % 6]
                    }20, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-10 select-none">
                    {project.category === "mobile" ? "📱" : project.category === "api" ? "⚙️" : "🖥️"}
                  </span>
                </div>
                {/* Links on hover */}
                <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                      <FiGithub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-[#7b68ee] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                {/* Stack */}
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

      </div>
    </section>
  );
}
