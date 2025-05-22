import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[100vw] min-h-[70vh] bg- [#f4ffef] border-t relative bg-[url('/sp.jpg')] bg-no-repeat bg-center bg-cover export-container">
      {/* Section 1 slider start */}

      <div className="hero-section max-w-[1200px] mx-auto min-h-[70vh] flex flex-col-reverse justify-between items-center md:flex-row px-1 sm:px-2">
        <div className="left h-[100%] w-[80%] md:w-[50%] flex justify-start items-center">
          <div className="heading mb-20 w-[100%]">
            <h1 className="hero-title1  text-white drop-shadow-xl font-bold text-4xl  ">
              Bringing the
              <span className="text-[#dc143cc9 ] text-green-400 drop-shadow-xl  relative ">
                Taste
                <div className="leftAnimLine line absolute  bottom-1 w-[50%] bg-green-600 h-[2px]"></div>
              </span>{" "}
              of Quality{" "}
              <span className="text-[#dc143cc9 ] text-green-400 drop-shadow-xl   ">
                to
              </span>{" "}
              Every{" "}
              <span className="text-[#dc143cc9 ] text-green-400 drop-shadow-xl ">
                Corner
              </span>{" "}
              of the{" "}
              <span className="text-[#dc143cc9 ] text-green-400 drop-shadow-xl  relative ">
                World
                <div className="leftAnimLine line absolute  bottom-1 w-[50%] bg-green-600 h-[2px]"></div>
              </span>
              .
            </h1>
            <p className="hero-title2 opacity-0 text-[#dc143cc9 ] text-white drop-shadow-xl   my-2 sm:my-4 font-medium">
              Global Exporters of Quality Food Products!!
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 Slider end */}
    </div>
  );
};

export default HeroSection;
