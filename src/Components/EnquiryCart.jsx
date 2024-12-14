import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const EnquiryCart = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [user_name, setUser_name] = useState("");
  const [user_phn, setUser_phn] = useState("");
  const [user_email, setUser_email] = useState("");
  const [closeForm, setCloseForm] = useState(false);
  const [clearCart, setClearCart] = useState(false);
  const data = JSON.parse(localStorage.getItem("cart"));

  const generateProductTable = () => {
    let tableContent = "";
    data.forEach((product) => {
      tableContent += `
        <tr>
          <td>${product.productName}</td>
          <td>${product.quantity}</td>
          <td>${product.unit}</td>
        </tr>
      `;
    });

    return `
      <h2>Product List</h2>
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="padding: 8px; text-align: left;">Product Name</th>
            <th style="padding: 8px; text-align: left;">Quantity</th>
            <th style="padding: 8px; text-align: left;">Unit</th>
          </tr>
        </thead>
        <tbody>
          ${tableContent}
        </tbody>
      </table>
    `;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Prepare the email content with the product list
    const productListHTML = generateProductTable();

    // Template parameters
    const templateParams = {
      //   message: productListHTML,  // Dynamic HTML content
      to_name: `${user_name}`,
      to_email: `${user_email}`,
      to_phn: `${user_phn}`,
      // message: "Thank you for reaching out to us. We are pleased to provide you with the details of the products you're interested in. Please find the product list below:",  // The message to be sent in the email
      product_list: productListHTML, // The HTML content for the product list
    };

    // Send the email via EmailJS
    emailjs
      .send(
        "service_z6ue2a4", // Replace with your service ID
        "template_unyx53s", // Replace with your template ID
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
    setCloseForm(false);
    toast.success("Mail send successfully");
  };

  if (message) {
    localStorage.removeItem("cart");
  }

  useEffect(() => {}, [clearCart]);

  return (
    <div className="min-h-screen max-w-[1200px] mx-auto ">
      {/* taking user information start   */}
      {closeForm && (
        <div className="userInfo  fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-[#0000006e] flex justify-center items-center">
          <form
            onSubmit={sendEmail}
            action=""
            className="userForm p-2 py-8 relative z-50 rounded-lg min-h-[40%] flex justify-center items-center flex-col min-w-[40%] bg-[#fffffff0] backdrop-blur-sm"
          >
            {/* close form  */}
            <div
              onClick={() => {
                setCloseForm(false);
              }}
              className="close absolute z-50 text-xl text-green-800  right-2 top-2 "
            >
              <IoMdClose />
            </div>
            {/* close form ends  */}
            <div className="info1 w-[80%] mx-auto">
              <label htmlFor="name" className="w-[100%]">
                Name
              </label>
              <input
                required
                value={user_name}
                onChange={(e) => {
                  setUser_name(e.target.value);
                }}
                type="text"
                className="w-[100%] p-1.5 rounded-md bg-[#f4ffef] border"
              />
            </div>
            <br />

            <div className="info1 w-[80%] mx-auto">
              <label htmlFor="email" className="w-[100%]">
                Email
              </label>
              <input
                required
                value={user_email}
                onChange={(e) => {
                  setUser_email(e.target.value);
                }}
                type="email"
                className="w-[100%] p-1.5 rounded-md bg-[#f4ffef] border"
              />
            </div>
            <br />
            <div className="info1 w-[80%] mx-auto">
              <label htmlFor="phn" className="w-[100%]">
                Phone
              </label>
              <input
                required
                value={user_phn}
                onChange={(e) => {
                  setUser_phn(e.target.value);
                }}
                type="number"
                maxLength="12"
                className="w-[100%] p-1.5 rounded-md bg-[#f4ffef] border"
              />
            </div>
            <br />

            <button
              type="submit"
              disabled={data ? isSending : true}
              className="p-1.5 font-semibold float-right w-[80%] bg-green-600 text-white"
            >
              {data ? (
                "Send Mail"
              ) : (
                <Link
                  to={"/products/allproducts"}
                  className="text-white w-full"
                >
                  Add Products First
                </Link>
              )}
            </button>
          </form>
        </div>
      )}
      {/* taking user info ends  */}

      {/* Design div start  */}
      <div className="designDiv absolute top-0 left-0 rotate-45 bg-green-200 z-10"></div>
      {/* Design Div end  */}

      {/* Title Start  */}
      <h1 className="text-4xl text-green-800 font-bold w-fit mx-auto mt-28 text-center">
        Enquiry{" "}
        <span className="text-[crimson] relative">
          Cart
          <div className="leftAnimLine line absolute  -bottom-1 w-[50%] bg-[crimson] h-[2px]"></div>
        </span>
        <br />
        <span className="text-sm mt-3 mx-auto font-medium text-slate-600">
          Varad Exporter
        </span>
      </h1>
      {/* title Ends  */}

      {/* Table Start  */}
      <div className="enq-table bg-slate-0 my-24 p-2 rounded-md">
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <thead>
            <tr className="bg-green-100">
              <th className="border border-gray-400 px-4 py-2">Product Name</th>
              <th className="border border-gray-400 px-4 py-2">Quantity</th>
              <th className="border border-gray-400 px-4 py-2">Unit</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data ? (
              data.map((product, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2">
                    {product.productName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {product.unit}
                  </td>
                </tr>
              ))
            ) : (
              <h1 className="p-1.5"> No Product added </h1>
            )}
          </tbody>
        </table>
        <button
          onClick={() => {
            setCloseForm(true);
          }}
          // disabled={isSending}
          className="hero-btn opacity-0 flex justify-center items-center rounded-sm py-3 mt-8 bg-[#cdfacd] border border-[white]  w-[140px] text-sm font-bold text-green-800 shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear float-right"
        >
          {isSending ? <p className="mailLoading"></p> : "Send Email"}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("cart");
            setClearCart(!clearCart);
          }}
          // disabled={isSending}
          className="hero-btn opacity-0 flex justify-center mx-2 items-center rounded-sm py-3 mt-8 bg-[#facdcd] border border-[white]  w-[140px] text-sm font-bold text-green-800 shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear float-right"
        >
          clear cart
        </button>
        <p>{message && <p className="mt-2 text-green-500">{message}</p>}</p>
      </div>
      {/* Table Ends  */}
    </div>
  );
};

export default EnquiryCart;
