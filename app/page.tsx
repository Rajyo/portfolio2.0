"use client"

import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";
import Sparkles from "@/components/Sparkles";
import dynamic from "next/dynamic";
const ToolsAndTechnology = dynamic(() => import('@/components/ToolsAndTechnology'), {
  ssr: false
})
import Contact from "@/components/ContactPage";
import { useEffect } from "react";
import Lenis from "lenis"


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-screen bg-[#f2f2f2] dark:bg-[#111111] relative">
      {/* <Sparkles /> */}

      <LandingPage />

      <About />

      <ToolsAndTechnology />

      <Projects />

      <Contact />
    </main>
  );
}
