import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';


const lecture_1_5 = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="main_item">
                <h2 className="h2_main">Раздел 1. Организация технического обслуживания ЭВМ</h2>
                    <h3 className="h3_main">Тема 1.5. Взаимодействие и сравнительные характеристики систем автоматического контроля,<br></br> диагностирования и восстановления</h3>
                    <Button link_left="/book/lecture_1_4" link_rigth="/book/lecture_1_6" />
                    <div className="charter">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_1_5