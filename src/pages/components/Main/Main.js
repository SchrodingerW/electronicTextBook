import React from "react";
import MainImg from "./main.jpg";
import Card from "../Cards/Cards";
import './main.css';

const Main = () => {
    return (
        <div className="main">
            <div className="main_item">
                <h2 className="h2_center">Электронный учебник по дисциплине<br></br>«Техническое обеспечение ЭВМ»</h2>
                <div className="img_main"><img src={MainImg} alt="" /></div>
                <h3 className="h3_left">Цель и задачи обучения по дисциплине:</h3>
                <div className="main_text">Целью дисциплины «Техническое обслуживание ЭВМ» является формирование теоретических основ и практических навыков технического обслуживания ЭВМ.</div>
                <h3 className="h3_left">Задачи дисциплины:</h3>
                <ul>
                    <li className="li_main">изучение систем автоматического диагностирования;</li>
                    <li className="li_main">восстановления видов программного, аппаратного и комбинированного контроля;</li>
                    <li className="li_main">изучение видов неисправностей и характерных особенностей их проявления;</li>
                    <li className="li_main">освоение диагностических программ общего и специального назначения и типовых алгоритмов обнаружения неисправностей.</li>
                </ul>
                <h3 className="h3_center">Содержание</h3>
                <Card />
            </div>
        </div>

    )
}

export default Main
