"use client"


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { smallslideup } from "@/lib/framer";

export default function Footer() {
    const container = useRef(null)
    const inView = useInView(container, {
        margin: "0px 100px -50px 0px",
    })
    const leftFooter = 'Website Designed and Developed by Prajyot'
    const rightFooter = '©copyright 2024'



    return (
        <div
            className="relative bg-[#f2f2f2] dark:bg-[#111111] border border-t border-gray-400 dark:border-gray-800 mx-auto w-full h-[75px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >

            <div className="items-center fixed bottom-0 h-[75px] w-full flex max-[500px]:flex-col flex-row flex-wrap justify-evenly">
                <h1 ref={container} className="flex flex-wrap gap-2 max-[350px]:text-xs text-center text-sm sm:text-base md:text-lg lg:text-xl leading-[0.8]">
                    {leftFooter.split(" ").map((x, index) => {
                        return (
                            <span
                                key={index}
                                className="flex hide relative justify-start"
                            >
                                <motion.span
                                    variants={smallslideup}
                                    custom={index}
                                    initial="initial"
                                    animate={inView ? "animate" : "exit"}
                                >
                                    {x}
                                </motion.span>
                            </span>
                        );
                    })}
                </h1>
                <p ref={container} className="flex flex-wrap gap-2 max-[350px]:text-xs text-center md:text-base lg:text-lg leading-[0.8]">
                    {rightFooter.split(" ").map((x, index) => {
                        return (
                            <span
                                key={index}
                                className="flex hide relative justify-start"
                            >
                                <motion.span
                                    variants={smallslideup}
                                    custom={index}
                                    initial="initial"
                                    animate={inView ? "animate" : "exit"}
                                >
                                    {x}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
            </div>
        </div>
    );
}
