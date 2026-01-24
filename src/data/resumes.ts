export type IconName = "brain" | "chart" | "database";

export interface Resume {
  id: string;
  title: string;
  iconName: IconName;
  skills: string[];
  downloadUrl: string;
}

export const resumes: Resume[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    iconName: "brain",
    skills: ["LLMs", "PyTorch", "RAG", "Agents"],
    downloadUrl: "/resumes/ai-engineering.pdf",
  },
  {
    id: "data-science",
    title: "Data Science",
    iconName: "chart",
    skills: ["Statistics", "Modeling", "Scikit-Learn", "Python"],
    downloadUrl: "/resumes/data-science.pdf",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    iconName: "database",
    skills: ["ETL", "Spark", "SQL", "Airflow"],
    downloadUrl: "/resumes/data-engineering.pdf",
  },
];
