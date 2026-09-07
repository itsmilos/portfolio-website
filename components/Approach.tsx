"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, Code2, Gauge, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    icon: Lightbulb,
    description:
      "I start by understanding the idea, the business behind it and the people who will use it. I define the requirements, content structure and goals before development begins.",
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    description:
      "I create custom UI/UX around the product instead of starting from a template. Layout, typography, navigation, interactions and responsive behavior are designed to fit the brand and the people using it.",
  },
  {
    number: "03",
    title: "Develop",
    icon: Code2,
    description:
      "I turn the design into a functional product — building the frontend, backend, database and integrations needed behind it.",
  },
  {
    number: "04",
    title: "Optimize",
    icon: Gauge,
    description:
      "Before launch, I look beyond whether the application works. I optimize performance, responsiveness and the technical foundations that affect how the product is experienced — and how easily it can be discovered.",
  },
  {
    number: "05",
    title: "Deploy",
    icon: Rocket,
    description:
      "Once everything is ready, I take the product from development to production. I handle the deployment, environment configuration and final checks so it's ready for real users.",
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-32 text-[#09090B] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-32 max-w-5xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>03</span>
            <span className="h-px w-8 bg-accent" />
            <span>Approach</span>
          </div>

          <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            Good software starts with a good idea. Great software makes the idea
            feel obvious.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/50 md:text-xl">
            A good product shouldn't make people think about how to use it.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-black/10 md:left-[11px]" />

          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-[7px] top-0 w-px origin-top bg-black md:left-[11px]"
          />

          <div className="space-y-28 md:space-y-40">
            {steps.map((step, index) => (
              <Step
                key={step.number}
                step={step}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
  progress,
}: {
  step: {
    number: string;
    title: string;
    icon: React.ElementType;
    description: string;
  };
  index: number;
  progress: any;
}) {
  const start = index / 5;

  const circleBackground = useTransform(
    progress,
    [start, start + 0.08],
    ["#ffffff", "#f97316"],
  );

  const circleBorder = useTransform(
    progress,
    [start, start + 0.08],
    ["rgba(9, 9, 11, 0.25)", "#f97316"],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
      }}
      className="relative grid grid-cols-[30px_1fr] gap-8 md:grid-cols-[40px_180px_1fr] md:gap-10"
    >
      <div className="relative z-10 flex justify-start pt-1">
        <motion.div
          style={{
            backgroundColor: circleBackground,
            borderColor: circleBorder,
          }}
          className="h-[15px] w-[15px] rounded-full border md:h-[23px] md:w-[23px]"
        />
      </div>

      <div className="hidden pt-1 font-mono text-xs tracking-[0.15em] text-black/30 md:block">
        {step.number}
      </div>

      <div className="max-w-2xl">
        <div className="mb-4 flex items-center gap-4 md:hidden">
          <span className="font-mono text-xs tracking-[0.15em] text-black/30">
            {step.number}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            {step.title}
          </h2>

          <step.icon
            size={28}
            strokeWidth={1.5}
            className="text-black/20 transition-all duration-300 group-hover:text-accent md:size-8"
          />
        </div>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/50 md:text-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
