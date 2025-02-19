import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { CommonContext } from "../ContentProvider/RealtimeContext";
import { MdOutlineDone } from "react-icons/md";

const ProCart = ({ img, color, product }) => {
  const { setCartCount, cartCount, setCart } = useContext(CommonContext);
  const [productName, setProductName] = useState(`${product.title}`);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");
  const [added, setAdded] = useState(false)

  let cole = color;
  const units = [
    "kg",
    "g",
    "lbs",
    "oz",
    "liters",
    "ml",
    "pcs",
    "boxes",
    "bags",
    "m",
    "cm",
    "feet",
    "yard",
    "gallons",
  ];

  /// Handle the "Add to Cart" logic
  const addToCart = () => {
    if (productName && quantity && unit) {
      const newProduct = { productName, quantity, unit };

      // Retrieve existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Add the new product to the existing cart
      const updatedCart = [...existingCart, newProduct];

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update state with the new cart (optional)
      // toast.success("Added Successfully");
      setCartCount(cartCount + 1);
      setCart(updatedCart);
      setAdded(true)
      toast.success(`${productName} added`);
    } else {
      toast.warning(`choose the Unit for ${productName}`);
    }
  };

  // Handle quantity change, ensure it is between 1 and 10
  const handleQuantityChange = (e) => {
    let newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  // Handle unit change
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };


  useEffect(() => {
    // Retrieve and parse cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Check if the product is already in the cart
    const isAdded = cart.some((item) => item.productName === productName);

    // Update the state
    setAdded(isAdded ? true :false);
  }, [productName]);

  return (
    <div className="group flex justify-between items-center flex-col h-[340px] w-[240px] shadow-lg rounded-xl overflow-hidden relative">
      {/* add datra form  */}
      <div className="addData absolute top-0 left-0 w-full h-[50%] hidden bg-white group-hover:block"></div>
      {/* add datra form enbds  */}

      {/* // top div start  */}
      <div
        style={{ backgroundColor: `${cole}` }}
        className={`top h-[75%]  group w-full ${color} relative z-10 hover:faded`}
      >
        <img
          src={product.img}
          alt=""
          className="h-[100%] w-[100%] relative z-10  object-cover "
          loading="lazy"
        />

        <div className="hover-content static z-40">
          <div
            className="view1 opacity-0 z-50 min-h-[50%] py-1 w-full group-hover:opacity-100 overflow-hidden bg-[#ffffff2f] backdrop-blur-md transition-all duration-150 ease-linear
           absolute top-0 left-0 text-black"
          >
            <div className="unit p-2 flex justify-between items-start">
              <label
                htmlFor="unit"
                className="font-semibold text-sm text-white drop-shadow-lg"
              >
                Unit :{" "}
              </label>
              <select
                className="text-sm mr-2 p-0.5"
                onChange={handleUnitChange}
                value={unit}
              >
                <option value="">unit</option>
                {units.map((unitOption, index) => (
                  <option key={index} value={unitOption}>
                    {unitOption}
                  </option>
                ))}
              </select>
            </div>
            <div className="qun p-2 flex justify-between items-start">
              <label htmlFor="qun" className="font-semibold text-sm text-white drop-shadow-lg">
                Quantity :{" "}
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                id="qun"
                value={quantity}
                onChange={handleQuantityChange}
                className="border-none p-1 w-fit mx-2 outline-none "
              />
            </div>

            <button
              onClick={addToCart}
              disabled={added ? true : false}
              className="p-1.5 bg-[#f4ffef] font-medium px-3 text-sm mx-auto rounded-md w-fit ml-2"
            >
              {added ? (
                <p className="added flex justify-center items-center">
                  {" "}
                  <span>Added</span>{" "}
                  <span className="p-1 text-xs rounded-full bg-green-600 text-white ml-2">
                    <MdOutlineDone />
                  </span>{" "}
                </p>
              ) : (
                "Add to cart"
              )}
            </button>
          </div>
        </div>
      </div>
      {/* top div end  */}

      {/* bottom div start  */}
      <div className="bottom h-[27%] p-4 w-full bg-slate-50 relative z-20 text-center text-green-800 font-bold pb-0.5 ">
        <p className="text-slate-600 drop-shadow-md"> {product.title}
          
        {product.flavours && <h2 className="text-green-400 text-sm drop-shadow-sm my-1 font-medium">  ({product.flavours  })</h2> }</p>
      </div>
      {/* bottom div ends  */}
    </div>
  ); 
};

export default ProCart;
