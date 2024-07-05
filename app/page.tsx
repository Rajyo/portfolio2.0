
import About from "@/components/About";
import Education from "@/components/Education";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";
import Sparkles from "@/components/Sparkles";
import ToolsAndTechnology from "@/components/ToolsAndTechnology";
import Contact from "./contact/page";


export default function Home() {

  return (
    <main className="w-screen bg-[#f2f2f2] dark:bg-[#111111] relative">
      {/* <Sparkles /> */}

      <LandingPage />

      <About />

      <ToolsAndTechnology />

      <Education />

      <Projects />

      <Contact />
    </main>
  );
}
