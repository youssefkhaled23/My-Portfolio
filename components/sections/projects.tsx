"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Link {
  name?: string;
  url?: string;
}

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: Link[]; // Optional link property
}

const projects: Project[] = [
  {
    title: "Neom Career",
    description:
      "A scalable multi-tenant eCommerce solution architected to support independent storefronts, each with dedicated admin environments, secure token-based access, and full commerce workflows.",
    highlights: [
      "End-to-end commerce workflows: inventory, cart, checkout, and order lifecycle",
      "Dynamic theming engine with Tailwind CSS per tenant",
      "Secure, isolated store environments with role-based admin portals",
      "Built for scalability and maintainability using Next.js and modern tooling",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Task Management",
    description:
      "A full-featured project management and collaboration system with real-time capabilities, supporting multiple user roles, task boards, and notifications.",
    highlights: [
      "Real-time updates with WebSocket-driven interactions",
      "Role-based access control for tasks, teams, and workflows",
      "Responsive and accessible UI leveraging Tailwind CSS",
      "Highly modular design supporting enterprise extensibility",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js"],
    link: [
      {
        name: "View Project",
        url: "https://app.codersam.site/",
      },
    ],
  },
  {
    title: "Multi-Store eCommerce System",
    description:
      "An enterprise-ready multi-store eCommerce platform with dynamic configuration, shared infrastructure, and support for isolated storefront management.",
    highlights: [
      "Advanced eCommerce features: product catalog, checkout, order management",
      "Tenant-specific UI customization with real-time preview",
      "Dedicated admin interfaces with granular role control",
      "Optimized frontend performance using Next.js",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Moracoo Platform",
    description:
      "A high-speed, visually engaging web platform with seamless navigation and an emphasis on performance and UX design.",
    highlights: [
      "Mobile-first UI leveraging Tailwind CSS for responsiveness",
      "Optimized static generation and routing with Next.js",
      "Interactive animations and modern UI patterns",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Golden Steel",
    description:
      "A polished digital presence for an industrial company showcasing steel products with media interactivity and clean visual hierarchy.",
    highlights: [
      "Responsive, industrial-grade UI using Bootstrap 5",
      "Rich product visualizations with embedded media",
      "Component-based architecture using React",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://golden-steel-kappa.vercel.app/",
      },
    ],
  },
  {
    title: "Rawasi Kristal",
    description:
      "A premium storefront for luxury crystal and glass products, offering elegant visual presentation and optimized performance.",
    highlights: [
      "Clean and scalable component structure",
      "Fully responsive UI with Bootstrap for all devices",
      "High-quality visuals with intuitive navigation",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://rawasicrystal.com/",
      },
    ],
  },
  {
    title: "Dooos Website",
    description:
      "An immersive corporate website built with React, integrating dynamic media and reusable components for long-term scalability.",
    highlights: [
      "Mobile-optimized and fully responsive design",
      "Engaging UI/UX with interactive media support",
      "Reusable React components for maintainability",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://dooos.vercel.app",
      },
    ],
  },
  {
    title: "Taif Alrwad",
    description:
      "A business-focused website offering a refined digital presence with rich media content and optimized performance.",
    highlights: [
      "Corporate-grade aesthetics with professional styling",
      "Integrated media experience using modern web APIs",
      "Tailwind-powered performance and responsive design",
    ],
    technologies: ["React", "JavaScript", "Tailwind"],
    link: [
      {
        name: "View Project",
        url: "https://taif-arwad.vercel.app/",
      },
    ],
  },
  {
    title: "Dashboard Template",
    description:
      "A lightweight, customizable dashboard template designed to accelerate admin panel development with prebuilt layouts and components.",
    highlights: [
      "Modular dashboard components with Bootstrap styling",
      "Responsive layout optimized for desktops and tablets",
      "Easily extendable HTML/JS structure for rapid integration",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://youssefkhaled23.github.io/DashBoard/Dash-Page.html",
      },
      {
        name: "View Repository",
        url: "https://github.com/youssefkhaled23/DashBoard",
      },
    ],
  },
  {
    title: "Articles Template",
    description:
      "A streamlined blog template optimized for content readability, SEO, and multi-device accessibility.",
    highlights: [
      "Typography-centric layout for clear reading",
      "Fully responsive with Bootstrap 5",
      "Semantic structure supporting accessibility and SEO",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://youssefkhaled23.github.io/Articles/articles.html",
      },
      {
        name: "View Repository",
        url: "https://github.com/youssefkhaled23/Articles",
      },
    ],
  },
  {
    title: "Trending Movie",
    description:
      "An entertainment-focused movie listing platform designed for browsing trending films with a clean, responsive layout.",
    highlights: [
      "Media-focused interface for showcasing dynamic content",
      "Bootstrap-powered responsive grid layout",
      "Optimized UX with semantic HTML structure",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Repository",
        url: "https://github.com/youssefkhaled23/Trending-Movie",
      },
    ],
  },
  {
    title: "Weather App",
    description:
      "A live weather forecasting app fetching real-time data, designed with usability and responsiveness in mind.",
    highlights: [
      "Weather API integration with location-based data fetching",
      "Clean, responsive layout with Bootstrap",
      "Minimalist interface with dynamic content rendering",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://weather-app-youssef4.vercel.app/",
      },
      {
        name: "View Repository",
        url: "https://github.com/youssefkhaled23/Weather-App",
      },
    ],
  },
  {
    title: "Auth App",
    description:
      "A modern authentication interface supporting secure user login, registration, and form validation.",
    highlights: [
      "TypeScript-powered type-safe logic",
      "Clean UI with responsive form handling",
      "Integrated validation and auth flows",
    ],
    technologies: ["HTML", "TypeScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://authentication-seven-chi.vercel.app/",
      },
      {
        name: "View Repository",
        url: "https://github.com/youssefkhaled23/Authentication",
      },
    ],
  },
  {
    title: "Expense-Tracker",
    description:
      "A personal finance tracking tool enabling users to manage daily expenses with a clean, interactive UI.",
    highlights: [
      "User-friendly transaction input and visual tracking",
      "Responsive layout built with Bootstrap and TypeScript",
      "Lightweight and easy-to-deploy static app",
    ],
    technologies: ["HTML", "TypeScript", "Bootstrap"],
    link: [
      {
        name: "View Project",
        url: "https://expense-tracker-youssef4.vercel.app/",
      },
      {
        name: "View Repository",
        url: "https://github.com/youssefkhaled23/Expense-Tracker",
      },
    ],
  },
];

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Frontend Projects
        </h2>
        <p className="text-xl text-center text-zinc-600 dark:text-zinc-300 mb-12">
          Crafting responsive, accessible, and visually engaging frontend
          experiences
        </p>

        <div className="space-y-12">
          {paginatedProjects.map((project) => (
            <div
              key={project.title}
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-300">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link &&
                project.link.map((e, index) => (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mr-2 items-center space-x-2 text-blue-500 hover:text-blue-600"
                  >
                    <span>{e.name}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
