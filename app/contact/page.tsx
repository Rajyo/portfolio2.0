"use client"

import EarthCanvas from "@/components/EarthCanvas";

const Contact = () => {

  return (
    <div id="contact" className="w-full xl:px-[6rem] pt-20">
      <h3 className="text-4xl sm:text-5xl font-bold px-4 md:px-0 text-center z-0">Contact</h3>
      <div className="xl:mt-6 grid md:grid-cols-2 overflow-hidden" >
         <div className="max-w-[95%] m-auto sm:m-0 md:h-[500px] h-[350px] lg:h-[650px]" >
          <EarthCanvas />
        </div>

        <div className="items-center bg-black-100 p-4 md:p-8 rounded-2xl">
          
        </div>
      </div>
    </div>
  );
};

export default Contact;