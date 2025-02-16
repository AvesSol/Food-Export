import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import EnquiryCart from "./Components/EnquiryCart";
import ProductPage from "./Pages/ProductPage";
import ScrollToTop from "./Components/ScrollToTop";
import UserInfoForm from "./Components/UserInfoForm";

function App() {
  const [cartItems, setCartCount] = useState(0);
  console.log("cart items ", cartItems);
  const [closeForm, setCloseForm] = useState(false);
 let showIntroForm = localStorage.getItem("filledIntroForm")

  useEffect(() => {

    if(!showIntroForm){
      setTimeout(() => {
        setCloseForm(true)
      }, 3000);
    }
  }, [])
  

  return (
    <div className="mainWrapper min-h-screen overflow-y-auto overflow-x-hidden">
      <Navbar cartItems={cartItems} />
      <ScrollToTop />
     {closeForm && <UserInfoForm closeForm={closeForm} setCloseForm={setCloseForm}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products/:cat"
          setCartCount={setCartCount}
          element={<ProductPage />}
        />
        <Route
          path="/cart"
          setCartCount={setCartCount}
          element={<EnquiryCart />}
        />
      </Routes>

      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
