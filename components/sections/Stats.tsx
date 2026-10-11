"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Total Members",
    subtitle: "Growing every year",
    duration: 1800,
  },
  {
    icon: CalendarDays,
    value: 35,
    suffix: "+",
    title: "Culture & Community Events",
    subtitle: "Celebrating every tradition",
    duration: 1500,
  },
  {
    icon: Trophy,
    value: 7,
    suffix: "+",
    title: "Years of Community",
    subtitle: "Since 2019",
    duration: 1200,
  },
];

function AnimatedNumber({
  value,
  suffix,
  duration,
}: {
  value: number;
  suffix: string;
  duration: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * value
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#038C0E]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#038C0E]/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#038C0E] sm:text-xs">
              UPAVI IN NUMBERS
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl">
              Growing Together
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-12 rounded-full bg-[#038C0E]" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Every milestone reflects the strength of our
              community, the friendships we've built and the
              journey we're continuing together.
            </p>

          </div>
        </Reveal>

        {/* =====================================================
            STAT CARDS
        ===================================================== */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative rounded-2xl border border-slate-200 bg-white px-7 py-8 text-center transition-all duration-300 hover:border-[#038C0E]/25 hover:shadow-[0_18px_45px_rgba(3,140,14,0.08)]"
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#038C0E]/[0.07] transition-all duration-300 group-hover:bg-[#038C0E]">
                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="text-[#038C0E] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* =================================================
                    ANIMATED STATISTIC
                ================================================= */}

                <p className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                  />
                </p>

                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div className="mx-auto mt-4 h-[2px] w-8 rounded-full bg-[#038C0E] transition-all duration-300 group-hover:w-12" />

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="mx-auto mt-4 max-w-[230px] text-base font-bold leading-6 text-slate-900">
                  {stat.title}
                </h3>

                {/* =================================================
                    SUBTITLE
                ================================================= */}

                <p className="mt-1.5 text-xs font-medium text-slate-400">
                  {stat.subtitle}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}