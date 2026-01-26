export const DEFAULT_PROJECT_IMAGE = "/images/stock/tech-abstract.jpg";

export type ProjectCategory = "ai-ml" | "data-engineering" | "web" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "budget-app",
    title: "Personal Budget Agent",
    description:
      "A clean, intuitive Ollama-powered budget management app for tracking expenses and intelligent spending insights with spending pattern visualization.",
    image: "/images/projects/budget-agent.png",
    techStack: ["Ollama", "PyTorch", "MCP", "Streamlit"],
    category: "ai-ml",
    githubUrl: "https://github.com/amaeypandit/budgeting-agent",
    featured: true,
  },
  {
    id: "ai-news-digest",
    title: "AI News Digest",
    description:
      "Automated daily email digest of AI news delivered every morning. Curates content from 15+ sources including TechCrunch, arXiv, company blogs (OpenAI, Anthropic, Google AI), and community discussions from Reddit and Hacker News. Organized into Technology, Research, Industry, and Community sections.",
    image: DEFAULT_PROJECT_IMAGE,
    techStack: ["Python", "GitHub Actions", "RSS", "SMTP"],
    category: "ai-ml",
    githubUrl: "https://github.com/amaeypandit/ai-news-digest",
  },
  {
    id: "nba-combine-predictor",
    title: "NBA Combine Predictor",
    description:
      "Machine learning model that predicts NBA rookie performance using combine data. Scrapes and processes anthropometric measurements, strength and agility metrics to train an MLP neural network. Features an interactive Streamlit dashboard for exploring predictions vs actual performance.",
    image: DEFAULT_PROJECT_IMAGE,
    techStack: ["Python", "PyTorch", "Streamlit", "Scikit-learn"],
    category: "ai-ml",
    githubUrl: "https://github.com/derrickyg/Combine-Prediction",
  },
  {
    id: "project-supernova",
    title: "Project Supernova",
    description:
      "Vector-based document processing pipeline to automate invoice ingestion into Workday, eliminating manual steps. Features an LLM-driven orchestration layer with LangChain to coordinate tasks across ingestion and validation workflows. Built at General Atlantic (code on company GitHub).",
    image: DEFAULT_PROJECT_IMAGE,
    techStack: ["Python", "LangChain", "RAG", "Workday API"],
    category: "ai-ml",
  },
  {
    id: "data-governance-platform",
    title: "Data Governance & Quality Alerting Platform",
    description:
      "Enterprise data governance system to detect pipeline failures, SLA breaches, and silent data issues upstream. Includes a self-service alert configuration app used by ~30 stakeholders to define custom data quality logic, cadence, and recipients. Integrated end-to-end resolution workflows by routing alerts into engineering tickets. Built at Audax Private Equity (code on company GitHub).",
    image: DEFAULT_PROJECT_IMAGE,
    techStack: ["Snowflake", "Prefect", "Python", "Streamlit"],
    category: "data-engineering",
  },
  {
    id: "endzone-analytics",
    title: "Endzone Analytics",
    description:
      "Full-stack database-driven application providing comprehensive NFL statistics and key metrics. Built with REST APIs, Flask backend, MySQL database, and Appsmith UI. Containerized with Docker for deployment.",
    image: DEFAULT_PROJECT_IMAGE,
    techStack: ["Python", "Flask", "MySQL", "Docker", "Appsmith"],
    category: "data-engineering",
    githubUrl: "https://github.com/siondw/Endzone-Analytics",
  },
];

export const featuredProject = projects.find((p) => p.featured) || projects[0];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "data-engineering", label: "Data Engineering" },
  { id: "web", label: "Web" },
  { id: "other", label: "Other" },
] as const;
