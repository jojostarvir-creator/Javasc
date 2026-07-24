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
    title: "Houndjo",
    description: {
      fr: "E-commerce de parfums, muscs et huiles parfumées fabriqués au Bénin — boutique, galerie et contact.",
      en: "E-commerce for perfumes, musks and scented oils made in Benin — shop, gallery and contact.",
    },
    longDescription: {
      fr: "Houndjo est une boutique en ligne spécialisée dans la vente de parfums premium, muscs et huiles parfumées fabriqués localement au Bénin. Le site propose une interface e-commerce moderne avec catalogue de produits, galerie visuelle, système de commande et page de contact. Développé avec Next.js pour des performances optimales.",
      en: "Houndjo is an online store specializing in premium perfumes, musks and scented oils locally manufactured in Benin. The site features a modern e-commerce interface with product catalogue, visual gallery, ordering system and contact page. Built with Next.js for optimal performance.",
    },
    image: "/projects/ecommerce.svg",
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
    id: 2,
    title: "Clean Food",
    description: {
      fr: "Site web pour un restaurant africain à Abidjan — menu, galerie, réservations et témoignages clients.",
      en: "Website for an African restaurant in Abidjan — menu, gallery, reservations and customer reviews.",
    },
    longDescription: {
      fr: "Clean Food est le site vitrine d'un restaurant africain basé à Abidjan, Côte d'Ivoire. Le site présente le menu complet avec les plats signatures (Poulet DG, jus Bissap…), une galerie visuelle de la cuisine et de l'ambiance, un système de réservation, les horaires d'ouverture et les témoignages de clients satisfaits.",
      en: "Clean Food is the showcase website of an African restaurant based in Abidjan, Côte d'Ivoire. The site features the full menu with signature dishes (Chicken DG, Bissap juice…), a visual gallery of food and ambiance, a reservation system, opening hours, and customer reviews.",
    },
    image: "/projects/real-estate.svg",
    url: "momoazahaf709-lab.github.io/Cleanfood",
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      { fr: "Menu interactif avec plats signatures", en: "Interactive menu with signature dishes" },
      { fr: "Galerie photos cuisine & ambiance",     en: "Food & ambiance photo gallery"          },
      { fr: "Système de réservation en ligne",       en: "Online reservation system"              },
      { fr: "Témoignages clients",                   en: "Customer testimonials"                  },
    ],
    github: "https://github.com/momoazahaf709-lab/Cleanfood",
    live: "https://momoazahaf709-lab.github.io/Cleanfood/",
    category: "web",
    year: "2024",
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
    image: "/projects/dashboard.svg",
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
