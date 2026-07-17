export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "education" | "freelance";
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Développeur Full Stack Freelance",
    company: "Auto-entrepreneur",
    period: "2022 – Présent",
    description: "20+ projets web & mobile livrés pour des clients en Afrique et à l'international.",
    technologies: ["React", "Next.js", "Flutter", "Node.js", "Firebase"],
    type: "freelance",
  },
  {
    id: 2,
    role: "Développeur Web Frontend",
    company: "Projets clients",
    period: "2021 – 2022",
    description: "Création de sites vitrines et d'applications web pour des entreprises locales.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    type: "work",
  },
  {
    id: 3,
    role: "Formation Développement Web",
    company: "Autodidacte & en ligne",
    period: "2020 – 2021",
    description: "Maîtrise des fondamentaux web et des frameworks modernes via formations certifiantes.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    type: "education",
  },
];
