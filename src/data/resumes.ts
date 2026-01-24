import { Brain, BarChart3, Database } from "lucide-react";

export const resumes = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    icon: Brain,
    skills: ["LLMs", "PyTorch", "RAG", "Agents"],
    downloadUrl: "/resumes/ai-engineering.pdf",
    color: "accent",
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: BarChart3,
    skills: ["Statistics", "Modeling", "Scikit-Learn", "Python"],
    downloadUrl: "/resumes/data-science.pdf",
    color: "accent",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: Database,
    skills: ["ETL", "Spark", "SQL", "Airflow"],
    downloadUrl: "/resumes/data-engineering.pdf",
    color: "accent",
  },
];
