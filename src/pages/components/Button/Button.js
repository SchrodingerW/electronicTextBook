import React from "react";
import './button.css';
import { Link } from 'gatsby';
import Up from './up.png';
import Down from './down.png';

const Button = props => {
    return (
        <div>
            <Link to={props.link_left} className="fixed-btn fixed-left">
                <img className="button" src={Down} alt="" />
            </Link>
            <Link to={props.link_rigth} className="fixed-btn fixed-right">
                <img className="button" src={Up} alt="" />
            </Link>
        </div >
    )
}
export default Button