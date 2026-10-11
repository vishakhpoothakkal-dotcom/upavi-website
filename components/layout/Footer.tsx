"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Resources", href: "#resources" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "upavi_cuap",
    href: "https://www.instagram.com/upavi_cuap",
    icon: FiInstagram,
    hoverClass: "group-hover:text-pink-400",
  },
  {
    name: "upavi_says.goodbye",
    href: "https://www.instagram.com/upavi_says.goodbye",
    icon: FiInstagram,
    hoverClass: "group-hover:text-pink-400",
  },
  {
    name: "Upavi Cuap",
    href: "https://www.facebook.com/upavi.cuap",
    icon: FiFacebook,
    hoverClass: "group-hover:text-blue-400",
  },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
      };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* ========================================================= */}
      {/* Ambient Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#038C0E]/[0.06] blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#DABE08]/[0.045] blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AD0E0F]/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* ========================================================= */}
        {/* Main Footer */}
        {/* ========================================================= */}

        <div className="py-16 sm:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

            {/* ===================================================== */}
            {/* Brand */}
            {/* ===================================================== */}

            <motion.div
              {...reveal}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
            >
              <a
                href="#home"
                aria-label="Go to UPAVI home"
                className="group inline-block"
              >
                <h2 className="text-4xl font-black tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#DABE08] sm:text-5xl">
                  ഉപവി
                </h2>
              </a>
            </motion.div>

            {/* ===================================================== */}
            {/* Quick Links */}
            {/* ===================================================== */}

            <motion.nav
              aria-label="Footer navigation"
              {...reveal}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
              }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Quick Links
              </h3>

              <ul className="mt-6 space-y-3.5">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: -10 }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, x: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.18 + index * 0.05,
                    }}
                  >
                    <a
                      href={link.href}
                      className="group relative inline-flex items-center text-sm text-white/45 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                    >
                      <span>{link.name}</span>

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#038C0E] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* ===================================================== */}
            {/* Contact */}
            {/* ===================================================== */}

            <motion.div
              {...reveal}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.19,
              }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Contact
              </h3>

              <div className="mt-6 space-y-6">

                {/* Email */}
                <a
                  href="mailto:cuapupavi@gmail.com"
                  className="group flex items-start gap-3 text-sm text-white/45 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#038C0E]/40 group-hover:bg-[#038C0E]/10">
                    <Mail
                      size={15}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>

                  <span className="pt-1">
                    cuapupavi@gmail.com
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-sm text-white/45">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <MapPin size={15} />
                  </span>

                  <p className="pt-1 leading-6">
                    Central University of Andhra Pradesh
                    <br />
                    Anantapur, Andhra Pradesh
                  </p>
                </div>

              </div>
            </motion.div>

            {/* ===================================================== */}
            {/* Follow Us */}
            {/* ===================================================== */}

            <motion.div
              {...reveal}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.26,
              }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Follow Us
              </h3>

              <div className="mt-6 space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${social.name}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: 10 }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 1, x: 0 }
                      }
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.3 + index * 0.08,
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { x: 4 }
                      }
                      className="group flex w-fit items-center gap-3 text-sm text-white/45 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07]">
                        <Icon
                          size={17}
                          className={`transition-all duration-300 ${social.hoverClass}`}
                        />
                      </span>

                      <span>{social.name}</span>

                      <ArrowUpRight
                        size={14}
                        className="ml-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* Brand Divider */}
        {/* ========================================================= */}

        <div className="relative h-px w-full overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#038C0E] to-transparent"
          />
        </div>

        {/* ========================================================= */}
        {/* Bottom Bar */}
        {/* ========================================================= */}

        <motion.div
          {...reveal}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="text-xs leading-6 text-white/35 sm:text-sm">
            © 2026 UPAVI – Malayali Association of the Central
            University of Andhra Pradesh. All Rights Reserved.
          </div>

          {/* Back to Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -3,
                  }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.95,
                  }
            }
            aria-label="Back to top"
            className="group inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
          >
            <span>Back to Top</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#038C0E]/50 group-hover:bg-[#038C0E]/10">
              <ArrowUp
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}