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
        "Reduced frontend load time from ~30s to ~5s across a product serving 5,000+ active users.",
        "Led the Angular v9 → v15 upgrade to standalone components across ~500 components with a team of 12–15 engineers.",
        "Built a React PWA from scratch that cut load times by ~30%, and migrated a Chrome extension from vanilla JS to React + TypeScript.",
        "Introduced pre-commit hooks and documented common anti-patterns, reducing PR cycle time.",
        "Mentored engineers who were subsequently promoted to senior, and delivered WCAG and GDPR features for Fortune 500 EU clients.",
      ],
    },
    {
      company: "Multiplier Solutions",
      role: "Application Developer",
      period: "May 2017 – Aug 2019",
      location: "Onsite",
      achievements: [
        "Led a 2-person team to build a real-time lead-generating chatbot from scratch, owning stack selection, architecture, and delivery.",
        "Built a campaign decision-tree visualizer with D3.js and designed a 2NF schema with JSON serialization.",
        "Delivered a VtigerCRM and Vicidial telephony integration.",
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
  
  export interface CaseStudy {
    company: string;
    title: string;
    stat: string;
    statLabel: string;
    problem: string;
    decisions: string;
    implementation: string;
    result: string;
  }

  // Drawn directly from the achievement bullets in `experiences` above —
  // same facts, reframed as a problem/decisions/implementation/result
  // narrative instead of a bullet list.
  export const caseStudies: CaseStudy[] = [
    {
      company: "Hinge Health",
      title: "First Contentful Paint: 2s to 0.2s in a HIPAA-regulated app",
      stat: "2s → 0.2s",
      statLabel: "First Contentful Paint",
      problem:
        "Patient-facing pages on a Gatsby + GraphQL + Contentful stack were slow to first paint — inside a regulated US healthcare environment serving HIPAA-compliant, patient-facing content, where that delay is a compliance-sensitive UX problem, not just a metric.",
      decisions:
        "Traced the bottleneck to the GraphQL + Contentful data layer, then proposed migrating off Gatsby to Astro rather than optimizing the existing stack in place. Paired that with an edge-delivery overhaul and a real-user-monitoring layer to prove the gains and keep them.",
      implementation:
        "Led the Gatsby → Astro migration, stood up AWS CloudFront edge delivery, and built production dashboards tracking LCP, CLS, and FID from real-user monitoring data — all while owning WCAG 2.1 AA and GDPR/privacy requirements through the same Agile sprints, and leading a 5-person frontend team through it.",
      result:
        "First Contentful Paint dropped from roughly 2s to 0.2s on patient-facing pages, with RUM dashboards in place to keep the regression visible if it ever crept back.",
    },
    {
      company: "Confluent",
      title: "Docs platform build times: 10–20 minutes to 1.5 minutes",
      stat: "20m → 1.5m",
      statLabel: "Build time",
      problem:
        "A Sphinx-based documentation platform serving 100,000+ weekly visits had 10–20 minute build times, slowing CI/CD feedback for a team of 8 technical writers and every engineer waiting on a preview.",
      decisions:
        "Evaluated the toolchain and drove adoption of Astro to replace Sphinx, and paired it with a planned Python 3.8 → 3.12 migration across the build pipeline rather than patching the old stack incrementally.",
      implementation:
        "Owned the technical architecture end to end: the Astro migration, the Python version upgrade, dependency modernization and removal of deprecated packages, plus the CI/CD standards and component-library architecture that were then adopted across documentation and adjacent platform teams.",
      result:
        "Build times fell from 10–20 minutes to 1.5 minutes — a fast enough loop that CI/CD feedback stopped being the bottleneck for the docs org.",
    },
    {
      company: "Phenom",
      title: "Migrating 500 components across an Angular v9 → v15 upgrade",
      stat: "500+",
      statLabel: "Components migrated",
      problem:
        "A ~500-component Angular v9 codebase, serving a product with 5,000+ active users and ~30s load times, was blocking the team from standalone components and newer framework capabilities.",
      decisions:
        "Planned and led the Angular v9 → v15 upgrade to standalone components as a coordinated, team-wide effort rather than a piecemeal one, bringing a 12–15 engineer team through it together.",
      implementation:
        "Directed the phased migration across all ~500 components, introduced pre-commit hooks and documented anti-patterns to hold quality steady mid-migration, and mentored engineers through the work — several were subsequently promoted to senior.",
      result:
        "~500 components migrated to Angular v15 standalone architecture, frontend load time cut from ~30s to ~5s, and PR cycle time down from the tooling introduced alongside it.",
    },
  ];

  export const links = [
    { label: "GitHub", sub: "9thQuadrant", href: "https://github.com/9thQuadrant" },
    { label: "LinkedIn", sub: "phaneendracharyulu", href: "https://www.linkedin.com/in/phaneendracharyulu" },
    { label: "Stack Overflow", sub: "400+ reputation", href: "https://stackoverflow.com/users/3985774/phaneendra-charyulu-kanduri" },
    { label: "Dev.to Blog", sub: "9thquadrant", href: "https://dev.to/9thquadrant" },
  ];
