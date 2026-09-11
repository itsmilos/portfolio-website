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

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setShowPreloader(false), 200);
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
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="w-[min(90%,320px)]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex items-baseline justify-between"
            >
              <span className="text-xl font-semibold tracking-[-0.04em] text-black">
                &lt;milos.dev/&gt;
              </span>
              <span className="font-mono text-sm text-black/50 tabular-nums">
                {progress}%
              </span>
            </motion.div>

            <div className="h-[2px] w-full overflow-hidden bg-black/10">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="h-full bg-[#EE7B30]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-black/40"
            >
              <span>Portfolio</span>
              <span>2026</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
