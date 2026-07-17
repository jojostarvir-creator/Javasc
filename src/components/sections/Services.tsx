"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { FiCheck, FiArrowRight, FiGlobe, FiSmartphone, FiServer, FiBarChart2, FiLayout, FiZap } from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  globe: FiGlobe,
  mobile: FiSmartphone,
  server: FiServer,
  chart: FiBarChart2,
  design: FiLayout,
  zap: FiZap,
};

const process = [
  { step: "01", title: "Découverte", desc: "Analyse de vos besoins, objectifs et contraintes." },
  { step: "02", title: "Conception", desc: "Architecture technique et maquettes validées ensemble." },
  { step: "03", title: "Développement", desc: "Code propre livré par sprints avec reporting régulier." },
  { step: "04", title: "Livraison", desc: "Tests, déploiement en production et documentation." },
];

export default function Services() {
  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Des solutions{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #818cf8, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              sur mesure
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            De la conception au déploiement, je vous accompagne à chaque étape
            pour transformer votre vision en produit professionnel.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-800/60">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? FiZap;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-slate-900 p-7 hover:bg-slate-800/80 transition-all duration-300 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
                  {service.number}
                </span>

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Number */}
                <p className="text-xs font-mono text-indigo-500/60 mb-1">{service.number}</p>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-slate-800 group-hover:bg-indigo-500/20 transition-colors duration-300 mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <FiCheck className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <button
                  onClick={handleContact}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-400 transition-colors duration-200 group/link"
                >
                  Demander un devis
                  <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Process section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Comment je{" "}
              <span style={{ background: "linear-gradient(90deg, #818cf8, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                travaille
              </span>
            </h3>
            <p className="text-slate-500 text-sm">Un processus clair et structuré pour chaque projet.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-800/60 transition-all duration-300"
              >
                {/* Connector line (desktop) */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-4 h-px bg-slate-700 z-10" />
                )}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-indigo-300 mb-4 border border-indigo-500/20"
                  style={{ background: "rgba(99,102,241,0.1)" }}
                >
                  {p.step}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl border border-slate-800 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)" }}
        >
          <div className="px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Vous avez un projet en tête ?
              </h3>
              <p className="text-slate-400 text-sm">
                Discutons-en — je réponds sous 24h avec une proposition adaptée.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Démarrer un projet
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:fambodonald110@gmail.com"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                fambodonald110@gmail.com
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
