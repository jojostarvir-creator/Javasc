"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";
import {
  FiGlobe, FiSmartphone, FiServer, FiBarChart2,
  FiLayout, FiZap,
} from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  globe:  <FiGlobe  className="w-5 h-5" />,
  mobile: <FiSmartphone className="w-5 h-5" />,
  server: <FiServer className="w-5 h-5" />,
  chart:  <FiBarChart2 className="w-5 h-5" />,
  design: <FiLayout className="w-5 h-5" />,
  zap:    <FiZap className="w-5 h-5" />,
};

export default function Services() {
  const { lang } = useLang();

  return (
    <section id="services" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-4">
            <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">
              {tr(T.services.badge, lang)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {tr(T.services.title, lang)}{" "}
            <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
              {tr(T.services.titleHL, lang)}
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-lg mx-auto">
            {tr(T.services.sub, lang)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 hover:bg-[#7b68ee]/4 transition-all duration-300"
            >
              <span className="absolute top-4 right-5 text-3xl font-black text-white/5 group-hover:text-[#7b68ee]/15 transition-colors font-mono select-none">
                {s.number}
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#7b68ee]/10 border border-[#7b68ee]/20 flex items-center justify-center text-[#7b68ee] mb-4 group-hover:bg-[#7b68ee]/20 transition-colors">
                {iconMap[s.icon]}
              </div>
              <span className="text-[10px] font-semibold text-[#7b68ee] uppercase tracking-widest mb-2 block">
                {s.tag}
              </span>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#7b68ee] transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {s.description}
              </p>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-[#7b68ee] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
