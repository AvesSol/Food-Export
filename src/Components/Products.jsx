import React from "react";
import ProCart from "./ProCart";
const Products = ({ products, selectedCategory }) => {
  const title = selectedCategory == "allproducts" ? "Products" : products[0].categoryTitle;

  return (
    <div className="min-h-screen w-full my-20">
      <div className="products-breif-details my-12 max-w-[1200px] mx-auto">
        <div className="title text-5xl text-center font-bold text-[crimson] drop-shadow-md relative w-fit mx-auto">
          {title}
          <div className="leftAnimLine line absolute  -bottom-1 w-[50%] bg-[crimson] h-[2px]"></div>
        </div>
      </div>

      <div className="hero-title1 products-items max-w-[1200px] mx-auto my-32 flex justify-center items-start gap-10 flex-wrap ">
        {products.map((item, index) => (
          <ProCart product={item} key={index} color={"#f8f8f8"} />
        ))}
      </div>
    </div>
  );
};

export default Products;
