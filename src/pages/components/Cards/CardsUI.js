import React from "react";
import { Link } from "gatsby";
import './cards.css';

const Card = props => {
    return (
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
    )
}

export default Card