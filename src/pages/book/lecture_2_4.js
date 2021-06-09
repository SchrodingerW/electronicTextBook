import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import './book.css';

const lecture_2_4 = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="main_item">
                <h2 className="h2_main">Раздел 2. Текущее техническое обслуживание сети</h2>
                    <h3 className="h3_main">Тема 2.4. Модернизация и конфигурирование ЭВМ с учетом решаемых задач</h3>
                    <Button link_left="/book/lecture_2_3" link_rigth="/book/lecture_3_1" />
                    <div className="charter">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_2_4