import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommonProvider from "./ContentProvider/RealtimeContext.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CommonProvider>
      <App />
      <ToastContainer className="z-[1000]" />
      </CommonProvider>
    </StrictMode>
  </BrowserRouter>
);
