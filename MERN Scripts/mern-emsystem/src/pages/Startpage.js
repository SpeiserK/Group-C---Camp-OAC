import { Link } from "react-router-dom";
import React from 'react'
import EmailCheck from "../components/hooks/matchEmail.js";
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';



function Startpage(){
    return(
        <div className="main">
            <Banner />
            
            <div>
                <Logo />
            </div>
            <div className="container">
                <EmailCheck />
                <Link to="order">Click here to view Order page</Link><br/>
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default Startpage;