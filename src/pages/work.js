import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Nav/Navbar";
import MainWork from "./components/Main/MainWork";
import Footer from "./components/Footer/Footer";

const work = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Практикум</title>
      </Helmet>
      <Navbar />
      <MainWork />
      <Footer />
    </div>
  )
}

export default work