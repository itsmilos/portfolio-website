"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  siReact,
  siTypescript,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siPrisma,
  siSocketdotio,
  siSupabase,
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
    name: "React",
    icon: siReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: siTypescript,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: siNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Express",
    icon: siExpress,
    color: "#000000",
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
  {
    name: "Socket.IO",
    icon: siSocketdotio,
    color: "#010101",
  },
  {
    name: "Supabase",
    icon: siSupabase,
    color: "#3ECF8E",
  },
];

export default function GemoraPage() {
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
                  GEMORA
                  <span className="text-accent">.</span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-2">
                <p className="text-lg leading-8 text-black/50">
                  A full-stack auction platform built around real-time bidding,
                  live auction updates, and a structured marketplace experience.
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
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="mt-20"
          >
            <a
              href="https://gemora-auction-house-client-3iod.vercel.app/"
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
                  GEMORA / Auction Platform
                </div>

                <div className="relative mx-auto w-full max-w-[820px]">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
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
                              gemora / live auction
                            </span>
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 top-9 overflow-hidden bg-white">
                          <Image
                            src="/gemora.webp"
                            alt="GEMORA auction platform"
                            fill
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 820px"
                            className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-accent/[0.025] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>

                    <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[10px] bg-gradient-to-b from-[#d8d8d8] to-[#a9a9a9] shadow-[0_15px_25px_rgba(0,0,0,0.12)]">
                      <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#8d8d8d]" />
                    </div>

                    <div className="mx-auto h-1 w-[88%] rounded-full bg-black/10 blur-[2px]" />
                  </motion.div>

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
                      Live bidding
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
              <span>The Problem</span>
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
              An auction cannot feel <span className="text-accent">live</span>{" "}
              if users have to refresh.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              Traditional web interfaces are built around request-and-response
              interactions. That works for most content, but an auction creates
              a different problem: multiple users can interact with the same
              auction at the same time.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              When one user places a bid, everyone watching that auction needs
              to see the new price immediately. The platform therefore needed
              real-time communication between the server and connected clients,
              rather than relying on page refreshes or repeated requests.
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
                <span>The Idea</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Build the auction around{" "}
                <span className="text-accent">real-time interaction.</span>
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Users can browse active auctions, search listings, filter results, and open individual auction pages.",
                },
                {
                  number: "02",
                  title: "Bid",
                  text: "Authenticated users can place bids through a focused bidding interface while the server validates the action.",
                },
                {
                  number: "03",
                  title: "Update",
                  text: "A successful bid is broadcast through Socket.IO so connected users receive the updated auction state instantly.",
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

      <section
        id="live-auction"
        className="px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >
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
                <span>Live Bidding</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Every bid becomes a{" "}
                <span className="text-accent">live event.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                Socket.IO connects the auction interface with the server in real
                time. When a bid is successfully processed, the new auction
                state can be emitted to the users currently connected to that
                auction.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-16 grid gap-5 md:grid-cols-2"
            >
              <div className="rounded-2xl bg-[#09090B] p-8 text-white md:p-10">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current text-accent"
                  >
                    <path d={siSocketdotio.path} />
                  </svg>

                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/40">
                    Real-time
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                  Socket.IO
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  Instead of waiting for another request, connected clients can
                  receive auction updates as soon as the relevant server event
                  occurs.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f1f1ef] p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  </span>

                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/40">
                    Live state
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                  No manual refresh
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                  The interface is designed around the assumption that auction
                  data can change while the user is looking at the page.
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
              <span>Full-Stack Architecture</span>
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
              A frontend connected to a{" "}
              <span className="text-accent">real backend.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              GEMORA was structured as a full-stack application with React and
              TypeScript on the client and an Express/Node.js backend handling
              API requests, authentication, auction operations, and real-time
              events.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
            >
              PostgreSQL and Prisma provide the data layer, while Supabase
              Storage handles uploaded auction imagery. The application was
              deployed with the frontend and backend working as a connected
              system.
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
                <span>Auction Experience</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Everything needed to{" "}
                <span className="text-accent">participate.</span>
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Live auctions",
                  text: "Active listings with countdowns and continuously updated bidding information.",
                },
                {
                  number: "02",
                  title: "Search & filters",
                  text: "Users can quickly narrow the auction catalog and discover relevant listings.",
                },
                {
                  number: "03",
                  title: "Protected bidding",
                  text: "Authenticated users can access bidding functionality while protected routes handle restricted actions.",
                },
                {
                  number: "04",
                  title: "Roles",
                  text: "Different user capabilities are handled through authentication and role-based access.",
                },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="rounded-2xl border border-black/10 bg-white p-7"
                >
                  <span className="font-mono text-xs tracking-[0.15em] text-accent">
                    {item.number}
                  </span>

                  <h3 className="mt-10 text-xl font-medium tracking-[-0.03em]">
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
                <span>07</span>
                <span className="h-px w-8 bg-accent" />
                <span>What I Solved</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                From static auction listings to a{" "}
                <span className="text-accent">live marketplace.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid gap-5 md:grid-cols-3"
            >
              {[
                {
                  number: "01",
                  title: "Real-time communication",
                  text: "Implemented Socket.IO events so auction changes can be distributed to connected clients without requiring page refreshes.",
                },
                {
                  number: "02",
                  title: "Auction state",
                  text: "Connected bidding actions, countdowns, current prices, and auction status into one consistent application flow.",
                },
                {
                  number: "03",
                  title: "Full-stack flow",
                  text: "Connected the UI, API, authentication, database, file storage, and real-time layer into a single working product.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-8"
                >
                  <span className="font-mono text-xs tracking-[0.15em] text-accent">
                    {item.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/40">
                    {item.text}
                  </p>
                </div>
              ))}
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
                <span>08</span>
                <span className="h-px w-8 bg-accent" />
                <span>Final Result</span>
              </div>

              <h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                An auction platform built for{" "}
                <span className="text-accent">real-time interaction.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                GEMORA brings live bidding, authentication, auction management,
                search, filtering, and persistent data together into one
                full-stack application.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-16 border-y border-black/10"
            >
              <div className="grid border-b border-black/10 md:grid-cols-3">
                <a
                  href="https://gemora-auction-house-client-3iod.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-black/10 py-7 transition-all duration-500 hover:px-3 md:border-b-0 md:border-r md:pr-8 md:hover:px-4"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/25">
                        Live website
                      </span>

                      <span className="h-px w-6 bg-black/10 transition-all duration-500 group-hover:w-10 group-hover:bg-accent" />
                    </div>

                    <span className="block text-xl font-medium tracking-[-0.035em]">
                      See live site
                    </span>
                  </div>

                  <span className="mr-2 text-xl text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/itsmilos/gemora-auction-house-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-black/10 py-7 transition-all duration-500 hover:px-3 md:border-b-0 md:border-r md:px-8 md:hover:px-10"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/25">
                        Frontend source
                      </span>

                      <span className="h-px w-6 bg-black/10 transition-all duration-500 group-hover:w-10 group-hover:bg-accent" />
                    </div>

                    <span className="block text-xl font-medium tracking-[-0.035em]">
                      See frontend
                    </span>
                  </div>

                  <span className="mr-2 text-xl text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/itsmilos/gemora-auction-house-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-7 transition-all duration-500 hover:px-3 md:pl-8 md:hover:px-4"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/25">
                        Backend source
                      </span>

                      <span className="h-px w-6 bg-black/10 transition-all duration-500 group-hover:w-10 group-hover:bg-accent" />
                    </div>

                    <span className="block text-xl font-medium tracking-[-0.035em]">
                      See backend
                    </span>
                  </div>

                  <span className="mr-2 text-xl text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
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
                  Previous project
                </p>

                <Link
                  href="/work/lume"
                  className="group mt-2 inline-flex items-center gap-3 text-xl font-medium tracking-[-0.03em]"
                >
                  Lumé Beauty Studio
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
