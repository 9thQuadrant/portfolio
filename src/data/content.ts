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
      location: "Remote",
      achievements: [
        "Evaluated and drove adoption of Astro to replace the Sphinx-based documentation platform, reduced build times from 10-20 minutes to 1.5 minutes, enabling faster CI/CD feedback loops and significantly improving developer productivity.",
        "Solely own the technical architecture and execution for a documentation platform serving 100,000+ weekly visits. Work with a team of 8 technical writers to deliver content strategy, tooling improvements, and performance optimization.",
        "Planned, led, and executed Python 3.8→3.12 migration across the documentation build pipeline and modernized dependency stack, eliminated deprecated packages, and ensured compatibility with latest Sphinx/Astro toolchains.",
        "Define and implement CI/CD standards, component library architecture, and cross-functional engineering best practices adopted across documentation and adjacent platform teams."
      ],
    },
    {
      company: "Hinge Health",
      role: "Senior Frontend Engineer",
      period: "Apr 2024 – Apr 2025",
      location: "Hybrid",
      achievements: [
        "Evaluated and proposed migration from Gatsby to Astro after identifying performance bottlenecks in the existing GraphQL + Contentful stack, reduced FCP from ~2s to 0.2s in a regulated US healthcare environment serving HIPAA-compliant patient-facing content.",
        "Led AWS CloudFront and CDN edge delivery initiative alongside Core Web Vitals observability established production dashboards tracking LCP, CLS, and FID with real-user monitoring (RUM) data.",
        "Owned WCAG 2.1 AA compliance and GDPR/data-privacy-aligned development across the frontend platform; collaborated with product and design in Agile sprints to embed accessibility and privacy standards from design through deployment.",
        "Led 5-person frontend team; maintained Storybook component library integrated with design system, ensuring consistency and reusability across patient-facing applications."
      ],
    },
    {
      company: "Phenom",
      role: "Product Development Engineer II",
      period: "Aug 2019 – Mar 2024",
      location: "Onsite",
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
      location: "Onsite",
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
    { label: "Dev.to Blog", sub: "9thquadrant", href: "https://dev.to/9thquadrant" },
  ];
