"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";
import Mission from "@/components/sections/Mission";
import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";

import JoinModal from "@/components/JoinModal";

export default function Home() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <>
      <Navbar onJoinClick={() => setJoinOpen(true)} />

      <Hero onJoinClick={() => setJoinOpen(true)} />

      <About />
      <Stats />
      <Gallery />
      <Team />
      <Mission />
      <Resources />
      <Contact />

      <Footer />

      <JoinModal
        open={joinOpen}
        onClose={() => setJoinOpen(false)}
      />
    </>
  );
}