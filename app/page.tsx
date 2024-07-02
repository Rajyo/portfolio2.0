
import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Sparkles from "@/components/Sparkles";


export default function Home() {

  return (
    <main className="w-screen bg-[#f2f2f2] dark:bg-[#111111] relative">
      {/* <Sparkles /> */}

      <LandingPage />

      <About />
    </main>
  );
}
