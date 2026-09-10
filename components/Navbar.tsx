"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Projects",
    href: "/#work",
  },
  {
    label: "Testimonials",
    href: "/#feedback",
  },
];

function MenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="flex h-12 w-12 items-center justify-center rounded-full"
    >
      <span className="relative flex h-5 w-5 flex-col justify-center gap-1.5">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25 }}
          className="block h-[2px] w-5 rounded-full bg-accent"
        />

        <motion.span
          animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25 }}
          className="block h-[2px] w-5 rounded-full bg-accent"
        />
      </span>
    </button>
  );
}

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
      <nav className="relative z-50 flex w-full items-center px-6 py-7 sm:px-8 lg:px-10 lg:py-10">
        <a
          href="/"
          onClick={closeMenu}
          className="text-sm font-medium tracking-tight text-black"
        >
          <span className="text-accent">&lt;</span>
          milos.dev
          <span className="text-accent">/&gt;</span>
        </a>

        <div className="fixed right-6 top-7 z-[60] sm:right-8 sm:top-8 lg:right-10 lg:top-10">
          <MenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
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
            <div className="flex h-full flex-col px-6 pb-8 pt-28 sm:px-8 lg:px-10 lg:pt-32">
              <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10 sm:mb-10">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                  Navigation
                </span>

                <span className="text-[10px] text-black/30 dark:text-white/30">
                  01 — 04
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
                    <div className="flex items-baseline gap-4 sm:gap-5">
                      <span className="text-[10px] font-medium text-accent">
                        0{index + 1}
                      </span>

                      <span className="text-4xl font-medium tracking-[-0.04em] text-surface-900 transition-colors duration-300 group-hover:text-accent dark:text-surface-100 sm:text-5xl lg:text-6xl">
                        {link.label}
                      </span>
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent dark:text-white/20 sm:h-6 sm:w-6" />
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
