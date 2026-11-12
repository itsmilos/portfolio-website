"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the idea, the business behind it and the people who will use it. I define the requirements, content structure and goals before development begins.",
    image: "/understand1.webp",
    color: "#F4EAE3",
    accent: "#C85E22",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I create custom UI/UX around the product instead of starting from a template. Layout, typography, navigation, interactions and responsive behavior are designed to fit the brand and the people using it.",
    image: "/design2.webp",
    color: "#F4EBE5",
    accent: "#A9683F",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "I turn the design into a functional product building the frontend, backend, database and integrations needed behind it.",
    image: "/develop.webp",
    color: "#EFEFEF",
    accent: "#53645A",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Before launch, I look beyond whether the application works. I optimize performance, responsiveness and the technical foundations that affect how the product is experienced and how easily it can be discovered.",
    image: "/optimise.webp",
    color: "#F0ECEF",
    accent: "#66546F",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Once everything is ready, I take the product from development to production. I handle the deployment, environment configuration and final checks so it's ready for real users.",
    image: "/deploy.webp",
    color: "#F2ECE5",
    accent: "#8A6B42",
  },
];

function MobileCard({ step }: { step: (typeof steps)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: step.color }}
      className="relative flex min-h-[490px] w-full flex-col justify-between overflow-hidden rounded-[28px] p-6 text-[#09090B]"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `${step.accent}08` }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <span
          className="w-fit rounded-full border border-black/5 bg-white/70 px-2.5 py-1 font-mono text-xs font-bold tracking-[0.2em]"
          style={{ color: step.accent }}
        >
          {step.number} — 05
        </span>

        <h3
          className="text-3xl font-semibold tracking-tight"
          style={{ color: step.accent }}
        >
          {step.title}
        </h3>

        <p className="text-base leading-relaxed text-[#09090B]/75">
          {step.description}
        </p>
      </div>

      <div
        className="relative z-10 mt-8 h-[220px] w-full overflow-hidden rounded-2xl"
        style={{ border: `1px solid ${step.accent}33` }}
      >
        <img
          src={step.image}
          alt={step.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to top right, ${step.accent}33, transparent 70%)`,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Approach() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className="relative bg-white text-[#09090B] lg:h-[200vh]"
    >
      <div className="relative overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <img
            src="/clouds1.webp"
            alt=""
            className="absolute inset-0 h-full w-full scale-[1.3] object-cover md:scale-[1.15]"
            style={{
              opacity: 0.65,
              mixBlendMode: "normal",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, transparent 8%, rgba(0,0,0,0.15) 18%, black 40%, black 60%, rgba(0,0,0,0.15) 82%, transparent 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, transparent 8%, rgba(0,0,0,0.15) 18%, black 40%, black 60%, rgba(0,0,0,0.15) 82%, transparent 92%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 bg-white/10" />
        </div>{/* Section heading */}
        <div className="relative z-10 mb-10 max-w-2xl px-6 pt-24 md:px-16 lg:mb-8 lg:pt-0">
          <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#C85E22]">
            <span>03</span>
            <span className="h-px w-8 bg-[#C85E22]" />
            <span>Approach & Workflow</span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[1] tracking-[-0.04em]">
            How I bring ideas to life.
          </h1>
        </div>

        
        <motion.div
          style={{ x }}
          className="relative z-10 hidden items-center gap-8 pl-16 pr-12 lg:flex"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{ backgroundColor: step.color }}
              className="group relative flex h-[54vh] w-[480px] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] p-8 text-[#09090B] transition-all duration-500 hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                style={{ backgroundColor: step.accent }}
              />

              <div className="relative z-10 flex flex-col gap-3">
                <span
                  className="w-fit rounded-full border border-black/5 bg-white/70 px-2.5 py-1 font-mono text-xs font-bold tracking-[0.2em] transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20"
                  style={{ color: step.accent }}
                >
                  {step.number} — 05
                </span>

                <h3
                  className="text-3xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-white"
                  style={{ color: step.accent }}
                >
                  {step.title}
                </h3>

                <p className="leading-relaxed text-[#09090B]/75 transition-colors duration-500 group-hover:text-white/90">
                  {step.description}
                </p>
              </div>

              <div
                className="relative z-10 mt-4 h-[42%] w-full overflow-hidden rounded-2xl"
                style={{ border: `1px solid ${step.accent}33` }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top right, ${step.accent}33, transparent 70%)`,
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>

       
        <div className="relative z-10 flex flex-col gap-8 px-5 pb-20 lg:hidden">
          {steps.map((step) => (
            <MobileCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
