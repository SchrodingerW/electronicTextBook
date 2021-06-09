import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import Up from './up.png';
import Down from './down.png';

const Buttonstyle = styled.nav`
.fixed-btn{
  position: fixed;
  top:45%;
  right: 3%;
  background: #F5F5F5;
  width: 50px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 4px 4px 4px #DCDCDC;
  cursor: pointer;
}
.fixed-rigth{  right: 3%;}
.fixed-left{  left: 3%;}

.fixed-btn:active{
  box-shadow: 0  0;
}
img{
    width:25px;
}
`

const Button = props => {
    return (
        <Buttonstyle>
            <Link to={props.link_left} className="fixed-btn fixed-left">
                <img src={Down} alt="" />
            </Link>
            <Link to={props.link_rigth} className="fixed-btn fixed-right">
                <img src={Up} alt="" />
            </Link>
        </Buttonstyle >
    )
}
export default Button