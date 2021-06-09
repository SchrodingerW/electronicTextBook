import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';


const lecture_3_1 = () => {
    return (
        <div>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Тема 3.1. Обслуживание дисковых систем серверов и способы выявления <br></br>неисправностей на рабочих станциях</title>
      </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                <h2 className="h2_main">Раздел 3. Обслуживание серверов и рабочих станций</h2>
                    <h3 className="h3_main">Тема 3.1. Обслуживание дисковых систем серверов и способы выявления <br></br>неисправностей на рабочих станциях</h3>
                    <Button link_left="/book/lecture_2_4" link_rigth="/book" />
                    <div className="charter">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_3_1