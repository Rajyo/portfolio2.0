"use client"

import { LinkPreview } from "@/components/ui/link-preview";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";
import Light3DCanvas from "./canvas/Light3DCanvas";
import Dark3DCanvas from "./canvas/Dark3DCanvas";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { Spotlight } from "./ui/spotlight";
import MobileCanvas from "./canvas/MobileCanvas";
import Sparkles from "./Sparkles";


export default function LandingPage() {
    const { theme } = useTheme()

    return (

        <section className="w-full relative bg-[#f2f2f2] dark:bg-[#111111]">
            <div className="w-full inset-0 h-screen top-0">

                <div className="max-w-[100%] md:max-w-[86%] w-full absolute mx-auto h-screen flex">
                    <div className="flex flex-col md:items-start items-center max-[400px]:w-[95%] w-[90%] sm:w-[75%] md:w-[69%] m-auto h-[35%] sm:h-[45%] xl:h-[40%]">
                        
                        <h1 className="pl-[6px] py-2 max-[400px]:text-xl text-2xl font-semibold uppercase flex gap-7 text-gray-800 md:text-gray-600 dark:text-gray-400 tracking-tight z-30 flex-wrap">
                            <span>p r a j y o t</span> <span>k h a d s e</span>
                        </h1>

                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer', 1000,
                                'Frontend Developer', 1000,
                                'Backend Developer', 1000,
                                'Mobile App Developer', 1000,
                                'Devops Engineer', 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-[3em] sm:text-[4em] lg:text-[5em] text-center md:text-start font-bold inline-block h-full w-full py-2 z-30"
                            repeat={Infinity}
                        />

                        <LinkPreview url="https://drive.google.com/file/d/1zcbqPT8vW6J5HXpyDbGjqtOfmwLI_bGx/view?usp=drive_link" className="font-bold w-36 h-16 md:pl-1 z-50 md:self-auto self-center">
                            <button className="inline-flex w-full h-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Resume
                            </button>
                        </LinkPreview>
                    </div>
                </div>

                {/* Mobile */}
                <div className="absolute w-screen h-screen md:hidden z-10">
                    <MobileCanvas />
                </div>

                {/* <Spotlight className="-top-20 left-0 md:left-100 md:-top-40 md:hidden dark:hidden" fill="red" />
                <Spotlight className="top-60 left-0 md:left-60 md:-top-20 md:hidden dark:hidden" fill="blue" /> */}

                {/* <AuroraBackground className="md:hidden">
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="absolute"
                    >
                    </motion.div>
                </AuroraBackground> */}


                {/* Web */}
                <Sparkles />

                <div className="absolute max-[767px]:hidden md:-right-[40rem] xl:-right-[50rem] -top-[7rem] z-20">
                    {
                        theme === "light" ? <Light3DCanvas /> : <Dark3DCanvas />
                    }
                </div>

            </div>
        </section>

    )
}
