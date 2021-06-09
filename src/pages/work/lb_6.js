import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './lb.css';

const lb_1 = () => {
    return (<div>
        <Navbar />
        <div className="main">
            <div className="main_item">
                <h2 className="h2_main">Лабораторная работа №6</h2>
                <h3 className="h3_main">Диагностические программы специального назначения</h3>
                <Button link_left="/work/lb_5" link_rigth="/work/lb_7" />
                <div className="charter">
                    <b>Цель:</b> научиться пользоваться диагностическими программами специального назначения.<br></br>
                    <b>Задание:</b> провести диагностирование и тестирование компонентов ПК при помощи диагностических программ специального назначения.<br></br>
                    <b>Перечень используемого ПО:</b> Passmark KeyboardTest, Nokia DisplayTest, CPU-Z, SuperPi, PowerStrip, Memtest86, MHDD.
<br></br>
<br></br>

                    <b>Контрольные вопросы</b>
                    <ol>
                        <li>Можно ли при помощи утилиты PowerStrip выполнить операции, для которых предназначена программа Nokia MonitorTest?</li>
                        <li>Почему программу Memtest86 нельзя запускать под Windows?</li>
                        <li>	Можно ли запускать программу MHDD под Windows? Опишите ключевые особенности, влияющие на это.</li>
                        <li>Какую клавишу нельзя протестировать при помощи программы Passmark KeyboardTest? Почему?</li>
                        <li>	Какие возможности имеются в программах диагностирования специального назначения и отсутствуют в программах диагностирования общего назначения? Почему?</li>
                    </ol>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default lb_1