import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';


const lecture_2_2 = () => {
    return (
        <div>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Тема 2.2. Конфликты при установке оборудования и способы их устранения</title>
      </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                <h2 className="h2_main">Раздел 2. Текущее техническое обслуживание сети</h2>
                    <h3 className="h3_main">Тема 2.2. Конфликты при установке оборудования и способы их устранения</h3>
                    <Button link_left="/book/lecture_2_1" link_rigth="/book/lecture_2_3" />
                    <div className="charter">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_2_2