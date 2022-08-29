import React from "react";

//import imagen
import WomanImg from "../assets/img/banner-woman2.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
    >
      <div className="container mx-auto h-full ">
        <div className="flex items-center h-full pt-8 ">
          {/* left side  */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">He , I'm Jane 👋</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I build & Design <br /> Web Interfaces
            </h1>
          </div>
          {/* right side  */}
          <div className="hidden lg:flex flex-1 justify-end items-end">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
