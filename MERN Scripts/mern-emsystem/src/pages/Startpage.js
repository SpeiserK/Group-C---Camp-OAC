import { Link, useNavigate } from "react-router-dom";
import React from 'react'

import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Bundles1 from '../components/Bundles1.js';
import CutWood from '../components/CutWood.js';
import CampLogo from "../components/CampLogo.js";





function Startpage(){
    const gotoOrder = useNavigate();
    const p1 = "Enter your email. We'll use it to relay order details and confirmation.";
    const p2 = "Select amount of firewood and pickup location.";
    const p3 = "Choose prefered payment method.";
    const p4 = "Receive confirmation email and pickup your bundle(s)!";

    function handleClick(){
        gotoOrder("order");
    }

    return(
    <div className="appMain">
        <div className="appHeader">
            <Banner />
        </div>
        <body className="appContainer">
            <div className="leftDiv">
                <Logo />
                <CutWood />
                <CampLogo />
            </div>
            <div className="middleDiv">
    
                
                
                <button className="buttonStyle" onClick={(e) => handleClick()}
                >Order</button>
            </div>
            <div className="rightDiv">
                <h2 className="howToTitle">How to use:</h2>
                
                <strong>1.</strong>
                <p className="howToText">{p1}</p>
                <strong>2.</strong>
                <p className="howToText">{p2}</p>
                <strong>3.</strong>
                <p className="howToText">{p3}</p>
                <strong>4.</strong>
                <p className="howToText">{p4}</p>
                <Bundles1 />
            </div>
        </body>
        <div className="footer">
            <footer className="App-footer">
                <Navbar />
            </footer>
        </div>
    </div>
    );
}

export default Startpage;