import React from "react";
import styled from 'styled-components';
// import { Link } from "gatsby";

const Foo = styled.nav`
* {
    display: flex;
    justify-content: center;
    background: black;
    color: #fff;

}

.footer_section {
    display: flex;
    align-items: center;
    margin-top:25px;
}

.footer_item {
    padding: 10px 15px;
    font-size: 20px;
}
`

const Footer = () => {
    return (
        <Foo>
            <div className="footer_section">
                <div className="footer_item">
                    © 2021 ИВТ ЧГУ 
                </div>
                {/* <div className="footer_item footerButton">
                    <Link to="/"><a src="/" /> о проекте  </Link>
                </div> */}
            </div>
        </Foo>
    )
}

export default Footer