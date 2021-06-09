import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import './lb.css';

const lb_1 = () => {
    return (<div>
        <Navbar />
        <div className="main">
            <div className="main_item">
                <h2 className="h2_main">Лабораторная работа №9</h2>
                <h3 className="h3_main">Энергопотребление персонального компьютера</h3>
                <Button link_left="/work/lb_8" link_rigth="/work" />
                <div className="charter">
                    <b>Цель:</b> научиться определять объем энергопотребления персонального компьютера.<br></br>
                    <b>Задание:</b> решить задачу согласно своему варианту.<br></br>
                    <b>Вариант 1.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, жесткий диск, привод CD-ROM, видеокарта (AGP), сетевая и звуковая карты (PCI). (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br>
                    <b>Вариант 2.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, 2 жестких диска, приводы CD-RW и DVD-ROM, видеокарта (AGP), звуковая и сетевая карты (PCI), плата видеозахвата (PCI). (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br>
                    <b>Вариант 3.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, 3 жестких диска, видеокарта (AGP), сетевая карта (PCI), дисковод. (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br>
                    <b>Вариант 4.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, жесткий диск, привод DVD+RW, видеокарта (PCI-Е), сетевая карта (PCI-Е); через полгода планируется доустановить в данный системный блок 2 жестких диска. (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br>
                    <b>Вариант 5.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, жесткий диск, привод CD-ROM, видеокарта (PCI), звуковая и сетевая карты (ISA), дисковод, (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br>
                    <b>Вариант 6.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, 2 жестких диска, привод DVD-ROM, видеокарта (AGP), звуковая и сетевая карты (PCI). (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br>
                    <b>Вариант 7.</b> Рассчитать минимальную мощность блока питания, который будет устанавливаться в системный блок следующей комплектации: системная плата, процессор, оперативная память, жесткий диск, привод CD-RW, видеокарта (AGP), один дисковод, сетевая карта (PCI). (Технические характеристики представлены в справочных таблицах.) Результаты работы представить в виде таблицы. По результатам решения сделать вывод.<br></br><br></br>
                    <b>Справочные таблицы:</b><br></br>
                    Таблица 1 - Максимальная сила тока в зависимости от мощности блока питания<br></br>
                    <table class="resp-tab">
                        <thead>
                            <tr>
                                <th>Мощность/Напряжение</th>
                                <th>+3,3В</th>
                                <th>+5В</th>
                                <th>+12В</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>230 Вт</td>

                            <td>14 А</td>

                            <td>18 А</td>

                            <td>14 А</td>
                        </tr>
                        <tr>

                            <td>250 Вт</td>

                            <td>20 А</td>

                            <td>21 А</td>

                            <td>17 А</td>
                        </tr>
                        <tr>

                            <td>300 Вт</td>

                            <td>27 А</td>

                            <td>26 А</td>

                            <td>18 А</td>
                        </tr>
                        <tr>

                            <td>350 Вт</td>

                            <td>28 А</td>

                            <td>35 А</td>

                            <td>18 А</td>
                        </tr>
                        <tr>

                            <td>400 Вт</td>

                            <td>28 А</td>

                            <td>40 А</td>

                            <td>18 А</td>
                        </tr>
                        <tr>

                            <td>450 Вт</td>

                            <td>30 А</td>

                            <td>40 А</td>

                            <td>18 А</td>
                        </tr>
                        <tbody>
                        </tbody >
                    </table ><br></br>

                    Таблица 2 - Ток, потребляемый различными устройствами ПЭВМ<br></br>
                    <table class="resp-tab">
                        <thead>
                            <tr>
                                <th>Мощность/Напряжение</th>
                                <th>+3,3В</th>
                                <th>+5В</th>
                                <th>+12В</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>
                                Системная плата
    </td>
                            <td>
                                -
    </td>
                            <td>
                                5 A
    </td>
                            <td>
                                -
    </td>
                        </tr>
                        <tr>
                            <td>
                                Вентилятор
    </td>
                            <td>
                                -
    </td>
                            <td>
                                -
    </td>
                            <td>
                                0,1 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Жесткий диск
    </td>
                            <td>
                                -
    </td>
                            <td>
                                0,5 A
    </td>
                            <td>
                                1 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Кулер
    </td>
                            <td>
                                -
    </td>
                            <td>
                                0,5 A
    </td>
                            <td>
                                1 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Накопитель CD/DVD
    </td>
                            <td>
                                -
    </td>
                            <td>
                                1 A
    </td>
                            <td>
                                1 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Дисковод
    </td>
                            <td>
                                -
    </td>
                            <td>
                                1,5 A
    </td>
                            <td>
                                1 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Шина ISA
    </td>
                            <td>
                                -
    </td>
                            <td>
                                2 A
    </td>
                            <td>
                                1,175 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Шина PCI
    </td>
                            <td>
                                7,6 A
    </td>
                            <td>
                                5 A
    </td>
                            <td>
                                0,5 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Шина AGP
    </td>
                            <td>
                                6 A
    </td>
                            <td>
                                2 A
    </td>
                            <td>
                                1 A
    </td>
                        </tr>
                        <tr>
                            <td>
                                Шина PCI-E
    </td>
                            <td>
                                3 A
    </td>
                            <td>
                                -
    </td>
                            <td>
                                5,5 A
    </td>
                        </tr>
                        <tbody>
                        </tbody >
                    </table ><br></br>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default lb_1