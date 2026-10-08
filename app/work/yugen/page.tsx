"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siFigma } from "simple-icons/icons";

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

const tools = [
  {
    name: "Figma",
    icon: siFigma,
    color: "#F24E1E",
  },
];

export default function YugenPage() {
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
                  YUGEN
                  <br />
                  Restaurant<span className="text-accent">.</span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-2">
                <p className="text-lg leading-8 text-black/50">
                  A premium restaurant website concept designed to translate the
                  atmosphere of YUGEN into a refined digital experience with
                  clear navigation and an intuitive guest journey.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-black/50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 fill-current"
                        style={{ color: tool.color }}
                      >
                        <path d={tool.icon.path} />
                      </svg>
                      {tool.name}
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
            <div className="group relative block">
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

              <div className="relative overflow-hidden rounded-2xl bg-[#f1f1ef] p-4 md:p-6 lg:p-8">
                <div className="absolute left-5 top-5 z-20 font-mono text-xs tracking-[0.15em] text-black/30 md:left-7 md:top-7">
                  YUGEN / Figma Design
                </div>

                <div className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/yugen1.webp"
                    alt="YUGEN restaurant Figma design"
                    width={1800}
                    height={1200}
                    quality={100}
                    className="block h-auto w-full"
                    priority
                  />

                  <div className="pointer-events-none absolute inset-0 bg-accent/[0.025] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
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
                    Figma concept
                  </span>

                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </motion.div>
              </div>
            </div>
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
              <span>The Concept</span>
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
              A restaurant experience built around{" "}
              <span className="text-accent">atmosphere.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              YUGEN was approached as a premium restaurant concept where the
              website needed to communicate the feeling of the space before a
              guest ever walked through the door.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              The design balances strong visual storytelling with practical
              information, allowing visitors to discover the restaurant, explore
              the menu, understand the atmosphere, and move naturally toward
              making a reservation.
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
                <span>Research & Direction</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Three principles shaped the{" "}
                <span className="text-accent">experience.</span>
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Atmosphere",
                  text: "The visual direction needed to establish the character of YUGEN immediately through typography, imagery, composition, and controlled use of space.",
                },
                {
                  number: "02",
                  title: "Clarity",
                  text: "Essential information such as the menu, location, concept, and reservation journey needed to remain easy to discover without competing with the visual identity.",
                },
                {
                  number: "03",
                  title: "Intention",
                  text: "Every section was designed with a clear purpose, guiding visitors through the experience while keeping the interface calm and considered.",
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
                <span>Visual Design</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Minimal structure,{" "}
                <span className="text-accent">strong atmosphere.</span>
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
                    Visual System
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                  A restrained visual language
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  Typography, imagery, spacing, contrast, and carefully
                  controlled visual details create a restaurant identity that
                  feels elevated without becoming visually excessive.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f1f1ef] p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full border border-black/15 bg-white" />

                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/40">
                    Interface
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                  Experience-first layouts
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                  Content is presented in a way that lets the restaurant
                  identity lead while keeping navigation, menu discovery,
                  location details, and reservations straightforward.
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
              <span>User Experience</span>
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
              Let the experience guide the{" "}
              <span className="text-accent">user.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              The interface was structured around the natural questions a
              potential guest has: What is YUGEN? What does the experience feel
              like? What is being served? And how do I visit?
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              Navigation, hierarchy, imagery, and calls to action work together
              to answer those questions progressively, creating a smoother path
              from first impression to reservation intent.
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
                <span>06</span>
                <span className="h-px w-8 bg-accent" />
                <span>Figma Design</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                From visual direction to a{" "}
                <span className="text-accent">complete interface.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                The final Figma concept brings the visual identity, information
                hierarchy, and interaction patterns together into a cohesive
                restaurant experience.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-16 overflow-hidden rounded-2xl bg-white p-4 shadow-[0_25px_70px_rgba(0,0,0,0.08)] md:p-6 lg:p-8"
            >
              <Image
                src="/yugen2.webp"
                alt="YUGEN restaurant Figma interface"
                width={1800}
                height={1200}
                quality={100}
                className="h-auto w-full rounded-xl object-cover"
              />
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
                A restaurant interface designed to{" "}
                <span className="text-accent">set the mood.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                YUGEN translates a premium dining concept into a digital
                experience where visual atmosphere, clear information, and
                intuitive navigation work together.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-16 border-y border-black/10"
            >
              <div className="grid sm:grid-cols-2">
                <div className="group flex items-center justify-between border-b border-black/10 py-7 transition-all duration-500 hover:px-3 sm:border-b-0 sm:border-r sm:pr-10 sm:hover:px-3">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-black/25">
                      01
                    </span>

                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                        Design tool
                      </span>

                      <span className="mt-1 block text-xl font-medium tracking-[-0.03em]">
                        Designed in Figma
                      </span>
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current text-black/40 transition-transform duration-300 group-hover:rotate-6 group-hover:text-accent"
                  >
                    <path d={siFigma.path} />
                  </svg>
                </div>

                <div className="group flex items-center justify-between py-7 transition-all duration-500 hover:px-3 sm:pl-10">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-black/25">
                      02
                    </span>

                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                        Project type
                      </span>

                      <span className="mt-1 block text-xl font-medium tracking-[-0.03em]">
                        UI/UX Concept
                      </span>
                    </div>
                  </div>

                  <span className="text-lg text-black/30">↗</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                  Previous project
                </p>

                <Link
                  href="/work/gemora"
                  className="group mt-2 inline-flex items-center gap-3 text-xl font-medium tracking-[-0.03em]"
                >
                  GEMORA
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                </Link>
              </div>

              <div className="sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/30">
                  Next project
                </p>

                <Link
                  href="/work/weston-renn"
                  className="group mt-2 inline-flex items-center gap-3 text-xl font-medium tracking-[-0.03em]"
                >
                  Weston Renn
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
