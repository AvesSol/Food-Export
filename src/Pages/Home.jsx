import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../Images/Banner1.jpg";
import Banner2 from "../Images/Banner2.jpg";
import Banner3 from "../Images/Banner3.avif";
import b1 from "../Images/b1.png";
import HeroSection from "../Components/HeroSection";
import b2 from "../Images/b2.png";
import b3 from "../Images/b3.png";
import ProCart from "../Components/ProCart";
import { FaRegEye } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import item1 from "../Images/gro.png";
import item2 from "../Images/spi.png";
import { GoGoal } from "react-icons/go";
import { SlDiamond } from "react-icons/sl";
import Cat from "../Pages/Cat";
import Certification from "../Images/certification.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper max-w-[100vw] min-h-[100vh]">
      <HeroSection />

      {/* Section 1 start  */}
      {/* <div className="Adds min-h-[60vh] lg:h-[60vh] max-w-[1200px] gap-6 mx-auto flex justify-center items-center mt-20 px-2 flex-wrap ">
        <div className="left w-[100%] sm:max-w-[400px] h-[90%] bg-[#f4ffef] flex flex-col items-center  rounded-sm justify-evenly md:items-center shadow-md relative p-4 overflow-hidden">
          <h1 className="title1 relative z-40 text-4xl text-center text-slate-800 my-4 opacity-80 font-bold drop-shadow-md w-[100%] sm:max-w-[90%]">
            Premium-quality dry fruits
          </h1>
          <img src={b1} alt="" className=" max-w-[300px] md:max-w-[300px] " />
          <p className="text-slate-700 absolute  bottom-3 z-40 text-lg font-medium  ">
            {" "}
            Ideal for healthy snacking and culinary use.
          </p>
        </div>

        <div className="right flex  flex-col justify-between items-center gap-4 h-[90%]">
          <div
            className="top w-[100%] sm:max-w-[500px] h-[50%] overflow-hidden bg-green-50 sm:bg-slate-50 flex justify-start items-start shadow-md relative p-3 before:absolute
           before:top-0 before:left-0 before:z-10 before:contents-[''] before:w-[100%] before:h-[100%] before:bg-[#00000033] sm:before:hidden "
          >
            <div className="content z-40 relative w-[7 0%]">
              <h1 className="title1  text-xl text-white sm:text-slate-800 sm:text-xl  opacity-80 font-bold drop-shadow-md max-w-[90%]">
                Aromatic and flavorful spices sourced from the finest regions of
                India.
              </h1>
              <p className="text-xs font-medium my-2 drop-shadow-lg">
                Bulk supply for retailers and distributors.
              </p>
              <p className="text-green-600 text-xs font-medium drop-shadow-lg">
                We offer turmeric, cumin, black pepper, cardamom, and more.
              </p>
            </div>
            <img
              src={b2}
              alt=""
              className=" max-w-[220px] z-10 absolute -bottom-12 -right-12 "
            />
          </div>
          <div
            className="bottom w-[100%] sm:max-w-[500px] h-[50%] overflow-hidden bg-red-50 flex justify-start items-start shadow-md relative p-3 before:absolute
           before:top-0 before:left-0 before:z-10 before:contents-[''] before:w-[100%] before:h-[100%] before:bg-[#00000023] sm:before:hidden "
          >
            <div className="content z-40 relative w-[70%]">
              <h1 className="title1  text-2xl text-white sm:text-slate-800 sm:text-xl  opacity-80 font-bold drop-shadow-md max-w-[90%]">
                Sourced from the best farms.
              </h1>
              <p className="text-xs font-medium my-2 drop-shadow-lg">
                Bulk supply for retailers and distributors.
              </p>
              <p className="text-slate-600 text-xs font-medium drop-shadow-lg">
                We ensure high-quality staples for daily consumption.
              </p>
              <button className="btn rounded-full  py-1.5 mt-10  bg-red-300 opacity-75  px-3 sm:text-xs font-bold text-slate-800 shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear ">
                see more
              </button>
            </div>
            <img
              src={b3}
              alt=""
              className=" max-w-[220px] z-10 absolute -bottom-12 -right-12 "
            />
          </div>
        </div>
      </div> */}
      {/* section 1 end  */}

      {/* vision section start  */}

      <div className="vision-wrapper relative">
        {/* The design is temporarily on hold for better idea  */}
        {/* <div className="crossMethod cross-method h-[40%] absolute z-10 bottom-0  blur-2xl w-full"></div> */}
        {/* .heading   start  */}
        <h1 className="pro-title px-1 sm:px-0 font-bold text-6xl my-32 text-center relative z-30 ">
          Vision
          <span className=" text-slate-600 drop-shadow-lg">& Mission</span>
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
        {/* <h1 className="pro-title px-1 sm:px-0 font-bold text-6xl mt-20 text-center">
          Featured{" "}
          <span className=" text-slate-600 drop-shadow-lg">Products</span>
        </h1> */}

        {/* pro container start  */}
        <div className="pro-Container max-w-full mx-auto flex justify-center items-center gap-16 flex-wrap ">
          {/* <ProCart img={item1} color={"bg-[#faf2e6]"} />
          <ProCart img={item2} color={"#f8f8f8"} />
          <ProCart img={item1} color={"#ffefd7"} />
          <ProCart img={item2} color={"bg-[#fffdf1]"} />
          <ProCart img={item1} color={"#ffefd7"} />
          <ProCart img={item2} color={"#fff7e6"} />
          <ProCart img={item1} color={"#f9f9f9"} /> */}
          <Cat />
        </div>
        {/* pro container end  */}
      </div>
      {/* Section 2 end products  */}

      {/* Section 3 start  */}
      <div className="service my-28">
        <h1 className="pro-title px-1 sm:px-0 font-bold text-6xl my-20 text-center">
          Export <span className=" text-slate-600 drop-shadow-lg">Service</span>
        </h1>

        <div className="export-container h-[60vh] w-full bg-slate-50 relative ">
          {/* added bg image to this div   */}
          {/* .absolute content start  */}
          <div className="service-content w-[90%] flex-wrap lg:py-7 shadow-lg absolute -bottom-16 left-[50%] -translate-x-[50%] flex justify-center items-center gap-12 py-4  min-h-[14vh] px-4 bg-[#ffffff] z-50 ">
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
              className="service-highlightd flex justify-start items-start gap-6 border-b pb-6 max-w-[300px] pr-6 lg:border-r lg:border-b-0 "
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
            <div
              data-aos="fade-up"
              className="service-highlightd flex justify-start items-start gap-6 max-w-[300px] pr-6  lg:border-r lg:border-b-0"
            >
              <div className="left mt-2">
                <img
                  src="https://rntest1.myshopify.com/cdn/shop/t/15/assets/7-support.svg?v=168061668629657343601653315640"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="title font-bold text-md mb-2">
                  Online Customers Support 24/7
                </div>
                <div className="des text-xs">
                  We ensure the product quality that you can trust easily
                </div>
              </div>
            </div>
            {/* Sh1 end  */}
          </div>
          {/* absolute content end  */}
        </div>
      </div>
      {/* section 3 end  */}

      {/* section 4 start  */}
      <div className="Certification-wrapper mt-48">
        <h1 className="pro-title px-1 sm:px-0 font-bold text-5xl my-20 text-center">
          We are{" "}
          <span className=" text-[crimson] underline drop-shadow-lg">
            Certified
          </span>
        </h1>

        <div className="certificate w-full min-h-[50vh] bg-[#384b4b] flex flex-col sm:flex-row justify-around items-center  overflow-hidden shadow-md  ">
          <div className="left md:w-[30%]">
            <h1
              data-aos="slide-up"
              className="title text-4xl font-semibold leading-[50px] text-white px-1 "
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
            className="right w-[90%] md:w-[50%] flex justify-center items-center overflow-hidden"
          >
            <img
              src={Certification}
              alt=""
              className=" w-[60%] object-cover "
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
