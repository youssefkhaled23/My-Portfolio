"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string; // Optional link property
}

const projects: Project[] = [
  {
    title: "Neom Career",
    description:
      "An enterprise-grade multi-tenant eCommerce solution, engineered to facilitate the management of multiple autonomous online storefronts, each uniquely identified via secure store tokens.",
    highlights: [
      "Comprehensive eCommerce functionality including inventory, cart, checkout, and order management",
      "Tailored store theming capabilities powered by Tailwind CSS",
      "Robust authentication system and dedicated admin dashboards for each tenant",
      "Scalable, maintainable architecture leveraging modern frontend frameworks",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Task Management",
    description:
      "A robust task and workflow management system enabling teams to efficiently track, assign, and collaborate on projects with multi-role support and real-time updates.",
    highlights: [
      "Real-time task tracking and role-based collaboration",
      "Responsive and intuitive UI with Tailwind CSS",
      "Authentication and secure user management",
      "Modular and extensible architecture suitable for enterprise scaling",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Multi-Store eCommerce System",
    description:
      "A full-featured, multi-tenant commerce system architected to support independent online stores with isolated configurations and shared infrastructure.",
    highlights: [
      "Rich eCommerce functionality: product catalog, checkout, and order lifecycle",
      "Per-store customization through dynamic theming",
      "Dedicated dashboards with role-based access control",
      "Efficient data handling and scalable frontend ecosystem",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Moracoo Platform",
    description:
      "A high-performance web platform delivering modern design, optimized routing, and seamless user experience through responsive design principles.",
    highlights: [
      "Mobile-first responsive design with Tailwind CSS",
      "Optimized routing leveraging Next.js capabilities",
      "Visually appealing and interactive interface",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Golden Steel",
    description:
      "A professional-grade industrial platform designed to elegantly showcase steel products, with multimedia support and a sleek UI layer.",
    highlights: [
      "Fully responsive layout using Bootstrap 5",
      "Interactive media elements for product presentation",
      "Smooth and dynamic UI developed with React",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
  },
  {
    title: "Rawasi Kristal",
    description:
      "A refined, high-performance website tailored to present luxury crystal and glass products, built with modern frontend practices.",
    highlights: [
      "Type-safe development using JavaScript",
      "Component-based architecture for clean scalability",
      "Elegant design with Bootstrap responsiveness",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
  },
  {
    title: "Dooos Website",
    description:
      "An interactive, media-rich corporate website for Dooos, combining stylish aesthetics with dynamic, reusable components.",
    highlights: [
      "Fully responsive and mobile-optimized",
      "Interactive user experience with immersive media",
      "Reusable, maintainable codebase powered by React",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
  },
  {
    title: "Taif Alrwad",
    description:
      "A visually sophisticated corporate website delivering seamless media integration and refined UI, optimized for business engagement.",
    highlights: [
      "Business-oriented visual design",
      "Integrated video and media experiences",
      "Optimized for performance and scalability using React & JavaScript",
    ],
    technologies: ["React", "JavaScript", "Bootstrap"],
  },
  {
    title: "Dashboard Template",
    description:
      "A sleek and versatile admin dashboard template, built with reusability and ease of customization at its core.",
    highlights: [
      "Cross-platform compatible with HTML, JS, and Bootstrap",
      "Component-driven and modular layout",
      "Designed for intuitive navigation and data presentation",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
  },
  {
    title: "Articles Template",
    description:
      "A minimalist article and blog template focused on readability, structure, and elegant content presentation.",
    highlights: [
      "Clean, typographically optimized layout",
      "Responsive design ensuring seamless experience across devices",
      "Developed with standard web technologies for broad accessibility",
    ],
    technologies: ["HTML", "JavaScript", "Bootstrap"],
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
          Backend Projects
        </h2>
        <p className="text-xl text-center text-zinc-600 dark:text-zinc-300 mb-12">
          Showcasing scalable and robust backend solutions
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

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <span>View Repository</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
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
