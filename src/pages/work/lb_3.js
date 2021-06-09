import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import './lb.css';

const lb_3 = () => {
    return (<div>
        <Navbar />
        <div className="main">
            <div className="main_item">
                <h2 className="h2_main">Лабораторная работа №3</h2>
                <h3 className="h3_main">Cоздание образа диска</h3>
                <Button link_left="/work/lb2" link_rigth="/work/lb_4" />
                <div className="charter">
                    <b>Цель:</b> научиться пользоваться загрузочным диском Асгоnis True Image для создания резервной копии диска и восстановления данных.<br></br>
                    <b>Задание: </b>создать образ системного диска «виртуальной машины»; произвести изменения на нем; восстановить его исходное состояние.<br></br>
                    <b>Перечень используемого ПО:</b> «виртуальная машина» VirtualBox, Acronis True Image, Opera.<br></br>
                    <b>Краткие теоретические сведения:</b><br></br>
Программа <b>Acronis True Image </b>решает проблему резервного копирования данных, гарантируя полную сохранность всей информации, хранящейся на жестких дисках компьютера.<br></br>
С ее помощью можно производить резервное копирование как отдельных файлов и папок, так и целых дисков или их разделов. В случае какого-либо сбоя, нарушившего доступ к информации или работу системы, а также при нечаянном удалении нужных файлов пользователь легко может восстановить работу системы и утраченную информацию.<br></br>
 Технология, используемая в программе Acronis True Image, дает возможность создавать точный (по секторам) образ жесткого диска, включая файлы операционной системы и установленных приложений вместе с их обновлениями, файлы конфигурации, пользовательские данные и настройки и т.д.<br></br>
 Для хранения образа можно использовать почти любое из устройств хранения данных, подключаемых к компьютеру: локальные и сетевые жесткие диски, устройства с интерфейсами IDE, SCSI, SATA, FireWire (IEEE-1394), USB (1.0, 1.1 и 2.0), PC card (PCMCIA), а также CD-R/RW, DVD-RW, DVD+R/RW, магнитооптические диски, устройства Iomega Zip и Jaz.<br></br>
При резервном копировании файлов и папок в архиве сжимаются и сохраняются только данные этих файлов и папок вместе с их относительными путями. Резервное же копирование дисков и разделов выполняется по-другому: Acronis True Image архивирует моментальную копию состояния диска («snapshot») по секторам, в том числе: операционную систему, реестр Windows, драйверы устройств, приложения и данные, а также служебные области диска, скрытые от пользователя. Эта процедура называется созданием образа диска, а полученный архив соответственно называют образом диска.<br></br>
 Acronis True Image может выполнять полное, инкрементное и дифференциальное резервное копирование. <br></br>
При полном резервном копировании в архив включаются все архивируемые данные, имеющиеся на диске на момент создания архива. Полный архив всегда является основой по следующего инкрементного или дифференциального копирования; можно также использовать его как самостоятельный архив. Время восстановления полного архива минимально по сравнению с временем восстановления инкрементного и дифференциального архивов. <br></br>
Инкрементный архив содержит только данные, изменившиеся с момента создания последнего полного или инкрементного архива. Поэтому такой архив обычно имеет гораздо меньший размер и создается несколько быстрее. Но, поскольку он содержит не все архивируемые данные, для их восстановления необходимо иметь все предыдущие инкрементные архивы и созданный вначале полный архив. <br></br>
В отличие от инкрементного резервного копирования, добавляющего еще один файл к имеющейся «цепочке», при дифференциальном копировании создается независимый файл, содержащий все изменения данных по отношению к базовому полному архиву. Как правило, дифференциальный архив восстанавливается быстрее, чем инкрементный, поскольку не требуется последовательная обработка длинной цепочки предыдущих архивов.<br></br><br></br>
                    <b>Порядок проведения работы:</b><br></br>
Выполнить создание полного образа операционной системы, а затем произвести восстановление по следующему алгоритму.
                    <ol>
                        <li>Запустить программу VirtualBox.</li>
                        <li>В качестве эмулируемого диска в приводе CD-ROM указать образ загрузочного диска Acronis True Image.</li>
                        <li>Включить «виртуальную машину», войти в ее BIOS и выбрать CD-ROM в качестве первого загрузочного устройства.</li>
                        <li>Произвести загрузку с диска Acronis True Image.</li>
                        <li>Выбрать опцию Создать архив и, последовательно отвечая на вопросы Мастера, создать архив системного диска.</li>
                        <li>Завершить работу программы.</li>
                        <li>Произвести загрузку с жесткого диска «виртуальной машины».</li>
                        <li>Установить браузер Opera.</li>
                        <li>Перезагрузить «виртуальную машину» с диска Acronis True Image.</li>
                        <li>Выбрать опцию Восстановить данные и, последовательно отвечая на вопросы Мастера, восстановить данные системного диска из образа.</li>
                        <li>Завершить работу программы.</li>
                        <li>Произвести загрузку с жесткого диска «виртуальной машины».</li>
                        <li>Убедиться в отсутствии браузера Opera.</li>
                    </ol>
                    <br></br>
                    <b>Контрольные вопросы:</b>
                    <ul>
                        <li>Какие носители можно использовать для сохранения образов диска?</li>
                        <li>Для чего предназначена зона безопасности Acronis?</li>
                        <li>В чем состоит различие между полным и дифференциальным резервным копированием?</li>
                        <li>В чем состоит различие между инкрементным и дифференциальным резервным копированием?</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default lb_3