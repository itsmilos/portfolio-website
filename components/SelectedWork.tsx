"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Weston Renn",
    category: "Author & Digital Product",
    description: "A cinematic digital experience crafted around an author brand, with a focused journey from story discovery to e-book purchase.",
    image: "/westonrenn.webp",
    url: "westonrenn.com",
    slug: "weston-renn",
    size: "large", 
  },
  {
    number: "02",
    title: "Vervida Skincare",
    category: "E-Commerce",
    description: "A modern e-commerce experience for skincare products.",
    image: "/vervida.webp",
    url: "vervida.com",
    slug: "vervida",
    size: "small",
  },
  {
    number: "03",
    title: "Lumé Beauty",
    category: "Booking Platform",
    description: "A custom booking experience designed to make appointment scheduling simple.",
    image: "/lume1.webp",
    url: "lume-beauty.com",
    slug: "lume",
    size: "small",
  },
  {
    number: "04",
    title: "GEMORA",
    category: "Full-Stack Application",
    description: "A full-stack auction platform built around real-time bidding.",
    image: "/gemora.webp",
    url: "gemora.com",
    slug: "gemora",
    size: "medium",
  },
  {
    number: "05",
    title: "YUGEN",
    category: "UI/UX Design",
    description: "A refined restaurant experience designed in Figma.",
    image: "/yugen.webp",
    url: "figma.com",
    slug: "yugen",
    size: "medium",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-white text-[#09090B]">

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-36 md:px-12 md:pb-24 md:pt-44 lg:px-20">
        <div className="max-w-5xl">
          <div className="mb-9 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#E05638]">
            <span>04</span>
            <span className="h-px w-8 bg-[#E05638]" />
            <span>Selected Work</span>
          </div>

          <h1 className="text-[clamp(2.75rem,5.5vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Turning ideas into things people can actually use.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/50 md:text-xl">
            A selection of projects I've designed and developed, from custom websites and e-commerce experiences to full-stack applications.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-36 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => {
            
            let spanClass = "lg:col-span-6"; 
            if (project.size === "large") {
              spanClass = "lg:col-span-8 lg:row-span-2";
            } else if (project.size === "small") {
              spanClass = "lg:col-span-4";
            }

            return (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
                spanClass={spanClass}
              />
            );
          })}
        </div>

   
        <div className="mt-24 flex items-center justify-between border-t border-black/10 pt-6">
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
  spanClass,
}: {
  project: (typeof projects)[number];
  index: number;
  spanClass: string;
}) {
  const isLarge = project.size === "large";

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
      className={`group min-w-0 ${spanClass}`}
    >
      <Link href={`/work/${project.slug}`} className="flex h-full flex-col">
      
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] bg-[#f4f4f2] p-7 transition-all duration-500 group-hover:bg-[#ebeae6] md:p-9">
          
        
          <div className="flex items-center justify-between z-20 mb-6">
            <span className="font-mono text-xs tracking-[0.15em] text-black/40">
              {project.number} / 05
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/40">
              {project.category}
            </span>
          </div>

        
          <div className="relative mx-auto w-full max-w-[520px] my-auto py-2 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-t-[10px] border-[6px] border-[#161616] bg-[#161616] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="absolute left-1/2 top-0 z-30 h-[5px] w-16 -translate-x-1/2 rounded-b-md bg-[#161616]" />

              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                
                <div className="absolute left-0 right-0 top-0 z-20 flex h-7 items-center border-b border-black/10 bg-[#f9f9f9] px-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>

                  <div className="absolute left-1/2 flex h-4 w-[50%] -translate-x-1/2 items-center justify-center rounded-md bg-black/[0.04] px-2">
                    <span className="truncate font-mono text-[8px] text-black/40">
                      {project.url}
                    </span>
                  </div>
                </div>

                
                <div className="absolute inset-x-0 bottom-0 top-7 overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/[0.02]" />
                </div>
              </div>
            </div>

           
            <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[12px] bg-gradient-to-b from-[#d1d1d1] to-[#a2a2a2] shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
              <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-full bg-[#828282]" />
            </div>
          </div>

          
          <div className="flex items-end justify-between gap-4 z-20 pt-6 mt-auto">
            <div>
              <h2 className={`font-medium tracking-[-0.035em] ${isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                {project.title}
              </h2>
              <p className="mt-1.5 max-w-md text-xs leading-relaxed text-black/50 md:text-sm line-clamp-2">
                {project.description}
              </p>
            </div>

           
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white opacity-0 shadow-md transition-all duration-500 group-hover:opacity-100">
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </div>
          </div>

        </div>
      </Link>
    </motion.article>
  );
}