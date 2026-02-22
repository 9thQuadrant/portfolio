export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    achievements: string[];
  }
  
  export const experiences: Experience[] = [
    {
      company: "Confluent",
      role: "Senior Frontend Engineer II",
      period: "May 2025 – Present",
      location: "Remote · Bengaluru",
      achievements: [
        "Migrated docs.confluent.io from Sphinx to Astro — build time dropped from 10–20 min to 1.5 min",
        "Leads cross-functional technical strategy and system design for documentation infrastructure",
        "Owns developer experience improvements across the docs build pipeline",
      ],
    },
    {
      company: "Hinge Health",
      role: "Senior Frontend Engineer",
      period: "Apr 2024 – Apr 2025",
      location: "Bengaluru",
      achievements: [
        "Introduced Astro to replace the existing stack — lab-measured FCP dropped from ~2s to 0.2s",
        "Led AWS CloudFront/CDN initiative for a 2,000+ page React marketing application",
        "Owned WCAG 2.1 AA compliance and GDPR/data-privacy development in a regulated US healthcare environment",
      ],
    },
    {
      company: "Phenom",
      role: "Product Development Engineer II",
      period: "Aug 2019 – Mar 2024",
      location: "Hyderabad",
      achievements: [
        "Reduced frontend load from ~30s to ~5s across 5,000+ active users",
        "Led Angular upgrade from v9 → v15 standalone components across ~500 components with a team of 12–15 engineers",
        "Built React PWA from scratch, reducing load times ~30%; migrated Chrome extension from vanilla JS to React + TypeScript",
        "Introduced pre-commit hooks, documented anti-patterns, reduced PR cycle time",
        "Mentored engineers who were subsequently promoted to senior; delivered WCAG + GDPR features for Fortune 500 EU clients",
      ],
    },
    {
      company: "Multiplier Solutions",
      role: "Application Developer",
      period: "May 2017 – Aug 2019",
      location: "Hyderabad",
      achievements: [
        "Led 2-person team to build real-time lead-generating chatbot from scratch — owned stack selection, architecture, and delivery",
        "Built campaign decision tree visualizer with D3.js; designed 2NF schema with JSON serialization",
        "Delivered VtigerCRM and Vicidial telephony integration",
      ],
    },
  ];
  
  export interface SkillGroup {
    title: string;
    items: string[];
  }
  
  export const skills: SkillGroup[] = [
    { title: "Frameworks", items: ["React", "Angular 9–15", "Astro", "TypeScript", "JavaScript ES6+"] },
    { title: "Architecture", items: ["Micro-frontends", "Module Federation", "PWA", "Component-Based Architecture"] },
    { title: "Performance", items: ["Core Web Vitals (FCP/LCP/CLS)", "Lighthouse", "Code Splitting", "Bundle Analysis"] },
    { title: "Compliance", items: ["WCAG 2.1 AA/AAA", "ARIA", "GDPR", "Data Privacy"] },
    { title: "Cloud & CI", items: ["AWS S3 + CloudFront", "GitHub Actions", "Webpack", "Vite"] },
    { title: "Testing", items: ["Jest", "Cypress", "React Testing Library"] },
  ];
  
  export const links = [
    { label: "GitHub", sub: "9thQuadrant", href: "https://github.com/9thQuadrant" },
    { label: "LinkedIn", sub: "phaneendracharyulu", href: "https://www.linkedin.com/in/phaneendracharyulu" },
    { label: "StackOverflow", sub: "400+ reputation", href: "https://stackoverflow.com/users/3985774/phaneendra-charyulu-kanduri" },
    { label: "Dev.to Blog", sub: "Coming soon", href: "#" },
  ];