"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Navigation,
} from "lucide-react";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Central+University+of+Andhra+Pradesh%2C+Jnana+Seema%2C+Ananthapuramu%2C+Andhra+Pradesh+515701";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Central+University+of+Andhra+Pradesh,+Anantapur&output=embed";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#038C0E]/[0.035] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Heading */}
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
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#038C0E] sm:text-xs">
            LOCATION
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-900 sm:text-5xl md:text-[3.5rem]">
            Visit Our Campus
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Find UPAVI at the Central University of Andhra Pradesh,
            Ananthapuramu.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 25, scale: 0.985 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="group relative mt-12 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:mt-14"
        >
          <div className="relative h-[360px] overflow-hidden sm:h-[410px]">
            <iframe
              src={MAP_EMBED_URL}
              title="Central University of Andhra Pradesh location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Map Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent opacity-60"
            />

            {/* Open in Maps */}
            <motion.a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -2, scale: 1.02 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-white sm:left-5 sm:top-5"
            >
              <span>Open in Maps</span>
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>

        {/* Get Directions */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 15 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mt-7 flex justify-center"
        >
          <motion.a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -3 }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : { scale: 0.98 }
            }
            className="group inline-flex items-center gap-3 rounded-full bg-[#038C0E] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#038C0E]/15 transition-all duration-300 hover:bg-[#02730B] hover:shadow-xl"
          >
            <Navigation size={17} />
            <span>Get Directions</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}