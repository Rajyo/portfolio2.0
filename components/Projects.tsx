"use client"

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { project } from "@/lib/constants";
import { ProjectDropdown } from "./ProjectDropdown";
import { Star } from "lucide-react";

export default function Projects() {
    const [techStack, setTechStack] = useState("reactExpress");

    const handleTechStack = (stack: string) => {
        setTechStack(stack)
    }

    return (
        <section id="projects" className='m-auto h-auto max-w-[100%] md:max-w-[86%] sm:py-10'>
            <div className='mx-auto flex h-full max-w-[95%] flex-col items-center justify-around p-4'>
                <div className="flex max-[550px]:flex-col flex-row max-[550px]:gap-y-5 items-center justify-between w-full p-10">
                    <h1 className='font-bold text-4xl md:text-5xl max-[575px]:mb-4 mb-0 text-center flex flex-wrap gap-2 justify-center'>My<span className="flex">Projects <Star /></span></h1>
                    <ProjectDropdown techStack={techStack} handleTechStack={handleTechStack} />
                </div>
                <div className="flex flex-wrap justify-around gap-5">
                    {
                        project.map((item, index) => (
                            <ProjectCard item={item} technicalStack={techStack} key={index} />
                        ))
                    }
                </div>
            </div>
        </section >
    )
}
