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
          <div className="pointer-events-none absolute inset-0 bg-[#09090B]" />

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              aria-hidden
              className="absolute -left-[20%] top-[10%] h-[90%] w-[65%] rounded-full"
              animate={{
                x: ["0%", "18%", "-5%", "0%"],
                y: ["0%", "-8%", "10%", "0%"],
                scale: [0.85, 1.2, 0.95, 0.85],
                opacity: [0.2, 0.65, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 45%, transparent), transparent 68%)",
                filter: "blur(50px)",
              }}
            />

            <motion.div
              aria-hidden
              className="absolute -right-[15%] top-[20%] h-[80%] w-[55%] rounded-full"
              animate={{
                x: ["0%", "-15%", "8%", "0%"],
                y: ["0%", "10%", "-6%", "0%"],
                scale: [1, 0.8, 1.15, 1],
                opacity: [0.08, 0.3, 0.12, 0.08],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent 70%)",
                filter: "blur(70px)",
              }}
            />

            <motion.div
              aria-hidden
              className="absolute left-[20%] top-[15%] h-[70%] w-[50%] rounded-full"
              animate={{
                scale: [0.7, 1.25, 0.75, 0.7],
                opacity: [0.05, 0.22, 0.07, 0.05],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 35%, transparent), transparent 65%)",
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-40">
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
              background:
                "radial-gradient(ellipse at center, transparent 45%, rgba(9,9,11,0.55) 100%)",
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
              href="/Milos_Lazendic_CV.pdf"
              download
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-[#09090B] transition-colors duration-500 hover:bg-[color:var(--color-accent)] hover:text-white md:h-32 md:w-32"
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
