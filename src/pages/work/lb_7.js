import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './lb.css';

const lb_1 = () => {
    return (<div>
                  <Helmet>
        <meta charSet="utf-8" />
        <title>ЛБ №7. Модернизация и конфигурирование СВТ с учетом решаемых задач</title>
      </Helmet>
        <Navbar />
        <div className="main">
            <div className="main_item">
                <h2 className="h2_main">Лабораторная работа №7</h2>
                <h3 className="h3_main">Модернизация и конфигурирование СВТ с учетом решаемых задач</h3>
                <Button link_left="/work/lb_6" link_rigth="/work/lb_8" />
                <div className="charter_lb">
                    <b>Цель:</b> научиться правильно подбирать конфигурацию авто­матизированного рабочего места с учетом решаемых задач.<br></br>
                    <b>Задание:</b> решить задачу согласно своему варианту.<br></br>
                    <b>Перечень справочной литературы:</b> прайс-лист любого компьютерного магазина.<br></br>
                    <b>Варианты задач:</b><br></br>
                    <b>Задача №1.</b> Выбрать оптимальную конфигурацию сис­темного блока по быстродействию, если он будет использо­ваться в качестве файлового сервера. Комплектующие пред­ставлены в прайс-листе. Результаты работы представить в виде таблицы. Обосновать свой выбор.<br></br>
                    <b>Задача №2.</b> Выбрать оптимальную конфигурацию сис­темного блока по быстродействию, если он будет использо­ваться в качестве АРМ художника-дизайнера, работающего в 3D MAX Studio. Комплектующие представлены в прайс-листе. Результаты работы представить в виде таблицы. Обос­новать свой выбор.<br></br>
                    <b>Задача №3.</b> Выбрать оптимальную конфигурацию сис­темного блока по цене, если он будет использоваться в ка­честве АРМ бухгалтера, использующего в своей работе про­граммы «1С: Бухгалтерия», MS Office, «КонсультантПлюс» и доступ к сетевым ресурсам. Комплектующие представле­ны в прайс-листе. Результаты работы представить в виде таблицы. Обосновать свой выбор.<br></br>
                    <b>Задача №4.</b> Выбрать оптимальную конфигурацию сис­темного блока по цене, если он будет использоваться в ка­честве АРМ бухгалтера, использующего в своей работе про­граммы «1С: Бухгалтерия», MS Office и «КонсультантПлюс», но при этом локальная сеть отсутствует. Комплектующие представлены в прайс-листе. Результаты работы представить в виде таблицы. Обосновать свой выбор.<br></br>
                    <b>Задача №5.</b> Выбрать АРМ Web-дизайнера, работающего с Adobe Photoshop, Corel Draw, Macromedia Dreamweaver, с учетом оптимального соотношения цены и качества. Комп­лектующие представлены в прайс-листе. Результаты работы представить в виде таблицы. Обосновать свой выбор.<br></br>
                    <b>Задача №6.</b> Выбрать конфигурацию компьютерного клас­са по информатике, состоящего из 1 АРМ преподавателя и 12 АРМ учащихся, оптимизировав соотношение «цена — качество». Результаты работы представить в виде таблицы. Обосновать свой выбор.<br></br>
                    <b>Задача №7.</b> Выбрать оптимальную конфигурацию сис­темного блока по быстродействию, если он будет использо­ваться в качестве АРМ оператора видеомонтажа. Комплек­тующие представлены в прайс-листе. Результаты работы представить в виде таблицы. Обосновать свой выбор.<br></br><br></br>
                    <b>Пример решения задачи:</b><br></br>
<b>Решение задачи № 3.</b> В качестве исходных ценовых характеристик воспользуемся прайс-листом Торгового дома «Система» от 7 февраля 2009 г.
Поскольку задачи, решаемые бухгалтером, не требуют больших ресурсов, то имеет смысл приобрести компьютер минимальной конфигурации. При этом можно сэкономить на сетевой и видеокарте, приобретя системную плату с ин­тегрированными сетевым интерфейсом и видеоадаптером.
В имеющемся прайс-листе этим параметрам соответствует материнская плата GA-945GZM-S2 за 2691 руб. В качестве процессора выберем Celeron-430 (1.8 ГГц) за 1890 руб. Для стабильной работы операционной системы Windows ХР достаточно приобрести 512 Мб оперативной памяти Kingmax за 353 руб. Поскольку имеется доступ в локальную сеть, то наиболее важные данные можно хранить на серве­ ре, а для операционной системы и указанных приложений достаточно диска объемом 80 Гб, — например, Hitachi HDS728080PLA380 за 1562 руб. От дисковода и привода DVD можно отказаться — новые данные будут поступать че­рез сеть. Все это разместим в корпусе ATX LW 323-11 с бло­ком питания мощностью 350 Вт за 2054 руб. Таким образом, нам удалось собрать системный блок за минимальную цену 8550 руб.
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default lb_1