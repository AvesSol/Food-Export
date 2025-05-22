import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";

const UserInfoForm = ({ closeForm, setCloseForm }) => {
  const [isSending, setIsSending] = useState(false);
  const [user_name, setUser_name] = useState("");
  const [user_phn, setUser_phn] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_mesage, setUser_mesage] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Template parameters
    const templateParams = {
      //   message: productListHTML,  // Dynamic HTML content
      to_name: `${user_name}`,
      to_email: `${user_email}`,
      to_phn: `${user_phn}`,
      user_mesage: `${user_mesage}`,
      // message: "Thank you for reaching out to us. We are pleased to provide you with the details of the products you're interested in. Please find the product list below:",  // The message to be sent in the email
    };

    // Send the email via EmailJS
    emailjs
      .send(
        "service_z6ue2a4", // Replace with your service ID
        "template_otn1iog", // Replace with your template ID
        templateParams,
        "EllD6GTp4JT4GCxfE" // Replace with your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessage("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setMessage("Failed to send email.");
        }
      )
      .finally(() => setIsSending(false));
    toast.success("we'll Contact you soon");
    localStorage.setItem("filledIntroForm", true);
    setCloseForm(false);
  };

  return (
    <div className="userInfo overflow-y-auto fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-[#000000b7] flex justify-center items-center">
      <div className="formwrapper bg-white p-2 w-[95vw] sm:w-fit px-4 sm:px-8 py-3 h-auto">
        <div className="closeform w-[100%] flex justify-between items-center text-2xl mb-4">
          <p className="font-semibold relative pb-0.5">
            Contact
            <div className="leftAnimLine line absolute  bottom-1 w-[50%] bg-green-600 h-[2px]"></div>
          </p>{" "}
          <span
            onClick={() => {
              setCloseForm(false);
            }}
          >
            {" "}
            <IoMdClose />{" "}
          </span>{" "}
        </div>
        <form onSubmit={sendEmail}>
          <div className="flex gap-10 flex-col sm:flex-row">
            <div className="w-full relative">
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e) => {
                  setUser_name(e.target.value);
                }}
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
                required
                onChange={(e) => {
                  setUser_email(e.target.value);
                }}
                placeholder="Enter your email"
                className="h-[65px] pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
              />
            </div>
          </div>

          <div className="flex gap-10 mt-10">
            <div className="w-full relative">
              <input
                type="number"
                name=""
                id=""
                required
                onChange={(e) => {
                  setUser_phn(e.target.value);
                }}
                placeholder="Enter your number"
                className="h-[65px] pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
              />
              <IoIosCall className="absolute right-5 top-[40%] text-green-600 text-[1.3rem]" />
            </div>
          </div>

          <div className="flex gap-10 mt-10">
            <div className="w-full relative">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                required
                onChange={(e) => {
                  setUser_mesage(e.target.value);
                }}
                placeholder="Enter your message"
                className="pt-4 pl-[20px] pr-[40px] w-full border-[2px] border-[#e4ecf2] outline-[1px] outline-lime-400"
              ></textarea>

              <FaPencil className="absolute right-5 top-[20px] text-green-600 text-[1.3rem]" />
            </div>
          </div>
          <p>{message && <p className="mt-2 text-green-500">{message}</p>}</p>
          <button
            type="submit"
            className=" relative z-50  p-4 border-[1px] border-[#80b500]  mt-10 group hover:border hover:border-black"
          >
            <span className="z-20 relative group-hover:text-black text-white font-medium">
              {" "}
              Send
            </span>
            <div className="absolute bg-[#80b500] w-full group-hover:w-0 transition-all duration-200 h-full top-0 right-0 z-10 mx-auto"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoForm;
