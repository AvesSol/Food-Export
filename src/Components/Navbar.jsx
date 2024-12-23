import React, { useContext, useEffect, useState } from "react";
import { IoIosMail, IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import VaradLogo from "../Images/varadIcon.png";
import { FaBars } from "react-icons/fa6";
import { CommonContext } from "../ContentProvider/RealtimeContext";
const Navbar = () => {
  
  const {cartCount} =useContext(CommonContext);
  let location = useLocation();
  let endPoint = location.pathname.split("/").pop();

  const [openMenu, setOpenMenu] = useState(false);

  function closeWhileNavigate() {
    setOpenMenu(false);
  }

  return (
    <div
      className={` bg-[#f4ffef]  relative z-50 md:px-2 ${
        endPoint == "" || endPoint == "products"
          ? " bg-[#f4ffef] "
          : " bg-[white]"
      }`}
    >
      {/* // min Navbar start  */}
      <nav className="minNav-info max-w-[1200px] mx-auto  py-3 ">
        <div className="left flex justify-start items-center gap-4  flex-wrap">
          <li className="contact-det1 flex justify-center items-center gap-1 ml-4"> 
            <IoIosMail className="text-red-600" />
            <a href="mailto:headoffice@varadindiaglobal.com" target="_blank" rel="noopener noreferrer">
            <h className="co-title1 font-semibold text-sm ">headoffice@varadindiaglobal.com</h></a>
          </li>
         
        </div>
      </nav>
      {/* Min navbar end  */}
      <p className=" h-[1px] max-w-[100vw]  bg-[#c2c2c254] "></p>
      {/* Main nav bar start  */}
      <nav
        className={`Navbar flex justify-between items-center min-h-16 max-w-[1200px] mx-auto flex-wrap relative`}
      >
        <div className="logo font-bold w-[80%] sm:w-fit">
          <Link
            onClick={closeWhileNavigate}
            to="/"
            className="flex justify-start sm:justify-center gap-2 items-center"
          >
            {" "}
            <img src={VaradLogo} className="size-[60px] object-cover" alt="" loading="lazy" />
            <div className="right text-xl  sm:text-xl font-bold text-green-700">
              Varad Food{" "} Products India Pvt. Ltd. 
            </div>
          </Link>
        </div>
        <span
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className=" md:hidden text-xl mr-4"
        >
          {" "}
          <FaBars />{" "}
        </span>
        <div
          className={`Items  md:flex ${
            openMenu
              ? "bg-[#00000082] backdrop-blur-md z-50 fixed h-screen top-0 left-0 bottom-0 right-0 flex flex-col justify-start items-center gap-4 pt-28 text-white font-bold"
              : "hidden md:flex md:flex-row md:static md:justify-center items-center md:pt-0 gap-7 flex-wrap md:text-black"
          } 
              `}
        >
          {/* // Close menu  */}
          {openMenu && (
            <div className="close absolute z-50 top-0 right-0 w-full text-white text-2xl p-2 flex justify-between items-center font-bold">
              <Link
                onClick={closeWhileNavigate}
                to="/"
                className="flex justify-center gap-2 items-center"
              >
                {" "}
                <img
                  src={VaradLogo}
                  className="size-[60px] object-cover"
                  alt=""
                />
                <div className="right text-xl font-bold">
                  Varad Food{" "}
                  <span className="relative">
                    Products
                    <div className="leftAnimLine line absolute  -bottom-1 w-[60%] bg-[crimson] h-[2px]"></div>
                  </span>
                </div>
              </Link>
              <div
                className="close"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <IoMdClose />
              </div>
            </div>
          )}
          {/* close menu ends  */}
          <Link onClick={closeWhileNavigate} className="cursor-pointer" to="/">
            <li
              className={`items-Links list-none font-semibold text-sm hover:text-green-600 hover:-translate-y-1  transition-transform duration-200    ${
                endPoint == ""
                  ? "text-green-600 border-b py-1 border-green-700 hover:translate-y-0 "
                  : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link
            onClick={closeWhileNavigate}
            className="cursor-pointer"
            to="/products/allproducts"
          >
            <li
              className={`items-Links list-none font-semibold text-sm hover:text-green-600 hover:-translate-y-1  transition-transform duration-200    ${
                location.pathname.split("/")[1] == "products"
                  ? "text-green-600 border-b py-1 border-green-700 hover:translate-y-0"
                  : ""
              }`}
            >
              Products
            </li>
          </Link>
          <Link
            onClick={closeWhileNavigate}
            className="cursor-pointer"
            to="/about"
          >
            <li
              className={`items-Links list-none font-semibold text-sm hover:text-green-600 hover:-translate-y-1  transition-transform duration-200    ${
                endPoint == "about"
                  ? "text-green-600 border-b py-1 border-green-700 hover:translate-y-0"
                  : ""
              }`}
            >
              About Us
            </li>
          </Link>
          <Link
            onClick={closeWhileNavigate}
            className="cursor-pointer"
            to="/cart"
          >
            <li
              className={`items-Links relative list-none font-semibold text-sm hover:text-green-600 hover:-translate-y-1  transition-transform duration-200    ${
                endPoint == "cart"
                  ? "text-green-600 border-b py-1 border-green-700 hover:translate-y-0"
                  : ""
              }`}
            >
              Enquiry Cart
              {cartCount != 0 && (
                <span
                  className="absolute text-[8px] -top-2 -right-3 animate-bounce flex justify-center items-center size-[18px] p-0.5 rounded-full
                 bg-yellow-400 text-black"
                > {cartCount} </span>
              )}
            </li>
          </Link>
          <Link
            onClick={closeWhileNavigate}
            className="cursor-pointer"
            to="/contact"
          >
            <li
              className={`items-Links list-none font-semibold text-sm hover:text-green-600 hover:-translate-y-1  transition-transform duration-200    ${
                endPoint == "contact"
                  ? "text-green-600 border-b py-1 border-green-700 hover:translate-y-0"
                  : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </div>
      </nav>
      {/* Main nav bar end  */}
    </div>
  );
};

export default Navbar;
