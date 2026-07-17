export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "CEO",
    company: "TechStart Paris",
    content:
      "Un développeur exceptionnel qui a transformé notre vision en réalité. La qualité du code, le respect des délais et la communication irréprochable font de lui un partenaire de confiance.",
    rating: 5,
    avatar: "/testimonials/avatar1.png",
  },
  {
    id: 2,
    name: "Marc Dubois",
    role: "CTO",
    company: "Digital Agency",
    content:
      "Nous avons collaboré sur plusieurs projets complexes. Sa maîtrise technique et sa capacité à proposer des solutions innovantes nous ont impressionnés. Je recommande vivement.",
    rating: 5,
    avatar: "/testimonials/avatar2.png",
  },
  {
    id: 3,
    name: "Aminata Koné",
    role: "Fondatrice",
    company: "StartupAfrica",
    content:
      "Il a développé notre application mobile de A à Z avec une qualité premium. L'application est rapide, intuitive et nos utilisateurs l'adorent. Vraiment un excellent travail !",
    rating: 5,
    avatar: "/testimonials/avatar3.png",
  },
  {
    id: 4,
    name: "Thomas Weber",
    role: "Product Manager",
    company: "SaaS Corp",
    content:
      "Notre dashboard analytics a été livré dans les temps avec toutes les fonctionnalités demandées. La performance et le design sont au rendez-vous. Très professionnel.",
    rating: 5,
    avatar: "/testimonials/avatar4.png",
  },
];
