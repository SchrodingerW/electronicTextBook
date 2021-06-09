import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Nav/Navbar";
import MainBook from "./components/Main/MainBook";
import Footer from "./components/Footer/Footer";

const book = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Учебник</title>
      </Helmet>
      <Navbar />
      <MainBook />
      <Footer />
    </div>
  )
}

export default book