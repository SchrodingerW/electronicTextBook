import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';


const lecture_1_6 = () => {
    return (
        <div>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Тема 1.6. Виды программного, аппаратного и комбинированного контроля</title>
      </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                <h2 className="h2_main">Раздел 1. Организация технического обслуживания ЭВМ</h2>
                    <h3 className="h3_main">Тема 1.6. Виды программного, аппаратного и комбинированного контроля</h3>
                    <Button link_left="/book/lecture_1_5" link_rigth="/book/lecture_17" />
                    <div className="charter">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_1_6