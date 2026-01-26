# Directive: Website Restructure

## Goal
Add persistent navigation header, dedicated pages (About, Projects, Resume previews), and redesign the work experience section with company logos and expandable cards.

## Inputs
- **Company logos**: User provides 5 logo images (PNG/SVG)
- **Resume PDFs**: User provides 3 specialized resume files
- **Personal photos**: User provides photos for About page
- **Project data**: User adds additional projects to data file

## Tools/Scripts to Use
- No new execution scripts needed
- Manual: Source stock image from Unsplash/Pexels for featured projects

## Outputs
- Fixed header with navigation
- `/about` page with personal + professional content
- `/projects` page with filterable grid
- `/resume/[type]` pages (3 variants) with PDF preview
- Redesigned experience section with logos and skill tags

---

## File Structure for User-Provided Assets

```
public/
├── images/
│   ├── companies/              ← NEW: Company logos
│   │   ├── audax.png           (Audax Private Equity)
│   │   ├── general-atlantic.png
│   │   ├── northeastern.png    (Northeastern University)
│   │   ├── neki.png
│   │   └── tamid.png           (TAMID Group)
│   ├── projects/               ← EXISTING: Project images
│   │   ├── budget-app.jpg      (existing)
│   │   └── [additional project images]
│   ├── about/                  ← NEW: Personal photos
│   │   └── [hobby photos, personal images]
│   └── stock/                  ← NEW: Stock images
│       └── tech-abstract.jpg   (data visualization aesthetic)
└── resumes/                    ← NEW: Resume PDFs
    ├── data-engineering.pdf
    ├── ai-engineer.pdf
    └── data-scientist.pdf
```

**Logo specifications:**
- Format: PNG or SVG (transparent background preferred)
- Size: At least 100x100px (will display at 40-48px)
- Naming: lowercase, hyphenated (e.g., `general-atlantic.png`)

---

## Design Specification

### 1. Header Component

**Location:** `src/components/layout/Header.tsx`

**Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo/Name]          [Resume ▾]    [Projects]    [About]   │
└─────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Position: `fixed`, `top-0`, `z-50`
- Background: `surface` with `backdrop-blur-md` on scroll
- Height: 64px
- Responsive: Hamburger menu on mobile (< md breakpoint)

**Resume Dropdown:**
- Trigger: Hover (desktop) / Click (mobile)
- Options:
  - Data Engineering → `/resume/data-engineering`
  - AI Engineer → `/resume/ai-engineer`
  - Data Scientist → `/resume/data-scientist`
- Animation: Fade + slide down with Framer Motion

**Links:**
- Projects → `/projects`
- About → `/about`

**Styling:**
```css
background: rgba(26, 26, 26, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--border);
```

---

### 2. Resume Preview Pages

**Routes:**
- `/resume/data-engineering`
- `/resume/ai-engineer`
- `/resume/data-scientist`

**Location:** `src/app/resume/[type]/page.tsx` (dynamic route)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ← Back to Home                          [Download PDF ↓]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    Data Engineering Resume                  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                                                       │ │
│  │                  PDF Embed / Preview                  │ │
│  │                     (iframe or image)                 │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Components:**
- Back button: Uses `router.back()` or links to `/`
- Download button: `<a href="/resumes/[type].pdf" download>`
- PDF viewer: `<iframe>` embed or `<object>` tag
- Fallback: Image preview if PDF embed fails

**Data:** Update `src/data/resumes.ts` with PDF paths:
```typescript
interface Resume {
  id: string;
  title: string;
  slug: string;           // URL slug
  pdfPath: string;        // /resumes/[name].pdf
  icon: string;           // Lucide icon name
  skills: string[];
}
```

---

### 3. Work Experience Redesign

**Location:** `src/components/bento/ExperienceList.tsx`

**Card Layout (Collapsed):**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────┐                                                   │
│  │ Logo │   Company Name                      Jul 2024      │
│  │      │   Role Title                      — Dec 2024      │
│  └──────┘                                                   │
│                                                             │
│  [Python] [SQL] [Airflow] [AWS]                   [▾ More]  │
└─────────────────────────────────────────────────────────────┘
```

**Card Layout (Expanded):**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────┐                                                   │
│  │ Logo │   Company Name                      Jul 2024      │
│  │      │   Role Title                      — Dec 2024      │
│  └──────┘                                                   │
│                                                             │
│  [Python] [SQL] [Airflow] [AWS]                   [▴ Less]  │
│                                                             │
│  • Achievement bullet point one describing impact           │
│  • Achievement bullet point two with metrics                │
│  • Achievement bullet point three about technologies        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Data Update:** `src/data/experience.ts`
```typescript
interface Experience {
  id: string;
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  logo: string;           // NEW: /images/companies/[name].png
  skills: string[];       // NEW: Tech tags to display
  achievements: string[];
  relatedProjects?: string[];
}
```

**Styling:**
- Logo: 48px × 48px, `object-contain`, rounded-lg
- Grid: 1 column mobile, 2 columns desktop
- Card: `surface` bg, `border` stroke, hover glow
- Skills: Use existing `SkillChip` component (smaller variant)
- Animation: Framer Motion `AnimatePresence` for expand/collapse

---

### 4. Projects Page

**Route:** `/projects`

**Location:** `src/app/projects/page.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         Projects                            │
│                                                             │
│  [All] [AI/ML] [Data Engineering] [Web] [Other]            │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Image     │  │   Image     │  │   Image     │         │
│  │   Title     │  │   Title     │  │   Title     │         │
│  │   Desc      │  │   Desc      │  │   Desc      │         │
│  │   [tags]    │  │   [tags]    │  │   [tags]    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

**Filter Behavior:**
- Default: "All" selected
- Click filter: Animate cards (fade out non-matching, reflow grid)
- State: `useState` for active filter
- Animation: Framer Motion `layout` prop for smooth reflow

**Data Update:** `src/data/projects.ts`
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;       // NEW: 'ai-ml' | 'data-engineering' | 'web' | 'other'
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;     // NEW: Show on homepage
}
```

**Filter Categories:**
```typescript
const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'data-engineering', label: 'Data Engineering' },
  { id: 'web', label: 'Web' },
  { id: 'other', label: 'Other' },
];
```

**Card Component:** Create `src/components/ui/ProjectCard.tsx`
- Reuse styling from FeaturedProject
- Smaller scale for grid layout
- Image with gradient overlay
- Title, description (2 lines max), tech chips
- Hover: scale + glow effect

---

### 5. About Page

**Route:** `/about`

**Location:** `src/app/about/page.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────┐                                              │
│  │   Photo   │    Hi, I'm Amaey                            │
│  │           │                                              │
│  └───────────┘    [Extended bio - 2-3 paragraphs]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  My Journey                                                 │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  [Narrative about career path, what drives you,            │
│   transitions, goals - 2-3 paragraphs]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Beyond Work                                                │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  [Hobbies and interests description]                       │
│                                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐                                   │
│  │ Img │ │ Img │ │ Img │   [Optional photo grid]           │
│  └─────┘ └─────┘ └─────┘                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Get In Touch                                               │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  [Email]  [LinkedIn]  [GitHub]  [Twitter]                  │
│                                                             │
│           [ Let's Connect → ]                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Data:** Create `src/data/about.ts`
```typescript
interface AboutData {
  headline: string;
  bio: string[];              // Array of paragraphs
  journey: string[];          // Array of paragraphs
  beyondWork: {
    description: string;
    images?: string[];        // /images/about/[name].jpg
  };
  contact: {
    email: string;
    socials: Social[];
  };
}
```

**Styling:**
- Max width container (~800px) for readability
- Generous spacing between sections
- Photo: rounded, subtle shadow
- Section headers: Use existing `SectionHeader` component
- Photo grid: CSS Grid, 3 columns, gap-4

---

### 6. Stock Image

**Source:** Unsplash or Pexels

**Search terms:**
- "data visualization abstract"
- "network nodes blue"
- "technology abstract lines"
- "digital data flow"

**Requirements:**
- Landscape orientation (16:9 or similar)
- Blue/purple tones to match accent color
- Abstract/professional (not cheesy stock photo)
- Minimum 1920px wide

**Save to:** `/public/images/stock/tech-abstract.jpg`

**Usage:** Default image for projects without custom images

---

## Implementation Phases

### Phase 1: Header & Navigation
- [ ] Create `Header.tsx` component
- [ ] Implement Resume dropdown with hover
- [ ] Add mobile hamburger menu
- [ ] Update `layout.tsx` to include Header
- [ ] Add padding-top to body for fixed header

### Phase 2: Resume Preview Pages
- [ ] Create dynamic route `/resume/[type]/page.tsx`
- [ ] Update `resumes.ts` data with slugs and PDF paths
- [ ] Implement PDF embed with fallback
- [ ] Style back/download buttons

### Phase 3: Experience Redesign
- [ ] Update `experience.ts` with logo and skills fields
- [ ] Redesign `ExperienceList.tsx` card layout
- [ ] Add company logo display
- [ ] Add skill chips to collapsed state
- [ ] Adjust expand/collapse animation

### Phase 4: Projects Page
- [ ] Create `/projects/page.tsx`
- [ ] Create `ProjectCard.tsx` component
- [ ] Implement filter state and animation
- [ ] Update `projects.ts` with category field
- [ ] Add more projects to data

### Phase 5: About Page
- [ ] Create `/about/page.tsx`
- [ ] Create `about.ts` data file
- [ ] Build section layout components
- [ ] Add photo grid for hobbies
- [ ] Style contact section

### Phase 6: Polish
- [ ] Source and add stock image
- [ ] Test all navigation flows
- [ ] Mobile responsiveness check
- [ ] Update homepage to link properly
- [ ] Verify static export works

---

## Edge Cases & Notes

### Static Export Compatibility
- PDF embed may not work in all browsers; provide download fallback
- All routes must be statically exportable
- Use `generateStaticParams` for dynamic resume routes

### Mobile Navigation
- Hamburger menu opens full-screen overlay
- Resume shows as expandable accordion (not hover dropdown)
- Touch-friendly tap targets (min 44px)

### Image Optimization
- Company logos: Keep under 50KB each
- Stock image: Compress to ~200KB
- Use WebP format where possible

### Accessibility
- Dropdown keyboard navigable (arrow keys, escape)
- Focus states on all interactive elements
- Semantic HTML (nav, main, section)

---

## Verification Checklist
- [ ] Header appears on all pages
- [ ] Resume dropdown works on hover (desktop) and click (mobile)
- [ ] All three resume pages load with PDF preview
- [ ] Experience cards show logos and skills
- [ ] Experience cards expand/collapse properly
- [ ] Projects page filters work
- [ ] About page displays all sections
- [ ] Mobile navigation works
- [ ] Static build succeeds (`npm run build`)
- [ ] All links work on deployed site
