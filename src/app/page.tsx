"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Confluent",
    role: "Senior Frontend Engineer II",
    period: "May 2025 – Present",
    location: "Remote · Bengaluru",
    achievements: [
      "Migrated docs platform (docs.confluent.io) from Sphinx to Astro — build time dropped from 10–20 min to 1.5 min",
      "Leads cross-functional technical strategy and system design for documentation infrastructure",
      "Owns developer experience improvements across the docs pipeline",
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
      "Reduced frontend load from ~30s to ~5s (residual is API-bound) across 5,000+ active users",
      "Led Angular upgrade from v9 → v12 → v15 standalone components across ~500 components, team of 12–15 engineers",
      "Built React PWA from scratch, reduced load times ~30%; migrated Chrome extension from vanilla JS to React + TypeScript",
      "Introduced pre-commit hooks, documented anti-patterns, reduced PR cycle time; mentored engineers later promoted to senior",
      "Delivered multilingual, WCAG-compliant, GDPR-aligned features for Fortune 500 EU clients",
    ],
  },
  {
    company: "Multiplier Solutions",
    role: "Application Developer",
    period: "May 2017 – Aug 2019",
    location: "Hyderabad",
    achievements: [
      "Led 2-person team to build real-time lead-generating chatbot from scratch — owned stack selection, architecture, delivery",
      "Built campaign decision tree visualizer with D3.js; designed 2NF schema with JSON serialization",
      "Delivered VtigerCRM and Vicidial telephony integration",
    ],
  },
];

const skills = [
  { title: "Frameworks", items: ["React", "Angular 9–15", "Astro", "TypeScript", "JavaScript ES6+"] },
  { title: "Architecture", items: ["Micro-frontends", "Module Federation", "PWA", "Component-Based Architecture"] },
  { title: "Performance", items: ["Core Web Vitals (FCP/LCP/CLS)", "Lighthouse", "Code Splitting", "Bundle Analysis"] },
  { title: "Compliance", items: ["WCAG 2.1 AA/AAA", "ARIA", "GDPR", "Data Privacy"] },
  { title: "Cloud & CI", items: ["AWS S3 + CloudFront", "GitHub Actions", "Webpack", "Vite"] },
  { title: "Testing", items: ["Jest", "Cypress", "React Testing Library"] },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c12] text-white font-sans">
      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 60 }, (_, i) => {
          const seed = i * 137.5;
          const x = (seed * 3.14) % 100;
          const y = (seed * 2.71) % 100;
          const size = 1 + ((seed * 1.41) % 2);
          const delay = (seed * 0.13) % 4;
          const duration = 3 + ((seed * 0.7) % 3);
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.2 + ((seed * 0.01) % 0.4),
                animation: `twinkle ${duration}s ${delay}s ease-in-out infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-6 font-medium">
            Senior Frontend Engineer
          </p>
          <h1 className="text-6xl md:text-8xl font-black mb-2 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Phaneendra
            </span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-violet-600 bg-clip-text text-transparent">
              Kanduri
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-4 leading-relaxed">
            8+ years building high-performance frontends. Specialist in performance engineering,
            legacy modernization, and accessibility compliance.
          </p>
          <p className="text-sm text-gray-500 mb-10">
            2s → 0.2s FCP &nbsp;·&nbsp; 10–20min → 1.5min builds &nbsp;·&nbsp; 30s → 5s load
          </p>
          <div className="flex justify-center gap-5">
            <a href="https://github.com/9thQuadrant" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/phaneendracharyulu" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:phaneendra9q@gmail.com"
              className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 text-xs tracking-widest uppercase animate-bounce">
          scroll
        </div>
      </section>

      {/* Experience */}
      <section className="relative z-10 py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="group border-l border-gray-800 pl-6 hover:border-blue-500 transition-colors duration-300">
              <div className="flex flex-wrap justify-between items-start mb-1 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  <p className="text-blue-400 text-sm">{exp.role}</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed pl-3 border-l border-gray-800 group-hover:border-gray-600 transition-colors">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="relative z-10 py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="border border-gray-800 rounded-lg p-5 hover:border-gray-600 transition-colors duration-200">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">{group.title}</h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="relative z-10 py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-12">Around the web</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "GitHub", sub: "9thQuadrant", href: "https://github.com/9thQuadrant" },
            { label: "LinkedIn", sub: "phaneendracharyulu", href: "https://www.linkedin.com/in/phaneendracharyulu" },
            { label: "StackOverflow", sub: "400+ reputation", href: "https://stackoverflow.com/users/3985774/phaneendra-charyulu-kanduri" },
            { label: "Dev.to Blog", sub: "Coming soon", href: "#" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between border border-gray-800 rounded-lg p-4 hover:border-blue-500 hover:text-blue-400 transition-all duration-200 group">
              <div>
                <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{link.label}</p>
                <p className="text-xs text-gray-500">{link.sub}</p>
              </div>
              <ExternalLink size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 text-center border-t border-gray-900">
        <p className="text-xs text-gray-600">
          <a href="mailto:phaneendra9q@gmail.com" className="hover:text-blue-400 transition-colors">
            phaneendra9q@gmail.com
          </a>
        </p>
      </footer>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
