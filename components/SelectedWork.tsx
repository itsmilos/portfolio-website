"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Lumé Beauty Studio",
    category: "Booking Platform",
    description:
      "A custom booking experience designed to make appointment scheduling simple and intuitive.",
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "BIKEHUB",
    category: "E-Commerce",
    description:
      "A modern e-commerce experience for bikes, components and accessories.",
    className: "md:col-span-1",
  },
  {
    number: "03",
    title: "Auction House",
    category: "Full-Stack Application",
    description:
      "A full-stack auction platform built around real-time bidding and user interaction.",
    className: "md:col-span-1",
  },
  {
    number: "04",
    title: "TacticalStore",
    category: "E-Commerce",
    description:
      "A product-focused e-commerce experience with a custom storefront and backend.",
    className: "md:col-span-2",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white px-6 py-32 text-[#09090B] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 max-w-5xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>04</span>
            <span className="h-px w-8 bg-accent" />
            <span>Selected Work</span>
          </div>

          <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Turning ideas into things people can actually use.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/50 md:text-xl">
            A selection of projects I&apos;ve designed and developed from custom
            websites and e-commerce experiences to full-stack applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: {
    number: string;
    title: string;
    category: string;
    description: string;
    className: string;
  };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className={`group ${project.className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#f4f4f2]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-black/20">
              Project Preview
            </span>

            <div className="mx-auto mt-4 h-px w-10 bg-black/10" />
          </div>
        </div>

        <div className="absolute left-5 top-5 font-mono text-xs tracking-[0.15em] text-black/30">
          {project.number}
        </div>

        <div className="absolute inset-0 bg-black/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-black/10 bg-white opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
            {project.title}
          </h2>

          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-black/30">
            {project.category}
          </span>
        </div>

        <p className="max-w-lg text-sm leading-relaxed text-black/45 md:text-base">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
