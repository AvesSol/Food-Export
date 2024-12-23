import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsApp = () => {
  const [whPopup, setWhPopup] = useState(false);

  return (
    <>
      {/* // whats app integration  start  */}
      <div
        className={`"whatsApp fixed bottom-0 z-[60] sm:right-12 w-[100%] sm:w-fit`}
      >
        <div
          className={`"whatsApp-popup h-[40vh] mx-2 min-w-[18vw] shadow-lg bg-white  border rounded-xl overflow-hidden ${
            whPopup ? "opacity-100 hero-title1" : " hidden sm:opacity-0"
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

        <div
          className={`"icons bg-[#ffffff14] backdrop-blur-lg p-[5px] rounded-full text-center sm:ml-0 float-right mr-6 mt-6 mb-2 w-fit  ${
            !whPopup ? "sm:animate-bounce" : ""
          }`}
        >
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
    </>
  );
};

export default WhatsApp;
