import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import imgBook_1_4 from "./imgBook/1_4.png";
import imgBook_1_5 from "./imgBook/1_5.png";
import imgBook_1_6 from "./imgBook/1_6.png";
import imgBook_1_7 from "./imgBook/1_7.png";
import imgBook_1_8 from "./imgBook/1_8.png";
import imgBook_1_9 from "./imgBook/1_9.png";
import imgBook_1_10 from "./imgBook/1_10.png";
import imgBook_1_11 from "./imgBook/1_11.png";
import imgBook_1_12 from "./imgBook/1_12.png";
import imgBook_1_13 from "./imgBook/1_13.png";
import imgBook_1_14 from "./imgBook/1_14.png";
import imgBook_1_15 from "./imgBook/1_15.png";
import './book.css';


const lecture_1_3 = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Тема 1.3. Материально-техническое обеспечение</title>
            </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                    <h2 className="h2_main">Раздел 1. Организация технического обслуживания ЭВМ</h2>
                    <h3 className="h3_main">Тема 1.3. Материально-техническое обеспечение</h3>
                    <Button link_left="/book/lecture_1_2" link_rigth="/book/lecture_1_4" />
                    <div className="charter">
                        Одним из наиболее важных вопросов при техническом обслуживании, диагностировании и ремонте СВТ является обеспечение обслуживающего персонала материальными ресурсами в
нужном ассортименте, количестве и в нужные сроки.<br></br>
<b>Материально-техническое обеспечение</b> — это одна из форм
процесса распределения оборудования, материалов, комплектующих изделий и т. д. Материально-техническое обеспечение
подразумевает определение потребности в материальных и
технических средствах для ТО СВТ и их распределение между
инженерно-техническими отделами в указанный срок.<br></br>
Для определения потребности в материально-техническом
обеспечении необходимо вначале определиться с видом ТО СВТ.
В соответствии с ГОСТ 28470-90, вид ремонта определяется
условиями его проведения и содержанием работ, выполняемых
на СВТ. При этом ремонт СВТ подразделяется на текущий,
средний и капитальный (для механических и
электромеханических СВТ).<br></br>
<b>Текущий ремонт</b> проводится для восстановления работоспособности СВТ без использования стационарных средств
технологического оснащения непосредственно на месте эксплуатации СВТ. На рабочем месте проводится контроль
функционирования СВТ с использованием соответствующих
средств проверки.<br></br>
<b>Средний ремонт</b> должен проводиться для восстановления
работоспособности СВТ с использованием специализированных
стационарных средств технологического оснащения.<br></br>
<b>Капитальный ремонт</b> должен проводиться для восстановления работоспособности и ресурса СВТ посредством замены или
ремонта составных частей СВТ (в том числе базовых) с
использованием специализированных стационарных средств
технологического оснащения и в стационарных условиях.<br></br>


                        <div className="h3_main"><img src={imgBook_1_4} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.4.</b> Стандартный набор инструментов</div>

                        Для поиска и устранения небольших неисправностей и ремонта ПК пользователю достаточно иметь небольшой набор
основных инструментов, состоящий из отверток различного вида,
пассатижей с длинными губками и пинцета или зажима (рис.
1.4). Некоторые инструменты из подобных стандартных наборов
практически не используются.<br></br>
<b>Отвертка</b> — инструмент, предназначенный для отвинчивания и завинчивания винтов, шурупов и других крепежных
деталей с резьбой, на головке которых имеется паз. Простейшая
отвертка состоит из рукоятки (обычно пластмассовой или
деревянной) с прикрепленным к ней стержнем, конец которого
соответствует тому или иному виду крепежных деталей. <br></br>
Для работы вблизи проводников или с деталями, находящимися под напряжением, отвертка может быть покрыта
изолирующим материалом (ее рукоятка целиком и стержень, за
исключением жала). Изоляция такой отвертки рассчитывается
для гарантированной защиты от напряжения в некоторых
пределах, испытывается, и об этом ставится отметка на отвертке.<br></br>
При работе внутри корпуса компьютера очень удобно использовать отвертки с намагниченными концами, с помощью
которых легко установить или закрутить винт в труднодоступном месте либо извлечь упавший крепежный элемент. Но у
таких инструментов есть недостаток — слабое магнитное поле, к
которому могут быть чувствительны некоторые элементы СВТ
(например жесткие диски).

<div className="h3_main"><img src={imgBook_1_5} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.5.</b> Пинцет</div>

                        <b>Пинцет</b> — приспособление для манипуляций с мелкими
предметами, которые трудно удерживать пальцами (рис. 1.5).<br></br>
<b>Цанговый зажим</b> также необходим для удерживания и
извлечения небольших деталей из труднодоступных мест (рис.
1.6).<br></br>
Пинцетом и зажимом, например, удерживают небольшие
винты или перемычки, которые неудобно брать рукой. Ими же
удобно вытаскивать из ПК различные мелкие крепежные
элементы, не разбирая полностью компьютер.

<div className="h3_main"><img src={imgBook_1_6} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.6.</b> Цанговый зажим</div>


                        Однако если подходить к техническому обслуживанию и
ремонту профессионально, то потребуется большой набор
специфических инструментов, которые дают возможность
эффективно проводить ремонтные и монтажные работы.
Рассмотрим их.<br></br>
<ol>
<li>Диагностические устройства и программы для тестирования компонентов компьютера (плата POST — рис. 1.7,
программа MHDD и др.).<br></br>
<b>Плата самотестирования POST</b> используется для вывода
на экран диагностических кодов POST при выявлении тех или
иных ошибок.</li>
<li>Приборы для измерения сопротивления и напряжения:
цифровые мультиметры, логические пробники и генераторы
импульсов.


<div className="h3_main"><img src={imgBook_1_7} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.7.</b> Плата POST</div>
Для измерения напряжения и сопротивления в электрических сетях обычно используют цифровые мультиметры (рис.
1.8). <b>Мультиметр</b> — это электронный измерительный прибор,
объединяющий в себе функции вольтметра, амперметра и
омметра. Мультиметры бывают цифровыми и аналоговыми. Для
измерения параметров компьютера лучше использовать
цифровые мультиметры, и не только потому, что они имеют
компактные размеры и более точны.

<div className="h3_main"><img src={imgBook_1_8} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.8.</b> Цифровой мультиметр</div>

                        У любого мультиметра имеются два измерительных щупа. Их
нужно подключить к проверяемой электрической цепи, после чего
мультиметр отобразит соответствующие показания.<br></br>
Функции цифровых мультиметров различны. К основным
режимам их работы можно отнести следующие:
<ul>
    <li>измерение напряжения постоянного или переменного тока;</li>
    <li>измерение силы тока;</li>
    <li>измерение электрического сопротивления (отображение
значения на экране также сопровождается звуковой сигнализацией при низком сопротивления цепи — <b>прозвонка</b>);</li>
    <li>генерация тестового сигнала простейшей формы (как своеобразный вариант прозвонки);</li>
    <li>измерение электрической емкости;</li>
    <li>измерение частоты гармонического сигнала.</li>
</ul>
Работать с таким прибором достаточно просто даже при
незнании величины измеряемого напряжения. Для этого необходимо установить мультиметр на самый «грубый» интервал
измерения, а затем постепенно увеличивать его чувствительность (в некоторых цифровых мультиметрах чувствительность и вовсе выставляется автоматически). Далее надо
переключить мультиметр в режим измерения интересующей нас
величины, например в режим измерения напряжения
постоянного или переменного тока, и присоединить щупы к
проверяемой цепи. Результат измерения будет отображен на
дисплее.<br></br>
При измерении большого напряжения (от 110 В и выше)
рекомендуется держать мультиметр в одной руке во избежание
удара электрическим током.<br></br>
При поиске неисправностей в цифровых схемах, в которых
значения цифровых сигналов нельзя определить мультиметром,
используют <b>логический пробник</b> (рис. 1.9). Он может оказаться
полезным и при проверке накопителей, так как позволяет
проверить сигналы на интерфейсном кабеле или в самой схеме
накопителя. С помощью пробника можно проверить работу
тактового генератора и наличие других синхронизирующих
сигналов, сравнить сигналы на выводах какой-либо
интегральной схемы с сигналами на исправной микросхеме и
найти вышедший из строя компонент.
<div className="h3_main"><img src={imgBook_1_9} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.9.</b> Логические пробники</div>
                        <div className="h3_main"><img src={imgBook_1_10} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.10.</b> Генераторы импульсов</div>

                        Вместе с логическим пробником обычно используется
генератор одиночных импульсов (рис. 1.10). Последний
используется реже, чем логический пробник, но в некоторых
случаях бывает очень полезен. Он предназначен для подачи в
тестируемую схему входного импульса высокого уровня (+5 В)
длительностью 1,5-10 мкс, после чего реакция схемы
сравнивается с ее «штатным» поведением.</li>
<li>Для проверки правильности подключения электропроводки к розетке используют <b>тестер сетевой розетки</b> (рис. 1.11). Этот прибор относительно дешев и прост в применении. Тестер сетевой розетки вставляют в электрическую розетку и по
свечению трех индикаторов определяют правильность
подключения проводов.
<div className="h3_main"><img src={imgBook_1_11} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.11.</b> Тестер сетевой розетки</div></li>
                        <li>Различные химические препараты используются для
протирки контактов, набор тампонов — для протирки контактов,
а баллончик со сжатым газом — для удаления пыли в
труднодоступных местах. Для выдувания пыли из компьютера
обычно используется фреон или углекислый газ. Однако нужно
помнить, что при интенсивном выдувании на сопле образуется
статический заряд, и необходимо принять меры к его
устранению. Кроме того, фреон огнеопасен.</li>
<li>Инструменты для монтажа и демонтажа микросхем.
Чтобы вынимать и устанавливать микросхемы (равно как и
другие интегральные схемы меньшего размера), не рискуя
погнуть их выводы, необходимы специальные приспособления
для извлечения микросхем из гнезд и для их установки (рис.
1.12).
<div className="h3_main"><img src={imgBook_1_12} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.12.</b> Приспособления для извлечения микросхем из гнезд</div></li>
                        <li>Для проверки последовательных и параллельных портов
применяются специальные <b>тестовые разъемы</b> (рис. 1.13). Если
установить их вместо соединительных кабелей, то при проверке
сигналы с выходных контактов последовательных или
параллельных портов будут подаваться на входные контакты
(порт «замыкается сам на себя»), что позволяет проверить работу
порта при помощи специальной программы.
<div className="h3_main"><img src={imgBook_1_13} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.13.</b> Внешний вид и внутреннее устройство типичных тестовых разъемов</div>
Существует несколько типов тестовых разъемов. Чаще всего
используются разъемы для 9- и 25-контактных последовательных портов и для 25-контактного параллельного порта. Существуют и универсальные разъемы, объединяющие в себе все три разновидности, что очень удобно. (Необходимо применять только тестовые разъемы, которые рекомендуются
используемой диагностической программой.)</li>
<li><b>Комплект для пайки</b> используется для выполнения особо
точных работ при ремонте комплектующих СВТ (рис. 1.14). Набор
для микропайки обычно включает в себя:
<ul>
    <li>газовый паяльник со встроенной подставкой;</li>
    <li>припой в индивидуальном пластиковом контейнере;</li>
    <li>4 насадки (игольчатый наконечник, наконечник 0 5 мм,
двухплоскостной наконечник, нож);</li>
    <li>алюминиевый контейнер с губкой для чистки насадок;</li>
    <li>пластиковый упаковочный контейнер.</li>
</ul>
<div className="h3_main"><img src={imgBook_1_14} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.14.</b> Комплект для пайки</div>
                        Паяльные принадлежности, кроме этого стандартного
набора, должны включать в себя отсос для припоя и заземляющий браслет для снятия статического электричества.
Паяльник также должен иметь заземление.</li>
                        <li><b>Клещи обжимные</b> (рис. 1.15) необходимы для монтажа коннекторов (например стандарта RJ-45) на кабель, используемый при прокладке локальных вычислительных сетей (ЛВС).
                        <div className="h3_main"><img src={imgBook_1_15} alt="" /></div>
                        <div className="h3_main"><b>Рис. 1.15.</b> Клещи обжимные</div>
                        </li>
                        <li>
                        Диагностические устройства и программы для тестирования компонентов компьютера. Существуют коммерческие,бесплатные и демонстрационные версии программ, которые
могут использоваться для тестирования аппаратных средств ПК.
Также необходимы загрузочные диски для загрузки ПК и
запуска тестирующих программ в случае, если основная ОС
утратила работоспособность.

                        </li>
</ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_1_3