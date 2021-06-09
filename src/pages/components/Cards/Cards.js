import React, { Component } from "react";
import Card from "./CardsUI";
import Card1 from "./card1.png";
import Card2 from "./card2.png";
import Card3 from "./card3.png";
import styled from 'styled-components';

const CardsStyle = styled.nav`
.row{
    z-index:1;
}
`
class Cards extends Component {
    render() {
        return (
            <CardsStyle>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={Card1} title="Раздел 1. Организация технического обслуживания ЭВМ" text="Рассматривается организация технического обслуживания ЭВМ" links="/book" />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={Card2} title="Раздел 2. Текущее техническое обслуживание сети" text="Рассматривается организация технического обслуживания ЭВМ" links="/book" />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={Card3} title="Раздел 3. Обслуживание серверов и рабочих станций" text="Рассматривается организация технического обслуживания ЭВМ" links="/book" />
                        </div>
                    </div>
                </div>
            </CardsStyle>
        )
    }
}

export default Cards