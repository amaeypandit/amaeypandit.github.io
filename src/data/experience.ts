export interface Experience {
  id: string;
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  logo: string;
  skills: string[];
  achievements: string[];
  relatedProjects?: string[];
}

export const experiences: Experience[] = [
  {
    id: "audax-2025",
    company: "Audax Private Equity",
    role: "AI Data Engineering Co-op",
    startYear: "Jul 2025",
    endYear: "Dec 2025",
    logo: "/images/companies/audax.png",
    skills: ["Snowflake", "Prefect", "Python", "LLMs"],
    achievements: [
      "Engineered a firmwide alerting platform across Snowflake, Prefect, and on-prem servers to surface pipeline failures, SLA breaches, and silent data issues upstream",
      "Developed ELT/ETL pipelines spanning external platforms and internal systems, reducing daily manual operational effort by ~15%",
      "Built AI-powered workflows for unstructured documents, enabling semantic search across Due Diligence files and investment committee memos",
      "Migrated 10+ data processes from on-prem Windows servers to Prefect Cloud and Snowflake, improving reliability and maintainability",
      "Shipped a self-service alert configuration app used by ~30 stakeholders to define custom data quality logic, cadence, and recipients",
    ],
  },
  {
    id: "general-atlantic-2024",
    company: "General Atlantic",
    role: "Capital Solutions Finance Co-op",
    startYear: "Jul 2024",
    endYear: "Dec 2024",
    logo: "/images/companies/general-atlantic.png",
    skills: ["Python", "Alteryx", "Databricks", "LLMs"],
    achievements: [
      "Built LLM-driven automation tools for Investor Services, cutting turnaround time for key workflows by ~50%",
      "Developed Python scripts for ingestion and transformation tasks flowing through Alteryx, Databricks, and lakehouse systems",
      "Supported investor reporting and ad-hoc analysis while maintaining complex financial models and datasets",
    ],
  },
  {
    id: "khoury-ta-2024",
    company: "Northeastern University",
    role: "Database Design TA",
    startYear: "Jan 2024",
    endYear: "Apr 2024",
    logo: "/images/companies/northeastern.png",
    skills: ["MySQL", "Python", "Teaching"],
    achievements: [
      "Helped develop course assignments and projects for MySQL and Python, improving hands-on learning materials",
      "Held weekly office hours and answered Piazza questions for 200+ students, reinforcing DBMS fundamentals and query design",
      "Reviewed student code and provided actionable feedback on style, correctness, and performance",
    ],
  },
  {
    id: "neki-2023",
    company: "Neki",
    role: "Business Transformation Intern",
    startYear: "Jun 2023",
    endYear: "Aug 2023",
    logo: "/images/companies/neki.png",
    skills: ["HubSpot", "Analytics", "Agile"],
    achievements: [
      "Executed business analytics for a B2B SaaS social-impact startup, translating insights into operational improvements",
      "Designed and implemented a fully integrated Help Center in HubSpot, strengthening customer support workflows",
      "Wrote detailed user stories and supported agile delivery for cross-functional, internationally distributed teams",
    ],
  },
  {
    id: "tamid-2023-2025",
    company: "TAMID Group",
    role: "President & VP of Education",
    startYear: "Apr 2023",
    endYear: "Dec 2025",
    logo: "/images/companies/tamid.png",
    skills: ["Leadership", "Curriculum Design", "Consulting"],
    achievements: [
      "Led a 150+ member organization with 13 Executive Board members across 7 committees, delivering real work for local startups",
      "Scaled industry-aligned tracks across investing, consulting, and technical consulting to drive sustained client impact",
      "Designed and taught a 10-week curriculum for ~60 students covering finance, consulting, technology, and professional skills",
    ],
  },
];
