import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    font-weight: bold;
    text-decoration: none;
    color:black;
  }
  ${'' /* .links:active, .links:hover, .links {
    text-decoration: none;
    color: black;
  } */}
  .links {
	position: relative;
	color: black; /*задаём цвет ссылки*/
	cursor: pointer;
	line-height: 1; /*задаём высоту строки*/
	text-decoration: none; /*убираем подчёркивание*/
}
.links:after {
	display: block;
	position: absolute;
	left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
	width: 0;/*задаём длинну линии до наведения курсора*/
	height: 2px; /*задаём ширину линии*/
	background-color: gray; /*задаём цвет линии*/
	content: "";
	transition: width 0.3s ease-out; /*задаём время анимации*/
}

.links:hover:after,
.links:focus:after {
	width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
}
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .links:active, .links:hover, .links {
    text-decoration: none;
    color: #fff;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to="/" className="links">Главная</Link></li>
      <li><Link to="/book" className="links">Теоретические материалы</Link></li>
      <li><Link to="/work" className="links">Практикум</Link></li>
      <li><Link to="/control" className="links">Контроль знаний</Link></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Ul >
  )
}

export default RightNav