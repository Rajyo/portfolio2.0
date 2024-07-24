"use client"

import React, { useRef, useState } from "react";
import { project } from "@/lib/constants";
import { ProjectDropdown } from "./ProjectDropdown";
import { AnimatePresence, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { slideLeftSide, slideRightSide } from "@/lib/framer";
import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import('./ProjectCard'), {
    ssr: false
})

export default function Projects() {
    const [techStack, setTechStack] = useState("reactExpress");

    const container = useRef(null)
    const inView = useInView(container, {
        margin: "0px 100px -50px 0px",
    })
    const projectTitle = `My Projects`

    const container1 = useRef(null)
    const inView1 = useInView(container1, {
        margin: "50px 100px 50px 50px",
    })

    const handleTechStack = (stack: string) => {
        setTechStack(stack)
    }

    return (
        <AnimatePresence mode="wait">
            <section id="projects" className='m-auto h-auto max-w-[100%] md:max-w-[86%] sm:py-10'>
                <div ref={container1} className='mx-auto flex h-full max-w-[95%] flex-col items-center justify-around p-4'>
                    <div className="flex max-[550px]:flex-col flex-row max-[550px]:gap-y-5 items-center justify-between w-full p-10">
                        <h1 ref={container} className='font-bold text-4xl md:text-5xl max-[575px]:mb-4 mb-0 text-center flex flex-wrap gap-2 justify-center'>
                            {projectTitle.split(" ").map((x, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="flex hide relative justify-start"
                                    >
                                        <motion.span
                                            variants={slideLeftSide}
                                            initial="initial"
                                            custom={index}
                                            animate={inView ? "animate" : "exit"}
                                        >
                                            {x}
                                        </motion.span>
                                    </span>
                                );
                            })}
                        </h1>
                        <motion.div ref={container} variants={slideRightSide} initial="initial" animate={inView ? "animate" : "exit"}>
                            <ProjectDropdown techStack={techStack} handleTechStack={handleTechStack} />
                        </motion.div>
                    </div>
                    <motion.div className="flex flex-wrap justify-around gap-5">
                        {
                            project.map((item, index) => (
                                <ProjectCard item={item} technicalStack={techStack} key={index} index={index} inView1={inView1} />
                            ))
                        }
                    </motion.div>
                </div>
            </section >
        </AnimatePresence>
    )
}
