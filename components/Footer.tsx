import React from "react";

export default function Footer() {
    return (
        <div
            className="relative bg-[#f2f2f2] dark:bg-[#111111] border border-t border-gray-400 dark:border-gray-800 mx-auto w-full h-[75px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >

            <div className="items-center fixed bottom-0 h-[75px] w-full flex max-[500px]:flex-col flex-row flex-wrap justify-evenly">
                <h1 className="max-[350px]:text-xs text-center text-sm sm:text-base md:text-lg lg:text-xl leading-[0.8]">Website Designed and Developed by <span className="font-semibold">Prajyot</span></h1>
                <p className="max-[350px]:text-xs text-center md:text-base lg:text-lg leading-[0.8]">©copyright 2024</p>
            </div>
        </div>
    );
}
