export interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  tag: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Développement Web",
    description:
      "Conception et développement de sites web et applications modernes, performantes et optimisées pour le référencement.",
    icon: "globe",
    tag: "Frontend & Fullstack",
    features: [
      "Landing pages & sites vitrine premium",
      "Applications React / Next.js",
      "E-commerce & boutiques en ligne",
      "Optimisation SEO & performance",
    ],
  },
  {
    number: "02",
    title: "Développement Mobile",
    description:
      "Applications iOS & Android cross-platform avec Flutter ou React Native, du prototype au déploiement stores.",
    icon: "mobile",
    tag: "iOS & Android",
    features: [
      "Applications Flutter cross-platform",
      "Apps React Native",
      "Intégration API & paiements",
      "Publication App Store & Play Store",
    ],
  },
  {
    number: "03",
    title: "API & Backend",
    description:
      "Architectures backend robustes, sécurisées et scalables pour alimenter vos applications web et mobiles.",
    icon: "server",
    tag: "Node.js & REST",
    features: [
      "API REST & GraphQL documentées",
      "Authentification JWT & OAuth2",
      "Architecture microservices",
      "Base de données & optimisation",
    ],
  },
  {
    number: "04",
    title: "Dashboard SaaS",
    description:
      "Tableaux de bord analytiques sur mesure avec visualisations interactives, gestion des rôles et export de données.",
    icon: "chart",
    tag: "Analytics & Data",
    features: [
      "Interface admin personnalisée",
      "Graphiques & KPIs temps réel",
      "Export PDF / Excel / CSV",
      "Gestion utilisateurs & permissions",
    ],
  },
  {
    number: "05",
    title: "Intégration UI/UX",
    description:
      "Transformation fidèle de vos maquettes Figma en interfaces responsives, accessibles et animées.",
    icon: "design",
    tag: "Figma to Code",
    features: [
      "Intégration pixel-perfect Figma",
      "Animations & micro-interactions",
      "Design responsive tous écrans",
      "Accessibilité WCAG 2.1",
    ],
  },
  {
    number: "06",
    title: "Audit & Maintenance",
    description:
      "Audit complet de vos projets existants, optimisation des performances et maintenance corrective et évolutive.",
    icon: "zap",
    tag: "Performance & SEO",
    features: [
      "Audit Lighthouse & Core Web Vitals",
      "Refactoring & dette technique",
      "Mises à jour sécurité",
      "Support & corrections continues",
    ],
  },
];
