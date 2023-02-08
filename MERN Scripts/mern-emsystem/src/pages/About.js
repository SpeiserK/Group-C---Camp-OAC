import { Link } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../components/Banner.js';
import FireAnimation from "../components/FireAnimation.js";

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
    <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
                <div className="bHeader">
                    <Banner />
                </div>  
            </Row>
            <Row>
                <Col lg={8} md={9} sm={12} xs={12}>
                    <div className="bMain">
                        <h1 className="robotoSlab">About</h1><br></br>
                            <h3 className="robotoSlab">{q1}</h3>
                            <p className="robotoSlab">{a1}</p><br></br>
                            <h3 className="robotoSlab">{q2}</h3>
                            <p className="robotoSlab">{a2}</p><br></br>
                            <h3 className="robotoSlab">{q3}</h3>
                            <p className="robotoSlab">{a3}</p><br></br>
                            <h3 className="robotoSlab">{q4}</h3>
                            <p className="robotoSlab">Click <a href="/">here</a> to get started. Enter your email and follow the steps to place your order!</p><br></br>
                    </div>
                    <div className="bMain2">
        
                    </div>
                </Col>   
                <Col lg={4} md={3} sm={12} xs={12}>
                    <div className="bSide">
                        <Row><div className="bSidebar1"></div></Row>
                        <Row><div className="bSidebar2"></div></Row>
                        <Row><div className="fireDiv"><FireAnimation /></div></Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default About;