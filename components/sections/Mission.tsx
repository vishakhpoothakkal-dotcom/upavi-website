"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Landmark,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community",
    description:
      "Creating a welcoming community where every student feels connected, supported and valued.",
  },
  {
    icon: Landmark,
    title: "Culture",
    description:
      "Celebrating Kerala's heritage while embracing diversity, friendship and togetherness.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description:
      "Encouraging students to take initiative, lead with purpose and create positive change.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Supporting academic, personal and professional growth through shared opportunities.",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#038C0E]/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            duration: 0.7,
          }}
          className="text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.55em] text-[#038C0E] sm:text-xs">
            OUR PURPOSE
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl">
            Mission &amp; Vision
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-12 rounded-full bg-[#038C0E]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            What drives UPAVI today, and the community we aspire to build
            together for tomorrow.
          </p>
        </motion.div>

        {/* =====================================================
            MISSION & VISION
        ===================================================== */}

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">

          {/* ===================================================
              MISSION
          =================================================== */}

          <motion.article
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
              duration: 0.6,
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:p-10"
          >
            {/* Accent */}

            <div className="absolute left-0 top-0 h-1 w-full bg-[#038C0E]" />

            {/* Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#038C0E]/10 text-[#038C0E] transition-transform duration-300 group-hover:scale-105">
              <Target size={30} strokeWidth={2} />
            </div>

            {/* Content */}

            <h3 className="mt-7 text-3xl font-bold tracking-tight text-slate-900">
              Mission
            </h3>

            <p className="mt-5 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base">
              To bring Malayali students at CUAP together through culture,
              friendship, leadership and academic support, creating a
              connected community where every student can thrive.
            </p>
          </motion.article>

          {/* ===================================================
              VISION
          =================================================== */}

          <motion.article
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
              duration: 0.6,
              delay: 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:p-10"
          >
            {/* Accent */}

            <div className="absolute left-0 top-0 h-1 w-full bg-[#DABE08]" />

            {/* Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DABE08]/15 text-[#9A8500] transition-transform duration-300 group-hover:scale-105">
              <Eye size={30} strokeWidth={2} />
            </div>

            {/* Content */}

            <h3 className="mt-7 text-3xl font-bold tracking-tight text-slate-900">
              Vision
            </h3>

            <p className="mt-5 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base">
              To build a vibrant, inclusive and forward-looking student
              community that celebrates Kerala&apos;s heritage while
              empowering every member to learn, lead and grow together.
            </p>
          </motion.article>
        </div>

        {/* =====================================================
            CORE VALUES
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-20"
        >
          {/* Values Heading */}

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#038C0E] sm:text-xs">
              WHAT WE STAND FOR
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Our Core Values
            </h3>
          </div>

          {/* Values Grid */}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#038C0E]/20 hover:shadow-lg"
                >
                  {/* Icon */}

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#038C0E]/10 text-[#038C0E] transition-all duration-300 group-hover:bg-[#038C0E] group-hover:text-white">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  {/* Title */}

                  <h4 className="mt-5 text-lg font-bold text-slate-900">
                    {value.title}
                  </h4>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-slate-200" />

          <p className="text-sm font-medium leading-7 text-slate-500 sm:text-base">
            Together, we celebrate where we come from, support where we are,
            and build where we are going.
          </p>
        </motion.div>
      </div>
    </section>
  );
}