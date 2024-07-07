
import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";
import Sparkles from "@/components/Sparkles";
import ToolsAndTechnology from "@/components/ToolsAndTechnology";
import Contact from "@/components/ContactPage";


export default function Home() {

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
