"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionShell from "../_components/SectionShell";

const PROJECTS = [
  {
    id: "nourish-asia",
    imageSrc: "/projects/NourishAsia.png",
    title: "NourishAsia Website Project",
    date: "2023 June",
    role: "Full Stack Developer",
    description:
      "The NourishAsia Website project aimed to create a platform for users to search for Asian recipes, calculate nutrition facts, and share their own recipes. I handled both front-end and back-end development to ensure a seamless user experience.",
    responsibilities: [
      "Designed and implemented the user interface using ReactJS and Tailwind CSS.",
      "Developed server-side logic with NodeJS and managed data with Firebase Database.",
      "Implemented Firebase Authentication for secure user login and registration.",
      "Enabled recipe upload, search, and management using Firebase Storage.",
      "Integrated tools for nutritional content calculation.",
      "Collaborated with designers and developers to ensure cohesive development.",
    ],
    technologies:
      "ReactJS, NodeJS, Tailwind CSS, Firebase Authentication, Firebase Storage and Database, Material UI",
    outcome:
      "Successfully delivered a user-friendly platform for exploring, sharing, and managing Asian recipes with detailed nutritional information. The website's functionality and design received positive feedback, enhancing user engagement and satisfaction.",
  },
  {
    id: "causeway-point",
    imageSrc: "/projects/Causeway Point small.jpg",
    title: "Causeway Point Shopping Mall Website",
    date: "2022 April",
    role: "Web Designer",
    description:
      "The Causeway Point Shopping Mall Website project aimed to create an engaging and user-friendly online presence for a major shopping destination. My primary responsibility was web design, ensuring the site was visually appealing and easy to navigate.",
    responsibilities: [
      "Developed web designs using Figma for a seamless user experience.",
      "Conducted user research to inform design decisions.",
      "Created wireframes and prototypes to visualize the layout and functionality.",
      "Collaborated with developers and stakeholders to meet project goals.",
      "Conducted usability testing to resolve user experience issues.",
    ],
    technologies:
      "Figma for UI/UX design and prototyping, Collaboration tools for project management",
    outcome:
      "Delivered a modern, user-friendly website that enhanced the online shopping experience. The design received positive feedback for ease of use and visual appeal, increasing engagement and customer satisfaction.",
  },
  {
    id: "sokoban",
    imageSrc: "/projects/sokoban.png",
    title: "Sokoban Game Project",
    date: "2020 December",
    role: "Game Developer",
    description:
      "The Sokoban Gaming Project focused on creating a classic puzzle game where players push crates to designated spots, with increasing difficulty levels.",
    responsibilities: [
      "Developed the game using C# for smooth gameplay.",
      "Designed 60 challenging levels.",
      "Created an intuitive interface accessible to all ages.",
      "Implemented touch gestures for player movement.",
      "Added undo and solve features for player assistance.",
    ],
    technologies:
      "C# for game development, Unity for game asset management, Touch gesture recognition for controls",
    outcome:
      "Successfully delivered a challenging and enjoyable puzzle game with an intuitive interface, receiving positive feedback and gaining popularity among puzzle enthusiasts.",
  },
  {
    id: "hospital-billing",
    imageSrc: "/projects/hospital_billing.png",
    title: "Hospital Billing System",
    date: "2021 March",
    role: "UI/UX Designer",
    description:
      "The Hospital Billing System project aimed to automate billing processes for accuracy, efficiency, and ease of use. I created an intuitive interface for hospital staff.",
    responsibilities: [
      "Designed a user-friendly interface with Figma.",
      "Conducted research to understand staff workflows.",
      "Developed wireframes and prototypes.",
      "Conducted usability testing to resolve issues.",
      "Collaborated with developers for accurate implementation.",
      "Created user guides and training materials.",
    ],
    technologies:
      "Figma for design and prototyping, Collaboration tools for project management",
    outcome:
      "Delivered an efficient billing solution with a user-friendly interface, significantly enhancing usability and receiving positive feedback from hospital staff.",
  },
] as const;

// No accordion open by default; image shows first project until user opens one.
export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeProject = PROJECTS.find((p) => p.id === openId) ?? PROJECTS[0];

  const handleSummaryClick = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();
    setOpenId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <SectionShell id="projects" className="grid gap-10 md:gap-20">
      <h2 className="text-xl md:text-4xl font-sans mb-6 border-b-2 pb-7">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-x-10 gap-y-12 relative">
        {/* Left: accordion with project descriptions (one open at a time) */}
        <div className="border-(--foreground)/20">
          <p className="font-sans text-base text-(--foreground)/80 mb-4">
            Selected work:
          </p>
          <div className="overflow-hidden">
            {PROJECTS.map((project, index) => {
              const isOpen = openId === project.id;
              return (
                <details
                  key={project.id}
                  open={isOpen}
                  className="group border-b border-(--foreground)/20 last:border-b-0"
                >
                  <summary
                    onClick={(e) => handleSummaryClick(e, project.id)}
                    className="list-none cursor-pointer py-4 px-4 font-sans text-base md:text-lg flex items-center justify-between gap-2 hover:bg-(--foreground)/5 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-(--foreground)/50 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{project.title}</span>
                    </span>
                    <ChevronDown
                      className="size-5 shrink-0 text-(--foreground)/60 group-open:rotate-180 transition-transform"
                      aria-hidden
                    />
                  </summary>
                  <div className="pb-4 px-4 pl-4 font-sans text-base text-(--foreground)/90 space-y-4 border-t border-(--foreground)/10 pt-4">
                    <p className="text-(--foreground)/80">
                      {project.date}
                      {project.role && ` · ${project.role}`}
                    </p>
                    <p>{project.description}</p>
                    <div>
                      <p className="font-medium mb-1">Key responsibilities:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      <span className="font-medium">Technologies: </span>
                      {project.technologies}
                    </p>
                    <p>
                      <span className="font-medium">Outcome: </span>
                      {project.outcome}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        {/* Image for the active accordion: first project by default, updates on accordion click */}
        <div
          className="flex flex-col gap-4 md:sticky md:top-28 self-start"
          key={activeProject.id}
        >
          <div className="relative aspect-video overflow-hidden rounded-md bg-(--foreground)/5 border">
            <Image
              src={activeProject.imageSrc}
              alt={`${activeProject.title} – project image`}
              fill
              className={`object-cover ${activeProject.id == "hospital-billing" && "object-top"}`}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
