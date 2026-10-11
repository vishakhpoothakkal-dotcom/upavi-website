"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Creating a welcoming environment where every Malayali student feels connected, supported and valued from day one.",
  },
  {
    icon: CalendarDays,
    title: "Cultural Events",
    description:
      "Hosting Onam, Kerala Piravi, Vishu, Christmas, Ramzan, Easter, Valentine's Day, cultural festivals, workshops and community events that create lasting memories throughout the academic year.",
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    description:
      "Helping students with admissions, academics, accommodation and making campus life easier for everyone.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 md:py-24"
    >
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#038C0E]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#038C0E]/[0.04] blur-3xl" />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            ABOUT HEADING
        ===================================================== */}

        <Reveal>
          <div className="mx-auto max-w-4xl text-center">

            {/* Eyebrow */}

            <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#038C0E] sm:text-sm">
              ABOUT US
            </p>

            {/* Main Heading */}

            <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl">
              Welcome to UPAVI
            </h2>

            {/* Accent Line */}

            <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-[#038C0E]" />

            {/* Description */}

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:text-xl">
              UPAVI brings together Malayali students at the
              Central University of Andhra Pradesh by fostering
              cultural pride, leadership, academic excellence
              and lifelong friendships.
            </p>

            {/* Tagline */}

            <p className="mt-3 text-base italic text-slate-400 sm:text-lg">
              Building friendships beyond classrooms.
            </p>

          </div>
        </Reveal>

        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3 lg:gap-7">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-[#038C0E]/30 hover:shadow-[0_25px_55px_rgba(3,140,14,0.12)] sm:p-7"
              >

                {/* =================================================
                    SUBTLE CARD GLOW
                ================================================= */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#038C0E]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#038C0E]/[0.09]" />

                {/* =================================================
                    ICON
                ================================================= */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#038C0E]/[0.07] transition-all duration-500 group-hover:bg-[#038C0E]">
                  <Icon
                    size={27}
                    strokeWidth={2}
                    className="text-[#038C0E] transition-all duration-500 group-hover:text-white"
                  />
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-[26px]">
                  {feature.title}
                </h3>

                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div className="mt-4 h-[2px] w-12 rounded-full bg-[#038C0E] transition-all duration-500 group-hover:w-20" />

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="mt-5 flex-1 text-[15px] leading-7 text-slate-600">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}