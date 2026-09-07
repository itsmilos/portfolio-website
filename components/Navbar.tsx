"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="/"
          onClick={closeMenu}
          className="text-sm font-medium tracking-tight text-surface-900 dark:text-surface-100"
        >
          <span className="text-accent">&lt;</span>
          milos.dev
          <span className="text-accent">/&gt;</span>
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-surface-900 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent dark:border-white/10 dark:text-surface-100 dark:hover:border-accent/40 dark:hover:bg-accent/5 dark:hover:text-accent"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" strokeWidth={1.8} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" strokeWidth={1.8} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white dark:bg-surface-950"
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-28 lg:px-8">
              <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                  Navigation
                </span>

                <span className="text-xs text-black/30 dark:text-white/30">
                  01 — 05
                </span>
              </div>

              <nav className="flex flex-1 flex-col justify-center">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-black/[0.08] py-5 dark:border-white/[0.08] sm:py-6"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="text-[10px] font-medium text-accent">
                        0{index + 1}
                      </span>

                      <span className="text-4xl font-medium tracking-[-0.04em] text-surface-900 transition-colors duration-300 group-hover:text-accent dark:text-surface-100 sm:text-5xl lg:text-6xl">
                        {link.label}
                      </span>
                    </div>

                    <ArrowUpRight className="h-6 w-6 text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent dark:text-white/20" />
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-black/40 dark:text-white/40">
                  Full-Stack Developer
                </span>

                <span className="text-xs text-black/40 dark:text-white/40">
                  Based in Bosnia &amp; Herzegovina
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
