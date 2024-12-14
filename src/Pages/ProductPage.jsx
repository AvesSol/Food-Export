import React from "react";
import Cat from "./Cat";
import Products from "../Components/Products"
import productData from "../Data/productData.json"
import { useLocation } from "react-router-dom";
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
    <Products products={filteredProducts} selectedCategory={selectedCategory} />
    </>
  );
};

export default ProductPage;
