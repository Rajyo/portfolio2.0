"use client"

import dynamic from "next/dynamic";
const EarthCanvas = dynamic(() => import('@/components/canvas/EarthCanvas'), {
    ssr: false
})
import { ContactForm } from "@/components/contactSection/ContactForm";
import { useRef } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { slideLeftSide, slideRightSide, smallslideup } from "@/lib/framer";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";


const Contact = () => {
    const container = useRef(null)
    const inView = useInView(container, {
        margin: "250px 100px -50px 0px",
    })
    const contactTitle = `Let's get in Touch`

    return (
        <AnimatePresence mode="wait">
            <div ref={container} id="contact" className="max-w-[100%] md:max-w-[86%] md:mx-auto h-auto xl:px-[6rem] pt-20 pb-10">
                <h3 className="text-4xl md:text-5xl font-bold px-4 md:px-0 text-center flex-wrap z-0 flex gap-4 justify-center">
                    {contactTitle.split(" ").map((x, index) => {
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
                </h3>

                <div className="mt-4 md:mt-6 grid md:grid-cols-2 overflow-hidden">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.div ref={container} variants={slideLeftSide} initial="initial" animate={inView ? "animate" : "exit"} className="max-w-[90%] md:max-w-[100%] max-[768px]:mx-auto self-center md:h-[500px] h-[350px] lg:h-[650px] hover:cursor-pointer" >
                                    <EarthCanvas />
                                </motion.div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="flex flex-wrap text-center">Use Right Key on mouse to Interact</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <motion.div ref={container} variants={slideRightSide} initial="initial" animate={inView ? "animate" : "exit"} className="flex justify-center bg-black-100 sm:p-2 md:p-4 lg:p-8 py-2">
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default Contact;