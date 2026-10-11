"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DonateModal from "@/components/DonateModal";
import { Heart, ArrowUpRight } from "lucide-react";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Gallery", id: "gallery" },
  { name: "Resources", id: "resources" },
  { name: "Contact", id: "contact" },
];

const GOOGLE_FORM_URL =
  "https://forms.gle/7c4nFZpz9qh4BAYy7";

interface NavbarProps {
  onJoinClick?: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [donateOpen, setDonateOpen] = useState(false);

  /* =========================================================
     SCROLL + ACTIVE NAVIGATION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      /*
       * If the user reaches the bottom of the page,
       * Contact becomes the active navigation item.
       */

      const documentHeight =
        document.documentElement.scrollHeight;

      const windowHeight = window.innerHeight;

      const isAtBottom =
        scrollY + windowHeight >=
        documentHeight - 80;

      if (isAtBottom) {
        setActive("contact");
        return;
      }

      /*
       * Normal section detection
       */

      menuItems.forEach((item) => {
        if (item.id === "contact") return;

        const section =
          document.getElementById(item.id);

        if (!section) return;

        const top =
          section.offsetTop - 140;

        const bottom =
          top + section.offsetHeight;

        if (
          scrollY >= top &&
          scrollY < bottom
        ) {
          setActive(item.id);
        }
      });
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     NAVIGATION SCROLL
  ========================================================= */

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    /*
     * CONTACT
     *
     * Contact is intentionally treated differently.
     * Clicking Contact takes the visitor all the way
     * to the bottom of the website.
     */

    if (id === "contact") {
      window.scrollTo({
        top:
          document.documentElement
            .scrollHeight -
          window.innerHeight,
        behavior: "smooth",
      });

      return;
    }

    /*
     * NORMAL SECTIONS
     */

    const section =
      document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "h-20 border-b border-slate-200/70 bg-white/92 shadow-xl backdrop-blur-2xl"
            : "h-24 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1450px] items-center justify-between px-6 sm:px-8 xl:px-12">

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            onClick={(e) =>
              scrollToSection(e, "home")
            }
            className="group flex items-center gap-3.5"
          >
            <Image
              src="/image/upavi black.png"
              alt="UPAVI Logo"
              width={scrolled ? 64 : 78}
              height={scrolled ? 64 : 78}
              priority
              className="object-contain transition-all duration-500 group-hover:scale-105"
            />

            <div>
              <h1
                className={`text-[34px] font-black leading-none tracking-tight transition-colors duration-300 sm:text-[38px] ${
                  scrolled
                    ? "text-slate-900"
                    : "text-white"
                }`}
              >
                ഉപവി
              </h1>

              <p
                className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.38em] transition-colors duration-300 sm:text-[10px] ${
                  scrolled
                    ? "text-[#038C0E]"
                    : "text-white/85"
                }`}
              >
                CUAP Malayali Association
              </p>
            </div>
          </a>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <ul className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative"
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) =>
                    scrollToSection(
                      e,
                      item.id
                    )
                  }
                  className={`relative z-20 rounded-full px-5 py-3 text-[14px] font-semibold transition-all duration-300 ${
                    active === item.id
                      ? scrolled
                        ? "text-[#038C0E]"
                        : "text-white"
                      : scrolled
                      ? "text-slate-700 hover:text-[#038C0E]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {/* Active Background */}

                  {active === item.id && (
                    <motion.span
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className={`absolute inset-0 -z-10 rounded-full ${
                        scrolled
                          ? "bg-[#038C0E]/10"
                          : "bg-white/15 backdrop-blur-md"
                      }`}
                    />
                  )}

                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* =================================================
                DONATE
            ================================================= */}

            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                setDonateOpen(true)
              }
              className={`group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "border-[#038C0E]/30 bg-white text-[#038C0E] shadow-sm hover:border-[#038C0E] hover:bg-[#038C0E] hover:text-white hover:shadow-lg"
                  : "border-white/40 bg-white/10 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-[#038C0E]"
              }`}
            >
              <Heart
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>Donate</span>
            </motion.button>

            {/* =================================================
                JOIN US
            ================================================= */}

            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-2 rounded-full bg-[#038C0E] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#038C0E]/20 transition-all duration-300 hover:bg-[#02730B] hover:shadow-xl"
            >
              <span>Join Us</span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* =====================================================
          DONATE MODAL
      ===================================================== */}

      <DonateModal
        open={donateOpen}
        onClose={() =>
          setDonateOpen(false)
        }
      />
    </>
  );
}