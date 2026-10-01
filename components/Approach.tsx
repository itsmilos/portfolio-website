"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the idea, the business behind it and the people who will use it. I define the requirements, content structure and goals before development begins.",
    image: "/understand1.webp",
    color: "#F4E9E0",
    accent: "#C85E22",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I create custom UI/UX around the product instead of starting from a template. Layout, typography, navigation, interactions and responsive behavior are designed to fit the brand and the people using it.",
    image: "/design2.webp",
    color: "#EDE8E1",
    accent: "#A9683F",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "I turn the design into a functional product building the frontend, backend, database and integrations needed behind it.",
    image: "/develop.webp",
    color: "#E6E8E5",
    accent: "#53645A",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Before launch, I look beyond whether the application works. I optimize performance, responsiveness and the technical foundations that affect how the product is experienced and how easily it can be discovered.",
    image: "/optimise.webp",
    color: "#E8E5EA",
    accent: "#66546F",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Once everything is ready, I take the product from development to production. I handle the deployment, environment configuration and final checks so it's ready for real users.",
    image: "/deploy.webp",
    color: "#E9E5DE",
    accent: "#8A6B42",
  },
];

export default function Approach() {
  const [active, setActive] = useState(0);
  const [offsetStep, setOffsetStep] = useState(36);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setOffsetStep(mq.matches ? 36 : 10);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxOffset = (steps.length - 1) * offsetStep;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  return (
    <section className="relative bg-[#09090B] px-3 py-24 text-white md:px-5 md:py-32 lg:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-clip">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        <div className="sticky top-0 h-screen">
          <motion.div
            animate={{ backgroundColor: steps[active].accent }}
            transition={{ duration: 0.8 }}
            className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full opacity-30 blur-[130px]"
          />
          <motion.div
            animate={{ backgroundColor: steps[active].accent }}
            transition={{ duration: 0.8 }}
            className="absolute -right-40 bottom-1/4 h-[480px] w-[480px] rounded-full opacity-25 blur-[150px]"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1880px]">
        <div className="mb-16 max-w-6xl px-2 md:mb-32 md:px-6">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>03</span>
            <span className="h-px w-8 bg-accent" />
            <span>Approach</span>
          </div>

          <h2 className="text-[clamp(3rem,6.5vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Good software starts with a good idea. Great software makes the idea
            feel obvious.
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
            A good product shouldn't make people think about how to use it.
          </p>
        </div>

        <div ref={wrapperRef} style={{ height: `${steps.length * 100}vh` }}>
          <div className="sticky top-[10svh] md:top-[3vh]">
            <div className="relative h-[80svh] w-full md:h-[min(1000px,94vh)]">
              {steps.map((step, index) => {
                const slot = index - active;
                const gone = slot < 0;
                const offset = Math.max(0, slot) * offsetStep;

                return (
                  <motion.div
                    key={step.number}
                    initial={false}
                    animate={{
                      x: gone ? -100 : offset,
                      y: gone ? 0 : offset,
                      opacity: gone ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 140, damping: 22 }}
                    style={{
                      zIndex: steps.length - index,
                      backgroundColor: step.color,
                      width: `calc(100% - ${maxOffset}px)`,
                      height: `calc(100% - ${maxOffset}px)`,
                      pointerEvents: gone ? "none" : "auto",
                    }}
                    className="absolute left-0 top-0 flex flex-col overflow-hidden rounded-[28px] border border-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:block md:rounded-[48px] md:p-14 lg:p-16"
                  >
                    <div
                      className="relative h-52 w-full shrink-0 overflow-hidden rounded-2xl sm:h-64 md:h-[56%] md:w-[54%] md:rounded-3xl"
                      style={{
                        boxShadow: `0 0 36px ${step.accent}77`,
                        border: `1px solid ${step.accent}99`,
                      }}
                    >
                      <img
                        src={step.image}
                        alt={`${step.title} illustration`}
                        width={1400}
                        height={1000}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center"
                      />
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          mixBlendMode: "soft-light",
                          background: `linear-gradient(to top right, ${step.accent}cc, transparent 55%, ${step.accent}77)`,
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          boxShadow: `inset 0 0 80px ${step.accent}99`,
                        }}
                      />
                    </div>

                    <div className="mt-5 text-[#09090B] md:hidden">
                      <span
                        className="font-mono text-xs tracking-[0.2em]"
                        style={{ color: `${step.accent}99` }}
                      >
                        {step.number}
                      </span>
                      <p className="mt-3 text-base leading-relaxed text-black/60">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute right-14 top-14 hidden max-w-[34%] text-[#09090B] md:block lg:right-16 lg:top-16 xl:max-w-lg">
                      <span
                        className="font-mono text-sm tracking-[0.2em]"
                        style={{ color: `${step.accent}99` }}
                      >
                        {step.number}
                      </span>
                      <p className="mt-5 text-base leading-relaxed text-black/55 lg:text-lg xl:text-xl">
                        {step.description}
                      </p>
                      <div
                        className="mt-8 h-px w-20"
                        style={{ backgroundColor: `${step.accent}55` }}
                      />
                    </div>

                    <h3
                      className="mt-auto text-[clamp(3.5rem,15vw,5.5rem)] font-medium leading-[0.85] tracking-[-0.065em] md:absolute md:bottom-14 md:left-14 md:mt-0 md:text-[clamp(4.5rem,10vw,11rem)] lg:bottom-16 lg:left-16"
                      style={{ color: step.accent }}
                    >
                      {step.title}
                    </h3>

                    <span className="absolute bottom-14 right-14 hidden font-mono text-xs tracking-[0.2em] text-black/30 md:block lg:bottom-16 lg:right-16">
                      {step.number} / {String(steps.length).padStart(2, "0")}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
