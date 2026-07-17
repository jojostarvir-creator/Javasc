import type { Metadata } from "next";
import Image from "next/image";
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
  FiGlobe, FiCalendar, FiCheckCircle,
} from "react-icons/fi";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Donald Fambo | Développeur Web & Mobile",
  description: "Curriculum Vitae de Donald Fambo, Développeur Web & Mobile Full Stack.",
};

const skills = {
  Frontend:  ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  Backend:   ["Node.js", "Express", "PHP", "Laravel", "REST API"],
  Mobile:    ["Flutter", "React Native", "Dart"],
  Database:  ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  DevOps:    ["Git", "GitHub", "Docker", "Vercel", "Netlify"],
};

const experiences = [
  {
    role: "Développeur Full Stack Freelance",
    company: "Auto-entrepreneur",
    period: "2022 — Présent",
    tasks: [
      "Développement d'applications web & mobiles sur mesure pour des clients en Afrique et à l'international.",
      "Conception d'interfaces modernes avec React / Next.js et intégration de backends Node.js.",
      "Développement d'applications mobiles cross-platform avec Flutter.",
      "Livraison de 10+ projets avec un taux de satisfaction de 100 %.",
    ],
  },
  {
    role: "Développeur Web",
    company: "Projets personnels & académiques",
    period: "2021 — 2022",
    tasks: [
      "Création de sites vitrines et d'applications web pour des entreprises locales.",
      "Maîtrise des fondamentaux HTML, CSS, JavaScript et des frameworks modernes.",
      "Développement du projet Akili (application React) et d'un site e-commerce décoration.",
    ],
  },
];

const projects = [
  {
    title: "Akili",
    stack: "React · JavaScript · CSS",
    desc: "Application web moderne avec interface intuitive, composants réutilisables et design responsive.",
  },
  {
    title: "Décor Prestige",
    stack: "HTML5 · CSS3",
    desc: "Site vitrine pour une entreprise de décoration. Galerie produits, catalogue et formulaire de contact.",
  },
];

const langues = [
  { lang: "Français", level: "Courant", pct: 95 },
  { lang: "Anglais",  level: "Intermédiaire", pct: 60 },
];

export default function CVPage() {
  return (
    <>
      <PrintButton />

      {/* CV Page */}
      <div className="cv-page min-h-screen bg-slate-100 flex items-start justify-center py-10 px-4">
        <div className="cv-sheet w-full max-w-[850px] bg-white shadow-2xl rounded-2xl overflow-hidden">

          {/* ── HEADER ── */}
          <div className="cv-header flex flex-col sm:flex-row items-center sm:items-start gap-6 px-10 py-8"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)" }}>

            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl flex-shrink-0 overflow-hidden border-4 border-indigo-400/40 shadow-xl relative">
              <Image
                src="/photo.jpg"
                alt="Donald Fambo"
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-black text-white tracking-tight mb-1">Donald Fambo</h1>
              <p className="text-indigo-300 font-semibold text-lg mb-4">
                Développeur Web & Mobile Full Stack
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm text-indigo-200">
                <span className="flex items-center gap-1.5"><FiMail className="w-3.5 h-3.5" />fambodonald110@gmail.com</span>
                <span className="flex items-center gap-1.5"><FiPhone className="w-3.5 h-3.5" />+229 01 56 33 62 82</span>
                <span className="flex items-center gap-1.5"><FiMapPin className="w-3.5 h-3.5" />Bénin, Afrique de l&apos;Ouest</span>
                <span className="flex items-center gap-1.5"><FiGithub className="w-3.5 h-3.5" />github.com/jojostarvir-creator</span>
                <span className="flex items-center gap-1.5"><FiLinkedin className="w-3.5 h-3.5" />linkedin.com/in/donald-fambo</span>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-xs font-semibold">Disponible</span>
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="cv-body grid grid-cols-1 sm:grid-cols-3 gap-0">

            {/* ── LEFT SIDEBAR ── */}
            <div className="cv-sidebar sm:col-span-1 px-7 py-8 space-y-7 bg-slate-50 border-r border-slate-100">

              {/* Profil */}
              <div>
                <SectionHead>Profil</SectionHead>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Développeur Web & Mobile passionné avec plus de 3 ans d&apos;expérience.
                  Je crée des applications modernes, performantes et évolutives, de la conception
                  jusqu&apos;au déploiement. Orienté résultats, rigoureux et toujours en veille technologique.
                </p>
              </div>

              {/* Compétences */}
              <div>
                <SectionHead>Compétences</SectionHead>
                <div className="space-y-4">
                  {Object.entries(skills).map(([cat, list]) => (
                    <div key={cat}>
                      <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1.5">{cat}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {list.map((s) => (
                          <span key={s} className="px-2 py-0.5 text-[10px] font-medium bg-indigo-50 text-indigo-700 rounded border border-indigo-100">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Langues */}
              <div>
                <SectionHead>Langues</SectionHead>
                <div className="space-y-3">
                  {langues.map(({ lang, level, pct }) => (
                    <div key={lang}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{lang}</span>
                        <span className="text-slate-400">{level}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualités */}
              <div>
                <SectionHead>Qualités</SectionHead>
                <ul className="space-y-1.5">
                  {["Autonomie & rigueur", "Esprit d'équipe", "Créativité", "Adaptabilité", "Sens du détail"].map((q) => (
                    <li key={q} className="flex items-center gap-2 text-xs text-slate-600">
                      <FiCheckCircle className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <SectionHead>Contact</SectionHead>
                <ul className="space-y-2">
                  {[
                    { icon: FiMail,   val: "fambodonald110@gmail.com" },
                    { icon: FiPhone,  val: "+229 01 56 33 62 82" },
                    { icon: FiMapPin, val: "Bénin, Afrique de l'Ouest" },
                    { icon: FiGlobe,  val: "donald-fambo.vercel.app" },
                  ].map(({ icon: Icon, val }) => (
                    <li key={val} className="flex items-start gap-2 text-xs text-slate-600">
                      <Icon className="w-3 h-3 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="break-all">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="cv-main sm:col-span-2 px-8 py-8 space-y-8">

              {/* Expérience */}
              <div>
                <SectionHead accent>Expérience professionnelle</SectionHead>
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.role} className="relative pl-4 border-l-2 border-indigo-100">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                      <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">{exp.role}</h3>
                          <p className="text-indigo-600 text-xs font-semibold">{exp.company}</p>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                          <FiCalendar className="w-3 h-3" />{exp.period}
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {exp.tasks.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projets */}
              <div>
                <SectionHead accent>Projets réalisés</SectionHead>
                <div className="space-y-4">
                  {projects.map((p) => (
                    <div key={p.title} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between mb-1 gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                        <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                          {p.stack}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formation */}
              <div>
                <SectionHead accent>Formation</SectionHead>
                <div className="relative pl-4 border-l-2 border-indigo-100">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                  <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Développement Web & Mobile</h3>
                      <p className="text-indigo-600 text-xs font-semibold">Formation autodidacte & en ligne</p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                      <FiCalendar className="w-3 h-3" />2021 — Présent
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {[
                      "Formations certifiantes sur Udemy, freeCodeCamp et The Odin Project",
                      "Pratique intensive sur des projets réels pour des clients",
                      "Veille technologique continue sur les dernières technologies web & mobile",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { val: "10+", label: "Projets livrés" },
                  { val: "3+",  label: "Ans d'expérience" },
                  { val: "100%", label: "Satisfaction client" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center p-3 rounded-xl border border-slate-100 bg-slate-50">
                    <div className="text-xl font-black text-indigo-600 mb-0.5">{val}</div>
                    <div className="text-[10px] text-slate-500 font-medium">{label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="px-10 py-4 border-t border-slate-100 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" }}>
            <span className="text-indigo-300 text-xs">Donald Fambo — Développeur Web & Mobile Full Stack</span>
            <span className="text-indigo-400 text-xs">fambodonald110@gmail.com · +229 01 56 33 62 82</span>
          </div>

        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .cv-page { background: white !important; padding: 0 !important; }
          .cv-sheet { box-shadow: none !important; border-radius: 0 !important; max-width: 100% !important; }
          @page { margin: 0; size: A4; }
        }
      `}</style>
    </>
  );
}

function SectionHead({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {accent && <div className="w-1 h-5 rounded-full" style={{ background: "linear-gradient(to bottom, #6366f1, #8b5cf6)" }} />}
      <h2 className="text-xs font-black uppercase tracking-widest text-slate-800">{children}</h2>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}
