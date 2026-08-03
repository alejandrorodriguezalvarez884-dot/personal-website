// Centralized site data. Edit these values with your real information.

export const profile = {
  name: "Your Name",
  role: "Your role / specialty",
  tagline: "A short sentence summarizing what you do.",
  bio: [
    "Write a brief paragraph about yourself here: your background, what you're passionate about, and what you're good at.",
    "You can add a second paragraph about your focus or what you're looking for professionally.",
  ],
  location: "City, Country",
  email: "you@email.com",
  socials: {
    github: "https://github.com/alejandrorodriguezalvarez884-dot",
    linkedin: "https://linkedin.com/in/your-username",
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
    role: "Current role",
    company: "Company",
    period: "2023 — Present",
    description: "Brief description of your responsibilities and achievements in this role.",
  },
  {
    role: "Previous role",
    company: "Previous company",
    period: "2021 — 2023",
    description: "Brief description of your responsibilities and achievements in this role.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Degree",
    institution: "University",
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

// Ordered chronologically (oldest first) by creation/activity date on GitHub.
export const projects: Project[] = [
  {
    name: "Tourist Guide",
    description:
      "Mobile tourist-guide app that generates AI-personalized points-of-interest information from the user's GPS location, in multiple languages.",
    url: `${GH}/tourist-guide-backend`,
    tags: ["Python", "Flask", "DDD", "PostgreSQL", "React Native", "Gemini AI"],
    period: "2025 — present",
    status: "in-progress",
    subprojects: [
      {
        name: "Backend",
        description: "REST API in Flask with Domain-Driven Design (DDD) architecture for the mobile app.",
        url: `${GH}/tourist-guide-backend`,
      },
      {
        name: "DB Helper",
        description: "PostgreSQL schema management scripts: creating and dropping tables, user model.",
        url: `${GH}/tourist-guide-db-helper`,
      },
      {
        name: "Mobile app",
        description: "React Native/Expo app with base navigation already implemented.",
        url: `${GH}/tourist-guide-agent-mobile-app`,
      },
      {
        name: "Agent Backend",
        description:
          "Flask/DDD service that integrates Gemini to generate tourist content and nearby points of interest, with multi-language support (ES/EN/FR/DE/IT).",
        url: `${GH}/tourist-guide-agent-backend`,
      },
      {
        name: "Landing page",
        description: "Not started yet.",
        url: `${GH}/tourist-guide-landing-page`,
      },
    ],
  },
  {
    name: "Moltbook Agent",
    description:
      "Autonomous AI agent that lives on Moltbook, the social network for AI agents. Uses Claude as its reasoning model, deploys on Google Cloud Run, and is triggered every 5 minutes via Cloud Scheduler.",
    url: `${GH}/moltbook-agent`,
    tags: ["Python", "Claude API", "FastAPI", "Google Cloud Run", "Firestore"],
    period: "Apr 2026",
  },
  {
    name: "Custom LLM Finetuning",
    description:
      "Local fine-tuning of a small LLM (LittleLamb, 290M parameters) on your own PDFs, with no vector databases or RAG: the knowledge lives in the model weights and runs entirely on CPU.",
    url: `${GH}/custom-llm-finetuning`,
    tags: ["Python", "LoRA", "Hugging Face", "FastAPI", "Streamlit"],
    period: "May 2026",
  },
  {
    name: "LLM Router",
    description:
      "Decomposes a prompt into subtasks with a single planning call to Claude, routes each one to the cheapest model capable of handling it (Haiku/Sonnet/Opus), and runs them in parallel, cutting cost and latency versus a single large model.",
    url: `${GH}/llm-router`,
    tags: ["Python", "Claude API", "asyncio", "Streamlit"],
    period: "Jul 2026",
  },
  {
    name: "KD Boundaries",
    description:
      "A visual knowledge-distillation lab: trains a teacher and a student (with and without distillation) on 2D datasets and compares their decision boundaries, showing what the student actually learns from the teacher beyond accuracy.",
    url: `${GH}/kd-boundaries`,
    tags: ["Python", "PyTorch", "Knowledge Distillation", "Visualization"],
    period: "Jul 2026",
  },
];
