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
    id: "ai-engineer",
    title: "AI Engineer",
    slug: "ai-engineer",
    iconName: "brain",
    skills: ["LLMs", "PyTorch", "RAG", "Agents"],
    pdfPath: "/resumes/ai-engineer.pdf",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    slug: "data-scientist",
    iconName: "chart",
    skills: ["Statistics", "Modeling", "Scikit-Learn", "Python"],
    pdfPath: "/resumes/data-scientist.pdf",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    slug: "data-engineering",
    iconName: "database",
    skills: ["ETL", "Spark", "SQL", "Airflow"],
    pdfPath: "/resumes/data-engineering.pdf",
  },
];

export function getResumeBySlug(slug: string): Resume | undefined {
  return resumes.find((r) => r.slug === slug);
}
