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
    github: "https://github.com/alejandrorodriguezalvarez884-dot",
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

export type SubProject = {
  name: string;
  description: string;
  url: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  period: string;
  status?: "in-progress";
  subprojects?: SubProject[];
};

const GH = "https://github.com/alejandrorodriguezalvarez884-dot";

// Ordenados cronológicamente (más antiguo primero) por fecha de creación/actividad en GitHub.
export const projects: Project[] = [
  {
    name: "Tourist Guide",
    description:
      "Aplicación móvil de guía turística que genera información de puntos de interés personalizada con IA a partir de la ubicación GPS del usuario, en varios idiomas.",
    url: `${GH}/tourist-guide-backend`,
    tags: ["Python", "Flask", "DDD", "PostgreSQL", "React Native", "Gemini AI"],
    period: "2025 — presente",
    status: "in-progress",
    subprojects: [
      {
        name: "Backend",
        description: "API REST en Flask con arquitectura Domain-Driven Design (DDD) para la app móvil.",
        url: `${GH}/tourist-guide-backend`,
      },
      {
        name: "DB Helper",
        description: "Scripts de gestión del esquema PostgreSQL: creación y borrado de tablas, modelo de usuarios.",
        url: `${GH}/tourist-guide-db-helper`,
      },
      {
        name: "App móvil",
        description: "App en React Native/Expo con la navegación base ya implementada.",
        url: `${GH}/tourist-guide-agent-mobile-app`,
      },
      {
        name: "Agent Backend",
        description:
          "Servicio Flask/DDD que integra Gemini para generar contenido turístico y puntos de interés cercanos, con soporte multi-idioma (ES/EN/FR/DE/IT).",
        url: `${GH}/tourist-guide-agent-backend`,
      },
      {
        name: "Landing page",
        description: "Pendiente de desarrollo.",
        url: `${GH}/tourist-guide-landing-page`,
      },
    ],
  },
  {
    name: "Moltbook Agent",
    description:
      "Agente autónomo de IA que vive en Moltbook, la red social para agentes de IA. Usa Claude como modelo de razonamiento, se despliega en Google Cloud Run y se activa cada 5 minutos vía Cloud Scheduler.",
    url: `${GH}/moltbook-agent`,
    tags: ["Python", "Claude API", "FastAPI", "Google Cloud Run", "Firestore"],
    period: "Abr 2026",
  },
  {
    name: "Custom LLM Finetuning",
    description:
      "Fine-tuning local de un LLM pequeño (LittleLamb, 290M parámetros) sobre PDFs propios, sin bases vectoriales ni RAG: el conocimiento vive en los pesos del modelo y corre por completo en CPU.",
    url: `${GH}/custom-llm-finetuning`,
    tags: ["Python", "LoRA", "Hugging Face", "FastAPI", "Streamlit"],
    period: "May 2026",
  },
  {
    name: "LLM Router",
    description:
      "Descompone un prompt en subtareas con una única llamada de planificación a Claude, enruta cada una al modelo más barato capaz de resolverla (Haiku/Sonnet/Opus) y las ejecuta en paralelo, reduciendo coste y latencia frente a un único modelo grande.",
    url: `${GH}/llm-router`,
    tags: ["Python", "Claude API", "asyncio", "Streamlit"],
    period: "Jul 2026",
  },
  {
    name: "KD Boundaries",
    description:
      "Laboratorio visual de knowledge distillation: entrena un profesor y un alumno (con y sin destilación) sobre datasets 2D y compara sus fronteras de decisión, mostrando qué aprende realmente el alumno del profesor más allá de la precisión.",
    url: `${GH}/kd-boundaries`,
    tags: ["Python", "PyTorch", "Knowledge Distillation", "Visualización"],
    period: "Jul 2026",
  },
];
