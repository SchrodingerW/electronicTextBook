import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Burger from './Burger';
import LogoImg from './logo.jpg';

const Nav = styled.nav`
  position:fixed;
  width: 100%;
  ${'' /* background:#6d76f7; */}
  background:#fff;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  z-index: 20;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    margin-top:-13px;
    margin-left:150px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to="/" ><img src={LogoImg} width="175px" alt="" /></Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar