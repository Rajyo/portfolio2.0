"use client"

import EarthCanvas from "@/components/canvas/EarthCanvas";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "lucide-react";


const Contact = () => {

    return (
        <div id="contact" className="max-w-[100%] md:max-w-[86%] md:mx-auto h-auto xl:px-[6rem] pt-20 pb-10">
            <h3 className="text-4xl md:text-5xl font-bold px-4 md:px-0 text-center z-0 flex justify-center">Let&apos;s get in Touch <Navigation /></h3>
            <div className="mt-4 md:mt-6 grid md:grid-cols-2 overflow-hidden" >
                <div className="max-w-[90%] md:max-w-[100%] max-[768px]:mx-auto self-center md:h-[500px] h-[350px] lg:h-[650px]" >
                    <EarthCanvas />
                </div>

                <div className="flex justify-center bg-black-100 sm:p-2 md:p-4 lg:p-8 py-2 mr-4 md:mr-0">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;