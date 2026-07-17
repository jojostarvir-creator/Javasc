"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";
import { FiBriefcase, FiBook, FiUser } from "react-icons/fi";

const typeConfig = {
  work:      { icon: FiBriefcase, color: "text-indigo-400",  bg: "bg-indigo-500/10",  border: "border-indigo-500/20"  },
  freelance: { icon: FiUser,      color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  education: { icon: FiBook,      color: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/20"  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="Parcours" title="Mon" highlight="expérience" />

        <div className="max-w-3xl mx-auto space-y-4">
          {experiences.map((exp, i) => {
            const cfg = typeConfig[exp.type];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl border border-white/6 bg-white/2 hover:border-indigo-500/25 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.bg} border ${cfg.border}`}>
                  <cfg.icon className={`w-4 h-4 ${cfg.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                    <div>
                      <p className="text-white font-semibold text-sm">{exp.role}</p>
                      <p className="text-indigo-400 text-xs">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 bg-white/4 border border-white/6 px-2.5 py-1 rounded-full flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2 text-center sm:text-left">{exp.description}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-3">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] text-slate-500 border border-white/6 rounded-full bg-white/2">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
