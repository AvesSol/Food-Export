import React from "react";
import Products from "../Components/Products"
import productData from "../Data/productData.js"
import { useLocation } from "react-router-dom";
import WhatsApp from "../Components/WhatsApp.jsx";
const ProductPage = () => {

  let location = useLocation();
  let selectedCategory = location.pathname.split("/").pop();

  let filteredProducts;
  if(selectedCategory != "allproducts"){
     filteredProducts = productData.filter(
      (product) => product.category === selectedCategory
    );
  }else{
     filteredProducts = productData;
  }
  
  return (
    <>
    <WhatsApp/>
    <Products products={filteredProducts} selectedCategory={selectedCategory} />
    </>
  );
};

export default ProductPage;
