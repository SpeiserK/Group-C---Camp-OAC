import { Link, useNavigate } from "react-router-dom";
import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo2 from '../components/Logo2.js';
import Logo from '../components/Logo.js'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Bundles1 from '../components/Bundles1.js';
import CutWood from '../components/CutWood.js';
import CampLogo from "../components/CampLogo.js";
import Dropdown from '../components/Dropdown.js';
import FireAnimation from "../components/FireAnimation";
import Button from 'react-bootstrap/Button';





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
<div className="bContainer">
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>
            <div className="bHeader">
                <Col lg={3} sm={2}>
                <Logo2 fluid />
                </Col>
                <Col>
                <h1 className="bearHug">camp oac & rotary club of kelowna</h1>
                </Col>
                <Col lg={1}>
                <Dropdown />
                </Col>
                <Col xl={1} lg={{span:2, offset: 1}}>
                <div className="bHeadicons">
                <Logo fluid/>
                </div>
                </Col>
            </div>
            
            </Row>
            <Row>
                <Col lg={8} md={9} sm={12} xs={12}>
                <div className="bMain">
                    <h1 className="robotoSlab">Info</h1>
                        <p className="robotoSlab">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco.
                        </p>
                </div>
                <div className="bMain2">
                    <Col md={{ span: 3, offset: 10 }}> 
                <Button variant="start" onClick={() => handleClick()}>PLACE ORDER</Button>{' '} </Col>
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

export default Startpage;