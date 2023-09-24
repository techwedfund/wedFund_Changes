import React from "react";
import "../Style/Home.css";
import Contact from "./Contact";
import WhyWed from "./WhyWed";
import How from "./How";
import Document from "./Document";
import Terms from "./Terms";
import Footer from "./Footer";
import Wedding from '../Component/Wedding'
import Lending from "./Lending";

const Home = () => {
    return (
        <>
            <div id="contact">
                <Contact  />
            </div>
            <WhyWed />
            <How  />
            <Terms />
            <Document />
            <Lending />
            < Wedding  />
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default Home;