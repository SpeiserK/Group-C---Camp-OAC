import { Link, useNavigate } from "react-router-dom";
import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo2 from '../components/Logo2.js';
import Logo from '../components/Logo.js'
import Drop from '../components/Dropdown.js';
import FireAnimation from "../components/FireAnimation";
import Button from 'react-bootstrap/Button';
import Banner from "../components/Banner.js";





function Startpage(){
    const gotoOrder = useNavigate();
    

    function handleClick(){
        gotoOrder("order");
    }

    return(
    <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row>
                <Col lg={8} md={9} sm={12} xs={12}>
                    <div className="bMain">
                        <h1 className="robotoSlab">Welcome</h1>
                            <br></br>
                            <p className="robotoSlab">This website is designed to act as a firewood purchasing portal for Camp OAC in coordination with Kelowna Rotary Ogopogo, all proceeds go to Camp OAC.
                            </p><br></br>
                            <p className="robotoSlab">To get started, use the Place Order button below!</p>
                    </div>
                    <div className="bMainFill">

                    </div>
                    <div className="bMain2">
                        <Col md={{ span: 5, offset: 5 }} xs={{span: 5, offset: 5}}> 
                            <Button variant="start" onClick={() => handleClick()}>PLACE ORDER</Button>{' '} 
                        </Col>
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