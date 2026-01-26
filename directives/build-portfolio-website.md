# Directive: Build Personal Portfolio Website

## Goal
Build a Next.js bento-grid portfolio website with static export for GitHub Pages deployment.

## Inputs
- **Wireframe**: See "Wireframe Specification" section below
- **Content**: User provides profile data, work experience, projects, and resume PDFs
- **Assets**: Headshot image, project screenshots

## Tools/Scripts to Use
- `execution/init-nextjs.sh` — Initialize Next.js project (create if needed)
- `execution/deploy-github-pages.sh` — Manual deployment trigger (create if needed)
- GitHub Actions workflow handles automated deployments

## Outputs
- Live website at `https://amaeypandit.github.io`
- Repository named `amaeypandit.github.io` (GitHub user site)
- CI/CD pipeline auto-deploying on push to main

---

## Design Specification

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#121212` | Page background |
| `surface` | `#1a1a1a` | Card/tile backgrounds |
| `border` | `#2a2a2a` | Default borders |
| `accent` | `#007BFF` | Primary blue, CTAs, highlights |
| `accent-glow` | `rgba(0,123,255,0.2)` | Hover shadows |
| `text-primary` | `#FAFAFA` | Main text |
| `text-secondary` | `#A1A1AA` | Muted text |

### Typography
- **Display**: Clash Display (headers, titles)
- **Body**: Satoshi (paragraphs, descriptions)
- **Mono**: JetBrains Mono (dates, code)

### Interaction Pattern (All Tiles)
```css
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  transform: scale(1.02);
  box-shadow: 0px 10px 30px rgba(0, 123, 255, 0.2);
  border-color: #007BFF;
}
```

---

## Wireframe Specification

### Grid Layout
4-column bento grid, responsive breakpoints:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

### Tile A — Career Timeline (3×2)
- "Currently: [Role] at [Company]" with pulse animation
- High-impact summary (2-3 lines)
- "Hire Me" CTA button (solid blue)

### Tile B — Profile Card (1×2)
- Circular headshot (blue border on hover)
- Social icons footer (LinkedIn, GitHub, Twitter/X, Email)

### Section: "Specialized Paths" (Resume Hub)

### Tile C — AI Engineering Resume (1.33×1)
- Brain icon (blue)
- Skills: LLMs, PyTorch, RAG
- "Download CV" outline button

### Tile D — Data Science Resume (1.33×1)
- Chart icon (blue)
- Skills: Statistics, Modeling, Scikit-Learn
- "Download CV" outline button

### Tile E — Data Engineering Resume (1.33×1)
- Database icon (blue)
- Skills: ETL, Spark, SQL, Airflow
- "Download CV" outline button

### Tile F — Experience Deep Dive (4×2 full-width)
- List layout, each row = one job
- Format: `[Year Range] | [Company] — [Role]`
- Year in **bold blue**
- Click to expand → 3 achievement bullets
- "View related projects →" anchor link

### Tile G — Featured Project (2×1)
- Project image with gradient overlay
- Title + one-line description
- Tech stack chips

### Tile H — Tech Stack Cloud (2×1)
- Small square chips for each tool
- Hover: glow blue, slight scale
- Categories: Languages, Frameworks, Tools, Cloud

---

## Tech Stack
| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts |
| Deployment | GitHub Actions → GitHub Pages |

---

## Directory Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (includes Header)
│   ├── page.tsx                # Homepage (bento grid)
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   └── page.tsx            # Projects page (filterable grid)
│   └── resume/
│       └── [type]/
│           └── page.tsx        # Dynamic resume preview pages
├── components/
│   ├── bento/
│   │   ├── BentoGrid.tsx
│   │   ├── BentoTile.tsx
│   │   ├── CareerTimeline.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── ResumeCard.tsx
│   │   ├── ExperienceList.tsx  # Redesigned with logos + skills
│   │   ├── FeaturedProject.tsx
│   │   └── TechStackCloud.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SkillChip.tsx
│   │   ├── SocialIcon.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ProjectCard.tsx     # Reusable project card
│   └── layout/
│       └── Header.tsx          # Fixed nav with Resume dropdown
├── data/
│   ├── profile.ts
│   ├── experience.ts           # Updated: logo, skills fields
│   ├── resumes.ts              # Updated: slug, pdfPath fields
│   ├── projects.ts             # Updated: category field
│   ├── techStack.ts
│   └── about.ts                # NEW: About page content
└── lib/
    └── cn.ts

public/
├── images/
│   ├── companies/              # Company logos
│   ├── projects/               # Project screenshots
│   ├── about/                  # Personal photos
│   └── stock/                  # Stock images
└── resumes/                    # Resume PDFs
    ├── data-engineering.pdf
    ├── ai-engineer.pdf
    └── data-scientist.pdf
```

## Related Directives
- See `website-restructure.md` for detailed header, pages, and experience redesign specs

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Initialize Next.js 14 with TypeScript
- [ ] Configure Tailwind with custom theme
- [ ] Set up static export config
- [ ] Create BentoTile + BentoGrid components

### Phase 2: Hero Section
- [ ] CareerTimeline with pulse animation
- [ ] ProfileCard with social icons
- [ ] Responsive adjustments

### Phase 3: Resume Hub
- [ ] SectionHeader component
- [ ] ResumeCard (reusable × 3)
- [ ] SkillChip component
- [ ] PDF download links

### Phase 4: Experience Section
- [ ] ExperienceList with accordion
- [ ] Achievement bullets animation
- [ ] Project anchor links

### Phase 5: Projects & Tech
- [ ] FeaturedProject card
- [ ] TechStackCloud with hover effects

### Phase 6: Polish & Deploy
- [ ] Framer Motion staggered reveal
- [ ] Mobile responsiveness
- [ ] GitHub Actions workflow
- [ ] Test deployment

---

## Edge Cases & Learnings

### GitHub Pages Static Export
- Must use `output: 'export'` in next.config.js
- Images require `unoptimized: true`
- No `basePath` needed for user sites (`username.github.io`)
- Add `trailingSlash: true` for proper routing
- Repo must be named `amaeypandit.github.io` for root URL

### Font Loading
- Use `next/font` for Google Fonts to avoid FOUT
- Preload display fonts

### Accordion State
- Use React state, not CSS-only (for accessibility)
- Animate height with Framer Motion's `AnimatePresence`

---

## Verification Checklist
- [ ] `npm run dev` renders all sections
- [ ] All hover effects work
- [ ] Accordion expands/collapses
- [ ] Resume PDFs download
- [ ] Social links work
- [ ] Mobile responsive
- [ ] `npm run build` succeeds
- [ ] GitHub Actions deploys successfully
- [ ] Live site loads correctly
