"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const stats = [
  { value: "3+",   label: "Ans d'expérience" },
  { value: "20+",  label: "Projets livrés"   },
  { value: "15+",  label: "Clients satisfaits" },
  { value: "100%", label: "Satisfaction"      },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-5">
              <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">À propos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Passionné par le{" "}
              <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
                développement web
              </span>
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Je suis <span className="text-white font-semibold">Donald Fambo</span>, développeur Full Stack basé au{" "}
              <span className="text-white font-semibold">Bénin, Afrique de l&apos;Ouest</span>. Je conçois des applications web
              modernes, performantes et accessibles.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Mon approche combine un souci du détail UI/UX avec une architecture backend solide — du prototype
              au déploiement en production.
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "#7b68ee" }}
            >
              Me contacter <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 transition-all duration-300 text-center group"
              >
                <p className="text-3xl font-extrabold text-white mb-1 group-hover:text-[#7b68ee] transition-colors">
                  {s.value}
                </p>
                <p className="text-slate-500 text-xs leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
