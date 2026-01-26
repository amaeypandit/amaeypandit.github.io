import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaey Pandit | AI Engineer & Data Scientist",
  description:
    "Portfolio of Amaey Pandit - AI Engineering, Data Science, and Data Engineering specialist.",
  keywords: ["AI Engineer", "Data Scientist", "Data Engineer", "Machine Learning", "Portfolio"],
  authors: [{ name: "Amaey Pandit" }],
  openGraph: {
    title: "Amaey Pandit | AI Engineer & Data Scientist",
    description: "AI Engineering, Data Science, and Data Engineering specialist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
