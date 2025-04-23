import React from "react";
import Home from "../pages/Home";
import Footer from "../pages/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <Home />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
