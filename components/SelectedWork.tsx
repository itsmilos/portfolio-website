
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Weston Renn",
    category: "Author & Digital Product",
    description:
      "A cinematic digital experience crafted around an author brand, with a focused journey from story discovery to e-book purchase.",
    image: "/westonrenn.webp",
    url: "westonrenn.com",
    slug: "weston-renn",
    size: "featured",
  },
  {
    number: "02",
    title: "Vervida Skincare",
    category: "E-Commerce & Branding",
    description: "A modern e-commerce experience for skincare products.",
    image: "/vervida.webp",
    url: "vervida.com",
    slug: "vervida",
    size: "standard",
  },
  {
    number: "03",
    title: "Lumé Beauty",
    category: "Booking Platform",
    description:
      "A custom booking experience designed to make appointment scheduling simple and intuitive.",
    image: "/lume1.webp",
    url: "lume-beauty.com",
    slug: "lume",
    size: "standard",
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
    size: "standard",
  },
  {
    number: "05",
    title: "YUGEN",
    category: "UI/UX Design",
    description:
      "A refined restaurant experience designed in Figma, focused on visual identity, intuitive navigation, and a premium dining aesthetic.",
    image: "/yugen.webp",
    url: "figma.com",
    slug: "yugen",
    size: "standard",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white text-[#09090B]"
    >
      
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>04</span>
            <span className="h-px w-8 bg-accent" />
            <span>Selected Work</span>
          </div>

          <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Turning ideas into things people can actually use.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/50 md:text-xl">
            A selection of projects I&apos;ve designed and developed from
            custom websites and e-commerce experiences to full-stack
            applications.
          </p>
        </div>
      </div>

      
      <div className="mx-auto max-w-7xl px-5 pb-32 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:auto-rows-[340px] lg:grid-cols-4 lg:gap-7">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}

        </div>

        
        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-black/30">
            <span>Selected projects</span>
            <span className="h-px w-8 bg-black/10" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/30">
            05 Projects
          </span>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const featured = project.size === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group min-w-0 ${
        featured
          ? "md:col-span-2 lg:row-span-2"
          : "md:col-span-1 lg:col-span-2"
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="flex h-full flex-col"
      >
        
        <div
          className={`relative flex flex-1 flex-col justify-center overflow-hidden rounded-[24px] bg-[#f1f1ef] p-5 transition-colors duration-500 group-hover:bg-[#eae9e6] md:p-7 ${
            featured ? "min-h-[390px] lg:min-h-0" : "min-h-[320px]"
          }`}
        >
         
          <div className="absolute left-5 top-5 z-20 font-mono text-xs tracking-[0.15em] text-black/30 md:left-7 md:top-7">
            {project.number} / 05
          </div>

         
          <div className="absolute right-5 top-5 z-20 hidden font-mono text-[9px] uppercase tracking-[0.12em] text-black/30 sm:block md:right-7 md:top-7">
            {project.category}
          </div>

         
          <div
            className={`relative mx-auto w-full translate-y-2 transition-transform duration-700 ease-out group-hover:-translate-y-1 ${
              featured ? "max-w-[680px]" : "max-w-[480px]"
            }`}
          >
            <div className="relative overflow-hidden rounded-t-[8px] border-[5px] border-[#191919] bg-[#191919] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
             
              <div className="absolute left-1/2 top-0 z-30 h-[5px] w-16 -translate-x-1/2 rounded-b-md bg-[#191919]" />

              
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                
                <div className="absolute left-0 right-0 top-0 z-20 flex h-8 items-center border-b border-black/10 bg-[#f7f7f7] px-3 md:h-9">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>

                  <div className="absolute left-1/2 flex h-5 w-[52%] -translate-x-1/2 items-center justify-center rounded-md bg-black/[0.055] px-3">
                    <span className="truncate font-mono text-[8px] text-black/35 md:text-[9px]">
                      {project.url}
                    </span>
                  </div>
                </div>

              
                <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden bg-white md:top-9">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
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

       
        <div className="flex flex-col gap-2 px-1 pb-2 pt-5">
          <div className="flex items-start justify-between gap-3">
            <h2
              className={`font-medium tracking-[-0.035em] ${
                featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
              }`}
            >
              {project.title}
            </h2>

            <span className="max-w-[45%] shrink-0 text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-black/35 md:text-[10px]">
              {project.category}
            </span>
          </div>

          <p
            className={`leading-relaxed text-black/45 ${
              featured ? "max-w-xl text-base" : "max-w-lg text-sm"
            }`}
          >
            {project.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
