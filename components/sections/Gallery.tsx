"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

/* =========================================================
   TYPES
========================================================= */

interface GalleryImage {
  src: string;
  event: string;
}

interface GalleryCategory {
  id: string;
  label: string;
  images: GalleryImage[];
}

/* =========================================================
   GALLERY DATA
========================================================= */

const categories: GalleryCategory[] = [
  {
    id: "onam",
    label: "Onam",
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `/Gallery/onam/${i + 1}.jpeg`,
      event: "Onam Celebration",
    })),
  },

  {
    id: "vishu",
    label: "Vishu",
    images: Array.from({ length: 8 }, (_, i) => ({
      src: `/Gallery/vishu/${i + 1}.png`,
      event: "Vishu Celebration",
    })),
  },

  {
    id: "freshers",
    label: "Freshers",
    images: Array.from({ length: 21 }, (_, i) => ({
      src: `/Gallery/freshers/${i + 1}.jpeg`,
      event: "Freshers Celebration",
    })),
  },

  {
    id: "ramzan",
    label: "Ramzan",
    images: Array.from({ length: 26 }, (_, i) => ({
      src: `/Gallery/ramzan/${i + 1}.jpeg`,
      event: "Ramzan Iftar",
    })),
  },
];

/* =========================================================
   ALL IMAGES FOR BACKGROUND
========================================================= */

const backgroundImages = categories.flatMap(
  (category) => category.images
);

/* =========================================================
   MANY SCATTERED BACKGROUND POSITIONS
========================================================= */

const backgroundPositions = [
  /* =========================
     ROW 1
  ========================= */

  {
    left: "-8%",
    top: "-4%",
    width: 170,
    height: 125,
  },
  {
    left: "2%",
    top: "7%",
    width: 210,
    height: 145,
  },
  {
    left: "14%",
    top: "-5%",
    width: 155,
    height: 115,
  },
  {
    left: "25%",
    top: "5%",
    width: 190,
    height: 135,
  },
  {
    left: "37%",
    top: "-4%",
    width: 175,
    height: 125,
  },
  {
    left: "48%",
    top: "6%",
    width: 215,
    height: 150,
  },
  {
    left: "61%",
    top: "-6%",
    width: 160,
    height: 120,
  },
  {
    left: "72%",
    top: "5%",
    width: 205,
    height: 140,
  },
  {
    left: "84%",
    top: "-3%",
    width: 180,
    height: 130,
  },
  {
    left: "94%",
    top: "8%",
    width: 160,
    height: 120,
  },

  /* =========================
     ROW 2
  ========================= */

  {
    left: "-6%",
    top: "18%",
    width: 205,
    height: 145,
  },
  {
    left: "8%",
    top: "25%",
    width: 165,
    height: 220,
  },
  {
    left: "20%",
    top: "17%",
    width: 210,
    height: 145,
  },
  {
    left: "34%",
    top: "27%",
    width: 175,
    height: 125,
  },
  {
    left: "46%",
    top: "18%",
    width: 220,
    height: 150,
  },
  {
    left: "59%",
    top: "26%",
    width: 165,
    height: 220,
  },
  {
    left: "70%",
    top: "18%",
    width: 205,
    height: 145,
  },
  {
    left: "84%",
    top: "27%",
    width: 175,
    height: 125,
  },
  {
    left: "95%",
    top: "18%",
    width: 190,
    height: 140,
  },

  /* =========================
     ROW 3
  ========================= */

  {
    left: "-9%",
    top: "39%",
    width: 185,
    height: 135,
  },
  {
    left: "5%",
    top: "47%",
    width: 215,
    height: 150,
  },
  {
    left: "18%",
    top: "38%",
    width: 170,
    height: 230,
  },
  {
    left: "30%",
    top: "48%",
    width: 205,
    height: 145,
  },
  {
    left: "43%",
    top: "39%",
    width: 175,
    height: 125,
  },
  {
    left: "55%",
    top: "49%",
    width: 220,
    height: 150,
  },
  {
    left: "68%",
    top: "38%",
    width: 170,
    height: 225,
  },
  {
    left: "80%",
    top: "48%",
    width: 210,
    height: 145,
  },
  {
    left: "93%",
    top: "39%",
    width: 180,
    height: 130,
  },

  /* =========================
     ROW 4
  ========================= */

  {
    left: "-5%",
    top: "62%",
    width: 215,
    height: 150,
  },
  {
    left: "9%",
    top: "70%",
    width: 170,
    height: 225,
  },
  {
    left: "21%",
    top: "61%",
    width: 195,
    height: 140,
  },
  {
    left: "34%",
    top: "72%",
    width: 220,
    height: 150,
  },
  {
    left: "47%",
    top: "63%",
    width: 165,
    height: 220,
  },
  {
    left: "59%",
    top: "71%",
    width: 205,
    height: 145,
  },
  {
    left: "72%",
    top: "61%",
    width: 175,
    height: 125,
  },
  {
    left: "84%",
    top: "72%",
    width: 215,
    height: 150,
  },
  {
    left: "96%",
    top: "62%",
    width: 180,
    height: 135,
  },

  /* =========================
     ROW 5
  ========================= */

  {
    left: "2%",
    top: "87%",
    width: 190,
    height: 135,
  },
  {
    left: "15%",
    top: "80%",
    width: 165,
    height: 220,
  },
  {
    left: "28%",
    top: "88%",
    width: 210,
    height: 145,
  },
  {
    left: "41%",
    top: "81%",
    width: 180,
    height: 130,
  },
  {
    left: "54%",
    top: "89%",
    width: 215,
    height: 150,
  },
  {
    left: "67%",
    top: "81%",
    width: 170,
    height: 225,
  },
  {
    left: "80%",
    top: "88%",
    width: 205,
    height: 145,
  },
  {
    left: "94%",
    top: "80%",
    width: 175,
    height: 130,
  },
];

/* =========================================================
   SCATTERED BACKGROUND
   FLAT WATER-LIKE MOTION
========================================================= */

function ScatteredBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* BASE */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white
          via-slate-50
          to-white
        "
      />

      {/* CENTRAL SOFT GREEN ATMOSPHERE */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-30, 30, -30],
                y: [15, -15, 15],
                opacity: [0.08, 0.16, 0.08],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[800px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-100
          blur-[200px]
        "
      />

      {/* LEFT ATMOSPHERE */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-60, 60, -60],
                opacity: [0.03, 0.09, 0.03],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[5%]
          top-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-green-50
          blur-[150px]
        "
      />

      {/* RIGHT ATMOSPHERE */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [50, -50, 50],
                y: [-20, 20, -20],
                opacity: [0.025, 0.08, 0.025],
              }
        }
        transition={{
          duration: 31,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[2%]
          top-[55%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-50
          blur-[170px]
        "
      />

      {/* SCATTERED PHOTOS */}

      <div className="absolute -inset-10">
        {backgroundPositions.map((position, index) => {
          const image =
            backgroundImages[
              index % backgroundImages.length
            ];

          const duration =
            18 + (index % 9) * 2.4;

          const delay =
            -(index % 12) * 1.8;

          const driftX =
            7 + (index % 5) * 2;

          const driftY =
            4 + (index % 4) * 1.5;

          const opacity =
            0.025 + (index % 4) * 0.008;

          return (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{
                opacity: 0,
              }}
              animate={
                reduceMotion
                  ? {
                      opacity: 0.045,
                    }
                  : {
                      x: [
                        -driftX,
                        driftX,
                        -driftX,
                      ],
                      y: [
                        -driftY,
                        driftY,
                        -driftY,
                      ],
                      opacity: [
                        opacity,
                        opacity + 0.025,
                        opacity,
                      ],
                    }
              }
              transition={{
                x: {
                  duration,
                  delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                y: {
                  duration: duration * 1.13,
                  delay: delay - 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: duration * 1.4,
                  delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                overflow-hidden
                rounded-[22px]
                bg-white
                shadow-[0_12px_40px_rgba(15,23,42,0.025)]
                will-change-transform
              "
              style={{
                left: position.left,
                top: position.top,
                width: position.width,
                height: position.height,
              }}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="220px"
                draggable={false}
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* WATER-LIKE LIGHT WAVE 1 */}

      {!reduceMotion && (
        <>
          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
              opacity: [0, 0.12, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-20%]
              top-[22%]
              h-[180px]
              w-[140%]
              rounded-full
              bg-white/60
              blur-[90px]
            "
          />

          {/* WATER-LIKE LIGHT WAVE 2 */}

          <motion.div
            animate={{
              x: ["10%", "-10%", "10%"],
              opacity: [0, 0.09, 0],
            }}
            transition={{
              duration: 29,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-20%]
              top-[48%]
              h-[150px]
              w-[140%]
              rounded-full
              bg-emerald-50/60
              blur-[85px]
            "
          />

          {/* WATER-LIKE LIGHT WAVE 3 */}

          <motion.div
            animate={{
              x: ["-7%", "7%", "-7%"],
              opacity: [0, 0.08, 0],
            }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-20%]
              top-[76%]
              h-[170px]
              w-[140%]
              rounded-full
              bg-white/50
              blur-[95px]
            "
          />
        </>
      )}

      {/* WHITE VEIL */}

      <div
        className="
          absolute
          inset-0
          bg-white/60
        "
      />

      {/* TOP FADE */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-36
          bg-gradient-to-b
          from-white
          via-white/75
          to-transparent
        "
      />

      {/* BOTTOM FADE */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-36
          bg-gradient-to-t
          from-white
          via-white/75
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   MAIN PROGRAMME CARD
========================================================= */

function FolderCard({
  category,
  index,
  onOpen,
}: {
  category: GalleryCategory;
  index: number;
  onOpen: (
    category: GalleryCategory,
    imageIndex: number
  ) => void;
}) {
  const [
    currentImage,
    setCurrentImage,
  ] = useState(0);

  const reduceMotion = useReducedMotion();

  /* =======================================================
     3 SECOND SLIDESHOW
  ======================================================= */

  useEffect(() => {
    if (category.images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentImage((previous) => {
        return (
          (previous + 1) %
          category.images.length
        );
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [category.images.length]);

  /* =======================================================
     3D HOVER
  ======================================================= */

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(
    rotateX,
    {
      stiffness: 180,
      damping: 22,
      mass: 0.6,
    }
  );

  const smoothRotateY = useSpring(
    rotateY,
    {
      stiffness: 180,
      damping: 22,
      mass: 0.6,
    }
  );

  const handlePointerMove = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (
      reduceMotion ||
      event.pointerType === "touch"
    ) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    rotateY.set(x * 4);
    rotateX.set(-y * 4);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
              scale: 0.96,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full"
    >
      <motion.button
        type="button"
        onClick={() =>
          onOpen(
            category,
            currentImage
          )
        }
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -9,
                scale: 1.015,
              }
        }
        whileTap={
          reduceMotion
            ? undefined
            : {
                scale: 0.985,
              }
        }
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformPerspective: 1100,
        }}
        className="
          group
          relative
          block
          w-full
          cursor-pointer
          border-none
          bg-transparent
          p-0
          text-left
          outline-none
        "
      >
        {/* IMAGE */}

        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-[28px]
            bg-slate-100
            shadow-[0_20px_55px_rgba(15,23,42,0.10)]
            transition-shadow
            duration-500
            group-hover:shadow-[0_30px_75px_rgba(15,23,42,0.18)]
          "
        >
          {/* SLIDESHOW */}

          {category.images.map(
            (image, imageIndex) => (
              <motion.div
                key={image.src}
                initial={false}
                animate={{
                  opacity:
                    imageIndex === currentImage
                      ? 1
                      : 0,

                  scale:
                    imageIndex === currentImage
                      ? 1
                      : 1.06,
                }}
                transition={{
                  opacity: {
                    duration: 0.9,
                    ease: "easeInOut",
                  },

                  scale: {
                    duration: 1.8,
                    ease: "easeOut",
                  },
                }}
                className="
                  absolute
                  inset-0
                "
              >
                <Image
                  src={image.src}
                  alt={`${category.label} memory`}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="object-cover"
                  priority={imageIndex === 0}
                />
              </motion.div>
            )
          )}

          {/* DARK GRADIENT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-52
              bg-gradient-to-t
              from-black/80
              via-black/30
              to-transparent
            "
          />

          {/* HOVER LIGHT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-tr
              from-transparent
              via-transparent
              to-white/25
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* PROGRAMME NAME */}

          <div
            className="
              absolute
              bottom-6
              left-6
              z-20
            "
          >
            <motion.h3
              className="
                text-3xl
                font-black
                tracking-[-0.035em]
                text-white
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]
                sm:text-4xl
              "
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 3,
                    }
              }
            >
              {category.label}
            </motion.h3>
          </div>

          {/* OPEN ICON */}

          <div
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              scale-90
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/20
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>

          {/* SLIDESHOW INDICATOR */}

          <div
            className="
              absolute
              bottom-5
              right-5
              z-20
              flex
              items-center
              gap-1
            "
          >
            {category.images.map(
              (_, imageIndex) => (
                <motion.span
                  key={imageIndex}
                  animate={{
                    width:
                      imageIndex ===
                      currentImage
                        ? 18
                        : 4,

                    opacity:
                      imageIndex ===
                      currentImage
                        ? 1
                        : 0.45,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    block
                    h-1
                    rounded-full
                    bg-white
                  "
                />
              )
            )}
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

/* =========================================================
   FULLSCREEN LIGHTBOX
========================================================= */

function PhotoLightbox({
  category,
  index,
  onClose,
  onNext,
  onPrevious,
}: {
  category: GalleryCategory;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const image = category.images[index];

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    onClose,
    onNext,
    onPrevious,
  ]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/90
        p-4
        backdrop-blur-xl
        sm:p-8
      "
      onClick={onClose}
    >
      {/* CLOSE */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="
          absolute
          right-5
          top-5
          z-30
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:rotate-90
          hover:bg-white/20
        "
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </svg>
      </button>

      {/* PREVIOUS */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
        className="
          absolute
          left-4
          top-1/2
          z-30
          flex
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/20
          sm:left-8
        "
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* NEXT */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="
          absolute
          right-4
          top-1/2
          z-30
          flex
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/20
          sm:right-8
        "
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* IMAGE */}

      <motion.div
        key={image.src}
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
        }}
        transition={{
          duration: 0.35,
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          h-[75vh]
          w-full
          max-w-6xl
        "
      >
        <Image
          src={image.src}
          alt={`${category.label} memory`}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            translate-y-8
            whitespace-nowrap
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            text-white/60
          "
        >
          {category.label}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROGRAMME GALLERY
========================================================= */

function ProgrammeGallery({
  category,
  onClose,
}: {
  category: GalleryCategory;
  onClose: () => void;
}) {
  const [
    lightboxIndex,
    setLightboxIndex,
  ] = useState<number | null>(null);

  const reduceMotion = useReducedMotion();

  /* =======================================================
     LOCK PAGE SCROLL
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* =======================================================
     OPEN IMAGE
  ======================================================= */

  const openImage = (index: number) => {
    setLightboxIndex(index);
  };

  /* =======================================================
     CLOSE IMAGE
  ======================================================= */

  const closeImage = () => {
    setLightboxIndex(null);
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const nextImage = useCallback(() => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current + 1) %
          category.images.length
    );
  }, [category.images.length]);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousImage = useCallback(() => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current -
            1 +
            category.images.length) %
          category.images.length
    );
  }, [category.images.length]);

  return (
    <>
      {/* GALLERY OVERLAY */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="
          fixed
          inset-0
          z-[100]
          overflow-y-auto
          bg-slate-950/80
          p-3
          backdrop-blur-xl
          sm:p-6
          lg:p-10
        "
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(event) =>
            event.stopPropagation()
          }
          className="
            relative
            mx-auto
            min-h-full
            max-w-[1500px]
            overflow-hidden
            rounded-[34px]
            bg-white
            shadow-[0_40px_120px_rgba(0,0,0,0.35)]
          "
        >
          {/* HEADER */}

          <div
            className="
              relative
              overflow-hidden
              px-6
              pb-10
              pt-8
              sm:px-10
              sm:pt-10
              lg:px-14
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-[350px]
                w-[350px]
                rounded-full
                bg-emerald-100/70
                blur-[120px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.5em]
                    text-[#038C0E]
                  "
                >
                  PROGRAMME ARCHIVE
                </p>

                <motion.h2
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="
                    mt-2
                    text-4xl
                    font-black
                    tracking-[-0.04em]
                    text-slate-900
                    sm:text-5xl
                    md:text-6xl
                  "
                >
                  {category.label}
                </motion.h2>
              </div>

              {/* CLOSE */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close gallery"
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-slate-700
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-slate-200
                "
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div
              className="
                mt-7
                h-px
                bg-slate-100
              "
            />
          </div>

          {/* MASONRY GALLERY */}

          <div
            className="
              px-4
              pb-10
              sm:px-8
              lg:px-12
            "
          >
            <div
              className="
                columns-1
                gap-4
                sm:columns-2
                lg:columns-3
                xl:columns-4
              "
            >
              {category.images.map(
                (image, index) => {
                  const isTall =
                    index % 7 === 0 ||
                    index % 11 === 0;

                  return (
                    <motion.button
                      key={image.src}
                      type="button"
                      onClick={() =>
                        openImage(index)
                      }
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 25,
                              scale: 0.97,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(
                          index * 0.035,
                          0.45
                        ),
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -5,
                            }
                      }
                      className="
                        group
                        relative
                        mb-4
                        block
                        w-full
                        overflow-hidden
                        rounded-[22px]
                        border-none
                        bg-slate-100
                        p-0
                        text-left
                      "
                    >
                      <div
                        className={
                          isTall
                            ? "relative aspect-[3/4]"
                            : "relative aspect-[4/3]"
                        }
                      >
                        <Image
                          src={image.src}
                          alt={`${category.label} memory`}
                          fill
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 50vw,
                            25vw
                          "
                          className="
                            object-cover
                            transition-transform
                            duration-[1200ms]
                            ease-out
                            group-hover:scale-105
                          "
                        />

                        {/* HOVER GRADIENT */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/45
                            via-transparent
                            to-transparent
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                          "
                        />

                        {/* EXPAND ICON */}

                        <div
                          className="
                            absolute
                            right-4
                            top-4
                            flex
                            h-10
                            w-10
                            scale-90
                            items-center
                            justify-center
                            rounded-full
                            bg-black/25
                            text-white
                            opacity-0
                            backdrop-blur-md
                            transition-all
                            duration-300
                            group-hover:scale-100
                            group-hover:opacity-100
                          "
                        >
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8 3H3v5" />
                            <path d="M3 3l6 6" />
                            <path d="M16 21h5v-5" />
                            <path d="m21 21-6-6" />
                          </svg>
                        </div>
                      </div>
                    </motion.button>
                  );
                }
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <PhotoLightbox
            category={category}
            index={lightboxIndex}
            onClose={closeImage}
            onNext={nextImage}
            onPrevious={previousImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   MAIN GALLERY
========================================================= */

export default function Gallery() {
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<GalleryCategory | null>(
    null
  );

  /* =======================================================
     OPEN PROGRAMME
  ======================================================= */

  const handleOpen = (
    category: GalleryCategory,
    imageIndex: number
  ) => {
    void imageIndex;

    setSelectedCategory(category);
  };

  /* =======================================================
     CLOSE PROGRAMME
  ======================================================= */

  const handleClose = () => {
    setSelectedCategory(null);
  };

  return (
    <section
      id="gallery"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-28
      "
    >
      {/* SCATTERED BACKGROUND */}

      <ScatteredBackground />

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* HEADER */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.9em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.55em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="
              text-[11px]
              font-semibold
              uppercase
              text-[#038C0E]
            "
          >
            GALLERY
          </motion.p>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 12,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              mt-3
              text-4xl
              font-black
              tracking-[-0.055em]
              text-slate-900
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Moments We Cherish
          </motion.h2>

          {/* GREEN LINE */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 52,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mx-auto
              mt-6
              h-[3px]
              rounded-full
              bg-[#038C0E]
            "
          />

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            Explore our celebrations, friendships
            and unforgettable memories through
            the years.
          </motion.p>
        </motion.div>

        {/* FOUR PROGRAMME CARDS */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-7
            xl:gap-10
          "
        >
          {categories.map(
            (category, index) => (
              <FolderCard
                key={category.id}
                category={category}
                index={index}
                onOpen={handleOpen}
              />
            )
          )}
        </div>

        {/* BOTTOM DETAIL */}

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
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-xl
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-slate-200
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-slate-400
            "
          >
            EXPLORE MEMORIES
          </span>

          <div
            className="
              h-px
              flex-1
              bg-slate-200
            "
          />
        </motion.div>
      </div>

      {/* PROGRAMME GALLERY */}

      <AnimatePresence>
        {selectedCategory && (
          <ProgrammeGallery
            category={selectedCategory}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

      {/* BOTTOM FADE */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-28
          w-full
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />
    </section>
  );
}