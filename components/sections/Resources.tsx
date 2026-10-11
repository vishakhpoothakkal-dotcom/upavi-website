"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  BookOpen,
  ClipboardList,
  ExternalLink,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const resources = [
  {
    title: "Question Papers & Study Materials",
    description:
      "Access previous year question papers, study notes, practical records, presentations and learning resources organized by UPAVI to support your academic journey.",
    icon: BookOpen,
    category: "ACADEMIC • GOOGLE DRIVE",
    button: "Open Academic Resources",
    link:
      "https://drive.google.com/drive/folders/1N1QrwK_3JuyQlULaCaG-a7F4kyYBsBYL?usp=sharing",
  },
  {
    title: "UPAVI Handbook",
    description:
      "A complete guide for CUAP students including admissions, campus information, hostels, FAQs and important contacts.",
    icon: BookMarked,
    category: "GUIDE • GOOGLE DRIVE",
    button: "Open Handbook",
    link:
      "https://drive.google.com/drive/folders/1_hEc-aWQZ_ys_HtNExVMGqGT8oz8J-0I?usp=sharing",
  },
  {
    title: "UPAVI Reports",
    description:
      "Browse annual reports, event reports, activity documentation and official publications prepared by UPAVI.",
    icon: ClipboardList,
    category: "DOCUMENTS • ARCHIVE",
    button: "View Reports",
    link:
      "https://drive.google.com/drive/folders/1vGZgfa-6nNLOZCJVi9GNAbcyilvaHZAd?usp=sharing",
  },
];

export default function Resources() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="resources"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* ========================================================= */}
      {/* Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#038C0E]/[0.035] blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#DABE08]/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ========================================================= */}
        {/* Heading */}
        {/* ========================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 20 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center"
        >
          {/* Eyebrow */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#038C0E] sm:text-xs">
            RESOURCES
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-900 sm:text-5xl md:text-6xl">
            Academic Resources
          </h2>

          {/* Divider */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 56,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-6 h-[3px] rounded-full bg-[#038C0E]"
          />

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Everything you need for your academic journey at CUAP,
            organized in one place through the UPAVI Academic Google
            Drive.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* Resource Cards */}
        {/* ========================================================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 35,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -7,
                      }
                }
                className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:border-[#038C0E]/20 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:p-8"
              >
                {/* ================================================= */}
                {/* Animated Top Accent */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.12,
                  }}
                  className="absolute left-0 right-0 top-0 h-[3px] origin-left bg-[#038C0E]"
                />

                {/* ================================================= */}
                {/* Icon + External Indicator */}
                {/* ================================================= */}

                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            rotate: -2,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#038C0E]/[0.07] text-[#038C0E] transition-colors duration-300 group-hover:bg-[#038C0E]/10 sm:h-16 sm:w-16"
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + index * 0.12,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:border-[#038C0E]/20 group-hover:bg-[#038C0E]/5 group-hover:text-[#038C0E]"
                  >
                    <ExternalLink size={15} />
                  </motion.div>
                </div>

                {/* ================================================= */}
                {/* Category */}
                {/* ================================================= */}

                <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.22em] text-[#038C0E] sm:text-[10px]">
                  {item.category}
                </p>

                {/* ================================================= */}
                {/* Title */}
                {/* ================================================= */}

                <h3 className="mt-3 max-w-sm text-xl font-bold leading-tight tracking-[-0.025em] text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>

                {/* ================================================= */}
                {/* Description */}
                {/* ================================================= */}

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* ================================================= */}
                {/* Bottom Divider */}
                {/* ================================================= */}

                <div className="mb-5 mt-7 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-[#038C0E]/10" />

                {/* ================================================= */}
                {/* Button */}
                {/* ================================================= */}

                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.02,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="group/button inline-flex w-fit items-center gap-2 rounded-full bg-[#038C0E] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#02730B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#038C0E]/30 focus:ring-offset-2 sm:px-6 sm:text-sm"
                >
                  <span>{item.button}</span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </motion.a>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}