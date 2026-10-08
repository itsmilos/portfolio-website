"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  },
  {
    number: "02",
    title: "Vervida Skincare",
    category: "E-Commerce & Branding",
    description: "A modern e-commerce experience for skincare products.",
    image: "/vervida.webp",
    url: "vervida.com",
    slug: "vervida",
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
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      if (!viewportRef.current || !trackRef.current) return;

      if (window.innerWidth < 768) {
        setScrollDistance(0);
        setSectionHeight(0);
        return;
      }

      const viewportWidth = viewportRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;

      const distance = Math.max(0, trackWidth - viewportWidth);

      setScrollDistance(distance);
      setSectionHeight(window.innerHeight + distance);
    };

    calculateDimensions();

    const resizeObserver = new ResizeObserver(calculateDimensions);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-white text-[#09090B]"
      style={{
        height: scrollDistance > 0 ? `${sectionHeight}px` : undefined,
      }}
    >
      <div className="relative md:sticky md:top-0 md:h-screen md:overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10 md:pt-24 lg:px-16">
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

        <div
          ref={viewportRef}
          className="mt-16 pb-8 md:mt-14 md:overflow-hidden"
        >
          <motion.div
            ref={trackRef}
            style={{
              x: scrollDistance > 0 ? x : undefined,
            }}
            className="flex flex-col gap-20 px-6 pb-8 md:flex-row md:gap-24 md:px-10 lg:gap-28 lg:px-16"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}

            <div
              className="hidden shrink-0 md:block md:w-40 lg:w-56"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="mt-2 hidden items-center justify-between px-6 md:flex md:px-10 lg:px-16">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-black/30">
            <span>Scroll to explore</span>
            <span className="text-black/20">→</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-black/30">
            <span>05 Projects</span>
            <span className="h-px w-16 bg-black/10" />
          </div>
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
  };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
      }}
      className="group w-full shrink-0 md:w-[560px]"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-[#f1f1ef] px-5 pb-0 pt-10 md:px-8 md:pt-14">
          <div className="absolute left-5 top-5 z-20 font-mono text-xs tracking-[0.15em] text-black/30 md:left-7 md:top-7">
            {project.number}
          </div>

          <div className="relative mx-auto w-full max-w-[500px] translate-y-1 transition-transform duration-700 ease-out group-hover:-translate-y-1">
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

        <div className="mt-5 min-h-[110px]">
          <div className="mb-2 flex items-start justify-between gap-4">
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
