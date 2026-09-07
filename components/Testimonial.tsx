"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section
      id="feedback"
      className="relative overflow-hidden bg-white px-6 py-32 text-[#09090B] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>06</span>
            <span className="h-px w-8 bg-accent" />
            <span>Client Feedback</span>
          </div>
        </motion.div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[1.65fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <motion.img
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/image.png"
              alt="Client project"
              className="h-full min-h-[520px] w-full object-cover object-top md:min-h-[650px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-[#09090B] p-8 text-white md:min-h-[650px] md:p-10 lg:p-12"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                Client Review
              </span>

              <div className="mt-8 flex gap-1.5">
                {[0, 1, 2, 3, 4].map((star) => (
                  <motion.span
                    key={star}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.35 + star * 0.08,
                    }}
                    className="text-lg text-accent"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="mt-10 text-[clamp(2rem,3vw,3rem)] font-medium italic leading-[1.1] tracking-[-0.04em]"
              >
                “Nice guy. Would definitely work with him again.”
              </motion.blockquote>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="relative z-10 flex items-center gap-4 border-t border-white/10 pt-6"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/client-avatar.jpg"
                  alt="Kevin Tash"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>

              <div>
                <p className="text-sm font-medium">Kevin Tash</p>
                <p className="mt-1 text-xs text-white/35">KT Enterprises</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
