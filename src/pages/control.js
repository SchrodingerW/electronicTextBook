import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Test from "./components/Control/Test_1";
import './components/Main/main.css';

const control = () => {
    return (<div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Контроль знаний</title>
        </Helmet>
        <Navbar />
        <div className="main">
            <div className="main_item">
                <h2 className="h2_center">Контроль знаний</h2>
                <h4 className="h3_center">Итоговый тест</h4>
                <Test />
                <h4 className="h3_center">Экзаменационные вопросы</h4>
                <ol className="ol_ul_control">
                    <li>Профилактическое обслуживание СВТ.</li>
                    <li>Материально-техническое обеспечение.</li>
                    <li>Системы автоматического восстановления и диагностирования.</li>
                    <li>Виды программного, аппаратного и комбинированного контроля.</li>
                    <li>Резервное копирование.</li>
                    <li>Сервисная аппаратура для диагностики.</li>
                    <li>Конфликты при установке оборудования и способы их устранения.</li>
                    <li>Типовые алгоритмы поиска неисправностей.</li>
                    <li>Загрузочный диски.</li>
                    <li>Диагностические программы общего назначения.</li>
                    <li>Диагностические программы специального назначения.</li>
                    <li>RAID-массивы.</li>
                    <li>Обслуживание дисковых систем серверов и способы выявления неисправностей на рабочих станциях.</li>
                    <li>Энергопотребление персонального компьютера.</li>
                    <li>Модернизация и конфигурирование ЭВМ с учетом решаемых задач.</li>
                </ol>
            </div>
        </div >
        <Footer />
    </div >
    )
}

export default control