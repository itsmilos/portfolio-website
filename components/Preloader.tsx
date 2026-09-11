"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const hasVisited = sessionStorage.getItem("portfolio-visited");

    if (hasVisited) {
      setShowPreloader(false);
      return;
    }

    sessionStorage.setItem("portfolio-visited", "true");
    setShowPreloader(true);

    const duration = 1700;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));

      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setShowPreloader(false);
        }, 300);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[999999] flex min-h-screen w-screen flex-col justify-end bg-white"
        >
          <div className="w-full px-6 pb-8 md:px-10 md:pb-10 lg:px-14 lg:pb-12">
            <div className="flex items-end justify-between">
              <div
                className="font-mono text-[clamp(6rem,18vw,18rem)] font-medium leading-[0.72] tracking-[-0.1em] tabular-nums transition-colors duration-150"
                style={{
                  color: `color-mix(in srgb, #EE7B30 ${progress}%, #9ca3af)`,
                }}
              >
                {progress}%
              </div>

              <span className="mb-2 font-mono text-[9px] uppercase tracking-[0.3em] text-black/30 md:mb-4">
                Loading
              </span>
            </div>

            <div className="mt-8 h-[5px] w-full overflow-hidden bg-black/[0.08] md:mt-10 md:h-[7px]">
              <div
                className="h-full bg-accent"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
