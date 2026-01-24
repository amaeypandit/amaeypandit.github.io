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
  id: "rag-system",
  title: "Enterprise RAG System",
  description:
    "Production-grade retrieval-augmented generation system for document Q&A at scale.",
  image: "/images/projects/rag-system.jpg",
  techStack: ["Python", "LangChain", "Pinecone", "FastAPI", "React"],
  githubUrl: "https://github.com/yourusername/rag-system",
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
