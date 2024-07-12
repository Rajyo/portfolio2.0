"use client"

import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
const Card = dynamic(
    () => import('./Card'),
    {
        ssr: false
    }
)
import { technicalStack } from "@/lib/constants";
import { Flame } from "lucide-react";
import { useTheme } from "next-themes";


export default function TechStack() {
    const container = useRef(null);
    const { theme } = useTheme()

    const { scrollYProgress } = useScroll({
        target: container,

        offset: ["start start", "end end"],
    });


    return (
        <div id='toolsAndTechnology' className="mb-[10vh] md:max-w-[86%] mx-auto max-[300px]:w-[98%] w-[95%] relative">
            <h1 className='mx-auto w-[95%] flex justify-center text-center text-4xl font-bold min-[200px]:py-3 min-[400px]:py-5 sm:py-5 md:text-5xl sticky top-10 h-[15vh] gap-2 flex-wrap'>
                My Tech <span className="flex">Stack <Flame /></span>
            </h1>
            {technicalStack.map((project, i) => {
                const targetScale = 1 - (technicalStack.length - i) * 0.05;

                return (
                    <Card
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.2, 1]}
                        targetScale={targetScale}
                        theme={theme}
                    />
                );
            })}
        </div>
    );
}
