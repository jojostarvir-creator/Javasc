"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { label: "Accueil",   href: "#hero"     },
  { label: "À propos",  href: "#about"    },
  { label: "Skills",    href: "#skills"   },
  { label: "Projets",   href: "#projects" },
  { label: "Contact",   href: "#contact"  },
];

const socials = [
  { Icon: FiGithub,   href: "https://github.com/jojostarvir-creator",                                              label: "GitHub"   },
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/donald-dieudonn%C3%A9-fambo-sossa-4360843b2/",            label: "LinkedIn" },
  { Icon: FaWhatsapp, href: "https://wa.me/2290156336282",                                                          label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#080818]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">

          {/* Logo + tagline */}
          <div className="text-center">
            <p className="text-white font-bold text-xl mb-1">
              <span className="text-[#7b68ee] font-mono">&lt;/&gt;</span>{" "}
              Dev<span className="text-[#7b68ee]">Donald</span>
            </p>
            <p className="text-slate-500 text-sm">Développeur Web & Mobile Full Stack · Bénin</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="text-slate-500 hover:text-white text-sm transition-colors">
                {l.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-[#7b68ee]/40 transition-all"
                title={label}>
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
            <motion.a href="mailto:fambodonald110@gmail.com"
              whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-[#7b68ee]/40 transition-all"
              title="Email">
              <FiMail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
            <p className="text-slate-600 text-xs">
              © {year} <span className="text-slate-400 font-semibold">DevDonald</span>. Tous droits réservés.
            </p>
            <p className="text-slate-700 text-xs">
              Fait avec ❤️ au Bénin, Afrique de l&apos;Ouest
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
