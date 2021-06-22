import React from "react";
import './main.css';
import { Link } from 'gatsby';

const MainWork = () => {
    return (
        <div className="main">
            <div className="main_item">
                <h2 className="h2_center">Практикум</h2>
                
                <div className="charter_media">
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
                    <div className="main_charter_point_delete">Тема 1.5. Взаимодействие и сравнительные характеристики систем автоматического контроля, диагностирования и восстановления</div>
                </div>
            </div>
        </div>
    )
}

export default MainWork