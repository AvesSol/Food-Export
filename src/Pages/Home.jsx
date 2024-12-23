import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../Components/HeroSection";
import { GoGoal } from "react-icons/go";
import { SlDiamond } from "react-icons/sl";
import Cat from "../Pages/Cat";
import { Link } from "react-router-dom";
import c1 from "../Images/Certification/c1.png";
import c2 from "../Images/Certification/c2.png";
import c3 from "../Images/Certification/c3.png";
import c4 from "../Images/Certification/c4.png";
import c5 from "../Images/Certification/c5.png";
import c6 from "../Images/Certification/c6.png";
import WhatsApp from "../Components/WhatsApp";

const Home = () => {
  return (
    <div className="wrapper max-w-[100vw] min-h-[100vh] relative">
      <WhatsApp />
      <HeroSection />

      {/* vision section start  */}

      <div className="vision-wrapper relative">
        <h1
          data-aos="fade"
          className="pro-title px-1 sm:px-0 font-bold text-6xl my-32 text-center w-fit mx-auto relative z-30 "
        >
          Vision & Mission
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="leftAnimLine line absolute  -bottom-1 w-[50%] bg-green-600 h-[2px]"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="leftAnimLine line absolute  -bottom-2 w-[30%] bg-green-600 h-[2px]"
          ></div>
        </h1>
        {/* Heading ends  */}
        <div className="vision min-h-[40vh] max-w-[1200px] mx-auto static z-30 my-44 flex justify-around items-center flex-wrap gap-24 lg:gap-1">
          {/* vision  */}
          <div
            data-aos="slide-right"
            className="vision-content border-black w-[450px] h-[90%] flex items-center justify-center relative"
          >
            {/* img 1  */}
            <div className="top-circle size-[160px] rounded-full bg-[#fecaca69] z-30 absolute -top-28 left-20">
              {" "}
              <GoGoal
                className="absolute text-[#616161] -right-6 top-4"
                fontSize={"5rem"}
              />{" "}
            </div>
            {/* img2  */}
            <div className="center-circle size-[300px] rounded-full bg-[#fecaca69] static z-40">
              <h1 className="vison-title text-red-500 text-xl font-bold ml-14 mt-16">
                Vision
              </h1>
              <p className="visionDes text-xs ml-14">
                To be a globally trusted leader in export and import, bridging
                markets with innovative solutions, ethical practices, and a
                commitment to excellence, while fostering sustainable growth and
                mutual prosperity across the value chain.
              </p>
            </div>

            {/* img3 */}
            <div className="bottom-circle size-[80px] rounded-full bg-[#fecaca69] z-10 absolute bottom-4 right-14"></div>
          </div>
          {/* vision end  */}

          {/* Mission  */}
          <div
            data-aos="slide-left"
            className="Mission-content border-black w-[450px] h-[90%] flex items-center justify-center relative "
          >
            {/* img 1  */}
            <div className="top-circle size-[160px] rounded-full bg-[#cefeca69] z-30 absolute -bottom-16 right-20"></div>
            {/* img2  */}
            <div className="center-circle size-[300px] rounded-full bg-[#cefeca69] static z-40 ">
              <SlDiamond
                className="absolute text-[#61616 1] right-20 top-0 text-green-400 opacity-60"
                fontSize={"5rem"}
              />
              <h1 className="vison-title text-green-500 text-xl font-bold ml-14 mt-16">
                Mission
              </h1>
              <p className="MissionDes text-xs ml-14">
                Our mission is to deliver high-quality products and services
                across international borders, ensuring efficiency, transparency,
                and customer satisfaction. We aim to empower businesses through
                reliable supply chain management, foster long-term partnerships,
                and contribute to global trade with a focus on sustainability
                and innovation.
              </p>
            </div>

            {/* img3 */}
            <div className="bottom-circle size-[100px] rounded-full bg-[#cefeca69] z-10 absolute -top-12 left-24"></div>
          </div>
          {/* Mission end  */}
        </div>
      </div>
      {/* vision section ends  */}

      {/* Section 2 start Products  */}
      <div className="products mt-4 my-20">
        {/* pro container start  */}
        <div className="pro-Container max-w-full mx-auto h-auto flex justify-center items-center gap-16 flex-wrap ">
          <Cat />
        </div>
        {/* pro container end  */}
      </div>
      {/* Section 2 end products  */}

      {/* Section 3 start  */}
      <div className="service my-28">
        <h1
          data-aos="fade"
          className="pro-title px-1 sm:px-0 font-bold text-6xl my-20 relative text-center w-fit mx-auto"
        >
          Import & Export Service
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="leftAnimLine line absolute  -bottom-3 left-0 w-[40%] bg-green-600 h-[2px]"
          ></div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="leftAnimLine line absolute  -bottom-2 w-[20%] bg-green-600 h-[2px]"
          ></div>
        </h1>

        <div className="export-container h-[60vh] w-full bg-slate-50 relative ">
          {/* added bg image to this div   */}
          {/* .absolute content start  */}
          <div className="service-content w-[80%] flex-wrap lg:py-7 shadow-lg absolute -bottom-16 left-[50%] -translate-x-[50%] flex justify-center items-center gap-12 py-4  min-h-[14vh] px-4 bg-[#ffffff] z-50 ">
            {/* SH1  */}
            <div
              data-aos="fade-up"
              className="service-highlightd flex justify-start items-start gap-6 border-b pb-6 max-w-[300px] pr-6 lg:border-r lg:border-b-0 "
            >
              <div className="left mt-2">
                <img
                  src="https://rntest1.myshopify.com/cdn/shop/t/15/assets/5-madel.svg?v=131010347911593014891653315639"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="title font-bold text-md mb-2">
                  Quality assurance for international markets
                </div>
                <div className="des text-xs">
                  Delivering only the best, every time.
                </div>
              </div>
            </div>
            {/* Sh1 end  */}

            {/* SH1  */}
            <div
              data-aos="fade-up"
              className="service-highlightd flex justify-start items-start gap-6 border-b pb-6 max-w-[300px] pr-6 lg:border-b-0 "
            >
              <div className="left mt-2">
                <img
                  src="https://rntest1.myshopify.com/cdn/shop/t/15/assets/4-track.svg?v=66972495813929308381653315638"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="title font-bold text-md mb-2">
                  End-to-end export management
                </div>
                <div className="des text-xs">
                  We handle everything from sourcing to delivery with ease.
                </div>
              </div>
            </div>
            {/* Sh1 end  */}

            {/* SH1  */}
            {/* Sh1 end  */}
          </div>
          {/* absolute content end  */}
        </div>
      </div>
      {/* section 3 end  */}

      {/* section 4 start  */}
      <div className="Certification-wrapper mt-48">
        <h1 className="pro-title px-1 sm:px-0 font-bold text-5xl my-20 text-center w-fit relative mx-auto">
          Certification
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="leftAnimLine line absolute  -bottom-3 left-0 w-[40%] bg-green-600 h-[2px]"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="leftAnimLine line absolute  -bottom-2 w-[20%] bg-green-600 h-[2px]"
          ></div>
        </h1>

        <div className="certificate w-full min-h-[50vh] bg-[#384b4b ] bg-[#f4ffef] flex gap-4 sm:gap-1 flex-col md:flex-row justify-around items-center  overflow-hidden shadow-md  ">
          <div className="left md:w-[30%]">
            <h1
              data-aos="slide-up"
              className="title text-4xl font-semibold leading-[50px] text-black px-1 "
            >
              Certified <span className="text-[crimson]">Professional</span> in
              Food <span className="text-[crimson]">Export</span> and
              International Trade
            </h1>
            <div className="aboutUs hidden sm:block">
              <Link to="/about">
                <button className="hero-btn opacity-0 rounded-xl py-3 mt-8 bg-[#e0ffe0] border border-[white]  w-[180px] text-md font-bold text-green-800 shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear">
                  About us
                </button>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade"
            className="right w-[90%] md:w-[30%] flex justify-center items-center overflow-hidden flex-wrap gap-9"
          >
            <img src={c1} alt="" className=" w-[100px] object-cover " />
            <img src={c2} alt="" className=" w-[100px] object-cover " />
            <img src={c3} alt="" className=" w-[100px] object-cover " />
            <img src={c4} alt="" className=" w-[100px] object-cover" />
            <img
              src={c5}
              alt=""
              className=" w-[100px] object-cover mix-blend-multiply "
            />
            <img
              src={c6}
              alt=""
              className=" w-[100px] object-cover mix-blend-multiply "
            />
          </div>
        </div>
      </div>
      {/* Section 4 ends  */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
