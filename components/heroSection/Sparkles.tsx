"use client"

import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";


export default function Sparkles() {
  const { theme } = useTheme()
  const currentTheme = theme === "light" ? "#000000" : "#FFFFFF"
  const currentDensity = theme === "light" ? 200 : 100

  return (
    <>
      <SparklesCore id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={currentDensity}
        className="w-full h-full absolute z-10"
        particleColor={currentTheme}
      />
    </>
  )
}