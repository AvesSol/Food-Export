import React, { useState } from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import Back1 from "../assets/images/Back1.avif";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  const [whPopup, setWhPopup] = useState(false);

  return (
    <div className="ContactWrapper relative">
      {/* // whats app integration  start  */}
      <div className={`"whatsApp absolute bottom-0 sm:bottom-12 z-[40] sm:right-12`}>
        <div
          className={`"whatsApp-popup h-[40vh] min-w-[18vw] shadow-lg bg-white  border rounded-xl overflow-hidden ${
            whPopup ? "opacity-100 hero-title1" : "opacity-0"
          }`}
        >
          <div className="whatsappColor top h-[30%]  p-4 ">
            <div className="text-white flex justify-around items-start gap-4 mt-2">
              <div className="left">
                <IoLogoWhatsapp color="white" fontSize={"2rem"} />
              </div>
              <div className="right">
                <h1 className="title text-xl mb-2">Start conversation</h1>
                <div className="des text-xs">
                  Hi click one of our member bellow to chat on whatsapp
                </div>
              </div>
            </div>
          </div>

          <div className={`contact bg-white overflow-y-auto my-2 mt-4`}>
            {/* con 1 start  */}
            <div className="contact1 h-[80px] bg-slate-50 border-l-[2px] border-green-500 flex justify-between items-center p-1.5 px-2 w-[90%] mx-auto">
              {/* icons div start  */}
              <a
                href={`https://wa.me/${9923504881}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon flex gap-4  items-start">
                  {/* <RiWhatsappFill  className=""/> */}
                  <RiWhatsappFill
                    className="text-green-500"
                    fontSize={"3rem"}
                  />
                  {/* con name start  */}
                  <div className="con-name">
                    <h1 className="text-slate-500">
                      Varad Food Products India
                    </h1>
                    <h2 className="text-slate-400 text-xs">
                      Varad Food Products India
                    </h2>
                  </div>
                </div>{" "}
              </a>

              <div className="icon">
                <IoLogoWhatsapp
                  className="text-green-500"
                  fontSize={"1.4rem"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`"icons text-center float-right mr-6 mt-6 mb-2 ${!whPopup ? "animate-bounce" : ""}`}>
          <IoLogoWhatsapp
            onClick={() => {
              setWhPopup(!whPopup);
            }}
            fontSize={"3rem"}
            className="text-green-600"
          />
        </div>
      </div>
      {/* whats app integraion ends  */}
      <div
        className="HeroSection  h-[300px] bg-cover bg-center bg-no-repeat    relative flex  items-center"
        style={{ backgroundImage: `url(${Back1})` }}
      >
        <div
          className="absolute ring-opacity-95 bg- [#071c1f] h-full w-full z-[8]  "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(7, 28, 31), rgb(7, 28, 31), rgb(7, 28, 31), rgba(7, 28, 31, 0.77), rgba(7, 28, 31, 0.92))",
          }}
        ></div>

        <div className="section w-full">
          <div className="max-w-[1200px]  px-9  relative z-50 h-fit flex justify-between items-center mx-auto flex-col md:flex-row  ">
            <div className="">
              <p className="text-[#80b500] font-medium">WELCOME TO OUR STORE</p>
              <h1 className="font-bold text-3xl md:text-[56px] text-white text-center md:text-start leading-[4rem]">
                Contact
              </h1>
            </div>
            <div className="flex gap-5 h-fit text-white font-bold items-center">
              <li className="list-none">Home</li>
              <div className="w-[2px] h-[14px] opacity-60 bg-white"></div>
              <li className="list-none text-[#80b500]">Contact</li>
            </div>
          </div>
        </div>
      </div>

      <section className="contact mt-16">
        <div className="max-w-[1200px] mx-auto text-[#071c1f]">
          <div className="flex mx-5 gap-5 flex-wrap md:flex-nowrap">
            <div className="p-[50px_30px_25px] w-[370px] shadow-md mx-auto mb-10 ">
              <img
                src={icon1}
                alt=""
                className="mx-auto max-w-[80px] mb-[35px]"
              />
              <h3 className="font-bold text-[24px] mb-[15px] text-center">
                Email Address
              </h3>
              <p className="mt-3 text-center">
                headoffice@varadindiaglobal.com
              </p>
              {/* <p className=" text-center mt-2 mb-10">
                headoffice@varadindiaglobal.com
              </p>{" "} */}
            </div>

            <div className="p-[50px_30px_25px] w-[370px] shadow-md mx-auto mb-10 ">
              <img
                src={icon2}
                alt=""
                className="mx-auto max-w-[80px] mb-[35px]"
              />
              <h3 className="font-bold text-[24px] mb-[15px] text-center">
                Phone Number
              </h3>
              <p className="mt-3 text-center">+91 9923504881</p>
              <p className=" text-center mt-2 mb-10">+91 9625879711</p>{" "}
            </div>

            <div className="p-[50px_30px_25px] w-[370px] shadow-md mx-auto mb-10 ">
              <img
                src={icon3}
                alt=""
                className="mx-auto max-w-[80px] mb-[35px]"
              />
              <h3 className="font-bold text-[24px] mb-[15px] text-center">
                Office Address
              </h3>
              <p className="mt-3 text-center">
                Dhaleshwar,block No.3 survey No.137, Santosh Hybrid Seeds, NH
                753H, Jalna.
              </p>
              <p className=" text-center mt-2 mb-10">Maharashtra-431203.</p>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="contact mt-16">
        <div className="max-w-[1200px] mx-6 md:mx-auto text-[#071c1f]">
          <div
            className="md:p-[40px_50px_50px] px-5 sm:py-10 min-h-fit mb-2 sm:mb-0"
            style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-[#071c1f] text-[26px] font-bold mb-[30px]">
              Contact Us
            </h3>
            <form>
              <div className="flex gap-10 flex-col sm:flex-row">
                <div className="w-full relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your name"
                    className="h-[65px] pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
                  />
                  <FaUser className="absolute right-5 top-[40%] text-green-600" />
                </div>
                <div className="w-full relative">
                  <MdEmail className="absolute right-5 top-[34%] text-green-600 text-[1.3rem]" />

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="h-[65px] pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
                  />
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <div className="w-full relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your number"
                    className="h-[65px] pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
                  />
                  <IoIosCall className="absolute right-5 top-[40%] text-green-600 text-[1.3rem]" />
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <div className="w-full relative">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter your message"
                    className="pt-4 pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
                  ></textarea>

                  <FaPencil className="absolute right-5 top-[20px] text-green-600 text-[1.3rem]" />
                </div>
              </div>
              <button className="text- relative  p-4 border-[1px] border-[#80b500]  mt-10 group hover:border hover:border-black">
                <span className="z-20 relative group-hover:text-black text-white font-medium">
                  {" "}
                  Send
                </span>

                <div className="absolute bg-[#80b500] w-full group-hover:w-0 transition-all duration-200 h-full top-0 right-0 z-10 mx-auto"></div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;