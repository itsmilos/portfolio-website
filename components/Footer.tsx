"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    href: "mailto:hello@itsmilos.dev",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[650px] flex-col items-center justify-center text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Let&apos;s work together
            </span>

            <span className="h-px w-8 bg-accent/60" />
          </div>

          <h2 className="text-5xl font-semibold tracking-[-0.05em] text-ac] sm:text-6xl lg:text-8xl">
            Have a project
            <br />
            <span className="text-accent">in mind?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-black/45 sm:text-lg">
            Have an idea, a project, or just want to talk? I&apos;m always open
            to new opportunities and interesting ideas.
          </p>

          <a
            href="mailto:hello@itsmilos.dev"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-black/10 bg-black/[0.025] px-6 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black transition-transform duration-300 group-hover:scale-105">
              <Mail className="h-5 w-5" strokeWidth={2} />
            </span>

            <span className="text-sm font-medium text-[#09090B] sm:text-base">
              hello@itsmilos.dev
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

          <div className="flex flex-col gap-3 border-t border-black/[0.06] py-5 text-[10px] uppercase tracking-[0.18em] text-black/25 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} milos.dev</span>

            <span>
              Available for <span className="text-accent">new projects</span>
            </span>

            <span>Based in Bosnia &amp; Herzegovina</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
