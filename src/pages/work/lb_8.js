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
                <h2 className="h2_main">Лабораторная работа №8</h2>
                <h3 className="h3_main">Особенности хранения информации в RAID-массивах</h3>
                <Button link_left="/work/lb_7" link_rigth="/work/lb_9" />
                <div className="charter">
                    <b>Цель:</b> закрепить знания о структуре хранения данных в RAID-массивах и понять принципы обеспечения отказоустойчивости.<br></br>
                    <b>Задание:</b> решить предложенные задачи согласно варианту.<br></br>
                    <b>Задача № 1.</b> За сколько тактов будет произведено чтение из массива RAID <b>N</b>, состоящего из <b>n</b> дисков с размером кластера <b>m</b> байтов, файла объемом <b>k</b> байт.<br></br>
                    <b>Варианты задачи №1:</b><br></br>
                    <table class="resp-tab">
                        <thead>
                            <tr>
                                <th>№ п/п</th>
                                <th>Операция</th>
                                <th>N</th>
                                <th>n</th>
                                <th>m</th>
                                <th>k</th>
                            </tr>
                        </thead>
                        <tbody><tr>
                            <td>1</td>
                            <td>чтение</td>
                            <td>0</td>
                            <td>3</td>
                            <td>512</td>
                            <td>2 684 121</td>
                        </tr>
                            <tr>
                                <td>2</td>
                                <td>запись</td>
                                <td>1</td>
                                <td>2</td>
                                <td>1024</td>
                                <td>1 433 062</td>
                            </tr>
                            <tr>
                                <td> 3</td>
                                <td>чтение</td>
                                <td>5</td>
                                <td> 4</td>
                                <td> 2048</td>
                                <td> 1 529 722</td>
                            </tr>
                            <tr>
                                <td> 4</td>
                                <td>запись</td>
                                <td> 0</td>
                                <td> 2</td>
                                <td> 4096</td>
                                <td> 237 644</td>
                            </tr>
                            <tr>
                                <td> 5</td>
                                <td>чтение</td>
                                <td> 1</td>
                                <td> 2</td>
                                <td> 2048</td>
                                <td> 745 468</td>
                            </tr>
                            <tr>
                                <td> 6</td>
                                <td>запись</td>
                                <td> 5</td>
                                <td> 3</td>
                                <td> 1024</td>
                                <td> 1 433 424</td>
                            </tr>
                            <tr>
                                <td> 7</td>
                                <td>чтение</td>
                                <td> 0</td>
                                <td> 5</td>
                                <td> 512</td>
                                <td> 704 284</td>
                            </tr>
                            <tr>
                                <td> 8</td>
                                <td>запись</td>
                                <td> 1</td>
                                <td> 3</td>
                                <td> 1024</td>
                                <td> 715890</td>
                            </tr>
                            <tr>
                                <td> 9</td>
                                <td>чтение</td>
                                <td> 5</td>
                                <td> 4</td>
                                <td> 2048</td>
                                <td> 38 342</td>
                            </tr>
                            <tr>
                                <td> 10</td>
                                <td>запись</td>
                                <td> 0</td>
                                <td> 2</td>
                                <td> 512</td>
                                <td> 1 433 460</td>
                            </tr>
                            <tr>
                                <td> 11</td>
                                <td>чтение</td>
                                <td> 1</td>
                                <td> 3</td>
                                <td> 1024</td>
                                <td> 716 000</td>
                            </tr>
                            <tr>
                                <td> 12</td>
                                <td>запись</td>
                                <td> 5</td>
                                <td> 5</td>
                                <td> 4096</td>
                                <td> 526 252</td>
                            </tr>
                            <tr>
                                <td> 13</td>
                                <td>чтение</td>
                                <td> 0</td>
                                <td> 7</td>
                                <td> 4096</td>
                                <td> 2 224 204</td>
                            </tr>
                            <tr>
                                <td> 14</td>
                                <td>запись</td>
                                <td> 1</td>
                                <td> 2</td>
                                <td> 4096</td>
                                <td> 2 259 220</td>
                            </tr>
                            <tr>
                                <td> 15</td>
                                <td>чтение</td>
                                <td> 5</td>
                                <td> 3</td>
                                <td> 512</td>
                                <td> 2 264 302</td>
                            </tr>
                            <tr>
                                <td> 16</td>
                                <td>запись</td>
                                <td> 0</td>
                                <td> 4</td>
                                <td> 512</td>
                                <td> 2176 626</td>
                            </tr>
                            <tr>
                                <td> 17</td>
                                <td>чтение</td>
                                <td> 1</td>
                                <td> 4</td>
                                <td> 1024</td>
                                <td> 2 243 242</td>
                            </tr>
                            <tr>
                                <td> 18</td>
                                <td>запись</td>
                                <td> 5</td>
                                <td>3</td>
                                <td> 512</td>
                                <td> 2 256 891</td>
                            </tr>
                            <tr>
                                <td> 19</td>
                                <td>чтение</td>
                                <td> 0</td>
                                <td> 2</td>
                                <td> 2048</td>
                                <td> 961 332</td>
                            </tr>
                            <tr>
                                <td> 20</td>
                                <td>запись</td>
                                <td> 1</td>
                                <td> 3</td>
                                <td> 512</td>
                                <td> 2 259 537</td>
                            </tr>
                            <tr>
                                <td> 21</td>
                                <td>чтение</td>
                                <td> 5</td>
                                <td> 3</td>
                                <td> 2048</td>
                                <td> 2 242 782</td>
                            </tr>
                            <tr>
                                <td> 22</td>
                                <td>запись</td>
                                <td> 0</td>
                                <td> 7</td>
                                <td> 512</td>
                                <td> 2 262 394</td>
                            </tr>
                            <tr>
                                <td> 23</td>
                                <td>чтение</td>
                                <td> 1</td>
                                <td> 4</td>
                                <td> 2048</td>
                                <td> 764 148</td>
                            </tr>
                            <tr>
                                <td> 24</td>
                                <td>запись</td>
                                <td> 5</td>
                                <td> 6</td>
                                <td> 4096</td>
                                <td> 764 088</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td>чтение</td>
                                <td> 0</td>
                                <td> 8</td>
                                <td> 4096</td>
                                <td> 764 050</td>
                            </tr>
                        </tbody >
                    </table ><br></br>

                    <b>Задача № 2:</b> Во сколько раз быстрее происходит запись в массив из массива RAID < b > N</b >, состоящего из < b > n</b > дисков с размером кластера < b > m</b > байт, файла объемом < b > k</b > байт по сравнению с одиночным диском, размер кластера которого составляет < b > p</b > байт ?<br></br>
                    <b>Варианты задачи №2:</b><br></br>
                    <table class="resp-tab">
                        <thead>
                            <tr>
                                <th>№ п/п</th>
                                <th>Операция</th>
                                <th>N</th>
                                <th>n</th>
                                <th>m</th>
                                <th>k</th>
                                <th>p</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>чтение</td>
                                <td>0</td>
                                <td>3</td>
                                <td>512</td>
                                <td>2 684 121</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>2</td>
                                <td>чтение</td>
                                <td>5</td>
                                <td>4</td>
                                <td>2048</td>
                                <td>1 529 722</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>3</td>
                                <td>запись</td>
                                <td>0</td>
                                <td>2</td>
                                <td>4096</td>
                                <td>237644</td>
                                <td>2048</td></tr>
                            <tr>
                                <td>4</td>
                                <td>чтение</td>
                                <td>1</td>
                                <td>2</td>
                                <td>2048</td>
                                <td>745468</td>
                                <td>4096</td></tr>
                            <tr>
                                <td>5</td>
                                <td>запись</td>
                                <td>5</td>
                                <td>3</td>
                                <td>1024</td>
                                <td>1 433 424</td>
                                <td>512</td></tr>
                            <tr>
                                <td>6</td>
                                <td>чтение</td>
                                <td>0</td>
                                <td>5</td>
                                <td>512</td>
                                <td>704 284</td>
                                <td>512</td></tr>
                            <tr>
                                <td>7</td>
                                <td>запись</td>
                                <td>1</td>
                                <td>3</td>
                                <td>1024</td>
                                <td>715890</td>
                                <td>4096</td></tr>
                            <tr>
                                <td>8</td>
                                <td>чтение</td>
                                <td>5</td>
                                <td>4</td>
                                <td>2048</td>
                                <td>38 342</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>9</td>
                                <td>запись</td>
                                <td>0</td>
                                <td>2</td>
                                <td>512</td>
                                <td>1 433 460</td>
                                <td>512</td></tr>
                            <tr>
                                <td>10</td>
                                <td>чтение</td>
                                <td>1</td>
                                <td>3</td>
                                <td>1024</td>
                                <td>716000</td>
                                <td>2048</td></tr>
                            <tr>
                                <td>11</td>
                                <td>запись</td>
                                <td>5</td>
                                <td>5</td>
                                <td>4096</td>
                                <td>526 252</td>
                                <td>4096</td></tr>
                            <tr>
                                <td>12</td>
                                <td>чтение</td>
                                <td>0</td>
                                <td>7</td>
                                <td>4096</td>
                                <td>2 224 204</td>
                                <td>2048</td></tr>
                            <tr>
                                <td>13</td>
                                <td>запись</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4096</td>
                                <td>2 259 220</td>
                                <td>512</td></tr>
                            <tr>
                                <td>14</td>
                                <td>чтение</td>
                                <td>5</td>
                                <td>3</td>
                                <td>512</td>
                                <td>2 264 302</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>15</td>
                                <td>запись</td>
                                <td>0</td>
                                <td>4</td>
                                <td>512</td>
                                <td>2176 626</td>
                                <td>2048</td></tr>
                            <tr>
                                <td>16</td>
                                <td>чтение</td>
                                <td>1</td>
                                <td>4</td>
                                <td>1024</td>
                                <td>2 243 242</td>
                                <td>512</td></tr>
                            <tr>
                                <td>17</td>
                                <td>запись</td>
                                <td>5</td>
                                <td>3</td>
                                <td>512</td>
                                <td>2 256891</td>
                                <td>4096</td></tr>
                            <tr>
                                <td>18</td>
                                <td>чтение</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2048</td>
                                <td>961332</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>19</td>
                                <td>запись</td>
                                <td>1</td>
                                <td>3</td>
                                <td>512</td>
                                <td>2 259 537</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>20</td>
                                <td>чтение</td>
                                <td>5</td>
                                <td>3</td>
                                <td>2048</td>
                                <td>2 242 782</td>
                                <td>2048</td></tr>
                            <tr>
                                <td>21</td>
                                <td>запись</td>
                                <td>0</td>
                                <td>7</td>
                                <td>512</td>
                                <td>2 262 394</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>22</td>
                                <td>чтение</td>
                                <td>1</td>
                                <td>4</td>
                                <td>2048</td>
                                <td>764 148</td>
                                <td>512</td></tr>
                            <tr>
                                <td>23</td>
                                <td>запись</td>
                                <td>5</td>
                                <td>6</td>
                                <td>4096</td>
                                <td>764 088</td>
                                <td>4096</td></tr>
                            <tr>
                                <td>24</td>
                                <td>чтение</td>
                                <td>0</td>
                                <td>8</td>
                                <td>4096</td>
                                <td>764 050</td>
                                <td>1024</td></tr>
                            <tr>
                                <td>25</td>
                                <td>запись</td>
                                <td>1</td>
                                <td>2</td>
                                <td>1024</td>
                                <td>1 433 062</td>
                                <td>512</td></tr>
                        </tbody >
                    </table ><br></br>
                    <b>Задача № 3.</b> Какое минимальное количество дисков необходимо приобрести для создания массива RAID < b > N</b >, чтобы сохранить данные, если известно, что через 7 лет один из дисков массива откажет ? <b>N = 0; 1; 5</b>.<br></br><br></br>

                </div >
            </div >
        </div >
        <Footer />
    </div >
    )
}

export default lb_1