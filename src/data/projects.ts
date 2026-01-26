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
      "A clean, intuitive ollama powered budget management app for tracking expenses and intelligent spending insights with spending pattern visualization.",
    image: "/images/projects/budget-app.jpg",
    techStack: ["Tailwind CSS", "Chart.js", "Ollama", "PyTorch", "TensorFlow", "Docker"],
    category: "ai-ml",
    githubUrl: "https://github.com/amaeypandit/budgeting-agent",
    liveUrl: "https://amaeypandit.github.io/budgeting-agent",
    featured: true,
  },
  {
    id: "ml-pipeline",
    title: "ML Pipeline Framework",
    description: "End-to-end machine learning pipeline with automated training and deployment.",
    image: "/images/projects/ml-pipeline.jpg",
    techStack: ["Python", "MLflow", "Docker", "Kubernetes"],
    category: "ai-ml",
    githubUrl: "https://github.com/amaeypandit/ml-pipeline",
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
