import React from "react";

export default function Footer() {
    return (
        <div
            className="relative bg-[#d9d8d8] dark:bg-[#090909] mx-auto w-full h-[75px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >

            <div className="items-center fixed bottom-0 h-[75px] w-full flex justify-evenly">
                <h1 className="text-xl leading-[0.8] ">Website Designed and Developed by <span className="font-semibold">Prajyot</span></h1>
                <p>©copyright 2024</p>
            </div>
        </div>
    );
}
