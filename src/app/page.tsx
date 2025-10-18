"use client";

import { ArrowDown, Github, Linkedin, Mail, Globe, Book, Timer, Plug } from "lucide-react";
import useScrollAndMousePosition from "@/app/utils/hooks/useScrollAndMousePosition";
import { BackgroundShapes } from "@/app/shared/backgroundShapes";
import { TimelineExperience } from "@/app/shared/timeline";
import { SocialLink } from "@/app/shared/socialLink";
import { Projects } from "@/app/shared/projects";
import { SkillCard } from "@/app/shared/skillCard";
import { NameDecompose } from "@/app/shared/nameDecompose";
import { BackgroundStars } from "@/app/shared/backgroundStars";

const Portfolio = () => {
  const { scrollY, mousePosition } = useScrollAndMousePosition();

  // Calculate scroll progress for name animation (0 to 1)
  // Animation happens over 60% of hero section to make it faster (about 150vh)
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 2.5 : 2500;
  const nameScrollProgress = Math.min(scrollY / (heroHeight * 0.6), 1);

  // Projects data
  const projects = [
    {
      title: "Personal Blog",
      description: "Technical blog built with modern web technologies",
      link: "https://nikethblog.web.app",
      icon: <Book className="w-6 h-6" />,
    },
    {
      title: "Math Experiment",
      description: "Challenge your math skills against time",
      link: "https://phaneendra-exp.web.app",
      icon: <Timer className="w-6 h-6" />,
    },
    
    {
      title: "Firebase Cordova File Upload Plugin",
      description: "Simple cordova file upload plugin",
      link: "https://www.npmjs.com/package/cordova-plugin-firebase-files-upload",
      icon: <Plug className="w-6 h-6" />,
    },
    
    {
      title: "GitHub Portfolio",
      description: "Collection of personal projects and contributions",
      link: "https://github.com/9thQuadrant",
      icon: <Github className="w-6 h-6" />,
    },
    {
      title: "StackOverflow",
      description: "400+ reputation with helpful answers",
      link: "https://stackoverflow.com/users/3985774/phaneendra-charyulu-kanduri",
      icon: <Globe className="w-6 h-6" />,
    }
  ];

  // Calculate if we're near the bottom of the page
  const isNearBottom = typeof window !== 'undefined' 
    ? scrollY + window.innerHeight >= document.documentElement.scrollHeight - 300
    : false;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Background stars animation - throughout entire page */}
      <BackgroundStars scrollY={scrollY} />
      
      {/* Moon at bottom right - slides up with bounce */}
      <div 
        className="fixed z-0"
        style={{
          right: '120px',
          bottom: isNearBottom ? '120px' : '-200px', // Slide up from below
          transition: 'bottom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)', // Smoother bounce easing
        }}
      >
        {/* Moon glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-100 blur-3xl opacity-30" 
          style={{ width: '180px', height: '180px', left: '-15px', top: '-15px' }} 
        />
        {/* Moon body */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-50 to-yellow-200 shadow-2xl">
          {/* Moon craters */}
          <div className="absolute top-6 right-8 w-4 h-4 rounded-full bg-yellow-300 opacity-40" />
          <div className="absolute top-12 right-5 w-3 h-3 rounded-full bg-yellow-300 opacity-30" />
          <div className="absolute bottom-8 right-10 w-5 h-5 rounded-full bg-yellow-300 opacity-35" />
          <div className="absolute top-8 left-6 w-6 h-6 rounded-full bg-yellow-300 opacity-25" />
          <div className="absolute bottom-10 left-8 w-3 h-3 rounded-full bg-yellow-300 opacity-30" />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[250vh] flex items-center justify-center overflow-hidden" style={{ alignItems: 'center' }}>
        
        <div 
          className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 z-10"
          style={{
            // Keep full opacity until 80% scroll, then fade out
            opacity: scrollY < heroHeight * 0.8 
              ? 1 
              : Math.max(0, 1 - ((scrollY - heroHeight * 0.8) / (heroHeight * 0.2))),
            transition: 'opacity 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
          }}
        >
          <div className="mb-8">
            <NameDecompose scrollProgress={nameScrollProgress} />
          </div>
          <p className="text-2xl text-gray-300 mb-8">
            Senior Software Engineer II - Frontend
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            8+ years of experience in crafting high-performance user interfaces
            specializing in React, Angular, and Progressive Web Apps
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink
              href="https://github.com/9thQuadrant"
              icon={<Github size={24} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/phaneendracharyulu"
              icon={<Linkedin size={24} />}
            />
            <SocialLink
              href="mailto:phaneendra9q@gmail.com"
              icon={<Mail size={24} />}
            />
          </div>
        </div>
        <div 
          className="fixed bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10"
          style={{
            opacity: Math.max(0, 1 - scrollY / 600),
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-32 px-4 mt-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Professional Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <TimelineExperience
            company="Confluent"
            role="Senior Software Engineer II"
            period="May 2025 - Present"
            location="Remote - Bengaluru, India"
            achievements={[
              "Contributing to the infrastructure and developer experience behind https://docs.confluent.io/",
              "My work involves improving the build pipeline, enhancing extensibility of Sphinx-based systems, and driving modernization efforts using JavaScript for a more scalable and maintainable documentation platform",
              "Implemented Lambda and CloudFront for enhanced content delivery",
              "Collaborating closely with cross-functional teams to shape the next generation of Confluent documentation experience.",
            ]}
          />
          <TimelineExperience
            company="Hinge Health"
            role="Senior Frontend Engineer"
            period="April 2024 - April 2025"
            location="Bengaluru, India"
            achievements={[
              "Led AWS migration improving scalability and reducing load times by 40%",
              "Managed 2,000+ page React-based application for marketing optimization",
              "Implemented Lambda and CloudFront for enhanced content delivery",
              "Collaborated in agile sprints for enhanced user experience",
            ]}
          />
          <TimelineExperience
            company="Phenom"
            role="Product Development Engineer II"
            period="2019 - 2024"
            location="Hyderabad, India"
            achievements={[
              "Built PWA for HRM from scratch, reducing load times by 30%",
              "Enhanced CRM with multilingual support, reducing bugs by 20%",
              "Integrated module federation in Angular for streamlined deployments",
              "Led test case development, increasing code coverage",
              "Optimized CRM Chrome extension by upgrading from vanilla JS to React",
            ]}
          />
          <TimelineExperience
            company="Multiplier IT Solutions"
            role="Senior Application Developer"
            period="2017 - 2019"
            location="Hyderabad, India"
            achievements={[
              "Developed lead-generating chatbot using Node.js and Socket.IO",
              "Created campaign strategy visualization using D3.js",
              "Integrated Vicidial with VtigerCRM for real-time caller details",
              "Enhanced CRM functionalities for healthcare management",
              "Implemented PDF parsing system using Tesseract",
            ]}
          />
          <TimelineExperience
            company="Cubicoid Solutions"
            role="Django Application Development Intern"
            period="Jan 2017 - May 2017"
            location="Visakhapatnam, India"
            achievements={[
              "Developed Universal Address Code (UAC) application",
              "Implemented address management system with unique codes",
              "Designed 2NF database schema for efficient data storage",
              "Deployed application on Heroku using Django and PostgreSQL",
            ]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Featured Projects
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Projects {...project} key={project.title + index} />
          ))}
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Technical Skills
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Frontend Core"
            skills={['React', 'Angular', 'TypeScript', 'JavaScript']}
          />
          <SkillCard 
            title="State & Data Flow"
            skills={['Redux', 'RxJS', 'GraphQL']}
          />
          <SkillCard 
            title="Cloud & Deploy"
            skills={['AWS Lambda', 'CloudFront', 'Firebase']}
          />
          <SkillCard 
            title="Testing"
            skills={['Jest', 'Cypress', 'Selenium']}
          />
          <SkillCard 
            title="Build Tools"
            skills={['Webpack', 'Vite', 'Jenkins']}
          />
          <SkillCard 
            title="Design Systems"
            skills={['Material UI', 'Styled Components', 'Storybook']}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Let's Connect
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <a
            href="mailto:phaneendra9q@gmail.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-gray-400">
        <p>Best Regards, Phaneendra Charyulu Kanduri.</p>
      </footer>
    </div>
  );
};

export default function Page({ data }: any) {
  return <Portfolio />;
}
