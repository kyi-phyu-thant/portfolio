import { Fragment } from "react";
import Image from "next/image";
import SectionShell from "../_components/SectionShell";

const EXPERIENCE_ENTRIES = [
  {
    id: "pocket-nicotine",
    company: "Pocket Nicotine",
    role: "Project Manager",
    websiteUrl: "https://vaperelx.today/",
    imageSrc: "/experience/pocket nicotine.webp",
    imageAlt: "Pocket Nicotine",
    gists: [
      "Drove product and digital experience for e‑commerce; owned Shopify storefront strategy and marketing execution.",
      "Led delivery of the customer-facing web app and companion user app—coordinating design, development, and timelines.",
      "Defined UX/UI flows and high-fidelity interfaces in Figma; aligned stakeholders and engineering.",
      "Kept deliverables on track through prioritization and progress tracking; shipped user-centered digital products on time.",
    ],
    tools: ["Figma", "Shopify", "Project management"],
  },
] as const;

export default function Experience() {
  return (
    <SectionShell id="experience" className="grid gap-20">
      <h2 className="text-xl md:text-4xl font-sans mb-6 border-b-2 pb-7">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.9fr] gap-x-28 gap-y-12">
        {EXPERIENCE_ENTRIES.map((entry) => (
          <Fragment key={entry.id}>
            {/* Left: image (placeholder until user adds) */}
            <div className="relative aspect-4/3 overflow-hidden rounded-md bg-(--foreground)/5 shrink-0">
              <Image
                src={entry.imageSrc}
                alt={entry.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Right: company, role, gists, tools */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-base md:text-lg font-medium text-foreground">
                  {entry.company}
                </p>
                <p className="font-sans text-base md:text-lg font-medium italic text-(--foreground)/90">
                  {entry.role}
                </p>
                {"websiteUrl" in entry && entry.websiteUrl && (
                  <a
                    href={entry.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-(--foreground)/80 hover:text-foreground underline underline-offset-2 mt-1 inline-block"
                  >
                    {entry.websiteUrl
                      .replace(/^https?:\/\//, "")
                      .replace(/\/$/, "")}
                  </a>
                )}
              </div>
              <ul className="font-sans text-base md:text-lg text-(--foreground)/90 space-y-2 list-disc pl-5">
                {entry.gists.map((gist, i) => (
                  <li key={i} className="leading-relaxed">
                    {gist}
                  </li>
                ))}
              </ul>
              <div>
                <p className="font-sans text-base font-medium text-foreground mb-1">
                  Tools used
                </p>
                <p className="font-sans text-base text-(--foreground)/90">
                  {entry.tools.join(" · ")}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </SectionShell>
  );
}
