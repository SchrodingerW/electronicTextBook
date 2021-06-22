import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './book.css';
import imgBook_3_1 from "./imgBook/3_1.png";
import imgBook_3_2 from "./imgBook/3_2.png";
import imgBook_3_3 from "./imgBook/3_3.png";
import imgBook_3_4 from "./imgBook/3_4.png";


const lecture_3_1 = () => {
    return (
        <div>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Тема 3.1. Обслуживание дисковых систем серверов и способы выявления неисправностей на рабочих станциях</title>
      </Helmet>
            <Navbar />
            <div className="main">
                <div className="main_item">
                <h2 className="h2_main">Раздел 3. Обслуживание серверов и рабочих станций</h2>
                    <h3 className="h3_main">Тема 3.1. Обслуживание дисковых систем серверов и способы выявления <br></br>неисправностей на рабочих станциях</h3>
                    <Button link_left="/book/questions_2" link_rigth="/book/questions_3" />
                    <div className="charter_book">
                    <b>Безотказность в работе</b> — это важнейшая характеристика,
отличающая сервер от просто мощного ПК. Если неисправность рабочей станции является критичной только для одного пользователя, то выход из строя сервера может парализовать работу всей сети и привести к утрате ценных данных,
стоимость которых может оказаться выше стоимости самого
сервера. Вследствие этого проблема безотказности работы
сервера и повышения надежности хранения данных приобретает первостепенное значение.<br></br>

Повышение надежности работы сервера основано на простейшем методе избыточности за счет дублирования жизненно
важных компонентов сервера. Так, многие серверы уровня
рабочих групп оснащаются резервными источниками питания (например двумя блоками питания) с безынерционным
переключением в случае выхода из строя одного из них. Отказавший блок питания можно заменить, не выключая сервер (в режиме <b>«горячей» замены — Hot Swap</b>).<br></br>
Проблема сохранности данных и безотказности работы
дисковой подсистемы сервера обычно решается построением 
<b>RAID-массивов</b> на SCSI-дисках, также с возможностью их
«горячей» замены. При этом выход из строя одного из дисков лишь замедляет работу дисковой подсистемы, но не блокирует ее. Неисправный диск можно заменить, не останавливая работу сервера, а данные на нем будут автоматически
восстановлены RAID-контроллером. Подобные диски «горячей» замены устанавливаются в <b>специальные корзины (Rack
Mount)</b>, так что для доступа к ним не требуется открывать
корпус сервера.<br></br>
Аббревиатура <b>«RAID»</b> изначально расшифровывалась
как «избыточный (резервный) массив недорогих дисков»,
так как они были гораздо дешевле оперативной памяти.
Со временем «RAID» стали расшифровывать как <b>«Redundant Array of Independent Disks»</b> («избыточный (резервный)
массив независимых дисков»), потому что для таких дисковых массивов приходилось использовать и дорогое оборудование (под «недорогими» же подразумевались жесткие диски для ПЭВМ).<br></br>
В Калифорнийском университете Беркли была разработана следующая <b>классификация RAID</b>:
<ul>
<li>RAID 0 — неотказоустойчивый последовательный дисковый массив;</li>
<li>RAID 1 — зеркальный дисковый массив;</li>
<li>RAID 2 — массив, в котором применяется код Хемминга;</li>
<li>RAID 3, 4, 5 — массивы, использующие контроль четности для защиты данных от ошибок в одиночных битах;</li>
<li>RAID 6 — массив, использующий контроль четности для
защиты данных от двойных ошибок.</li>
</ul>
Рассмотрим подробнее наиболее распространенные из
этих типов RAID-массивов.<br></br>


<div className="h3_main"><img className="img_main_media" src={imgBook_3_1} alt="" /></div>
                        <div className="h3_main"><b>Рис. 3.1.</b> Схема RAID 0</div>

<b>RAID О.</b> Обычно в состав RAID 0 входят два или более
жестких дисков. При записи файла его содержимое разбивается на несколько блоков, которые одновременно записываются на жесткие диски (рис. 3.1). Например, пусть имеется массив RAID 0, состоящий из двух дисков, и файл, который при записи разбивается операционной системой или
контроллером на восемь блоков А1-А8. Тогда при первом
такте происходит одновременная запись блока А1 на первый диск, а блока А2 — на второй. При втором такте производится запись блока АЗ на первый диск, а блока А4 — на
второй, и т. д. Процесс чтения производится аналогично.
Благодаря такому «распараллеливанию» существенно возрастает производительность, которая прямо пропорциональна количеству дисков в массиве. Однако при этом существенно снижается надежность хранения информации, так
как неисправность одного из дисков приводит к полной ее
утрате.


<div className="h3_main"><img className="img_main_media" src={imgBook_3_2} alt="" /></div>
                        <div className="h3_main"><b>Рис. 3.2.</b> Схема RAID 1</div>


<b>RAID 1</b> (рис. 3.2) является в приведенной выше классификации по-настоящему избыточным массивом. Он также
состоит из двух или более жестких дисков, но их содержимое полностью идентично. Рассмотрим процесс записи файла, состоящего также из восьми блоков А1-А8. При первом
такте происходит одновременная запись блока А1 на все диски массива, при втором такте — одновременная запись
на все диски блока А2 и т. д., т. е. на каждом диске массива будет иметься точная копия этой информации, поэтому
при отказе одного из дисков информация может быть без
потерь считана с другого диска. При первом такте чтения
происходит одновременное считывание блока А1 с первого
диска, а блока А2 — со второго диска. Таким образом, возрастает не только надежность хранения данных (по сравнению с одиночным диском), но и скорость их чтения,
хотя скорость записи остается такой же, как и для одного
накопителя.

Основным недостатком RAID 1 является увеличение
стоимости полезного объема дискового пространства в два и
более раз. Например, при объединении двух жестких дисков
объемом 80 Гб в массив RAID 1 мы получим полезный объем
80 Гб за двойную цену.<br></br>
Недостатки RAID 0 и RAID 1 можно исправить, применяя конфигурацию RAID 0+1 или RAID 1+0. В первом случае массивы RAID 1 объединяются в массив RAID 0, а во
втором — массив RAID 1 создается из нескольких массивов
RAID 0. Таким образом, массив RAID 1+0 сочетает в себе
технологии и соответственно достоинства RAID 0 и RAID 1:
от первого он берет высокую скорость, а от второго — надежность хранения данных. Однако количество дисков, объединяемых в RAID 0+1 или RAID 1+0, должно быть четным
и не менее четырех; соответственно возрастает и стоимость
дискового пространства.

<div className="h3_main"><img className="img_main_media" src={imgBook_3_3} alt="" /></div>
                        <div className="h3_main"><b>Рис. 3.3.</b> Схема RAID 5</div>

Структура массива <b>RAID 5</b> (рис. 3.3) состоит как минимум из трех дисков, на которых равномерно распределены
собственно информация и ее блоки четности. В процессе записи файла при первом такте происходит запись блока А1
на первый диск, А2 — на второй диск, а на третий диск производится запись блока четности Р1, представляющего собой результат обработки блоков А1 и А2. Во время второго
такта происходит запись блока АЗ на первый диск, А4 — на
третий диск, а на второй диск производится запись блока
четности Р2. Во время третьего такта происходит запись
блока А5 на второй диск, А6 — на третий диск, а на первый
диск производится запись блока четности РЗ. Роль блока
четности состоит в том, что по нему и по одному из имеющихся блоков информации можно восстановить утраченный блок.
Например, при наличии блоков А2 и Р1 можно восстановить
информацию из блока А1.<br></br>
Таким образом, при записи информации на RAID 5 тратятся дополнительные ресурсы для вычисления блоков четности, но зато при чтении имеется выигрыш, по сравнению
с отдельным диском, из-за распараллеливания процесса.<br></br>
Недостатки RAID 5 проявляются при выходе из строя
одного из дисков, так как весь массив переходит в критический режим, все операции записи и чтения сопровождаются дополнительными манипуляциями, и резко падает производительность. При этом уровень надежности значительно снижается из-за уменьшения избыточности массива: если
во время восстановления массива, вызванного выходом из строя одного диска, выйдет из строя второй диск, то данные в массиве разрушаются полностью.<br></br>
Из всех рассмотренных массивов RAID 1+0 — единственный, который способен продолжать работу при отказе
до половины дисков массива, при этом практически не теряя своей производительности. Фактически он выходит из
строя с потерей данных только при одновременном отказе
сразу двух определенных дисков, образующих зеркальную
пару. Другими словами, его надежность немного ниже, чем
у RAID 1 (из-за большего числа дисков), но выше, чем
у RAID 5 (который разрушается при отказе любых двух
дисков).


<div className="h3_main"><img className="img_main_media" src={imgBook_3_4} alt="" /></div>
                        <div className="h3_main"><b>Рис. 3.4.</b>  Intel Matrix RAID</div>

В настоящее время получает распространение технология
<b>Matrix RAID</b> (рис. 3.4), реализованная фирмой Intel в своих
чипсетах начиная с ICH6R. Строго говоря, она не является
новым уровнем RAID, а лишь позволяет, используя всего
два диска, организовать одновременно один или несколько
массивов уровня RAID 1 и один или несколько массивов
уровня RAID 0. Таким образом, появилась возможность за
сравнительно небольшие деньги обеспечить для одних данных повышенную надежность, а для других — высокую скорость доступа.<br></br>
При реализации RAID можно применять не только аппаратные средства, но и полностью программные компоненты
(драйверы). Например, в системах на ядре ОС Linux сущест­вуют специальные модули ядра. В операционных системах
Windows поддерживается программный RAID О, RAID 1
и RAID 5.<br></br>


Программный RAID имеет свои достоинства и недостатки. С одной стороны, для его реализации не требуются
дополнительные денежные затраты (в отличие от хороших
RAID-контроллеров). С другой стороны, программный RAID
использует ресурсы центрального процессора, и в моменты
пиковой нагрузки на дисковую систему процессор может до
50% мощности тратить на обслуживание RAID-устройств.<br></br>
Основным способом восстановления данных с RAID является программная сборка образа массива, когда при помощи
программных средств блоки с разных дисков выстраиваются
в нужной последовательности. Порядок блоков в массиве зависит от расположения дисков на каналах и от алгоритма
работы самого контроллера.<br></br>
При восстановлении данных из RAID-массива, прежде чем
приступать к работе, желательно создать клоны всех дисков,
чтобы обезопасить себя от неверных действий. Такие копии
можно делать как в виде файлов, так и непосредственно на
других накопителях. Далее лучше использовать при работе
именно эти копии, так как если на исходных носителях в некоторых секторах находились <b>«бэд-блоки»</b>, то работа с такими дисками может значительно ухудшить их состояние. Если
при этом вы знаете параметры, с которыми создавался массив, то это ускорит процесс сборки блоков данных.<br></br>
Существуют автоматические средства поиска конфигурации и восстановления RAID, — например, программа <b>RAID
Reconstructor</b>. Если задать в ней уровень массива, то она
пытается найти первоначальную последовательность дисков, размер блока и предположить алгоритм записи информации на диски. Далее необходимо либо переписать образ
массива в файл, либо записать его на диск или массив, либо
создать файл виртуального образа и продолжить его разбор
при помощи утилит <b>Captain Nemo</b>, <b>Get Data Back</b> или <b>DiscEditor</b>. Можно также, используя знания о расположении
дисков, алгоритме записи и размере блока, восстановить
RAID, используя программу под названием <b>UFS Explorer</b>.

Если массив собран правильно, а файловые системы на
нем не имеют логических повреждений, то вы можете получить доступ к данным стандартными способами. В частности, если образ скопирован на жесткий диск, то достаточно
подключить его к компьютеру и перезагрузить ОС (если не
поддерживается горячее подключение). Однако изложенным
выше способом можно восстановить RAID только в самых
простых случаях.<br></br>
Альтернативой созданию образа может быть аппаратная
сборка. Однако без знания алгоритма работы контроллера
либо без наличия резервной копии абсолютно всех дисков
массива пользоваться этим методом категорически не рекомендуется, так как можно внести такие изменения на дисках, в результате которых вы уже не вернете данных, даже
обратившись к специалистам.<br></br>
Аппаратный метод заключается в том, что массив пересоздается на контроллере заново, с параметрами, полностью
аналогичными прошлой конфигурации. Если же при создании будет запущен <b>«rebuild» (перестроение RAID-массива)</b>,
то шансов, что ваши данные уцелеют, очень немного. Некоторые модели RAID-контроллеров после создания нового
массива автоматически выполняют его инициализацию, что
также может привести к необратимой потере данных.<br></br>
Если все диски массива были исправны, то имеется вероятность, что после выполнения аппаратной переборки массива без каких-либо дополнительных действий вы вновь получите доступ к информации. Но не исключено, что придется и поработать с такими утилитами, как R-Studio, Get Data
Back либо аналогичными.<br></br>
В случаях с RAID пятого уровня, когда один из дисков
неисправен, можно создать массив с заменой диска на аналогичный исправный. Когда массив будет создан (без проведения rebuild!), после запуска операционной системы этот
диск нужно будет отключить «в горячую». В результате
опять же вы можете получить доступ к своим данным сразу
(поскольку сработает «штатная» процедура их восстановления) либо посредством использования программ для логического восстановления информации
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default lecture_3_1