export interface Project {
  id: number;
  title: string;
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  challenge: { fr: string; en: string };
  outcome: { fr: string; en: string };
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
    title: "Houndjo",
    description: {
      fr: "E-commerce de parfums, muscs et huiles parfumées fabriqués au Bénin — boutique, galerie et contact.",
      en: "E-commerce for perfumes, musks and scented oils made in Benin — shop, gallery and contact.",
    },
    longDescription: {
      fr: "Houndjo est une boutique en ligne spécialisée dans la vente de parfums premium, muscs et huiles parfumées fabriqués localement au Bénin. Le site propose une interface e-commerce moderne avec catalogue de produits, galerie visuelle, système de commande et page de contact. Développé avec Next.js pour des performances optimales.",
      en: "Houndjo is an online store specializing in premium perfumes, musks and scented oils locally manufactured in Benin. The site features a modern e-commerce interface with product catalogue, visual gallery, ordering system and contact page. Built with Next.js for optimal performance.",
    },
    challenge: {
      fr: "Construire un e-commerce complet pour une marque locale sans plateforme existante (pas de Shopify/WooCommerce) — catalogue, galerie et tunnel de commande à concevoir de zéro, avec un public cible majoritairement mobile.",
      en: "Build a complete e-commerce experience for a local brand with no existing platform (no Shopify/WooCommerce) — catalogue, gallery and ordering flow designed from scratch, for a mostly mobile audience.",
    },
    outcome: {
      fr: "Site en production, mobile-first, structuré avec Next.js pour rester rapide et facile à faire évoluer. Démontre la capacité à livrer un projet e-commerce de bout en bout, du front au déploiement, en autonomie.",
      en: "Live in production, mobile-first, built with Next.js to stay fast and easy to extend. Demonstrates the ability to ship a full e-commerce project end-to-end, from front-end to deployment, independently.",
    },
    image: "/projects/houndjo.svg",
    url: "muskhoundjo.vercel.app",
    stack: ["Next.js", "React", "JavaScript", "CSS"],
    features: [
      { fr: "Boutique en ligne avec catalogue",     en: "Online shop with product catalogue"   },
      { fr: "Galerie produits & visuels",           en: "Product & visual gallery"             },
      { fr: "Design responsive & moderne",          en: "Responsive & modern design"           },
      { fr: "Page contact & informations",          en: "Contact page & business info"         },
    ],
    github: "#",
    live: "https://muskhoundjo.vercel.app",
    category: "web",
    year: "2025",
  },
  {
    id: 3,
    title: "Cocon Restaurant",
    description: {
      fr: "Site vitrine pour un restaurant gastronomique africain — menu, ambiance raffinée et réservations en ligne.",
      en: "Showcase website for an African gastronomic restaurant — menu, refined ambiance and online reservations.",
    },
    longDescription: {
      fr: "Cocon est le site vitrine d'un restaurant de haute gastronomie africaine. Il propose un design sombre et élégant avec une typographie premium, un menu complet (plats, boissons, galerie), un système de réservation de table en ligne, une section avis clients, et une fonctionnalité innovante de Sommelier IA pour accompagner les clients dans leurs choix. Déployé sur Vercel.",
      en: "Cocon is the showcase website of a high-end African gastronomic restaurant. It features a dark, elegant design with premium typography, a full menu (dishes, drinks, gallery), an online table reservation system, a customer reviews section, and an innovative AI Sommelier feature to guide guests in their choices. Deployed on Vercel.",
    },
    challenge: {
      fr: "Sortir du site vitrine classique : transmettre une identité de gastronomie premium tout en intégrant une fonctionnalité différenciante (un sommelier IA) plutôt qu'une simple liste de plats.",
      en: "Go beyond a classic showcase site: convey a premium gastronomy identity while integrating a differentiating feature (an AI sommelier) instead of a plain dish list.",
    },
    outcome: {
      fr: "Design sombre premium livré avec réservation en ligne et brique IA fonctionnelle intégrée. Démontre la capacité à sortir des sentiers battus et à expérimenter avec l'IA appliquée à l'UX, au-delà du site vitrine standard.",
      en: "Delivered a premium dark design with online reservations and a working AI feature. Demonstrates the ability to go beyond a standard showcase site and experiment with AI applied to UX.",
    },
    image: "/projects/cocon.svg",
    url: "cocon-restaurant.vercel.app",
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    features: [
      { fr: "Sommelier IA pour conseiller les clients",  en: "AI Sommelier to guide guests"         },
      { fr: "Réservation de table en ligne",             en: "Online table reservation system"      },
      { fr: "Menu complet — plats, boissons, galerie",   en: "Full menu — dishes, drinks, gallery"  },
      { fr: "Design premium sombre & élégant",           en: "Premium dark & elegant design"        },
    ],
    github: "#",
    live: "https://cocon-restaurant.vercel.app/",
    category: "web",
    year: "2025",
  },
  {
    id: 4,
    title: "Portfolio Laurent Fagnihoun",
    description: {
      fr: "Portfolio professionnel conçu pour un développeur web — compétences, projets et formulaire de contact.",
      en: "Professional portfolio built for a web developer — skills, projects and contact form.",
    },
    longDescription: {
      fr: "Site portfolio conçu et développé pour Laurent Fagnihoun, développeur web basé au Bénin. Le site présente ses compétences techniques (e-commerce, front-end, back-end avec PHP/Laravel), ses projets réalisés et un formulaire de contact. Design moderne et responsive adapté à tous les appareils.",
      en: "Portfolio website designed and developed for Laurent Fagnihoun, a web developer based in Benin. The site showcases his technical skills (e-commerce, front-end, back-end with PHP/Laravel), completed projects, and a contact form. Modern responsive design for all devices.",
    },
    challenge: {
      fr: "Livrer un portfolio pour le compte d'un autre développeur : comprendre et représenter fidèlement ses compétences (PHP/Laravel côté back-end) en HTML/CSS/JS pur, sans framework front, tout en respectant ses attentes.",
      en: "Deliver a portfolio on behalf of another developer: understand and faithfully represent his skills (PHP/Laravel back-end) using plain HTML/CSS/JS, no front-end framework, while meeting his expectations.",
    },
    outcome: {
      fr: "Portfolio responsive livré avec présentation claire des compétences et des projets. Démontre la capacité à travailler sur une demande externe avec un cahier des charges précis, et une bonne maîtrise des fondamentaux sans dépendre d'un framework.",
      en: "Delivered a responsive portfolio with a clear presentation of skills and projects. Demonstrates the ability to work from an external brief with precise requirements, and solid command of the fundamentals without relying on a framework.",
    },
    image: "/projects/laurent.svg",
    url: "momoazahaf709-lab.github.io/toutnouveau",
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      { fr: "Présentation des compétences techniques", en: "Technical skills showcase"          },
      { fr: "Portfolio de projets réalisés",           en: "Completed projects portfolio"       },
      { fr: "Design responsive tous écrans",           en: "Responsive design for all screens"  },
      { fr: "Formulaire de contact intégré",           en: "Integrated contact form"            },
    ],
    github: "https://github.com/momoazahaf709-lab/toutnouveau",
    live: "https://momoazahaf709-lab.github.io/toutnouveau/",
    category: "web",
    year: "2024",
  },
];
