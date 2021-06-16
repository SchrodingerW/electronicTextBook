import React from "react";
import { Link } from 'gatsby';
import './main.css';

const MainBook = () => {
    return (
        <div className="main">
            <div className="main_item">
                <h2 className="h2_center">Теоретический материал</h2>
                <h3 className="h3_center">Содержание</h3>
                <div className="charter">
                    <div className="main_charter">Раздел 1. Организация технического обслуживания ЭВМ</div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_1" className="links">Тема 1.1. Типовая система технического и профилактического обслуживания</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_2" className="links">Тема 1.2. Периодичность профилактического обслуживания. Организация профилактических работ</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_3" className="links">Тема 1.3. Материально-техническое обеспечение</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_4" className="links">Тема 1.4. Системы автоматического восстановления</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_5" className="links">Тема 1.5. Системы автоматического диагностирования</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_6" className="links">Тема 1.6. Взаимодействие и сравнительные характеристики систем автоматического контроля, диагностирования и восстановления</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_7" className="links">Тема 1.7. Виды программного, аппаратного и комбинированного контроля</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_1_8" className="links">Тема 1.8. Диагностические программы общего и специального назначения</Link></div>
                    <div className="main_charter_point"><Link to="/book/questions_1" className="links">Контрольные вопросы</Link></div>
                </div>
                <div className="charter">
                    <div className="main_charter">Раздел 2. Текущее техническое обслуживание сети</div>
                    <div className="main_charter_point"><Link to="/book/lecture_2_1" className="links">Тема 2.1. Сервисная аппаратура для диагностики</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_2_2" className="links">Тема 2.2. Конфликты при установке оборудования и способы их устранения</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_2_3" className="links">Тема 2.3. Типовые алгоритмы поиска неисправностей</Link></div>
                    <div className="main_charter_point"><Link to="/book/lecture_2_4" className="links">Тема 2.4. Модернизация и конфигурирование ЭВМ с учетом решаемых задач</Link></div>
                    <div className="main_charter_point"><Link to="/book/questions_2" className="links">Контрольные вопросы</Link></div>
                </div>
                <div className="charter">
                    <div className="main_charter">Раздел 3. Обслуживание серверов и рабочих станций</div>
                    <div className="main_charter_point"><Link to="/book/lecture_3_1" className="links">Тема 3.1. Обслуживание дисковых систем серверов и способы выявления неисправностей на рабочих станциях</Link></div>
                    <div className="main_charter_point"><Link to="/book/questions_3" className="links">Контрольные вопросы</Link></div>
                </div>
            </div>
        </div>
    )
}

export default MainBook