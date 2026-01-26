export interface TechItem {
  name: string;
  category: "language" | "framework" | "tool" | "cloud" | "ai";
}

export const techStack: TechItem[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "R", category: "language" },
  { name: "NoSQL", category: "language" },

  // Frameworks & Libraries
  { name: "PyTorch", category: "framework" },
  { name: "TensorFlow", category: "framework" },
  { name: "Scikit-learn", category: "framework" },
  { name: "Pandas", category: "framework" },
  { name: "NumPy", category: "framework" },
  { name: "Apache Spark", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Streamlit", category: "framework" },

  // Tools
  { name: "Docker", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "GitHub Actions", category: "tool" },
  { name: "Claude Code", category: "tool" },
  { name: "Prefect", category: "tool" },
  { name: "Airflow", category: "tool" },
  { name: "MySQL", category: "tool" },
  { name: "Alteryx", category: "tool" },
  { name: "Tableau", category: "tool" },
  { name: "Redis", category: "tool" },
  { name: "CI/CD", category: "tool" },

  // Cloud & Data
  { name: "AWS", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "Snowflake", category: "cloud" },
  { name: "Snowflake RBAC", category: "cloud" },
  { name: "Databricks", category: "cloud" },
  { name: "Chroma", category: "cloud" },

  // AI & ML
  { name: "LLMs", category: "ai" },
  { name: "RAG", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "OpenAI API", category: "ai" },
  { name: "Hugging Face", category: "ai" },
  { name: "ELT/ETL", category: "ai" },
];

export const categoryColors = {
  language: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  framework: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  tool: "bg-green-500/20 text-green-400 border-green-500/30",
  cloud: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  ai: "bg-pink-500/20 text-pink-400 border-pink-500/30",
};
