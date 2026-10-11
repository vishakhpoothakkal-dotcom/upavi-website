"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { UserRound } from "lucide-react";

interface Member {
  name: string;
  position?: string;
  qualification?: string;
  image?: string;
}

const leaders: Member[] = [
  {
    name: "ALEENA MARIA SUNNY",
    position: "President",
    qualification: "M.Sc. Clinical Psychology",
    image: "/image/team/president.jpeg",
  },
  {
    name: "THOMAS EDWIN PAUL",
    position: "Secretary",
    qualification: "BBA",
    image: "/image/team/SEC.jpeg",
  },
  {
    name: "MUHAMMED SADIK C K",
    position: "Treasurer",
    qualification: "M.Sc. Economics Data Analytics",
    image: "/image/team/TRE.jpeg",
  },
  {
    name: "ATHIRA S",
    position: "Vice President",
    qualification: "B.Sc. Psychology",
    image: "/image/team/vp.jpeg",
  },
  {
    name: "VISHNU C B",
    position: "Joint Secretary",
    qualification: "M.Sc. Applied Psychology",
    image: "/image/team/js.jpeg",
  },
  {
    name: "MOHAMED RASHID K",
    position: "P.R.O",
    qualification: "M.Sc. Mathematics",
    image: "/image/team/pro.jpeg",
  },
  {
    name: "AADIL MUBARAK P N",
    position: "Media Head",
    qualification: "M.Sc. Geography & Geoinformatics",
    image: "/image/team/MEDIA.jpeg",
  },
];

const committee: Member[] = [
  {
    name: "MUHAMMED THWAYYIB ",
    qualification: "MBA",
    image: "/image/team/TWWB.jpeg",
  },
  {
    name: "THRISHA K",
    qualification: "M.A. Political Science",
    image: "/image/team/TRIDHA.jpeg",
  },
  {
    name: "MUHAMMED JABIR T P",
    qualification: "M.Sc. Computational Social Science",
    image: "/image/team/JABIR1.jpeg",
  },
  {
    name: "OLLIFORD MARIO MILLAT",
    qualification: "M.Sc. AI & DS",
    image: "/image/team/FORD.jpeg",
  },
  {
    name: "RAHUL S V",
    qualification: "M.Sc. Molecular Biology",
    image: "/image/team/RAHUL1.jpeg",
  },
  {
    name: "ADITHYAN C K",
    qualification: "M.Sc. Space Science",
    image: "/image/team/ADITHYA.jpeg",
  },
  {
    name: "ABHIRAMY S R",
    qualification: "M.A. English",
    image: "/image/team/ABIHRAMI.jpeg",
  },
  {
    name: "HAWWA SOFIYA KH",
    qualification: "B.A. Political Science",
    image: "/image/team/HAWWA.jpeg",
  },
  {
    name: "JERON A MANAVALAN",
    qualification: "B.Sc. Economics",
  },
  {
    name: "AADHIDEV V B",
    qualification: "B.Sc. RMIT",
    image: "/image/team/ADI.jpeg",
  },
  {
    name: "S HARI GOVIND",
    qualification: "BBA",
  },
  {
    name: "ALLAN R RAJ",
    qualification: "B.Com",
    image: "/image/team/ALLAN.jpeg",
  },
  {
    name: "IRIN S R",
    qualification: "B.A. English",
    image: "/image/team/IRIN.jpeg",
  },
  {
    name: "KRISHNA PRIYA",
    qualification: "B.Sc. CS & AI",
    image: "/image/team/SHARMA.jpeg",
  },
  {
    name: "SANDRA KRISHNAN C K",
    qualification: "B.Tech",
    image: "/image/team/SANDARA.jpeg",
  },
  {
    name: "MAJID",
    qualification: "B.A. Political Science",
  },
  {
    name: "NANDU SAJI",
    qualification: "B.Com",
  },
  {
    name: "ABIJITH KR",
    qualification: "M.Sc. Psychology",
  },
  {
    name: "MUHAMMED RAZIL T",
    qualification: "B.Sc. CS & AI",
    image: "/image/team/RASIL.jpeg",
  },
];

export default function Team() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 sm:py-28"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#038C0E]/[0.025] blur-[130px]" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#DABE08]/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-[#038C0E] sm:text-xs">
            EXECUTIVE COMMITTEE
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-900 sm:text-5xl md:text-6xl">
            Meet Our Team
          </h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 56,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-6 h-[3px] rounded-full bg-[#038C0E]"
          />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Meet the student leaders who help shape the UPAVI
            community, organise meaningful experiences and keep
            our association connected throughout the academic year.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* TOP EXECUTIVE LEADERS */}
        {/* ========================================================= */}

        <div className="mx-auto mt-16 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-7">
          {leaders.map((member, index) => (
            <motion.article
              key={member.name}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion
                  ? 0
                  : index * 0.07,
                ease: "easeOut",
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                    }
              }
              className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-[#038C0E]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]"
            >
              {/* MEMBER IMAGE */}

              <div className="relative h-72 overflow-hidden sm:h-80 lg:h-[340px]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 45vw, (max-width: 1024px) 22vw, 190px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#038C0E]/10 via-slate-100 to-[#DABE08]/10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#038C0E]/15 bg-white text-[#038C0E] shadow-lg">
                      <UserRound
                        size={38}
                        strokeWidth={1.5}
                      />
                    </div>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
                      Photo Coming Soon
                    </p>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* MEMBER INFORMATION */}

              <div className="min-h-[165px] p-5 text-center sm:p-6">

                <h3 className="text-[16px] font-bold leading-tight tracking-tight text-slate-900 sm:text-lg">
                  {member.name}
                </h3>

                <p className="mx-auto mt-3 max-w-[180px] text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#038C0E] sm:text-xs">
                  {member.position}
                </p>

                {member.qualification && (
                  <p className="mt-1.5 font-sans text-[10px] font-light italic leading-5 tracking-[0.02em] text-slate-400">
                    {member.qualification}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================================================= */}
        {/* COMMITTEE */}
        {/* ========================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20"
        >
          {/* DIVIDER */}

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />

            <h3 className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.35em] text-slate-500 sm:text-xs">
              Executive Committee
            </h3>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* ========================================================= */}
          {/* COMMITTEE — 7 PER ROW ON DESKTOP */}
          {/* ========================================================= */}

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-6">
            {committee.map((member, index) => (
              <motion.article
                key={`${member.name}-${index}`}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 25,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.025,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[#038C0E]/20 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                {/* ================================================= */}
                {/* COMMITTEE PHOTO */}
                {/* ================================================= */}

                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-[#038C0E]/[0.04] sm:h-36">

                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.qualification ?? "UPAVI Executive Committee"}`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 14vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 1.08,
                              }
                        }
                        transition={{
                          duration: 0.25,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-[#038C0E]/10 bg-white text-[#038C0E] shadow-sm"
                      >
                        <UserRound
                          size={26}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* Image overlay */}

                  {member.image && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  )}
                </div>

                {/* ================================================= */}
                {/* COMMITTEE DETAILS */}
                {/* ================================================= */}

                <div className="min-h-[105px] px-2.5 py-4 text-center">
                  <h4 className="text-[12px] font-bold leading-tight text-slate-900 sm:text-[13px]">
                    {member.name}
                  </h4>

                  {member.qualification && (
                    <p className="mt-1.5 font-sans text-[9px] font-light italic leading-4 text-slate-400">
                      {member.qualification}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}