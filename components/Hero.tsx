"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titleLine1 = "I build digital things".split(" ");
const titleLine2 = "that are meant to be used.".split(" ");

const wordContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.22,
    },
  },
};

const word = {
  initial: {
    opacity: 0,
    x: -45,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const renderWords = (words: string[]) =>
  words.map((w, i) => (
    <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
      {w}
    </motion.span>
  ));

const codeLines = [
  {
    parts: [
      { text: "const ", className: "text-purple-400" },
      { text: "developer", className: "text-accent" },
      { text: " = {", className: "text-white/70" },
    ],
  },
  {
    parts: [
      { text: "  name", className: "text-white/50" },
      { text: ": ", className: "text-white/30" },
      { text: '"Milos"', className: "text-green-400" },
      { text: ",", className: "text-white/30" },
    ],
  },
  {
    parts: [
      { text: "  role", className: "text-white/50" },
      { text: ": ", className: "text-white/30" },
      { text: '"Full-Stack Developer"', className: "text-green-400" },
      { text: ",", className: "text-white/30" },
    ],
  },
  {
    parts: [
      { text: "  location", className: "text-white/50" },
      { text: ": ", className: "text-white/30" },
      { text: '"Bosnia & Herzegovina"', className: "text-green-400" },
    ],
  },
  {
    parts: [{ text: "};", className: "text-white/70" }],
  },
  {
    parts: [
      { text: "console", className: "text-accent" },
      { text: ".", className: "text-white/50" },
      { text: "log", className: "text-accent" },
      { text: "(", className: "text-white" },
      { text: "developer", className: "text-white/70" },
      { text: ");", className: "text-white" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      setFinished(true);
      return;
    }

    const currentLine = codeLines[lineIndex];
    const fullText = currentLine.parts.map((part) => part.text).join("");

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      },
      lineIndex === codeLines.length - 1 ? 500 : 120,
    );

    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex]);

  const getVisibleParts = (
    parts: { text: string; className: string }[],
    visibleCharacters: number,
  ) => {
    let remaining = visibleCharacters;

    return parts.map((part) => {
      if (remaining <= 0) {
        return null;
      }

      const visibleText = part.text.slice(0, remaining);
      remaining -= part.text.length;

      return (
        <span key={part.text} className={part.className}>
          {visibleText}
        </span>
      );
    });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 text-[#09090B] md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          <span>01</span>
          <span className="h-px w-8 bg-accent" />
          <span>Hero</span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.h1
              variants={wordContainer}
              initial="initial"
              animate="animate"
              className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]"
            >
              <span className="block overflow-visible">
                {renderWords(titleLine1)}
              </span>

              <span className="block overflow-hidden">
                {renderWords(titleLine2)}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                ease,
              }}
              className="mt-10"
            >
              <a
                href="#work"
                className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                View my work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease,
            }}
            className="w-full max-w-md justify-self-end"
          >
            <motion.div
              animate={
                finished
                  ? {
                      boxShadow: [
                        "0 25px 50px -12px rgba(0,0,0,0.25)",
                        "0 25px 60px -12px rgba(0,0,0,0.35)",
                        "0 25px 50px -12px rgba(0,0,0,0.25)",
                      ],
                    }
                  : undefined
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="overflow-hidden rounded-xl border border-black/10 bg-[#0d1117] font-mono text-sm text-white shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                }}
                className="flex items-center justify-between border-b border-white/10 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>

                <span className="text-xs text-white/30">milos.ts</span>

                <span className="text-xs text-white/20">TS</span>
              </motion.div>

              <div className="min-h-[300px] p-6 leading-8">
                {codeLines.map((line, index) => {
                  if (index > lineIndex) {
                    return <div key={index} className="h-8" />;
                  }

                  const fullText = line.parts.map((part) => part.text).join("");

                  const visibleCharacters =
                    index < lineIndex ? fullText.length : charIndex;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="h-8"
                    >
                      {getVisibleParts(line.parts, visibleCharacters)}

                      {index === lineIndex && !finished && (
                        <span className="ml-[2px] inline-block h-[17px] w-[1px] translate-y-[3px] animate-pulse bg-accent" />
                      )}
                    </motion.div>
                  );
                })}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={
                    finished
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 5,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="mt-2 text-white/20"
                >
                  // building things that matter
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
