"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/context/LangContext";
import { T, tr } from "@/data/translations";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiGit, SiTailwindcss,
} from "react-icons/si";

const techIcons = [
  { Icon: SiHtml5,       color: "#E34F26", label: "HTML5"      },
  { Icon: SiCss,         color: "#1572B6", label: "CSS3"       },
  { Icon: SiJavascript,  color: "#F7DF1E", label: "JavaScript" },
  { Icon: SiTypescript,  color: "#3178C6", label: "TypeScript" },
  { Icon: SiReact,       color: "#61DAFB", label: "React"      },
  { Icon: SiNodedotjs,   color: "#339933", label: "Node.js"    },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind"   },
  { Icon: SiGit,         color: "#F05032", label: "Git"        },
];

const codeLines = [
  { text: 'const dev = {',         color: '#e2e8f0' },
  { text: '  name: "Donald",',     color: '#94a3b8' },
  { text: '  role: "Fullstack",',  color: '#94a3b8' },
  { text: '  passion: true,',      color: '#7b68ee' },
  { text: '};',                    color: '#e2e8f0' },
];

export default function Hero() {
  const { lang } = useLang();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#7b68ee]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/6 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT ── */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7b68ee]/30 bg-[#7b68ee]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b68ee] animate-pulse" />
              <span className="text-[#7b68ee] text-xs font-semibold tracking-widest uppercase">
                {tr(T.hero.badge, lang)}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
              {tr(T.hero.greeting, lang)}{" "}
              <span className="bg-gradient-to-r from-[#7b68ee] to-indigo-400 bg-clip-text text-transparent">
                Donald
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-2 font-medium">
              {tr(T.hero.subtitle, lang)}{" "}
              <span className="text-white">{tr(T.hero.modern, lang)}</span>{" "}
              {tr(T.hero.and, lang)}{" "}
              <span className="text-white">{tr(T.hero.performant, lang)}</span>.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-md">
              {tr(T.hero.desc, lang)}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: "#7b68ee" }}
              >
                {tr(T.hero.viewProjects, lang)} <FiArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/cv.pdf"
                download="Donald-Fambo-CV.pdf"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-white/10 hover:border-[#7b68ee]/40 hover:text-white transition-all"
              >
                <FiDownload className="w-4 h-4" /> {tr(T.hero.downloadCV, lang)}
              </motion.a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-10">
              {[
                { Icon: FiGithub,   href: "https://github.com/jojostarvir-creator" },
                { Icon: FiLinkedin, href: "https://www.linkedin.com/in/donald-dieudonn%C3%A9-fambo-sossa-4360843b2/" },
                { Icon: FaWhatsapp, href: "https://wa.me/2290156336282" },
              ].map(({ Icon, href }, i) => (
                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#7b68ee]/40 transition-all">
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Tech icons */}
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3">
                {tr(T.hero.tech, lang)}
              </p>
              <div className="flex flex-wrap gap-3">
                {techIcons.map(({ Icon, color, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.15, y: -2 }}
                    className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/4 border border-white/6 hover:border-white/20 transition-all cursor-default">
                    <Icon className="w-5 h-5" style={{ color }} />
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] bg-slate-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-center justify-center">

            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7b68ee] to-indigo-500 blur-3xl opacity-20 scale-110" />

              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full p-[3px] bg-gradient-to-br from-[#7b68ee] via-indigo-500 to-purple-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                  <Image
                    src="/photo.jpg"
                    alt="Donald Fambo"
                    fill
                    sizes="(max-width: 768px) 288px, 320px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating code card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ animation: "float 4s ease-in-out infinite" }}
                className="absolute -bottom-6 -right-4 sm:-right-8 w-48 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-sm p-3 shadow-2xl"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="ml-1 text-[9px] text-slate-600 font-mono">dev.ts</span>
                </div>
                {codeLines.map((line, i) => (
                  <p key={i} className="font-mono text-[10px] leading-5" style={{ color: line.color }}>
                    {line.text}
                  </p>
                ))}
              </motion.div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -left-4 sm:-left-8 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-white/10 shadow-xl backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <p className="text-white text-[11px] font-bold">{tr(T.hero.available, lang)}</p>
                  <p className="text-slate-500 text-[9px]">{tr(T.hero.freelance, lang)}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
