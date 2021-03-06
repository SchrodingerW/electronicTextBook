import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import imgBook_1_3 from "./imgBook/1_3.png"
import './book.css';


const lecture_1_2 = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Тема 1.2. Периодичность профилактического обслуживания. Организация профилактических работ</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                    <h2 className="h2_main">Раздел 1. Организация технического обслуживания ЭВМ</h2>
                    <h3 className="h3_main">Тема 1.2. Периодичность профилактического обслуживания. Организация профилактических работ</h3>
                    <Button link_left="/book/lecture_1_1" link_rigth="/book/lecture_1_3" />
                    <div className="charter_book">
                        <b>Виды и периодичность профилактического обслуживания (ПрОб)</b> можно разделить на следующие этапы (рис. 1.3):
                        <ul>
                            <li><b>ежедневная профилактика (ПрОб-1)</b> — проводится ежедневно; обычно пользователь затрачивает на нее несколько
                                минут. В ежедневное техническое обслуживание (ТО-1) входит
                                удаление пыли с наружных частей аппаратуры, визуальный
                                осмотр устройств и источников питания, проведение
                                контрольных тестов, создание резервного образа диска
                                (например программой Image), антивирусный тест и т. д.;</li>
                            <li><b>еженедельная профилактика (ПрОб-2)</b> — проводится раз в
                                неделю (иногда — раз в две недели); пользователь
                                затрачивает на нее около десятка минут. В еженедельное
                                техническое обслуживание (ТО-2) входит ТО-1, а также
                                визуальная оценка качества изображения, размеров,
                                центровки и геометрических искажений монитора,
                                проведение контрольных тестов, резервное копирование
                                информации, проверка надежности механических креплений,
                                проверка системы вентиляции и системы питания, проверка
                                работы устройств при профилактическом изменении
                                напряжения питающей сети на 5%;</li>
                            <li><b>ежемесячная профилактика (ПрОб-3)</b> — проводится раз в
                                месяц (иногда — раз в три месяца); пользователь затрачивает
                                на нее примерно 2 часа. В ежемесячное техническое
                                обслуживание (ТО-3) входит ТО-2, а также профилактика
                                гибких и жестких магнитных дисков средствами сервисных
                                программ, полный тест памяти и оценка быстродействия
                                системы, а также проверка периферийного оборудования и
                                настройки портов;</li>
                            <li><b>полугодовая профилактика (ПрОб-4)</b> — проводится раз в
                                шесть месяцев; пользователь затрачивает на нее 4 часа. В
                                полугодовое техническое обслуживание (ТО-4) входит ТО-3, а
                                также протирка поверхности кинескопа спиртом (можно
                                использовать специальные салфетки, диски и спреи),
                                частичная разборка блоков и удаление пыли струей воздуха
                                (можно использовать фен или пылесос), чистка накопителей
                                специальными чистящими «дискетами» и CD-дисками, а
                                также проверка работы сети и ее комплектующих различными
                                программными и техническими средствами;</li>
                            <li><b>годовая профилактика (ПрОб-5)</b> — проводится раз в год;
                                пользователь затрачивает на нее 5 часов и более. В годовое
                                техническое обслуживание (ТО-5) входит ТО-4, а также полная разборка и чистка контактов от окислов и полное
                                тестирование аппаратуры.</li>
                        </ul>
                        <div className="h3_main"><img className="img_main_media" src={imgBook_1_3} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.3.</b> Затраты времени на различные виды профилактического
                            обслуживания</div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default lecture_1_2