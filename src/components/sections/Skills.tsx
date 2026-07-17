"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5",      pct: 95, color: "#E34F26" },
  { name: "CSS3",       pct: 90, color: "#1572B6" },
  { name: "JavaScript", pct: 90, color: "#F7DF1E" },
  { name: "TypeScript", pct: 85, color: "#3178C6" },
  { name: "React",      pct: 85, color: "#61DAFB" },
  { name: "Next.js",    pct: 80, color: "#ffffff"  },
  { name: "Node.js",    pct: 80, color: "#339933" },
  { name: "Tailwind",   pct: 90, color: "#06B6D4" },
  { name: "Git",        pct: 85, color: "#F05032" },
  { name: "Flutter",    pct: 70, color: "#54C5F8" },
  { name: "MongoDB",    pct: 75, color: "#47A248" },
  { name: "PostgreSQL", pct: 70, color: "#4169E1" },
];

const cols = [skills.slice(0, 4), skills.slice(4, 8), skills.slice(8, 12)];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-4">
            <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">Compétences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Mon{" "}
            <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
              niveau technique
            </span>
          </h2>
        </motion.div>

        {/* 3 columns of progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-5">
              {col.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (ci * 4 + si) * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs font-semibold" style={{ color: skill.color }}>{skill.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: (ci * 4 + si) * 0.05 + 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
