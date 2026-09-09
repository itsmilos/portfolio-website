"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden px-6 py-32 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[#09090B]"
          />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-[15%]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.5, 0.25],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: `
                radial-gradient(
                  ellipse 55% 70% at 20% 50%,
                  color-mix(in srgb, var(--color-accent) 32%, transparent),
                  transparent 65%
                ),
                radial-gradient(
                  ellipse 45% 55% at 75% 50%,
                  rgba(255,255,255,0.035),
                  transparent 70%
                )
              `,
              filter: "blur(45px)",
            }}
          />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-[15%] top-1/2 h-[120%] w-[60%] -translate-y-1/2 rounded-full"
            animate={{
              scale: [0.95, 1.12, 0.95],
              opacity: [0.12, 0.28, 0.12],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent 70%)",
              filter: "blur(55px)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-60">
            <Image
              src="/texture.avif"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  transparent 0%,
                  transparent 45%,
                  rgba(9,9,11,0.45) 75%,
                  #09090B 100%
                )
              `,
            }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(9,9,11,0.65) 100%)",
            }}
          />

          <div className="relative z-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                <span className="text-[color:var(--color-accent)]">06</span>

                <span className="h-px w-8 bg-[color:var(--color-accent)]/50" />

                <span>Resume</span>
              </div>

              <h2 className="max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                Want to know
                <br />
                more about me?
              </h2>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
                A concise overview of my experience, skills, selected work and
                the technologies I use to build digital products.
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--color-accent)] bg-white text-[#09090B] transition-colors duration-500 hover:bg-[color:var(--color-accent)] hover:text-white md:h-32 md:w-32"
              aria-label="Download resume"
            >
              <div className="flex flex-col items-center gap-2">
                <ArrowDownToLine
                  size={22}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-y-1"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
                  Download
                </span>
              </div>
            </motion.a>
          </div>

          <div className="relative z-10 mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>PDF · Updated 2026</span>

            <span className="flex items-center gap-2 text-[color:var(--color-accent)]">
              View my experience
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
