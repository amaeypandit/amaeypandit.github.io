import { profile } from "./profile";

export const aboutData = {
  headline: `Hi, I'm ${profile.name.split(" ")[0]}`,
  bio: [
    profile.bio,
    "What excites me most is the moment when a well-designed system clicks into place and suddenly a team can move faster, see clearer, or automate what used to take hours. That's the kind of impact I want to keep building.",
  ],
  journey: [
    "My journey into data started at Northeastern University, where I combined Data Science with Business Administration to understand both the technical and strategic sides of data-driven decision making.",
    "Through co-ops at General Atlantic and Audax Private Equity, I've had the opportunity to work on real-world data challenges in finance—from building automated reporting systems to deploying AI workflows that save hours of manual work.",
    "Leading TAMID Group taught me that the best technical solutions come from truly understanding the people who use them. That experience shapes how I approach every project.",
  ],
  beyondWork: {
    description: "Outside of work, you'll find me exploring new coffee shops, playing chess, or diving into the latest developments in AI. I'm always up for a good conversation about technology, startups, or the best pizza in the area.",
    images: [] as string[],
  },
  contact: {
    email: profile.email,
    socials: profile.socials,
    cta: "Let's Connect",
  },
};
