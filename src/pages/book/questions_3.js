import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';

const Questions_3 = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Раздел 3. Контрольные вопросы</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                    <h2 className="h2_main">Раздел 3. Обслуживание серверов и рабочих станций</h2>
                    <Button link_left="/book/lecture_3_1" link_rigth="/book" />
                    <div className="charter">
                    <h4 className="h3_main">Контрольные вопросы</h4>
                        <ol>
                            <li>Что такое RAID?</li>
                            <li>Сколько уровней RAID вы знаете?</li>
                            <li>В чем состоит недостаток RAID О?</li>
                            <li>Чему эквивалентен RAID 0+1?</li>
                            <li>Какова структура RAID 5?</li>
                            <li>Чем RAID-массив пятого уровня отличается от нулевого?</li>
                            <li>Какие возможности реализует технология Matrix RAID?</li>
                            <li>Что необходимо применять для реализации RAID?</li>
                            <li>Как решается проблема сохранности данных и безотказности работы дисковой подсистемы сервера?</li>
                            <li>Что является основным способом восстановления данных с RAID?</li>
                            <div className="main_charter_point_delete">Тема 1.5. Взаимодействие и сравнительные характеристики систем автоматического контроля, диагностирования и восстановления</div>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Questions_3