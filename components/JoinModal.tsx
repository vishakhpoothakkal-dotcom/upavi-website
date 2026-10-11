"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";

interface JoinModalProps {
  open: boolean;
  onClose: () => void;
}

export default function JoinModal({
  open,
  onClose,
}: JoinModalProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md p-6"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.28,
            }}
            className="relative w-full max-w-xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
          >

            {/* Top Accent */}

            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700"></div>

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="p-8">

              <p className="text-xs font-semibold uppercase tracking-[6px] text-emerald-700">
                JOIN UPAVI
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Membership Application
              </h2>

              <p className="mt-2 text-gray-500">
                Become a part of the official Malayali community at CUAP.
              </p>

              {/* Photo */}

              <div className="mt-8 flex justify-center">

                <label className="group relative cursor-pointer">

                  <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-emerald-400 bg-emerald-50 transition group-hover:border-emerald-600">

                    {preview ? (

                      <img
                        src={preview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />

                    ) : (

                      <Camera
                        size={34}
                        className="text-emerald-600"
                      />

                    )}

                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImage}
                  />

                </label>

              </div>

              <p className="mt-3 text-center text-sm text-gray-500">
                Student Photo (Optional)
              </p>

              <form className="mt-8 space-y-5">

                <input
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                />

                <div className="grid gap-4 md:grid-cols-2">

                  <input
                    placeholder="Department"
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                  />

                  <input
                    placeholder="Batch"
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                  />

                </div>

                <div className="grid gap-4 md:grid-cols-2">

                  <input
                    placeholder="WhatsApp Number"
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                  />

                </div>

                <input
                  placeholder="Hometown"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-600"
                />

                <button
                  type="submit"
                  className="mt-3 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 py-3.5 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Submit Application
                </button>

              </form>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}