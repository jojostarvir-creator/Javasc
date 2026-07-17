"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";

const articles = [
  {
    tag:     { fr: "Next.js",            en: "Next.js"             },
    title:   { fr: "5 raisons d'utiliser Next.js pour votre prochain projet web", en: "5 reasons to use Next.js for your next web project" },
    desc:    { fr: "Next.js 15 apporte des fonctionnalités puissantes : Server Components, Turbopack, et bien plus. Voici pourquoi c'est le meilleur choix en 2025.", en: "Next.js 15 brings powerful features: Server Components, Turbopack, and much more. Here's why it's the best choice in 2025." },
    date:    { fr: "10 jan. 2025",       en: "Jan 10, 2025"        },
    minRead: 6,
    color:   "#7b68ee",
    gradient:"from-[#7b68ee]/20 to-[#6366f1]/10",
    icon:    "⚡",
    href:    "#",
    ready:   false,
  },
  {
    tag:     { fr: "CSS",                en: "CSS"                 },
    title:   { fr: "Tailwind CSS v4 : Mon retour d'expérience après 3 mois", en: "Tailwind CSS v4: My feedback after 3 months" },
    desc:    { fr: "Tailwind v4 change radicalement la façon de travailler avec le CSS. Je partage mes impressions après l'avoir utilisé sur plusieurs projets réels.", en: "Tailwind v4 radically changes how you work with CSS. I share my impressions after using it on several real projects." },
    date:    { fr: "22 fév. 2025",       en: "Feb 22, 2025"        },
    minRead: 5,
    color:   "#06b6d4",
    gradient:"from-[#06b6d4]/20 to-[#0891b2]/10",
    icon:    "🎨",
    href:    "#",
    ready:   false,
  },
  {
    tag:     { fr: "DevOps",             en: "DevOps"              },
    title:   { fr: "Déployer votre app React/Next.js sur Vercel gratuitement", en: "Deploy your React/Next.js app on Vercel for free" },
    desc:    { fr: "Guide complet pour déployer votre application Next.js sur Vercel en moins de 5 minutes, avec domaine personnalisé et variables d'environnement.", en: "Complete guide to deploying your Next.js application on Vercel in under 5 minutes, with custom domain and environment variables." },
    date:    { fr: "5 mars 2025",        en: "Mar 5, 2025"         },
    minRead: 4,
    color:   "#10b981",
    gradient:"from-[#10b981]/20 to-[#059669]/10",
    icon:    "🚀",
    href:    "#",
    ready:   false,
  },
];

export default function Blog() {
  const { lang } = useLang();

  return (
    <section id="blog" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-4">
            <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">
              {tr(T.blog.badge, lang)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {tr(T.blog.title, lang)}{" "}
            <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
              {tr(T.blog.titleHL, lang)}
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            {tr(T.blog.sub, lang)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-white/6 bg-white/2 hover:border-[#7b68ee]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Top banner */}
              <div className={`h-32 bg-gradient-to-br ${article.gradient} flex items-center justify-center relative`}>
                <span className="text-5xl">{article.icon}</span>
                {/* Soon badge */}
                {!article.ready && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 text-slate-400 border border-white/10">
                    {tr(T.blog.soon, lang)}
                  </span>
                )}
                {/* Tag */}
                <span
                  className="absolute bottom-3 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ color: article.color, background: `${article.color}20`, border: `1px solid ${article.color}30` }}
                >
                  {tr(article.tag, lang)}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-3">
                  <span>{tr(article.date, lang)}</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {article.minRead} {tr(T.blog.minRead, lang)}
                  </span>
                </div>

                <h3 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-[#7b68ee] transition-colors flex-1">
                  {tr(article.title, lang)}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {tr(article.desc, lang)}
                </p>

                <button
                  disabled={!article.ready}
                  className="flex items-center gap-1.5 text-xs font-semibold mt-auto transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ color: article.color }}
                >
                  {tr(T.blog.readMore, lang)}
                  <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
