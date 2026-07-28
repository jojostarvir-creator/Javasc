import type { Metadata } from "next";
import Image from "next/image";
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
  FiGlobe, FiCalendar, FiCheckCircle,
} from "react-icons/fi";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Donald Fambo | Développeur Web & Mobile",
  description: "Curriculum Vitae de Donald Fambo, Développeur Web & Mobile.",
};

const LINKEDIN_URL = "https://www.linkedin.com/in/donald-dieudonn%C3%A9-fambo-sossa-4360843b2/";
const LINKEDIN_LABEL = "linkedin.com/in/donald-dieudonné-fambo-sossa";
const GITHUB_URL = "https://github.com/jojostarvir-creator";

const skills = [
  { category: "Front-End",           pct: 70, list: ["HTML5", "CSS3", "JavaScript"] },
  { category: "Back-End",            pct: 60, list: ["PHP", "MySQL", "WordPress"] },
  { category: "Déploiement & Outils",pct: 55, list: ["Git", "GitHub", "Hébergement"] },
];

const aiTools = [
  { name: "Claude",  pct: 40 },
  { name: "ChatGPT", pct: 35 },
  { name: "Gemini",  pct: 30 },
];

const formation = {
  title: "Formation Professionnelle en Développement Web",
  school: "EIG Bénin",
  period: "Depuis octobre 2025 — En cours",
  workshops: [
    { title: "Mindset du succès : apprendre à exceller", by: "Animé par Monyvedo Firmin Tovodounnon, Directeur Général de EIG Groupe" },
    { title: "La Résilience : clé du succès dans la vie professionnelle", by: "Animé par Fredy Vlavonou, PDG de l'École de l'Imprimerie et de la Menuiserie Fred Sympoz" },
    { title: "L'appartenance communautaire : levier de réussite professionnelle", by: "Animé par Casmir C. Aitchedji, Formateur, consultant, conseiller & coach" },
  ],
};

const experiences = [
  {
    role: "Participant — Mondallas Events",
    company: "Cotonou",
    period: "Janvier 2026",
    tasks: [
      "Conception et développement d'une application web en équipe, sous forte contrainte de temps.",
      "Réalisation des interfaces responsives (HTML5, CSS3, JavaScript) et intégration des fonctionnalités clés.",
      "Collaboration via Git/GitHub : répartition des tâches, versioning et revue de code.",
    ],
  },
  {
    role: "Participant — Akili",
    company: "Cotonou",
    period: "Mars 2026",
    tasks: [
      "Développement d'une solution digitale répondant à une problématique locale, de l'idée au prototype fonctionnel.",
      "Mise en place du back-end (PHP, MySQL) et connexion aux interfaces front-end.",
      "Déploiement et hébergement du prototype pour la démonstration finale.",
    ],
  },
];

const projects = [
  {
    title: "Cocon Restaurant",
    stack: "HTML5 · CSS3 · JavaScript",
    desc: "Site vitrine responsive pour un restaurant : présentation du menu, galerie photos et formulaire de réservation.",
  },
  {
    title: "Parfums Musk",
    stack: "Next.js · React · JavaScript",
    desc: "Boutique vitrine élégante pour une marque de parfums : catalogue produits, fiches détaillées et page de contact.",
  },
  {
    title: "Portfolio personnel",
    stack: "HTML5 · CSS3 · JavaScript",
    desc: "Portfolio en ligne présentant mes projets et compétences. Utilisation d'outils d'IA (ChatGPT, Claude, Gemini) pour accélérer le développement, le débogage et la rédaction de contenu.",
  },
];

const langues = [
  { lang: "Français", level: "Courant" },
  { lang: "Fon",       level: "Courant" },
];

const centresInteret = ["Football", "Jeux vidéo"];

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
              <h1 className="text-3xl font-black text-white tracking-tight mb-1">Donald Dieudonné Sossa Fambo</h1>
              <p className="text-indigo-300 font-semibold text-lg mb-4">
                Développeur Web & Mobile
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm text-indigo-200">
                <span className="flex items-center gap-1.5"><FiMail className="w-3.5 h-3.5" />fambodonald110@gmail.com</span>
                <span className="flex items-center gap-1.5"><FiPhone className="w-3.5 h-3.5" />+229 01 56 33 62 82</span>
                <span className="flex items-center gap-1.5"><FiMapPin className="w-3.5 h-3.5" />Cotonou, Bénin</span>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <FiGithub className="w-3.5 h-3.5" />github.com/jojostarvir-creator
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <FiLinkedin className="w-3.5 h-3.5" />{LINKEDIN_LABEL}
                </a>
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
                  Développeur web et mobile passionné par la création d&apos;expériences numériques
                  modernes et performantes. Formé au développement d&apos;applications web responsives
                  et intuitives, je maîtrise les technologies front-end et back-end essentielles et je
                  renforce mes compétences sur le terrain à travers des hackathons et des projets concrets.
                  Curieux, rigoureux et orienté résultats.
                </p>
              </div>

              {/* Compétences */}
              <div>
                <SectionHead>Compétences</SectionHead>
                <div className="space-y-4">
                  {skills.map(({ category, pct, list }) => (
                    <div key={category}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{category}</span>
                        <span className="text-slate-400">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1.5">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }} />
                      </div>
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

              {/* Outils IA */}
              <div>
                <SectionHead>Maîtrise des outils IA</SectionHead>
                <div className="space-y-3">
                  {aiTools.map(({ name, pct }) => (
                    <div key={name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{name}</span>
                        <span className="text-slate-400">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Langues */}
              <div>
                <SectionHead>Langues</SectionHead>
                <ul className="space-y-1.5">
                  {langues.map(({ lang, level }) => (
                    <li key={lang} className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-700">{lang}</span>
                      <span className="text-slate-400">{level}</span>
                    </li>
                  ))}
                </ul>
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

              {/* Centres d'intérêt */}
              <div>
                <SectionHead>Centres d&apos;intérêt</SectionHead>
                <div className="flex flex-wrap gap-1.5">
                  {centresInteret.map((c) => (
                    <span key={c} className="px-2.5 py-1 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <SectionHead>Contact</SectionHead>
                <ul className="space-y-2">
                  {[
                    { icon: FiMail,   val: "fambodonald110@gmail.com" },
                    { icon: FiPhone,  val: "+229 01 56 33 62 82" },
                    { icon: FiMapPin, val: "Cotonou, Bénin" },
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
                <SectionHead accent>Expériences professionnelles</SectionHead>
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

              {/* Formation */}
              <div>
                <SectionHead accent>Formation</SectionHead>
                <div className="relative pl-4 border-l-2 border-indigo-100">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                  <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{formation.title}</h3>
                      <p className="text-indigo-600 text-xs font-semibold">{formation.school}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                      <FiCalendar className="w-3 h-3" />{formation.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {formation.workshops.map((w) => (
                      <li key={w.title} className="text-xs text-slate-600">
                        <p className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                          <span><span className="italic text-slate-700">« {w.title} »</span></span>
                        </p>
                        <p className="pl-4 text-[11px] text-slate-400 mt-0.5">{w.by}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projets */}
              <div>
                <SectionHead accent>Projets</SectionHead>
                <div className="space-y-4">
                  {projects.map((p) => (
                    <div key={p.title} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between mb-1 gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                        <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                          {p.stack}
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold text-amber-600 uppercase tracking-wide mb-1.5">
                        Projet fictif — réalisé à titre d&apos;exercice
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="px-10 py-4 border-t border-slate-100 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" }}>
            <span className="text-indigo-300 text-xs">Donald Fambo — Développeur Web & Mobile</span>
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
