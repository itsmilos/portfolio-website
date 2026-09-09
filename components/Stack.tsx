"use client";

import { motion } from "framer-motion";
import {
  siHtml5,
  siCss,
  siJavascript,
  siBootstrap,
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siPrisma,
  siGit,
  siDocker,
  siVercel,
  siRailway,
  siFigma,
} from "simple-icons/icons";

import { Code2, Database, Layers3 } from "lucide-react";

const stack = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    description:
      "Interfaces built to feel fast, responsive and natural across every screen.",
    technologies: [
      {
        name: "HTML",
        icon: siHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: siCss,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: siJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Bootstrap",
        icon: siBootstrap,
        color: "#7952B3",
      },
      {
        name: "React",
        icon: siReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: siNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "TypeScript",
        icon: siTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: siTailwindcss,
        color: "#06B6D4",
      },
    ],
  },
  {
    number: "02",
    title: "Backend",
    icon: Database,
    description:
      "Reliable application logic, APIs and data layers built around the product.",
    technologies: [
      {
        name: "Node.js",
        icon: siNodedotjs,
        color: "#5FA04E",
      },
      {
        name: "Express",
        icon: siExpress,
        color: "#FFFFFF",
      },
      {
        name: "MongoDB",
        icon: siMongodb,
        color: "#47A248",
      },
      {
        name: "PostgreSQL",
        icon: siPostgresql,
        color: "#4169E1",
      },
      {
        name: "Prisma",
        icon: siPrisma,
        color: "#2D3748",
      },
    ],
  },
  {
    number: "03",
    title: "Tools & Deployment",
    icon: Layers3,
    description:
      "The tools I use to design, manage, deploy and maintain production projects.",
    technologies: [
      {
        name: "Git",
        icon: siGit,
        color: "#F05032",
      },
      {
        name: "Docker",
        icon: siDocker,
        color: "#2496ED",
      },
      {
        name: "Vercel",
        icon: siVercel,
        color: "#FFFFFF",
      },
      {
        name: "Railway",
        icon: siRailway,
        color: "#8B5CF6",
      },
      {
        name: "Figma",
        icon: siFigma,
        color: "#F24E1E",
      },
    ],
  },
];

export default function StackPage() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-32 text-[#09090B] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 max-w-5xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>05</span>

            <span className="h-px w-8 bg-accent" />

            <span>What I use</span>
          </div>

          <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            The tools behind
            <br />
            the work.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/50 md:text-xl">
            A practical stack I use to turn ideas into polished,
            production-ready digital products.
          </p>
        </div>

        <div className="border-t border-black/10">
          {stack.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group grid gap-8 border-b border-black/10 py-12 md:grid-cols-[80px_220px_1fr] md:items-start md:gap-12 md:py-16"
            >
              <span className="font-mono text-xs tracking-[0.15em] text-black/30">
                {item.number}
              </span>

              <div className="flex items-center gap-4">
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-black/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                />

                <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {item.title}
                </h2>
              </div>

              <div>
                <p className="mb-8 max-w-xl text-base leading-relaxed text-black/45 md:text-lg">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="group/tech flex cursor-default items-center gap-2.5 rounded-full border border-black/10 px-3.5 py-2 transition-all duration-300 hover:border-black/20 hover:bg-black/[0.02]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[17px] w-[17px] fill-current transition-all duration-300 group-hover/tech:scale-110"
                        style={{
                          color:
                            technology.name === "Next.js" ||
                            technology.name === "Express" ||
                            technology.name === "Vercel"
                              ? "#09090B"
                              : technology.color,
                        }}
                        aria-hidden="true"
                      >
                        <path d={technology.icon.path} />
                      </svg>

                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-black/50 transition-colors duration-300 group-hover/tech:text-black">
                        {technology.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
