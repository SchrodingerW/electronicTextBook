import React from "react";
import Navbar from "./components/Nav/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import './index.css';
import './bootstrap.min.css';

const index = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default index 