export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: { fr: string; en: string };
  image: string;
  stack: string[];
  features: { fr: string; en: string }[];
  github: string;
  live: string;
  category: "web" | "mobile" | "fullstack" | "api";
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Akili",
    description: "Application web React avec interface intuitive, composants réutilisables et design moderne responsive.",
    longDescription: {
      fr: "Akili est une application web construite avec React, axée sur une interface utilisateur claire et des composants réutilisables. Le projet met en avant une navigation fluide, un design responsive adapté à tous les écrans, et une architecture de composants modulaire facilitant la maintenance.",
      en: "Akili is a React web application focused on a clean user interface and reusable components. The project showcases smooth navigation, a responsive design adapted to all screens, and a modular component architecture that simplifies maintenance.",
    },
    image: "/projects/akili.png",
    stack: ["React", "JavaScript", "CSS"],
    features: [
      { fr: "UI responsive tous écrans",       en: "Responsive UI for all screens"    },
      { fr: "Composants React réutilisables",  en: "Reusable React components"        },
      { fr: "Navigation fluide SPA",           en: "Smooth SPA navigation"            },
    ],
    github: "#",
    live: "#",
    category: "web",
    year: "2024",
  },
  {
    id: 2,
    title: "Décor Prestige",
    description: "Site vitrine pour une entreprise de décoration intérieure — galerie produits, catalogue et formulaire de devis.",
    longDescription: {
      fr: "Décor Prestige est un site vitrine réalisé pour une entreprise spécialisée dans la décoration intérieure. Il présente une galerie de réalisations, un catalogue de services détaillé et un formulaire de demande de devis. Le design élégant reflète l'identité visuelle premium de la marque.",
      en: "Décor Prestige is a showcase website created for an interior decoration company. It features a gallery of completed projects, a detailed service catalogue, and a quote request form. The elegant design reflects the brand's premium visual identity.",
    },
    image: "/projects/decor.png",
    stack: ["HTML5", "CSS3"],
    features: [
      { fr: "Galerie produits interactive",    en: "Interactive product gallery"       },
      { fr: "Design responsive & soigné",      en: "Responsive & polished design"      },
      { fr: "Formulaire de contact/devis",     en: "Contact & quote request form"      },
    ],
    github: "#",
    live: "#",
    category: "web",
    year: "2023",
  },
];
