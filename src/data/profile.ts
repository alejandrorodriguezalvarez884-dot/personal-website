// Centralized site data. Edit these values with your real information.

export const profile = {
  name: "Alejandro Rodríguez Álvarez",
  role: "AI Engineer",
  tagline:
    "AI Engineer building autonomous, agentic systems and optimizing LLMs for efficient, high-performance deployment.",
  bio: [
    "I'm an AI Engineer with a strong command of software development and extensive experience designing and implementing agentic systems — autonomous workflows that leverage AI and advanced reasoning to solve complex business challenges.",
    "I also have deep technical knowledge of LLM architectures, particularly model compression and efficiency, and I'm skilled at optimizing large language models for high-performance, resource-efficient deployment.",
  ],
  location: "Madrid, Spain",
  email: "alejandrorodriguezalvarez884@gmail.com",
  socials: {
    github: "https://github.com/alejandrorodriguezalvarez884-dot",
    linkedin: "https://www.linkedin.com/in/alejandro-rodr%C3%ADguez-%C3%A1lvarez-58051021b/",
  },
};

export type SubRole = {
  title: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  client?: string;
  clientUrl?: string;
  location: string;
  period: string;
  bullets?: string[];
  tech?: string[];
  subroles?: SubRole[];
};

// Ordered reverse-chronologically (most recent first), as is standard for a CV.
export const experience: Experience[] = [
  {
    role: "Freelance AI Engineer",
    company: "Korn Ferry",
    companyUrl: "https://www.kornferry.com",
    client: "Solera Holdings",
    clientUrl: "https://www.solera.com",
    location: "Madrid, Spain",
    period: "Jul 2026 — Present",
    bullets: [
      "Working as an independent consultant engaged through Korn Ferry on the Solera Holdings account, optimizing internal processes at every level using generative AI.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Multiverse Computing",
    companyUrl: "https://multiversecomputing.com",
    location: "Zaragoza, Spain",
    period: "Jan 2026 — Jun 2026",
    bullets: [
      "Project Owner and technical lead for the project's development efforts, co-directing the technical direction alongside the project manager.",
      "Planned, prioritized, and assigned technical tasks to the team, ensuring delivery quality.",
      "Developed multi-agent workflows for complex business case solutions.",
      "Compressed large language models using quantum-inspired algorithms and model healing based on knowledge distillation.",
    ],
    tech: ["RAG", "LangChain", "LangGraph", "MCP", "DevOps ML/AgentOps", "AWS S3", "AWS RDS"],
  },
  {
    role: "Full Stack Engineer",
    company: "Universidad Politécnica de Madrid",
    companyUrl: "https://www.upm.es",
    location: "Madrid, Spain",
    period: "Dec 2025 — Jun 2026",
    bullets: [
      "Part-time contract for a fixed 6-month period.",
      "Developed a digital twin to optimize the blood transfusion chain in a Spanish region, covering both frontend (Streamlit) and backend development.",
    ],
    tech: ["Streamlit", "Flask", "Docker", "Makefile"],
  },
  {
    role: "AI & Data Science Senior",
    company: "Dentsu",
    companyUrl: "https://www.dentsu.com",
    location: "Madrid, Spain",
    period: "Jan 2023 — Dec 2025",
    subroles: [
      {
        title: "AI & Data Science Senior",
        period: "Jan 2025 — Dec 2025",
        bullets: [
          "Technical lead for a team of three engineers: creating and assigning tasks, resolving technical queries, and reviewing and approving merge requests.",
          "Developed AI-powered solutions for optimizing internal company processes, including GenAI applications.",
        ],
        tech: ["RAG", "AI agents", "MCP", "DevOps ML/AgentOps", "Cloud Run", "CloudSQL"],
      },
      {
        title: "AI & Data Science Junior",
        period: "Jul 2023 — Dec 2024",
        bullets: [
          "Implemented the modeling methodology developed during the internship within the team, on projects to optimize media investment mix.",
          "Delivered presentations and worked in direct contact with clients.",
        ],
        tech: [
          "OOP (Python)",
          "Backend Development",
          "DevOps",
          "MLOps",
          "Cloud Run",
          "CloudSQL",
          "Cloud Storage",
          "BigQuery",
        ],
      },
      {
        title: "Internship",
        period: "Jan 2023 — Jun 2023",
        bullets: ["Methodological development of an econometric modeling tool based on Bayesian inference."],
        tech: ["OOP (Python)", "CloudSQL"],
      },
    ],
  },
  {
    role: "Data Engineer",
    company: "Minsait",
    companyUrl: "https://www.minsait.com",
    location: "Alcobendas, Spain",
    period: "Jul 2021 — Sep 2022",
    subroles: [
      {
        title: "Data ingestion project for Santander Bank",
        period: "Oct 2021 — Sep 2022",
        bullets: [
          "ETL development and process automation using GCP tools such as Dataflow and Pub/Sub, Cloud Storage, and Python libraries such as PySpark and Selenium.",
        ],
      },
      {
        title: "Training period",
        period: "Jul 2021 — Oct 2021",
        bullets: [],
        tech: ["Spark", "OOP (Scala and Python)", "Git"],
      },
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
};

// Ordered reverse-chronologically (most recent first).
export const education: Education[] = [
  {
    degree: "PhD, Computer Science (AI specialization)",
    institution: "Universidad Complutense de Madrid",
    location: "Madrid, Spain",
    period: "Sep 2024 — Present",
    description:
      "Research area: deep-learning-based models for the prediction and detection of anomalous medical events.",
  },
  {
    degree: "M.Sc. Mathematical Engineering",
    institution: "Universidad Complutense de Madrid",
    location: "Madrid, Spain",
    period: "Sep 2022 — Jun 2023",
    description:
      "Mathematical Finance branch. Thesis: Bayesian inference as an analysis and forecasting tool in the marketing and advertising sector.",
  },
  {
    degree: "B.Sc. Physics",
    institution: "Universidad Autónoma de Madrid",
    location: "Madrid, Spain",
    period: "Sep 2017 — Jun 2021",
    description: "Thesis: Solid-state hydrogen storage.",
  },
  {
    degree: "Bachillerato",
    institution: "Liceo Italiano de Madrid",
    location: "Madrid, Spain",
    period: "Sep 2015 — Jun 2017",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  { name: "Professional Data Engineer on Google Cloud Platform", issuer: "Google", year: "2025" },
  { name: "Marketing Science Professional", issuer: "Meta", year: "2023" },
];

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  { category: "Coding", items: ["Python", "R", "SQL", "Scala", "Spark", "LaTeX", "C/C++"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { category: "Web Dev", items: ["Django", "Flask", "Streamlit"] },
  { category: "Cloud", items: ["Google Cloud Platform", "Azure", "AWS"] },
  { category: "Languages", items: ["Spanish (native)", "Italian (C2)", "English (C1)"] },
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
