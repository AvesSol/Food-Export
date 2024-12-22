import React, { createContext, useEffect, useState } from "react";

// Create the Context
const CommonContext = createContext();

// Create the Provider Component
const CommonProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); // Initialize cartCount with 0 or desired default value
  
  
  useEffect(()=>{
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if(cartItems){
      setCart(cartItems);
      setCartCount(cartItems.length);
    }
  },[])

  return (
    <CommonContext.Provider value={{ cartCount, setCartCount, cart, setCart }}>
      {children}
    </CommonContext.Provider>
  );
};

// Export the Context
export { CommonContext }; // Exporting the context itself for use with useContext
export default CommonProvider; // Exporting the provider as default
