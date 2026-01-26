import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { resumes, getResumeBySlug } from "@/data/resumes";

interface ResumePageProps {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return resumes.map((resume) => ({
    type: resume.slug,
  }));
}

export async function generateMetadata({ params }: ResumePageProps) {
  const { type } = await params;
  const resume = getResumeBySlug(type);
  if (!resume) return { title: "Resume Not Found" };

  return {
    title: `${resume.title} Resume | Amaey Pandit`,
    description: `View and download Amaey Pandit's ${resume.title} resume.`,
  };
}

export default async function ResumePage({ params }: ResumePageProps) {
  const { type } = await params;
  const resume = getResumeBySlug(type);

  if (!resume) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </Link>

          <a
            href={resume.pdfPath}
            download
            className="btn-solid inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-8">
          {resume.title} Resume
        </h1>

        {/* PDF Preview */}
        <div className="bg-surface border border-border rounded-2xl overflow-hidden">
          <object
            data={resume.pdfPath}
            type="application/pdf"
            className="w-full h-[70vh] min-h-[500px]"
          >
            <div className="flex flex-col items-center justify-center h-64 text-text-secondary">
              <p className="mb-4">Unable to display PDF preview.</p>
              <a
                href={resume.pdfPath}
                download
                className="btn-outline inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
