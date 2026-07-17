"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";

const testimonials = [
  {
    name: "Serge Ahouanganou",
    role:    { fr: "Fondateur, EduTech Bénin",     en: "Founder, EduTech Benin"      },
    content: { fr: "Donald a livré notre plateforme e-learning en 3 semaines. Qualité irréprochable, communication parfaite et respect total des délais. Je recommande vivement !", en: "Donald delivered our e-learning platform in 3 weeks. Impeccable quality, perfect communication, and total respect for deadlines. Highly recommended!" },
    initials: "SA",
    color: "#7b68ee",
    stars: 5,
    project: { fr: "Plateforme E-Learning", en: "E-Learning Platform" },
  },
  {
    name: "Fatima Koné",
    role:    { fr: "Directrice Marketing, Abidjan", en: "Marketing Director, Abidjan" },
    content: { fr: "Notre site vitrine a été complètement refait par Donald. Résultat bluffant — moderne, rapide, et notre trafic a augmenté de 40% en un mois. Excellent travail !", en: "Our website was completely rebuilt by Donald. Stunning result — modern, fast, and our traffic increased 40% in one month. Excellent work!" },
    initials: "FK",
    color: "#ec4899",
    stars: 5,
    project: { fr: "Site Vitrine Corporate", en: "Corporate Website" },
  },
  {
    name: "Jean-Claude Agbidi",
    role:    { fr: "CEO, Togo Commerce",            en: "CEO, Togo Commerce"           },
    content: { fr: "J'ai fait appel à Donald pour notre application mobile. Il a parfaitement compris nos besoins et livré un produit qui dépasse nos attentes. Très professionnel.", en: "I hired Donald for our mobile app. He perfectly understood our needs and delivered a product exceeding our expectations. Very professional." },
    initials: "JA",
    color: "#10b981",
    stars: 5,
    project: { fr: "Application Mobile", en: "Mobile Application" },
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLang();

  return (
    <section id="testimonials" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-4">
            <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">
              {tr(T.testimonials.badge, lang)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {tr(T.testimonials.title, lang)}{" "}
            <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
              {tr(T.testimonials.titleHL, lang)}
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            {tr(T.testimonials.sub, lang)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 transition-all duration-300 flex flex-col"
            >
              <span className="absolute top-4 right-5 text-5xl font-black text-white/4 group-hover:text-[#7b68ee]/10 transition-colors select-none leading-none">"</span>

              <div className="mb-4"><Stars count={t.stars} /></div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{tr(t.content, lang)}&rdquo;
              </p>

              <span
                className="text-[10px] font-semibold px-2.5 py-1 rounded-full mb-4 self-start"
                style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}30` }}
              >
                {tr(t.project, lang)}
              </span>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`, boxShadow: `0 0 0 3px ${t.color}25` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{tr(t.role, lang)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/6 bg-white/2">
            <Stars count={5} />
            <span className="text-white font-bold text-sm">5.0</span>
            <span className="text-slate-500 text-xs">
              — {lang === "fr" ? "100% de clients satisfaits" : "100% satisfied clients"}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
