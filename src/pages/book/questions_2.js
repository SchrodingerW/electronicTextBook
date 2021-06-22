import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';


const Questions_2 = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Раздел 2. Контрольные вопросы</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                    <h2 className="h2_main">Раздел 2. Текущее техническое обслуживание сети</h2>
                    <Button link_left="/book/lecture_2_4" link_rigth="/book/lecture_3_1" />
                    <div className="charter_book">
                    <h4 className="h3_main">Контрольные вопросы</h4>
                        <ol>
                            <li>Каким прибором можно протестировать локальную сеть?</li>
                            <li>Чем можно измерить напряжение?</li>
                            <li>Для чего предназначен амперметр?</li>
                            <li>Какие возможны конфликты при установке оборудования?</li>
                            <li>Чем аппаратные конфликты отличаются от программных?</li>
                            <li>К чему приводит перегрев процессора?</li>
                            <li>Для чего необходима модернизация СВТ?</li>
                            <li>Почему для выполнения различного вида задач необходима разная конфигурация СВТ?</li>
                            <div className="main_charter_point_delete">Тема 1.5. Взаимодействие и сравнительные характеристики систем автоматического контроля, диагностирования и восстановления</div>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Questions_2