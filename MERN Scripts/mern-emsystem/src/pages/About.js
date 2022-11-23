import { Link } from "react-router-dom";
import React from 'react'
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
//<Logo />

function About(){
    return(
        <div className="main">
            <Banner />
            
            <div>
                
            </div>
            <div className="container">
            <p className="about1">This is the Frutiger font</p><br></br>
                <p className="about2">This is the OpenSans font</p><br></br>
                <p className="about3">This is the Arial font</p><br></br>
                <p className="about4">This is the Sentinel font</p><br></br>
                <p className="about5">This is the Georgia font</p><br></br>
            </div>
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}

export default About;