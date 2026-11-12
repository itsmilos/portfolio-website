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
      { text: "   name", className: "text-white/50" },
      { text: ": ", className: "text-white/30" },
      { text: '"Milos Lazendic"', className: "text-green-400" },
      { text: ",", className: "text-white/30" },
    ],
  },
  {
    parts: [
      { text: "   role", className: "text-white/50" },
      { text: ": ", className: "text-white/30" },
      { text: '"Full-Stack Developer"', className: "text-green-400" },
      { text: ",", className: "text-white/30" },
    ],
  },
  {
    parts: [
      { text: "   location", className: "text-white/50" },
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

    return parts.map((part, i) => {
      if (remaining <= 0) {
        return null;
      }

      const visibleText = part.text.slice(0, remaining);
      remaining -= part.text.length;

      return (
        <span key={i} className={part.className}>
          {visibleText}
        </span>
      );
    });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-16 pt-28 text-[#09090B] md:px-10 md:pt-32 lg:px-16 lg:pt-36">
      
     
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <svg
          className="absolute h-[900px] w-[1500px] opacity-60"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.05 }} x="10" y="20" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.08 }} x="55" y="20" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.1 }} x="100" y="20" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.12 }} x="145" y="65" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.15 }} x="190" y="65" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.18 }} x="190" y="110" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.2 }} x="235" y="110" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.22 }} x="10" y="155" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.25 }} x="55" y="155" width="45" height="45" className="fill-accent/[0.05] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.28 }} x="100" y="200" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.3 }} x="145" y="200" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.32 }} x="190" y="200" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.35 }} x="10" y="245" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.38 }} x="100" y="245" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.4 }} x="235" y="290" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.42 }} x="280" y="290" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.45 }} x="55" y="335" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.48 }} x="145" y="335" width="45" height="45" className="fill-accent/[0.05] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.5 }} x="190" y="380" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.52 }} x="235" y="380" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />

         
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.15 }} x="420" y="30" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.18 }} x="465" y="30" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.2 }} x="510" y="30" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.22 }} x="510" y="75" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.25 }} x="555" y="75" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.28 }} x="600" y="120" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.3 }} x="645" y="120" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.32 }} x="420" y="165" width="45" height="45" className="fill-accent/[0.05] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.35 }} x="465" y="165" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.38 }} x="555" y="210" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.4 }} x="600" y="210" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.42 }} x="690" y="255" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.45 }} x="465" y="300" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.48 }} x="510" y="300" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />

          
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.1 }} x="800" y="10" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.12 }} x="845" y="10" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.15 }} x="890" y="10" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.18 }} x="935" y="55" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.2 }} x="980" y="55" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.22 }} x="845" y="100" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.25 }} x="890" y="100" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.28 }} x="1025" y="100" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          
         
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.3 }} x="800" y="145" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.32 }} x="935" y="145" width="45" height="45" className="fill-accent/[0.05] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.34 }} x="980" y="145" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.36 }} x="1070" y="190" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.38 }} x="845" y="235" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.4 }} x="890" y="235" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.42 }} x="1025" y="235" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          
         
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.44 }} x="935" y="280" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.46 }} x="980" y="280" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.48 }} x="1070" y="280" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.5 }} x="890" y="325" width="45" height="45" className="fill-accent/[0.05] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.52 }} x="980" y="325" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.54 }} x="1025" y="325" width="45" height="45" className="fill-accent/[0.07] stroke-accent/25 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.56 }} x="1070" y="325" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.58 }} x="935" y="370" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.6 }} x="1025" y="370" width="45" height="45" className="fill-accent/[0.08] stroke-accent/30 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.62 }} x="1070" y="370" width="45" height="45" className="fill-black/[0.03] stroke-black/10 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.64 }} x="980" y="415" width="45" height="45" className="fill-accent/[0.06] stroke-accent/20 stroke-[1]" />
          <motion.rect initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, delay: 0.66 }} x="1025" y="415" width="45" height="45" className="fill-black/[0.02] stroke-black/10 stroke-[1]" />

         
          <circle cx="10" cy="20" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="100" cy="20" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="190" cy="110" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="55" cy="155" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="145" cy="200" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="235" cy="290" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="145" cy="335" r="2" className="fill-white stroke-accent stroke-[1.5]" />

          <circle cx="420" cy="30" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="510" cy="75" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="600" cy="120" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="465" cy="165" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="555" cy="210" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="465" cy="300" r="2" className="fill-white stroke-accent stroke-[1.5]" />

          <circle cx="800" cy="10" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="935" cy="55" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="845" cy="100" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="980" cy="145" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="890" cy="235" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="1025" cy="235" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="935" cy="280" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="1070" cy="325" r="2" className="fill-white stroke-accent stroke-[1.5]" />
          <circle cx="980" cy="415" r="2" className="fill-white stroke-accent stroke-[1.5]" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
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
          <span>Milos Lazendic — Full Stack Developer</span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.h1
              variants={wordContainer}
              initial="initial"
              animate="animate"
              className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]"
            >
              <span className="sr-only">
                Milos Lazendic, Full Stack Developer.{" "}
              </span>

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