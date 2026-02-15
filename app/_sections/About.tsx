import { Fragment } from "react";
import { ChevronDown, Download } from "lucide-react";
import SectionShell from "../_components/SectionShell";

const SKILLS = [
  "Figma",
  "Shopify",
  "HTML",
  "CSS",
  "JavaScript",
  "TailwindCSS",
  "C#",
  "Critical Thinking",
  "Teamwork",
  "Problem Solving",
  "Communication",
] as const;

const LANGUAGES = [
  "English",
  "Chinese",
  "German",
  "Burmese",
  "Japanese",
] as const;

const EDUCATION_ENTRIES = [
  {
    degree: "Currently studying",
    institution: "FHOO (Fachhochschule Oberösterreich)",
    when: null,
    where: "Austria",
  },
  {
    degree: "Bachelor of Science (Hons) in Computer Science",
    institution: "Coventry University",
    when: "Aug 2023",
    where: "Singapore",
  },
  {
    degree: "Level 4 Diploma in Computing",
    institution: "NCC Education",
    when: "Nov 2020",
    where: null,
  },
] as const;

type EducationEntry = (typeof EDUCATION_ENTRIES)[number];

const ABOUT_ACCORDION = [
  {
    id: "education",
    title: "Education",
    type: "education" as const,
    items: EDUCATION_ENTRIES,
  },
  {
    id: "languages",
    title: "Language proficiency",
    type: "languages" as const,
    items: LANGUAGES,
  },
] as const;

export default function About() {
  return (
    <SectionShell className="grid gap-10 md:gap-20">
      <h2 className="text-xl md:text-4xl font-sans mb-6 border-b-2 pb-7">
        About me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-x-28 gap-y-10">
        <div>
          <p className="text-base md:text-lg leading-relaxed font-sans">
            I’m a UI/UX Designer with a Computer Science background, focused on
            creating intuitive and user-centered digital experiences. I have
            experience designing interfaces with Figma and collaborating across
            teams to turn ideas into usable products. I’m currently studying at
            FH Upper Austria (FHOÖ), where I continue to strengthen my design
            thinking and technical skills.
          </p>
          {/* Resume */}
          <a
            href="/resume/resume.pdf"
            download
            className="inline-block mt-6 px-5 py-2 rounded border hover:bg-black hover:text-white ease-in-out duration-200"
          >
            <div className="flex gap-2 items-center">
              Download Resume
              <Download strokeWidth={1.5} className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Accordion */}
        <div className="border-(--foreground)/20">
          {ABOUT_ACCORDION.map((item, index) => (
            <details
              key={item.id}
              className="group border-b border-(--foreground)/20"
            >
              <summary className="list-none cursor-pointer py-4 font-sans text-base md:text-lg flex items-center justify-between gap-2">
                <span className="flex items-center gap-3">
                  <span className="text-(--foreground)/50 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{item.title}</span>
                </span>
                <ChevronDown className="size-5 shrink-0 text-(--foreground)/60 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pb-4 pl-0 font-sans text-base text-(--foreground)/90">
                {item.type === "languages" && (
                  <ul className="flex flex-wrap gap-2 divide-x [&>li]:pr-2">
                    {item.items.map((lang) => (
                      <li key={lang}>{lang}</li>
                    ))}
                  </ul>
                )}
                {item.type === "education" && (
                  <div className="space-y-4">
                    {(item.items as readonly EducationEntry[]).map(
                      (entry, i) => (
                        <div key={i}>
                          <p className="font-medium">{entry.degree}</p>
                          <p>{entry.institution}</p>
                          {(entry.when || entry.where) && (
                            <p className="text-(--foreground)/80">
                              {[entry.when, entry.where]
                                .filter(Boolean)
                                .join(" · ")}
                            </p>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Skill Marquee */}
      <div
        className="overflow-hidden w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center gap-10 py-2"
          style={{
            animation: "marquee 40s linear infinite",
            willChange: "transform",
          }}
        >
          {[...SKILLS, ...SKILLS].map((skill, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <span
                  className="size-1.5 shrink-0 rounded-full bg-black w-1.5 h-1.5 border"
                  aria-hidden
                />
              )}
              <span className="shrink-0 font-sans text-lg md:text-xl text-(--foreground)/90 whitespace-nowrap">
                {skill}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
