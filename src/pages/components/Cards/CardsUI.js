import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const CardStyle = styled.nav`
body {
    background: radial-gradient(#e5e5e5, #ffff, #e5e5e5)
}

.card {
    width: 20rem;
}

.card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, , 0.253)!impotant;
}

.card-body {
    padding: 3rem 0 !impotant;
}

.card-text {
    font-size: 0.9rem;
    padding: 0.4rem 1.9rem;
}

.container-fluid .row {
    padding-top: 6rem;
}

.overflow {
    overflow: hidden;
}

.card-img-top {
    height:160px;
    transform: scale(1);
    transition: transform 0.5s ease;
}

.card-img-top:hover {
    transform: scale(1.8);
}
h4{font-size: 1.4rem;}

`

const Card = props => {
    return (
        <CardStyle>
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <Link to={props.links} className="btn btn-outline-success">Подробнее</Link>
            </div>
        </div>
        </CardStyle>
    )
}

export default Card