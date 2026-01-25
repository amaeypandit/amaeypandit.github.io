export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const featuredProject: Project = {
  id: "budget-app",
  title: "Personal Budget Agent",
  description:
    "A clean, intuitive ollama powered budget management app for tracking expenses and intelligent speinding insights with spending pattern visualization.",
  image: "/images/projects/budget-app.jpg",
  techStack: ["Tailwind CSS", "Chart.js", "Ollama", "PyTorch", "TensorFlow", "Docker"],
  githubUrl: "https://github.com/amaeypandit/budgeting-agent",
  liveUrl: "https://amaeypandit.github.io/budgeting-agent",
};

export const projects: Project[] = [
  featuredProject,
  {
    id: "ml-pipeline",
    title: "ML Pipeline Framework",
    description: "End-to-end machine learning pipeline with automated training and deployment.",
    image: "/images/projects/ml-pipeline.jpg",
    techStack: ["Python", "MLflow", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/yourusername/ml-pipeline",
  },
];
