export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  features: string[];
  github: string;
  live: string;
  category: "web" | "mobile" | "fullstack" | "api";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Dashboard Analytics",
    description: "Plateforme analytics temps réel avec visualisations interactives et gestion multi-utilisateurs.",
    image: "/projects/dashboard.png",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    features: ["Graphiques temps réel", "Export PDF/Excel", "Rôles & permissions"],
    github: "https://github.com",
    live: "https://example.com",
    category: "fullstack",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description: "Application mobile e-commerce cross-platform avec paiement intégré et notifications push.",
    image: "/projects/ecommerce.png",
    stack: ["Flutter", "Firebase", "Stripe", "Node.js"],
    features: ["Paiement Stripe", "Notifications push", "Mode hors ligne"],
    github: "https://github.com",
    live: "https://example.com",
    category: "mobile",
  },
  {
    id: 3,
    title: "API REST Microservices",
    description: "Architecture microservices scalable avec API gateway, auth JWT et documentation Swagger.",
    image: "/projects/api.png",
    stack: ["Node.js", "Express", "Docker", "PostgreSQL", "Redis"],
    features: ["Auth JWT & OAuth2", "Rate limiting", "Docs Swagger"],
    github: "https://github.com",
    live: "https://example.com",
    category: "api",
  },
  {
    id: 4,
    title: "Portfolio Immobilier",
    description: "Plateforme immobilière avec carte interactive, filtres avancés et visite virtuelle 3D.",
    image: "/projects/real-estate.png",
    stack: ["Next.js", "Mapbox", "Three.js", "Supabase"],
    features: ["Carte Mapbox", "Visite 3D", "Système de réservation"],
    github: "https://github.com",
    live: "https://example.com",
    category: "web",
  },
  {
    id: 5,
    title: "Akili",
    description: "Application web React avec interface intuitive et composants réutilisables.",
    image: "/projects/akili.png",

    stack: ["React", "JavaScript", "CSS"],
    features: ["UI responsive", "Composants React", "Navigation fluide"],
    github: "#",
    live: "#",
    category: "web",
  },
  {
    id: 6,
    title: "Décor Prestige",
    description: "Site vitrine pour une entreprise de décoration — galerie produits et formulaire de devis.",
    image: "/projects/decor.png",
    stack: ["HTML5", "CSS3"],
    features: ["Galerie produits", "Design responsive", "Formulaire contact"],
    github: "#",
    live: "#",
    category: "web",
  },
];
