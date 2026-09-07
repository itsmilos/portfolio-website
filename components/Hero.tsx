"use client";

import { useEffect, useState } from "react";

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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 text-[#09090B] md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span>01</span>
          <span className="h-px w-8 bg-accent" />
          <span>Hero</span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              I build digital things
              <br />
              that are meant to be used.
            </h1>

            <div className="mt-10">
              <a
                href="#work"
                className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-medium uppercase tracking-wider"
              >
                View my work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="w-full max-w-md justify-self-end">
            <div className="overflow-hidden rounded-xl border border-black/10 bg-[#0d1117] font-mono text-sm text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>

                <span className="text-xs text-white/30">milos.ts</span>

                <span className="text-xs text-white/20">TS</span>
              </div>

              <div className="min-h-[300px] p-6 leading-8">
                {codeLines.map((line, index) => {
                  if (index > lineIndex) {
                    return <div key={index} className="h-8" />;
                  }

                  const fullText = line.parts.map((part) => part.text).join("");

                  const visibleCharacters =
                    index < lineIndex ? fullText.length : charIndex;

                  return (
                    <div key={index} className="h-8">
                      {getVisibleParts(line.parts, visibleCharacters)}

                      {index === lineIndex && !finished && (
                        <span className="ml-[2px] inline-block h-[17px] w-[1px] translate-y-[3px] animate-pulse bg-accent" />
                      )}
                    </div>
                  );
                })}

                {finished && (
                  <p className="mt-2 text-white/20">
                    // building things that matter
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.04em]">Milos</p>
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.15em] text-black/40 sm:text-right">
            <p>FULL STACK DEVELOPER | UI/UX DESIGNER</p>
          </div>
        </div>
      </div>
    </section>
  );
}
