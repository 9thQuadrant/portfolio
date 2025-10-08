"use client";

import { ArrowDown, Github, Linkedin, Mail, Globe, Book, Timer, Plug } from "lucide-react";
import useScrollAndMousePosition from "@/app/utils/hooks/useScrollAndMousePosition";
import { BackgroundShapes } from "@/app/shared/backgroundShapes";
import { TimelineExperience } from "@/app/shared/timeline";
import { SocialLink } from "@/app/shared/socialLink";
import { Projects } from "@/app/shared/projects";
import { SkillCard } from "@/app/shared/skillCard";

const Portfolio = () => {
  const { scrollY, mousePosition } = useScrollAndMousePosition();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="text-center transform transition-all duration-1000 hover:scale-105"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500,
          }}
        >
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-800 transition-all duration-500">
            Phaneendra Charyulu Kanduri
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Senior Frontend Engineer
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            7+ years of experience in crafting high-performance user interfaces
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
        <div className="absolute bottom-10 animate-bounce">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-20 px-4">
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
        <p>© 2024 Phaneendra Charyulu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default function Page({ data }: any) {
  return <Portfolio />;
}
