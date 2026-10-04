"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/itsmilos",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/milos-lazendic-b45b3841a/",
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:hello@devbym.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devbym/",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex min-h-[650px] flex-col items-center justify-center overflow-hidden text-center">
          <motion.div
            className="pointer-events-none absolute left-[18%] top-[24%] z-20"
            animate={{
              x: [0, 80, 170, 120, 30, 0],
              y: [0, 45, 20, 90, 120, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
              >
                <path
                  d="M1.2 0.8L1.6 17.3L5.7 13.4L8.8 18L11.1 16.4L8 11.9L13.7 11.2L1.2 0.8Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                <path
                  d="M1.2 0.8L1.6 17.3L5.7 13.4L8.8 18L11.1 16.4L8 11.9L13.7 11.2L1.2 0.8Z"
                  fill="#EE7B30"
                  stroke="#EE7B30"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="absolute left-5 top-5 whitespace-nowrap rounded-[3px] bg-[#EE7B30] px-1.5 py-[3px] text-[9px] font-medium leading-none text-white">
                Milos
              </span>
            </div>
          </motion.div>

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Let&apos;s work together
            </span>

            <span className="h-px w-8 bg-accent/60" />
          </div>

          <h2 className="text-5xl font-semibold tracking-[-0.05em] text-[#09090B] sm:text-6xl lg:text-8xl">
            Have a project
            <br />
            <span className="text-accent">in mind?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-black/45 sm:text-lg">
            Have an idea, a project, or just want to talk? I&apos;m always open
            to new opportunities and interesting ideas.
          </p>

          <a
            href="mailto:hello@devbym.com"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-black/10 bg-black/[0.025] px-6 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black transition-transform duration-300 group-hover:scale-105">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </span>

            <span className="text-sm font-medium text-[#09090B] sm:text-base">
              hello@devbym.com
            </span>

            <ArrowUpRight className="h-4 w-4 text-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>
        </div>

        <footer className="border-t border-black/[0.08]">
          <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-[#09090B]">
                <span className="text-accent">&lt;</span>
                milos.dev
                <span className="text-accent">/&gt;</span>
              </span>

              <p className="mt-1 text-xs text-black/35">Full-Stack Developer</p>
            </div>

            <nav className="flex flex-wrap items-center gap-2">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-2 rounded-full border border-black/[0.09] px-4 py-2.5 text-xs font-medium text-black/50 transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.05] hover:text-accent"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />

                    <span>{link.label}</span>

                    <ArrowUpRight className="h-3 w-3 text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 border-t border-black/[0.06] py-5 text-[10px] uppercase tracking-[0.18em] text-black/25 sm:flex-row sm:items-center sm:justify-center">
            <span>All rights reserved milos.dev 2026</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
