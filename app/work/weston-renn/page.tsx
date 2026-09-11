"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  siFigma,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
} from "simple-icons/icons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const technologies = [
  {
    name: "Next.js",
    icon: siNextdotjs,
    color: "#000000",
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
];

export default function WestonRennPage() {
  return (
    <main className="bg-white text-[#09090B]">
      <section className="px-6 pb-24 pt-32 md:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span>01</span>
              <span className="h-px w-8 bg-accent" />
              <span>Case Study</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                  Weston
                  <br />
                  Renn<span className="text-accent">.</span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-2">
                <p className="text-lg leading-8 text-black/50">
                  A cinematic author website designed and developed around
                  storytelling, personal branding, and digital product sales.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology.name}
                      className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-black/50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 fill-current"
                        style={{ color: technology.color }}
                      >
                        <path d={technology.icon.path} />
                      </svg>
                      {technology.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="mt-20"
          >
            <a
              href="https://westonrenn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
                animate={{
                  scale: [0.9, 1.08, 0.9],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="pointer-events-none absolute inset-[8%] rounded-[30px] border border-accent/0"
                animate={{
                  scale: [0.98, 1.02, 0.98],
                  opacity: [0, 0.5, 0],
                  borderColor: [
                    "rgba(238,123,48,0)",
                    "rgba(238,123,48,0.35)",
                    "rgba(238,123,48,0)",
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative overflow-hidden rounded-2xl bg-[#f1f1ef] px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14">
                <div className="absolute left-5 top-5 z-20 font-mono text-xs tracking-[0.15em] text-black/30 md:left-7 md:top-7">
                  westonrenn.com
                </div>

                <div className="relative mx-auto w-full max-w-[760px]">
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-t-[10px] border-[5px] border-[#191919] bg-[#191919] shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all duration-700 group-hover:shadow-[0_35px_100px_rgba(238,123,48,0.18)]">
                      <div className="absolute left-1/2 top-0 z-30 h-[5px] w-20 -translate-x-1/2 rounded-b-md bg-[#191919]" />

                      <div className="relative aspect-[16/10] overflow-hidden bg-white">
                        <div className="absolute left-0 right-0 top-0 z-20 flex h-9 items-center border-b border-black/10 bg-[#f7f7f7] px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                          </div>

                          <div className="absolute left-1/2 flex h-5 w-[52%] -translate-x-1/2 items-center justify-center rounded-md bg-black/[0.055] px-3">
                            <span className="truncate font-mono text-[8px] text-black/35 md:text-[9px]">
                              westonrenn.com
                            </span>
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 top-9 overflow-hidden bg-white">
                          <img
                            src="/westonrenn.webp"
                            alt="Weston Renn homepage"
                            className="h-full w-full object-cover object-top"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-accent/[0.025] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>

                    <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[10px] bg-gradient-to-b from-[#d8d8d8] to-[#a9a9a9] shadow-[0_15px_25px_rgba(0,0,0,0.12)]">
                      <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#8d8d8d]" />
                    </div>

                    <div className="mx-auto h-1 w-[88%] rounded-full bg-black/10 blur-[2px]" />
                  </div>

                  <motion.div
                    className="absolute -bottom-3 right-3 z-40 flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:-right-5 md:bottom-1"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(238,123,48,0.7)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/50">
                      View live site
                    </span>

                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span>02</span>
              <span className="h-px w-8 bg-accent" />
              <span>The Idea</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-4xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              A website built around a{" "}
              <span className="text-accent">story.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              Weston Renn needed more than a standard author website. The
              experience had to introduce the author, establish a distinct
              visual identity, create curiosity around the book, and naturally
              guide visitors toward the digital product.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              The direction was intentionally cinematic and minimal, using
              typography, contrast, motion, and carefully controlled spacing to
              make the story feel like the product itself.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span>03</span>
                <span className="h-px w-8 bg-accent" />
                <span>Research & Problems</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                From an author page to a{" "}
                <span className="text-accent">digital experience.</span>
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Build credibility",
                  text: "The website needed to immediately communicate who Weston was and establish a premium author identity.",
                },
                {
                  number: "02",
                  title: "Create curiosity",
                  text: "The book had to feel intriguing before the visitor ever reached the purchase section.",
                },
                {
                  number: "03",
                  title: "Reduce friction",
                  text: "The journey from discovering the story to understanding the product and purchasing it needed to feel natural.",
                },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="rounded-2xl border border-black/10 bg-white p-7 md:p-8"
                >
                  <span className="font-mono text-xs tracking-[0.15em] text-accent">
                    {item.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/50">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span>04</span>
                <span className="h-px w-8 bg-accent" />
                <span>Design & Experience</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Designed to feel <span className="text-accent">immersive.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid gap-5 md:grid-cols-2"
            >
              <div className="rounded-2xl bg-[#09090B] p-8 text-white md:p-10">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current text-accent"
                  >
                    <path d={siFigma.path} />
                  </svg>

                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/40">
                    Design
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                  Visual direction
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  A dark editorial aesthetic combines oversized typography,
                  restrained colors, cinematic imagery, subtle transitions, and
                  generous negative space.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f1f1ef] p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    style={{ color: "#000000" }}
                  >
                    <path d={siNextdotjs.path} />
                  </svg>

                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/40">
                    Development
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                  Motion meets performance
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                  The design was translated into a responsive Next.js experience
                  with reusable components, optimized media, smooth animations,
                  and a structure prepared for search visibility.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span>05</span>
              <span className="h-px w-8 bg-accent" />
              <span>Design to Development</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-4xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              From visual concept to{" "}
              <span className="text-accent">working product.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              The interface was developed as a real production website rather
              than a static design concept. Components were structured around
              reusable sections and responsive behavior from the beginning.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              Performance, responsive layouts, metadata, content structure, and
              the digital product flow were considered alongside the visual
              design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#09090B] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span>06</span>
                <span className="h-px w-8 bg-accent" />
                <span>Digital Product</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                The website becomes the{" "}
                <span className="text-accent">product journey.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5"
            >
              <div className="overflow-hidden rounded-xl bg-[#171717] md:rounded-2xl">
                <Image
                  src="/westonrenn-product.webp"
                  alt="Weston Renn digital product"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center rounded-xl border border-white/10 p-6 md:rounded-2xl md:p-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                  E-book
                </span>

                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] md:mt-16 md:text-3xl">
                  Turning attention into action.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/45 md:mt-5 md:leading-7">
                  The product experience was designed to make the value of the
                  book clear while keeping the purchase path simple and focused.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span>07</span>
                <span className="h-px w-8 bg-accent" />
                <span>Final Result</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                A digital home for the{" "}
                <span className="text-accent">Weston Renn brand.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                The final experience brings the author identity, story,
                editorial direction, and digital product together into one
                focused journey.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-16 border-y border-black/10"
            >
              <div className="grid sm:grid-cols-2">
                <a
                  href="https://github.com/itsmilos/westonrenn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-black/10 py-7 transition-all duration-500 hover:px-3 sm:border-b-0 sm:border-r sm:pr-10 sm:hover:px-3"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-black/25">
                      01
                    </span>

                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                        Source
                      </span>

                      <span className="mt-1 block text-xl font-medium tracking-[-0.03em]">
                        See the code
                      </span>
                    </div>
                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://westonrenn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-7 transition-all duration-500 hover:px-3 sm:pl-10"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-black/25">
                      02
                    </span>

                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                        Live website
                      </span>

                      <span className="mt-1 block text-xl font-medium tracking-[-0.03em]">
                        See it live
                      </span>
                    </div>
                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                  Next project
                </p>

                <Link
                  href="/work/vervida"
                  className="group mt-2 inline-flex items-center gap-3 text-xl font-medium tracking-[-0.03em]"
                >
                  Vervida Skincare
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
