"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { LinkPreview } from "../ui/link-preview";
import { TypeAnimation } from "react-type-animation";


export default function MobileLandingPage({ theme }: { theme: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <div className='absolute mx-auto flex md:hidden z-[60] h-screen w-full max-w-[100%] md:max-w-[86%]'>
                <motion.div style={{ y: textY }} className='m-auto flex h-[35%] w-[90%] flex-col items-center max-[400px]:w-[95%] sm:h-[45%] sm:w-[75%] '>
                    <h1 className='z-30 flex flex-wrap gap-7 py-2 pl-[6px] text-2xl font-semibold uppercase tracking-tight text-gray-800 dark:text-gray-400 max-[400px]:text-xl'>
                        <span>p r a j y o t</span> <span>k h a d s e</span>
                    </h1>

                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'Backend Developer',
                            1000,
                            'Mobile App Developer',
                            1000,
                            'Devops Engineer',
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        className='z-30 inline-block h-full w-full py-2 text-center text-[3em] font-bold sm:text-[4em] '
                        repeat={Infinity}
                    />

                    <LinkPreview
                        url='https://drive.google.com/file/d/1zcbqPT8vW6J5HXpyDbGjqtOfmwLI_bGx/view?usp=drive_link'
                        className='z-50 h-16 w-36 self-center font-bold'
                    >
                        <button className='inline-flex h-full w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                            Resume
                        </button>
                    </LinkPreview>
                </motion.div>
            </div>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: theme === "light" ? `url(/parallax/light-full.jpg)` : `url(/parallax/dark-full.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: theme === "light" ? `url(/parallax/light-half.png)` : `url(/parallax/dark-half.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
}
