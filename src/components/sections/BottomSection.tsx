"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";
import { FiStar } from "react-icons/fi";

const featured = testimonials[0];

const socials = [
  { Icon: FiGithub,   href: "https://github.com/jojostarvir-creator", label: "GitHub" },
  { Icon: FiLinkedin,  href: "https://www.linkedin.com/in/donald-dieudonn%C3%A9-fambo-sossa-4360843b2/", label: "LinkedIn"  },
  { Icon: FaWhatsapp, href: "https://wa.me/2290156336282",                                              label: "WhatsApp"  },
];

export default function BottomSection() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ── Col 1: CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-[#7b68ee]/20 bg-[#7b68ee]/6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#7b68ee] mb-3">Travaillons ensemble</p>
              <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                Vous avez un projet en tête ?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Transformons vos idées en produits digitaux qui font la différence.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white self-start"
              style={{ background: "#7b68ee" }}
            >
              Démarrer <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* ── Col 2: Testimonial ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/6 bg-white/2 flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: featured.rating }).map((_, i) => (
                <FiStar key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
              &ldquo;{featured.content}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7b68ee] to-indigo-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                {featured.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{featured.name}</p>
                <p className="text-slate-500 text-[11px]">{featured.role} — {featured.company}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Col 3: Follow Me ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-white/6 bg-white/2 flex flex-col"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">Suivez-moi</p>

            <div className="flex gap-3 mb-8">
              {socials.map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#7b68ee]/40 transition-all"
                  title={label}
                >
                  <Icon className="w-4.5 h-4.5" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <a href="mailto:fambodonald110@gmail.com"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm">
                <FiMail className="w-4 h-4 text-[#7b68ee] flex-shrink-0" />
                <span className="truncate">fambodonald110@gmail.com</span>
              </a>
              <a href="tel:+2290156336282"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm">
                <FiPhone className="w-4 h-4 text-[#7b68ee] flex-shrink-0" />
                +229 01 56 33 62 82
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
