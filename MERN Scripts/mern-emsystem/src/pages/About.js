import { Link } from "react-router-dom";
import React from 'react'
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';

function About(){
    const q1 = "What is this website for?";
    const q2 = "What is Rotary Club of Kelowna Ogopogo?";
    const q3 = "What is CampOAC?";
    const q4 = "How to use this website.";

    const a1 = "Camp OAC and the Rotary Club of Kelowna Ogopogo have partnered to sell firewood. This web app is an online firewood store, made to simplify the process of buying wood to support the community.";
    const a2 = "The Rotary Club of Kelowna Ogopogo, chartered in 1993, is a group of 52 men and women, and is one of eight Rotary clubs in our area. In addition to providing support to their own community, their club has an active focus on programs involving youth. As well, both directly and through their involvement with Rotary International's Foundation, they assist with major international projects including disaster relief, fresh water development projects, and health programs such as PolioPlus.";
    const a3 = "Camp Owaissi is a childrens summer camp located just north of Kelowna on the beautiful Okanagan lake! Started in 1950, Camp Owaissi has ran summer camps that have been attended by thousands of campers. In the Offseason, the amazing property is available for rentals to host family reunions, get togethers and even weddings. They also host school group rentals. Camp Owaissi is a place that everyone can enjoy.";
    const a4 = "Click the page title to get started. Enter your email and follow the steps to place your order!";

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
                    <h1 className="aboutTitle">About Us</h1><br></br>
                    <h2 className="aboutQ">{q1}</h2><br></br>
                    <p className="aboutA">{a1}</p><br></br>
                    <h2 className="aboutQ">{q2}</h2><br></br>
                    <p className="aboutA">{a2}</p><br></br>
                    <h2 className="aboutQ">{q3}</h2><br></br>
                    <p className="aboutA">{a3}</p><br></br>
                    <h2 className="aboutQ">{q4}</h2><br></br>
                    <p className="aboutA">{a4}</p><br></br>
                </div>
                <div className="rightDiv">
                    
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

export default About;