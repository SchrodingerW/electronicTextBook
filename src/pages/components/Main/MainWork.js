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
.main_charter_point_q{
    color:#fff;
    margin-bottom: -24px;
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
const MainWork = () => {

    return (
        <Base>
            <div className="main">
                <div className="main_item">
                    <h2>Практикум</h2>
                    <div className="charter">
                        <div className="main_charter">Лабораторные работы</div>
                        <div className="main_charter_point"><Link to="/work/lb_1" className="links">Лабораторная работа №1. Профилактическое обслуживание СВТ</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb2" className="links">Лабораторная работа №2. Система автоматического восстановления</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_3" className="links">Лабораторная работа №3. Cоздание образа диска</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_4" className="links">Лабораторная работа №4. Cоздание LiveCD на базе Windows.</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_5" className="links">Лабораторная работа №5. Диагностические программы общего назначения</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_6" className="links">Лабораторная работа №6. Диагностические программы специального назначения</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_7" className="links">Лабораторная работа №7. Модернизация и конфигурирование СВТ с учетом решаемых задач</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_8" className="links">Лабораторная работа №8. Особенности хранения информации в RAID-массивах</Link></div>
                        <div className="main_charter_point"><Link to="/work/lb_9" className="links">Лабораторная работа №9. Энергопотребление персонального компьютера</Link></div>
                        <div className="main_charter_point_q">Тема 1.5. Взаимодействие и сравнительные характеристики систем автоматического контроля, диагностирования и восстановления</div>
                    </div>
                </div>
            </div>
        </Base >
    )
}

export default MainWork