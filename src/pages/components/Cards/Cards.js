import React, { Component } from "react";
import Card from "./CardsUI";
import Card1 from "./card1.jp2";
import Card2 from "./card2.jp2";
import Card3 from "./card3.jp2";
import './cards.css';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={Card1} title="Теоретические материалы" text="Изучите курс лекций по дисциплине &#34;ТО ЭВМ&#34;" links="/book" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={Card2} title="Практикум" text="Выполните лабораторные работы по дисциплине &#34;ТО ЭВМ&#34;" links="/work" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={Card3} title="Контроль знаний" text="Проверьте свои знания по дисциплине &#34;ТО ЭВМ&#34;" links="/control" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards