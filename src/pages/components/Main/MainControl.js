import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';

const Base = styled.nav`
.main {
    display: flex;
    justify-content: center;
    color: rgb(0, 0, 0);
}

.main_charter {
    font-weight: bold;
    border-bottom: 2px solid rgb(0, 0, 0);
    padding: 5px 0px;
}
h2,.h3_main, .img_main{
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
.links {
	position: relative;
	color: black; /*задаём цвет ссылки*/
	cursor: pointer;
	line-height: 1; /*задаём высоту строки*/
	text-decoration: none; /*убираем подчёркивание*/
}
.links:after {
	display: block;
	position: absolute;
	left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
	width: 0;/*задаём длинну линии до наведения курсора*/
	height: 2px; /*задаём ширину линии*/
	background-color: gray; /*задаём цвет линии*/
	content: "";
	transition: width 0.3s ease-out; /*задаём время анимации*/
}

.links:hover:after,
.links:focus:after {
	width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
}
`
const MainBook = () => {

    return (
        <Base>
            <div className="main">
                <div className="main_item">
                    <h2>Теоретический материал</h2>
                    <h3 className="h3_main">Содержание</h3>
                    <div className="charter">
                        <div className="main_charter">Раздел 1. Организация технического обслуживания ЭВМ</div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.1. Типовая система технического и профилактического обслуживания</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.2. Периодичность профилактического обслуживания. Организация профилактических работ.</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.3. Материально-техническое обеспечение.</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.4. Системы автоматического восстановления и диагностирования.</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.5. Взаимодействие и сравнительные характеристики систем автоматического контроля, диагностирования и восстановления.</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.6. Виды программного, аппаратного и комбинированного контроля.</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.7. Диагностические программы общего и специального назначения</Link></div>
                    </div>
                    <div className="charter">
                        <div className="main_charter">Раздел 2. Текущее техническое обслуживание сети</div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 2.1. Сервисная аппаратура для диагностики</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 2.2. Конфликты при установке оборудования и способы их устранения</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 2.3. Типовые алгоритмы поиска неисправностей.</Link></div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 2.4. Модернизация и конфигурирование ЭВМ с учетом решаемых задач.</Link></div>
                    </div>
                    <div className="charter">
                        <div className="main_charter">Раздел 3. Обслуживание серверов и рабочих станций</div>
                        <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 3.1. Обслуживание дисковых систем серверов и способы выявления неисправностей на рабочих станциях.</Link></div>
                    </div>
                </div>
            </div>
        </Base >
    )
}

export default MainBook