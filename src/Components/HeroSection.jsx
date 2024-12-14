import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import b1 from "../Images/b1.png";
import b2 from "../Images/b2.png";
import b3 from "../Images/b3.png";

const HeroSection = () => {
  return (
    <div className="max-w-[100vw] bg-[#f4ffef] border-t relative">
      <img src={b2} alt="" className="leftAnim opacity-0 absolute -left-[9rem] -bottom-[8rem] w-[400px] " />
      <img src={b3} alt="" className="rightAnim opacity-0 absolute -right-[9rem] -top-[8rem] w-[400px] z-10  hidden md:block " />

      {/* Section 1 slider start */}

      <div className="hero-section max-w-[1200px] mx-auto h-[70vh] flex flex-col-reverse justify-between items-center md:flex-row px-1 sm:px-2">
        <div className="left h-[100%] w-[80%] md:w-[50%] flex justify-start items-center">
          <div className="heading mb-20 w-[100%]">
            <h1 className="hero-title1  text-black font-bold text-4xl  ">
              Bringing the <span className="text-[#dc143cc9]  ">Taste</span> of
              Quality <span className="text-[#dc143cc9]  ">to</span> Every{" "}
              <span className="text-[#dc143cc9]  ">Corner</span> of the{" "}
              <span className="text-[#dc143cc9]  ">World</span>.
            </h1>
            <p className="hero-title2 opacity-0 text-[#dc143cc9]  my-2 sm:my-4 font-medium">
              Global Exporters of Quality Food Products!!
            </p>
            {/* <button className="hero-btn opacity-0 rounded-lg py-3 mt-4  bg-[#e0ffe0] border border-[#b8ffb8]  w-[180px] text-md font-bold text-green-800 shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear">
              Make Order
            </button> */}
          </div>
        </div>
        <div className="right h-[100%] w-[80%] md:w-[50%] flex justify-center items-center">
          <img src={b1} alt="" className="bounce-box" />
        </div>
      </div>

      {/* Section 1 Slider end */}


    
    </div>
  );
};

export default HeroSection;
