
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const questions = [
  {
    question: "Can I edit my website without touching code?",
    answer:
      "Absolutely. I can build a custom admin panel that lets you manage your website content without writing a single line of code. Update text, images, products, blog posts and more. I'll also guide you through everything so you feel comfortable managing it yourself.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Every website I build is fully responsive. The experience is carefully adapted for desktops, tablets and mobile devices, so your website looks and works great on every screen size.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Of course. Whether your website needs a complete redesign or just a few improvements, I can help rethink its structure, improve the user experience and give it a more polished look.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity and requirements of the project. Once the scope is clear, I'll provide a realistic timeline before development begins.",
  },
  {
    question: "Will I be able to expand my website in the future?",
    answer:
      "Yes. I build with future growth in mind. New pages, integrations and features can be introduced as your business evolves.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. I can help with improvements, updates, bug fixes and additional features after launch, so your website continues to meet your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease }}
              className="mb-10"
            >
              <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#C85E22]">
                <span>08</span>
                <span className="h-px w-8 bg-accent" />
                <span>FAQ</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.04, ease }}
              className="max-w-[650px] text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.065em] text-[#171717]"
            >
              Got
              <br />
              questions<span className="text-[#EE7B30]">?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-8 max-w-[380px] text-base leading-relaxed text-black/50 md:text-lg"
            >
              A few answers to help you understand what working together looks
              like, from the first idea to the finished product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.14, ease }}
              className="mt-12"
            >
              
            </motion.div>
          </div>

          
          <div className="w-full">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.025,
                    ease,
                  }}
                  className="border-b border-black/[0.10] first:border-t"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                  >
                    <div className="flex items-start gap-5 md:gap-7">
                      <span
                        className={`mt-1 font-mono text-xs transition-colors duration-200 ${
                          isOpen
                            ? "text-[#EE7B30]"
                            : "text-black/30"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-lg font-medium tracking-[-0.035em] transition-colors duration-200 md:text-[1.35rem] ${
                          isOpen
                            ? "text-[#171717]"
                            : "text-black/65 group-hover:text-black"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ease-out ${
                        isOpen
                          ? "rotate-45 border-[#EE7B30] text-[#EE7B30]"
                          : "border-black/15 text-black/45 group-hover:border-black/40 group-hover:text-black"
                      }`}
                    >
                      <Plus size={17} strokeWidth={1.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.3,
                            ease,
                          },
                          opacity: {
                            duration: 0.18,
                            ease: "easeOut",
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-10 pr-12 md:pb-9 md:pl-[3.65rem]">
                          <p className="max-w-[540px] text-sm leading-[1.9] text-black/50 md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
