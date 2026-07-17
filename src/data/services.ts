export interface Service {
  number: string;
  icon: string;
  tag: { fr: string; en: string };
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  features: { fr: string; en: string }[];
}

export const services: Service[] = [
  {
    number: "01",
    icon: "globe",
    tag:         { fr: "Frontend & Fullstack",  en: "Frontend & Fullstack"  },
    title:       { fr: "Développement Web",     en: "Web Development"       },
    description: { fr: "Conception et développement de sites web et applications modernes, performantes et optimisées pour le référencement.", en: "Design and development of modern, high-performance websites and applications, optimized for search engines." },
    features: [
      { fr: "Landing pages & sites vitrine premium",  en: "Premium landing pages & showcase sites" },
      { fr: "Applications React / Next.js",           en: "React / Next.js applications"           },
      { fr: "E-commerce & boutiques en ligne",        en: "E-commerce & online stores"             },
      { fr: "Optimisation SEO & performance",         en: "SEO & performance optimization"         },
    ],
  },
  {
    number: "02",
    icon: "mobile",
    tag:         { fr: "iOS & Android",            en: "iOS & Android"              },
    title:       { fr: "Développement Mobile",     en: "Mobile Development"         },
    description: { fr: "Applications iOS & Android cross-platform avec Flutter ou React Native, du prototype au déploiement stores.", en: "Cross-platform iOS & Android apps with Flutter or React Native, from prototype to store deployment." },
    features: [
      { fr: "Applications Flutter cross-platform",   en: "Flutter cross-platform apps"           },
      { fr: "Apps React Native",                     en: "React Native apps"                     },
      { fr: "Intégration API & paiements",           en: "API & payment integration"             },
      { fr: "Publication App Store & Play Store",    en: "App Store & Play Store publishing"     },
    ],
  },
  {
    number: "03",
    icon: "server",
    tag:         { fr: "Node.js & REST",           en: "Node.js & REST"             },
    title:       { fr: "API & Backend",            en: "API & Backend"              },
    description: { fr: "Architectures backend robustes, sécurisées et scalables pour alimenter vos applications web et mobiles.", en: "Robust, secure, and scalable backend architectures to power your web and mobile applications." },
    features: [
      { fr: "API REST & GraphQL documentées",        en: "Documented REST & GraphQL APIs"        },
      { fr: "Authentification JWT & OAuth2",         en: "JWT & OAuth2 authentication"           },
      { fr: "Architecture microservices",            en: "Microservices architecture"            },
      { fr: "Base de données & optimisation",        en: "Database design & optimization"        },
    ],
  },
  {
    number: "04",
    icon: "chart",
    tag:         { fr: "Analytics & Data",         en: "Analytics & Data"           },
    title:       { fr: "Dashboard SaaS",           en: "SaaS Dashboard"             },
    description: { fr: "Tableaux de bord analytiques sur mesure avec visualisations interactives, gestion des rôles et export de données.", en: "Custom analytics dashboards with interactive visualizations, role management, and data export." },
    features: [
      { fr: "Interface admin personnalisée",         en: "Custom admin interface"                },
      { fr: "Graphiques & KPIs temps réel",          en: "Real-time charts & KPIs"              },
      { fr: "Export PDF / Excel / CSV",              en: "PDF / Excel / CSV export"             },
      { fr: "Gestion utilisateurs & permissions",    en: "User & permissions management"        },
    ],
  },
  {
    number: "05",
    icon: "design",
    tag:         { fr: "Figma to Code",            en: "Figma to Code"              },
    title:       { fr: "Intégration UI/UX",        en: "UI/UX Integration"          },
    description: { fr: "Transformation fidèle de vos maquettes Figma en interfaces responsives, accessibles et animées.", en: "Faithful conversion of your Figma designs into responsive, accessible, and animated interfaces." },
    features: [
      { fr: "Intégration pixel-perfect Figma",       en: "Pixel-perfect Figma integration"      },
      { fr: "Animations & micro-interactions",       en: "Animations & micro-interactions"      },
      { fr: "Design responsive tous écrans",         en: "Responsive design for all screens"    },
      { fr: "Accessibilité WCAG 2.1",                en: "WCAG 2.1 accessibility"               },
    ],
  },
  {
    number: "06",
    icon: "zap",
    tag:         { fr: "Performance & SEO",        en: "Performance & SEO"          },
    title:       { fr: "Audit & Maintenance",      en: "Audit & Maintenance"        },
    description: { fr: "Audit complet de vos projets existants, optimisation des performances et maintenance corrective et évolutive.", en: "Full audit of your existing projects, performance optimization, and corrective or evolutionary maintenance." },
    features: [
      { fr: "Audit Lighthouse & Core Web Vitals",    en: "Lighthouse & Core Web Vitals audit"   },
      { fr: "Refactoring & dette technique",         en: "Refactoring & technical debt"         },
      { fr: "Mises à jour sécurité",                 en: "Security updates"                     },
      { fr: "Support & corrections continues",       en: "Ongoing support & bug fixes"          },
    ],
  },
];
