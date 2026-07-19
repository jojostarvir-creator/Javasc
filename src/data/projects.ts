export interface Project {
  id: number;
  title: string;
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  image: string;
  url: string;
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
    description: {
      fr: "Application web React avec interface intuitive, composants réutilisables et design moderne responsive.",
      en: "React web application with an intuitive interface, reusable components, and modern responsive design.",
    },
    longDescription: {
      fr: "Akili est une application web construite avec React, axée sur une interface utilisateur claire et des composants réutilisables. Le projet met en avant une navigation fluide, un design responsive adapté à tous les écrans, et une architecture de composants modulaire facilitant la maintenance.",
      en: "Akili is a React web application focused on a clean user interface and reusable components. The project showcases smooth navigation, a responsive design adapted to all screens, and a modular component architecture that simplifies maintenance.",
    },
    image: "/projects/akili.png",
    url: "akili-app.vercel.app",
    stack: ["React", "JavaScript", "CSS"],
    features: [
      { fr: "UI responsive tous écrans",      en: "Responsive UI for all screens"   },
      { fr: "Composants React réutilisables", en: "Reusable React components"       },
      { fr: "Navigation fluide SPA",          en: "Smooth SPA navigation"           },
    ],
    github: "#",
    live: "#",
    category: "web",
    year: "2024",
  },
  {
    id: 2,
    title: "Décor Prestige",
    description: {
      fr: "Site vitrine pour une entreprise de décoration intérieure — galerie produits, catalogue et formulaire de devis.",
      en: "Showcase website for an interior decoration company — product gallery, catalogue, and quote request form.",
    },
    longDescription: {
      fr: "Décor Prestige est un site vitrine réalisé pour une entreprise spécialisée dans la décoration intérieure. Il présente une galerie de réalisations, un catalogue de services détaillé et un formulaire de demande de devis. Le design élégant reflète l'identité visuelle premium de la marque.",
      en: "Décor Prestige is a showcase website created for an interior decoration company. It features a gallery of completed projects, a detailed service catalogue, and a quote request form. The elegant design reflects the brand's premium visual identity.",
    },
    image: "/projects/decor.png",
    url: "decor-prestige.netlify.app",
    stack: ["HTML5", "CSS3"],
    features: [
      { fr: "Galerie produits interactive",  en: "Interactive product gallery"    },
      { fr: "Design responsive & soigné",    en: "Responsive & polished design"   },
      { fr: "Formulaire de contact/devis",   en: "Contact & quote request form"   },
    ],
    github: "#",
    live: "#",
    category: "web",
    year: "2023",
  },
  {
    id: 3,
    title: "Clean Food",
    description: {
      fr: "Site web pour un restaurant africain à Abidjan — menu, galerie, réservations et témoignages clients.",
      en: "Website for an African restaurant in Abidjan — menu, gallery, reservations and customer testimonials.",
    },
    longDescription: {
      fr: "Clean Food est le site vitrine d'un restaurant africain basé à Abidjan, Côte d'Ivoire. Le site présente le menu complet avec les plats signatures, une galerie visuelle de la cuisine et de l'ambiance, un système de réservation, les horaires d'ouverture et les témoignages de clients. Le design met en valeur l'authenticité et la fraîcheur des produits locaux.",
      en: "Clean Food is the showcase website of an African restaurant based in Abidjan, Côte d'Ivoire. The site features the full menu with signature dishes, a visual gallery of the food and ambiance, a reservation system, opening hours, and customer reviews. The design highlights the authenticity and freshness of local ingredients.",
    },
    image: "/projects/ecommerce.svg",
    url: "momoazahaf709-lab.github.io/Cleanfood",
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      { fr: "Menu interactif avec plats signatures", en: "Interactive menu with signature dishes" },
      { fr: "Galerie photos cuisine & ambiance",     en: "Food & ambiance photo gallery"          },
      { fr: "Système de réservation en ligne",       en: "Online reservation system"              },
      { fr: "Design responsive & moderne",           en: "Responsive & modern design"             },
    ],
    github: "https://github.com/momoazahaf709-lab/Cleanfood",
    live: "https://momoazahaf709-lab.github.io/Cleanfood/",
    category: "web",
    year: "2024",
  },
  {
    id: 4,
    title: "Portfolio Laurent Fagnihoun",
    description: {
      fr: "Portfolio professionnel pour un développeur web — présentation des compétences, projets et contact.",
      en: "Professional portfolio for a web developer — skills, projects and contact showcase.",
    },
    longDescription: {
      fr: "Site portfolio conçu et développé pour Laurent Fagnihoun, développeur web basé au Bénin. Le site présente ses compétences techniques, ses projets réalisés, son parcours professionnel et un formulaire de contact. Design moderne et responsive adapté à tous les appareils.",
      en: "Portfolio website designed and developed for Laurent Fagnihoun, a web developer based in Benin. The site showcases his technical skills, completed projects, professional background, and a contact form. Modern responsive design adapted to all devices.",
    },
    image: "/projects/dashboard.svg",
    url: "momoazahaf709-lab.github.io/toutnouveau",
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      { fr: "Présentation des compétences techniques", en: "Technical skills showcase"        },
      { fr: "Portfolio de projets réalisés",           en: "Completed projects portfolio"     },
      { fr: "Design responsive tous écrans",           en: "Responsive design for all screens"},
      { fr: "Formulaire de contact intégré",           en: "Integrated contact form"          },
    ],
    github: "https://github.com/momoazahaf709-lab/toutnouveau",
    live: "https://momoazahaf709-lab.github.io/toutnouveau/",
    category: "web",
    year: "2024",
  },
];
