"use client";

import { motion } from "framer-motion";
import GitHubActivity from "./GithubActivity";
import LocationGlobe from "./LocationGlobe";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export default function About() {
  return (
    <>
      <section id="about" className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span>02</span>
                <span className="h-px w-8 bg-accent" />
                <span>A CLOSER LOOK</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.h2
                variants={fadeUp}
                className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[#09090B] sm:text-5xl lg:text-6xl"
              >
                Who I <span className="text-accent">am.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
              >
                I’m a UI/UX designer and full-stack developer focused on turning
                ideas into thoughtful, high-quality digital products. I started
                with UI/UX design in 2024, developing a strong foundation in
                creating interfaces that are clear, intuitive, and visually
                refined. Over time, I wanted to understand what happens beyond
                the interface, which led me into full-stack development. For the
                past year, I’ve been building complete web applications across
                both frontend and backend. Today, I combine design and
                development to create products that not only look good, but work
                well. I care about clean interfaces, maintainable code,
                performance, and the details that turn a functional website into
                a polished experience.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg"
              >
                From the first idea and visual direction to the final
                implementation, I enjoy working across the entire process
                designing, building, refining, and bringing digital products to
                life.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="mt-6"
          >
            <LocationGlobe />
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease,
        }}
      >
        <GitHubActivity />
      </motion.div>
    </>
  );
}
