import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
const EnquiryCart = () => {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const data = JSON.parse(localStorage.getItem("cart"));

  const generateProductTable = () => {
    let tableContent = '';
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
      to_name: 'Dear Customer',
      to_email: 'avmalik8@gmail.com',
      message: "Thank you for reaching out to us. We are pleased to provide you with the details of the products you're interested in. Please find the product list below:",  // The message to be sent in the email
      product_list: productListHTML,  // The HTML content for the product list
    };

    // Send the email via EmailJS
    emailjs
      .send(
        'service_v29eo8m', // Replace with your service ID
        'template_nsy3dxf', // Replace with your template ID
        templateParams,
        'lpddRcAQ3Kxt1wXez'  // Replace with your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setMessage('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setMessage('Failed to send email.');
        }
      )
      .finally(() => setIsSending(false));      
  };

  if(message){
    localStorage.removeItem("cart");
  }

  return (
    <div className="min-h-screen max-w-[1200px] mx-auto ">
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
            {data  ? data.map((product, index) => (
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
            )) : <h1 className="p-1.5"> No Product added </h1>}
          </tbody>
        </table>
        <button
          onClick={sendEmail}
          disabled={data ? isSending : true}
          // disabled={isSending}
          className="hero-btn opacity-0 rounded-sm py-3 mt-8 bg-[#cdfacd] border border-[white]  w-[140px] text-sm font-bold text-green-800 shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear float-right"
        >
          {isSending ? "Sending..." : "Send Email"}
        </button>
        <p>{message && <p className="mt-2 text-green-500">{message}</p>}</p>
      </div>
      {/* Table Ends  */}
    </div>
  );
};

export default EnquiryCart;
