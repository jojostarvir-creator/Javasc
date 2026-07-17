export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-violet-500 to-purple-600",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-600",
    skills: ["Node.js", "Express", "Laravel", "PHP", "Python", "REST API", "GraphQL"],
  },
  {
    title: "Base de données",
    icon: "🗄️",
    color: "from-emerald-500 to-teal-600",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis"],
  },
  {
    title: "Mobile",
    icon: "📱",
    color: "from-orange-500 to-amber-600",
    skills: ["Flutter", "React Native", "Dart", "iOS", "Android"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "from-rose-500 to-pink-600",
    skills: ["Docker", "Git", "GitHub", "Vercel", "Netlify", "AWS", "CI/CD"],
  },
  {
    title: "Design & Outils",
    icon: "🛠️",
    color: "from-indigo-500 to-violet-600",
    skills: ["Figma", "Framer", "VS Code", "Postman", "Jest", "Webpack"],
  },
];
