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
                <h2 className="h2_main">Лабораторная работа №5</h2>
                <h3 className="h3_main">Диагностические программы общего назначения</h3>
                <Button link_left="/work/lb_4" link_rigth="/work/lb_6" />
                <div className="charter">
<b> Цель:</b> научиться пользоваться диагностической программой общего назначения Lavalys Everest Home Edition (AIDA64).<br></br>
<b> Задание:</b>  провести диагностирование и тестирование компонентов ПК при помощи диагностической программы общего назначения Lavalys Everest Home Edition (AIDA64).<br></br>
<b> Перечень используемого ПО:</b>  Lavalys Everest Home Edition (AIDA64).<br></br>
<b> Порядок проведения работы:</b> <br></br>
Провести диагностирование и тестирование компонентов ПК при помощи диагностической программы общего назначения <b>Lavalys Everest Home Edition</b> по следующему алгоритму.<br></br>
<ol>
<li>	Запустить программу Lavalys Everest Home Edition.</li>	
<li>	Ознакомиться с информацией о компьютере, создать детальный и краткий отчет по полученным результатам.</li>	
<li>		Выполнить тесты оперативной памяти Чтение из памяти, Запись в память, Копирование в памяти, Задержка памяти.</li>	
<li>		Выполнить тестирование процессора: CPU Queen, CPU PhotoWorxx, CPU ZLib, CPU AES, FPU Julia, FPU Mandel, FPU SinJulia.</li>	
</ol>
<br></br>
<b> Контрольные вопросы:</b> 
<ol>
<li>Для чего в программе указываются веб-адреса производителей комплектующих ПК?</li>
<li>Почему многопроцессорные системы проигрывают однопроцессорным в тесте CPU PhotoWorxx?</li>
<li>В чем состоит различие между тестами FPU Julia и FPU SinJulia?</li>
</ol>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default lb_1