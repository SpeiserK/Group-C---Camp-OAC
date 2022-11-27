import { Link } from "react-router-dom";
import React from 'react'
import EmailCheck from "../components/hooks/matchEmail.js";
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';


function Startpage(){
    return(
    <div className="appMain">
        <div className="appHeader">
            <Banner />
        </div>
        <body className="appContainer">
            <div className="leftDiv">
                <Logo />
            </div>
            <div className="middleDiv">
                <h2 className="startTitle">Enter Email Here to Buy Firewood</h2><br></br>
                
                <EmailCheck />
            </div>
            <div className="rightDiv">
                <Link to="order">Click here to view Order page</Link><br/>
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