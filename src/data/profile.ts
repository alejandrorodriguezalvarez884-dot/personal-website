// Datos centralizados del sitio. Edita estos valores con tu información real.

export const profile = {
  name: "Tu Nombre",
  role: "Tu puesto / especialidad",
  tagline: "Una frase corta que resuma lo que haces.",
  bio: [
    "Escribe aquí un párrafo breve sobre ti: tu trayectoria, lo que te apasiona y en qué eres bueno.",
    "Puedes añadir un segundo párrafo con tu enfoque o lo que buscas profesionalmente.",
  ],
  location: "Ciudad, País",
  email: "tu@email.com",
  socials: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
  },
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Puesto actual",
    company: "Empresa",
    period: "2023 — Presente",
    description: "Breve descripción de tus responsabilidades y logros en este puesto.",
  },
  {
    role: "Puesto anterior",
    company: "Empresa anterior",
    period: "2021 — 2023",
    description: "Breve descripción de tus responsabilidades y logros en este puesto.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Título / Grado",
    institution: "Universidad",
    period: "2017 — 2021",
  },
];

export const skills: string[] = [
  "Skill 1",
  "Skill 2",
  "Skill 3",
  "Skill 4",
  "Skill 5",
  "Skill 6",
];

export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
};

// Placeholder: más adelante los sustituiremos por tus repos reales de GitHub.
export const projects: Project[] = [
  {
    name: "Proyecto de ejemplo uno",
    description: "Descripción breve de qué hace este proyecto y qué tecnologías usa.",
    url: "https://github.com/tu-usuario/proyecto-uno",
    tags: ["TypeScript", "Astro"],
  },
  {
    name: "Proyecto de ejemplo dos",
    description: "Descripción breve de qué hace este proyecto y qué tecnologías usa.",
    url: "https://github.com/tu-usuario/proyecto-dos",
    tags: ["Python", "Data"],
  },
  {
    name: "Proyecto de ejemplo tres",
    description: "Descripción breve de qué hace este proyecto y qué tecnologías usa.",
    url: "https://github.com/tu-usuario/proyecto-tres",
    tags: ["React"],
  },
];
