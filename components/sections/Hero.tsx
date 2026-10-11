"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

const GOOGLE_FORM_URL = "https://forms.gle/7c4nFZpz9qh4BAYy7";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1.12]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.95, 0]
  );

  const bottomFadeOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0.7, 0.9, 1]
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#07110e]"
    >
      {/* BACKGROUND IMAGE */}

      <motion.div
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.07,
        }}
        animate={{
          opacity: 1,
          scale: shouldReduceMotion ? 1 : 1.05,
        }}
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: backgroundY,
                scale: backgroundScale,
              }
        }
        transition={{
          opacity: {
            duration: 1.2,
            ease: "easeOut",
          },
          scale: {
            duration: 2.2,
            ease: "easeOut",
          },
        }}
        className="absolute inset-[-5%]"
      >
        <Image
          src="/image/cuap-campus.png"
          alt="Central University of Andhra Pradesh campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* IMAGE OVERLAYS */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85" />

      {/* ANIMATED GREEN ATMOSPHERE */}

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 35, 0],
                y: [0, -20, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#038C0E]/10 blur-[150px]"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -25, 0],
                y: [0, 20, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="pointer-events-none absolute right-[-250px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#038C0E]/[0.045] blur-[160px]"
      />

      {/* MAIN CONTENT */}

      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
              }
        }
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 sm:px-8 lg:px-10"
      >
        <div className="max-w-4xl">
          {/* EYEBROW */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-6 flex items-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              animate={{
                width: 40,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="h-px shrink-0 bg-[#DABE08]"
            />

            <motion.span
              initial={{
                opacity: 0,
                letterSpacing: "0.15em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.34em",
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="text-[10px] font-semibold uppercase text-[#DABE08] sm:text-xs"
            >
              A Student-Led Community at CUAP
            </motion.span>
          </motion.div>

          {/* BRAND NAME */}

          <motion.h1
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.38,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-6xl font-black leading-none tracking-[-0.07em] text-white drop-shadow-2xl sm:text-7xl md:text-[7rem]"
          >
            UPAVI
          </motion.h1>

          {/* TAGLINE */}

          <motion.h2
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.58,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-3 max-w-3xl text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.025em] text-[#DABE08] sm:text-3xl md:text-4xl"
          >
            Connecting Malayali Students.
            <br />

            <motion.span
              initial={{
                opacity: shouldReduceMotion ? 1 : 0.5,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="text-white"
            >
              Building Tomorrow.
            </motion.span>
          </motion.h2>

          {/* ORGANIZATION NAME */}

          <motion.p
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.78,
              duration: 0.7,
            }}
            className="mt-5 max-w-3xl text-[11px] font-semibold uppercase tracking-[0.15em] text-white/65 sm:text-xs md:text-sm"
          >
            Malayali Association of the Central University of Andhra Pradesh
          </motion.p>

          {/* DESCRIPTION */}

          <motion.p
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.92,
              duration: 0.7,
            }}
            className="mt-6 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8 md:text-lg"
          >
            A vibrant student community bringing together culture, leadership,
            academic excellence and meaningful connections.
          </motion.p>

          {/* JOIN BUTTON */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.08,
              duration: 0.7,
            }}
            className="mt-9"
          >
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.025,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#038C0E] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(3,140,14,0.22)] transition-colors duration-300 hover:bg-[#02730B] hover:shadow-[0_14px_45px_rgba(3,140,14,0.32)] focus:outline-none focus:ring-2 focus:ring-[#DABE08]/70 focus:ring-offset-2 focus:ring-offset-[#07110e] sm:text-base"
            >
              <span>Join UPAVI</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}

      <motion.div
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.7,
          duration: 0.7,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 5, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="group flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
            Scroll
          </span>

          <span className="relative flex h-9 w-px overflow-hidden bg-white/20">
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: ["-100%", "250%"],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="absolute left-0 top-0 h-1/2 w-full bg-[#DABE08]"
            />
          </span>

          <ChevronDown
            size={13}
            className="text-white/30 transition-colors duration-300 group-hover:text-[#DABE08]"
          />
        </motion.a>
      </motion.div>

      {/* BOTTOM FADE */}

      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                opacity: bottomFadeOpacity,
              }
        }
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07110e] to-transparent"
      />

      {/* TOP VIGNETTE */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />
    </section>
  );
}