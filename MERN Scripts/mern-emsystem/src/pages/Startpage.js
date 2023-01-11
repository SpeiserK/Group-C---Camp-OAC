import { Link } from "react-router-dom";
import React from 'react'
import EmailCheck from "../components/hooks/matchEmail.js";
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Bundles1 from '../components/Bundles1.js';
import CutWood from '../components/CutWood.js';

function Startpage(){

    const p1 = "Enter your email. We'll use it to relay order details and confirmation.";
    const p2 = "Select amount of firewood and pickup location.";
    const p3 = "Choose prefered payment method.";
    const p4 = "Receive confirmation email and pickup your bundle(s)!";

    return(
    <div className="appMain">
        <div className="appHeader">
            <Banner />
        </div>
        <body className="appContainer">
            <div className="leftDiv">
                <Logo />
                <CutWood />
            </div>
            <div className="middleDiv">
                <h2 className="startTitle">Enter Email Here to Buy Firewood</h2><br></br>
                <EmailCheck />
                <Bundles1 />
            </div>
            <div className="rightDiv">
                <h2 className="howToTitle">How to use:</h2>
                <h4>1.</h4>
                <p className="howToText">{p1}</p>
                <h4>2.</h4>
                <p className="howToText">{p2}</p>
                <h4>3.</h4>
                <p className="howToText">{p3}</p>
                <h4>4.</h4>
                <p className="howToText">{p4}</p>
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