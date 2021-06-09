import React from "react";
import styled from 'styled-components';
import MainImg from "./main.png";
import Card from "../Cards/Cards";

const Base = styled.nav`
.main {
    display: flex;
    justify-content: center;
    color: rgb(0, 0, 0);
}

h2,.h3_main, .img_main, .main_h3 {
    text-align: center;
}
h2{
    margin-top:65px;
}
h3{
    margin-top:10px;
}
li{
    margin-left:20px;
}
.h3_main{
    margin:15px 0 17px 0;
}

`

const Main = () => {

    return (
        <Base>
            <div className="main">
                <div className="main_item">
                    <h2>Электронное пособие по дисциплине<br></br>«Техническое обеспечение ЭВМ»</h2>
                    <div className="img_main"><img src={MainImg} alt="" /></div>
                    <h3>Цель и задачи обучения по дисциплине:</h3>
                    <div className="main_text">Целью дисциплины «Техническое обслуживание ЭВМ» является формирование теоретических основ и практических навыков технического обслуживания ЭВМ.</div>
                    <h3>Задачи дисциплины:</h3>
                    <ul>
                        <li>изучение систем автоматического диагностирования;</li>
                        <li>восстановления видов программного, аппаратного и комбинированного контроля;</li>
                        <li>изучение видов неисправностей и характерных особенностей их проявления;</li>
                        <li>освоение диагностических программ общего и специального назначения и типовых алгоритмов обнаружения неисправностей.</li>
                    </ul>
                    <h3 className="h3_main">Содержание</h3>
                    <Card />
                </div>
            </div>
        </Base >
    )
}

export default Main
