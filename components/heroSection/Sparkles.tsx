"use client"

import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";


export default function Sparkles() {
  const { theme } = useTheme()
  const currentTheme = theme === "light" ? "#000000" : "#FFFFFF"
  const currentDensity = theme === "light" ? 150 : 100

  const mobileTheme = theme === "light" ? "#000000" : "#FFFFFF"
  const mobileDensity = theme === "light" ? 50 : 100

  return (
    <>
      <SparklesCore id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={currentDensity}
        className="w-full h-full absolute z-20 hidden md:flex"
        particleColor={currentTheme}
      />
      <SparklesCore id="tsparticlesmobilepage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={mobileDensity}
        className="w-full h-full absolute z-20 flex md:hidden"
        particleColor={mobileTheme}
      />
    </>
  )
}