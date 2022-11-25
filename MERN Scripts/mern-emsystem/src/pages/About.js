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
            
            <div className="divwrap">
                <div className="midContainer">
                    <h1 className="aboutTitle">About Us</h1><br></br>
                    <h2 className="aboutQ">Who are you</h2><br></br>
                    <p className="aboutA">Answer</p><br></br>
                    <h2 className="aboutQ">What do you do?</h2><br></br>
                    <p className="aboutA">Answer</p><br></br>
                </div>
                <div className="rightContainer">
                    <p>Primary Fonts: Use for headlines and navigation handles</p><br></br>
                        <h2 className="about1">This is the Frutiger font</h2><br></br>
                        <h2 className="about2">This is the OpenSans font</h2><br></br>
                        <h2 className="about3">This is the Arial font</h2><br></br>
                        <p>Secondary Fonts: Use for body text, captions, secondary headlines</p><br></br>
                        <h4 className="about4">This is the Sentinel font</h4><br></br>
                        <h4 className="about5">This is the Georgia font</h4><br></br>
                </div>
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