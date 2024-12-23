import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-20 bg-slate-200  flex justify-around items-center flex-wrap ">
      <div className="left text-md my-4 font-semibold text-green-800 drop-shadow-sm ">
        {" "}
        @Copyright reserved 2024 |
      </div>
      <div className="right flex justify-around text-sm font-medium list-none gap-4 sm:gap-10 flex-wrap">
        <Link to="/">
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link to="/products/allproducts">
          {" "}
          <li>Products</li>{" "}
        </Link>
        <Link to="/about">
          {" "}
          <li>About</li>{" "}
        </Link>
        <Link to="/contact">
          {" "}
          <li>Contact</li>{" "}
        </Link>
        <Link to="/cart">
          {" "}
          <li>Cart</li>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
