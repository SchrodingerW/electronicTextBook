import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Nav/Navbar";
import Main404 from "./components/Main/Main404";
import Footer from "./components/Footer/Footer";

const Error = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Error 404. Page Not Found</title>
            </Helmet>
            <Navbar />
            <Main404 />
            <Footer />
        </div>
    )
}

export default Error