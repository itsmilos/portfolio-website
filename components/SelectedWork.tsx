"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Weston Renn Personal Website",
    category: "Author & Digital Product",
    description:
      "A cinematic digital experience crafted around an author brand, with a focused journey from story discovery to e-book purchase.",
    image: "/westonrenn.webp",
    url: "westonrenn.com",
    slug: "weston-renn",
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "Vervida Skincare Brand Website",
    category: "E-Commerce & Branding",
    description: "A modern e-commerce experience for skincare products.",
    image: "/vervida.webp",
    url: "vervida.com",
    slug: "vervida",
    className: "md:col-span-1",
  },
  {
    number: "03",
    title: "Lumé Beauty Studio",
    category: "Booking Platform",
    description:
      "A custom booking experience designed to make appointment scheduling simple and intuitive.",
    image: "/lume1.webp",
    url: "lume-beauty.com",
    slug: "lume",
    className: "md:col-span-1",
  },
  {
    number: "04",
    title: "GEMORA",
    category: "Full-Stack Application",
    description:
      "A full-stack auction platform built around real-time bidding and user interaction.",
    image: "/gemora.webp",
    url: "gemora.com",
    slug: "gemora",
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

        <div className="grid gap-x-6 gap-y-20 md:grid-cols-3">
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
    image: string;
    url: string;
    slug: string;
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
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-[#f1f1ef] px-5 pb-0 pt-10 md:px-8 md:pt-14">
          <div className="absolute left-5 top-5 z-20 font-mono text-xs tracking-[0.15em] text-black/30 md:left-7 md:top-7">
            {project.number}
          </div>

          <div className="relative mx-auto w-full max-w-[900px] translate-y-1 transition-transform duration-700 ease-out group-hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-t-[8px] border-[5px] border-[#191919] bg-[#191919] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="absolute left-1/2 top-0 z-30 h-[5px] w-16 -translate-x-1/2 rounded-b-md bg-[#191919]" />

              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <div className="absolute left-0 right-0 top-0 z-20 flex h-9 items-center border-b border-black/10 bg-[#f7f7f7] px-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>

                  <div className="absolute left-1/2 flex h-5 w-[52%] -translate-x-1/2 items-center justify-center rounded-md bg-black/[0.055] px-3">
                    <span className="truncate font-mono text-[8px] text-black/35 md:text-[9px]">
                      {project.url}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 top-9 overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/[0.02]" />
                </div>
              </div>
            </div>

            <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[10px] bg-gradient-to-b from-[#d8d8d8] to-[#a9a9a9] shadow-[0_12px_20px_rgba(0,0,0,0.12)]">
              <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#8d8d8d]" />
            </div>

            <div className="mx-auto h-1 w-[88%] rounded-full bg-black/10 blur-[2px]" />
          </div>

          <div className="absolute bottom-5 right-5 z-30 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-black/10 bg-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-black/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
      </Link>
    </motion.article>
  );
}
