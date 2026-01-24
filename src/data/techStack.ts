export interface TechItem {
  name: string;
  category: "language" | "framework" | "tool" | "cloud";
}

export const techStack: TechItem[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Go", category: "language" },

  // Frameworks
  { name: "PyTorch", category: "framework" },
  { name: "LangChain", category: "framework" },
  { name: "FastAPI", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Spark", category: "framework" },

  // Tools
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Airflow", category: "tool" },
  { name: "MLflow", category: "tool" },
  { name: "Jupyter", category: "tool" },
  { name: "dbt", category: "tool" },

  // Cloud
  { name: "AWS", category: "cloud" },
  { name: "GCP", category: "cloud" },
  { name: "Snowflake", category: "cloud" },
  { name: "Pinecone", category: "cloud" },
];

export const categoryColors = {
  language: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  framework: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  tool: "bg-green-500/20 text-green-400 border-green-500/30",
  cloud: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};
