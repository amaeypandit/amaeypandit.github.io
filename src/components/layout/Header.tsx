"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { resumes } from "@/data/resumes";
import { cn } from "@/lib/cn";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-surface/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl text-text-primary hover:text-accent transition-colors">
          AP
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Resume Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setResumeDropdownOpen(true)}
            onMouseLeave={() => setResumeDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
            >
              Resume
              <ChevronDown
                size={16}
                className={cn("transition-transform", resumeDropdownOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence>
              {resumeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-glow overflow-hidden"
                >
                  {resumes.map((resume) => (
                    <Link
                      key={resume.id}
                      href={`/resume/${resume.slug}`}
                      className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                      onClick={() => setResumeDropdownOpen(false)}
                    >
                      {resume.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" className="text-text-secondary hover:text-text-primary transition-colors">
            Projects
          </Link>

          <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-text-secondary text-sm font-medium">Resume</p>
                {resumes.map((resume) => (
                  <Link
                    key={resume.id}
                    href={`/resume/${resume.slug}`}
                    className="block pl-4 py-2 text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {resume.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/projects"
                className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="/about"
                className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
