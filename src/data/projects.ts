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
    title: "Akili",
    description: "Application web React avec interface intuitive, composants réutilisables et design moderne responsive.",
    image: "/projects/akili.png",
    stack: ["React", "JavaScript", "CSS"],
    features: ["UI responsive", "Composants React", "Navigation fluide"],
    github: "#",
    live: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Décor Prestige",
    description: "Site vitrine pour une entreprise de décoration intérieure — galerie produits, catalogue et formulaire de devis.",
    image: "/projects/decor.png",
    stack: ["HTML5", "CSS3"],
    features: ["Galerie produits", "Design responsive", "Formulaire contact"],
    github: "#",
    live: "#",
    category: "web",
  },
];
