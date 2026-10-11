"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Heart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DonateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DonateModal({
  open,
  onClose,
}: DonateModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  /* ========================================================= */
  /* Prevent background scrolling while modal is open */
  /* ========================================================= */

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /* ========================================================= */
  /* Close with Escape key */
  /* ========================================================= */

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-md sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          {/* =================================================== */}
          {/* Modal */}
          {/* =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
          >
            {/* ================================================= */}
            {/* Top Brand Accent */}
            {/* ================================================= */}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="absolute left-0 right-0 top-0 h-1 origin-left bg-[#038C0E]"
            />

            {/* ================================================= */}
            {/* Close Button */}
            {/* ================================================= */}

            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{
                rotate: 90,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.92,
              }}
              aria-label="Close donation window"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              <X size={19} />
            </motion.button>

            {/* ================================================= */}
            {/* Content */}
            {/* ================================================= */}

            <div className="px-6 pb-7 pt-9 sm:px-8 sm:pb-8 sm:pt-10">

              {/* ================================================= */}
              {/* Heading */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                }}
                className="text-center"
              >
                {/* Heart Icon */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.18,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#038C0E]/10 text-[#038C0E]"
                >
                  <Heart
                    size={27}
                    strokeWidth={1.8}
                  />
                </motion.div>

                <h2 className="mt-5 text-2xl font-black tracking-[-0.035em] text-slate-900 sm:text-3xl">
                  Support UPAVI
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Every contribution helps us organize cultural
                  events, academic initiatives and student welfare
                  activities.
                </p>
              </motion.div>

              {/* ================================================= */}
              {/* QR Code */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                className="mt-7 flex justify-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="relative rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_12px_35px_rgba(15,23,42,0.10)]"
                >
                  <Image
                    src="/image/SADIQQR.jpeg"
                    alt="UPAVI donation QR code"
                    width={270}
                    height={270}
                    priority
                    className="h-[230px] w-[230px] rounded-xl object-contain sm:h-[250px] sm:w-[250px]"
                  />
                </motion.div>
              </motion.div>

              {/* ================================================= */}
              {/* Scan Text */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.5,
                }}
                className="mt-4 text-center"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Scan to Donate
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Use any supported UPI app
                </p>
              </motion.div>

              {/* ================================================= */}
              {/* Optional Details */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="mt-6 space-y-3"
              >
                <input
                  type="text"
                  placeholder="Name (Optional)"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#038C0E]/50 focus:bg-white focus:ring-4 focus:ring-[#038C0E]/10"
                />

                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#038C0E]/50 focus:bg-white focus:ring-4 focus:ring-[#038C0E]/10"
                />
              </motion.div>

              {/* ================================================= */}
              {/* Donation Complete */}
              {/* ================================================= */}

              <motion.button
                type="button"
                onClick={onClose}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#038C0E] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#038C0E]/15 transition-all duration-300 hover:bg-[#02730B] hover:shadow-xl"
              >
                <Check
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  I've Donated
                </span>

                <span aria-hidden="true">
                  ❤️
                </span>
              </motion.button>

              {/* ================================================= */}
              {/* Small Note */}
              {/* ================================================= */}

              <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
                Thank you for supporting the UPAVI community.
              </p>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}