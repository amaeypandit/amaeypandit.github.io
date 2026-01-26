export type IconName = "brain" | "chart" | "database";

export interface Resume {
  id: string;
  title: string;
  slug: string;
  iconName: IconName;
  skills: string[];
  pdfPath: string;
}

export const resumes: Resume[] = [
  {
    id: "data-engineering",
    title: "Data Engineer",
    slug: "data-engineering",
    iconName: "database",
    skills: ["SQL", "ETL / ELT", "Snowflake", "Airflow / Prefect", "Spark", "Data Governance"],
    pdfPath: "/resumes/data-engineer.pdf",
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    slug: "ai-engineer",
    iconName: "brain",
    skills: ["LLMs", "RAG", "AI Agents", "PyTorch", "Vector Databases", "LLM Automation"],
    pdfPath: "/resumes/ai-engineer.pdf",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    slug: "data-scientist",
    iconName: "chart",
    skills: ["Statistics", "Predictive Modeling", "Scikit-Learn", "Python", "Feature Engineering", "Model Evaluation"],
    pdfPath: "/resumes/data-scientist.pdf",
  },
];

export function getResumeBySlug(slug: string): Resume | undefined {
  return resumes.find((r) => r.slug === slug);
}
