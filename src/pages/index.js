import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Nav/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './index.css';
import './bootstrap.min.css';

const index = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Учебник по "ТО ЭВМ"</title>
      </Helmet>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default index