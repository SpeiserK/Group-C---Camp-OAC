import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import OurProgBar from '../components/OurProgBar.js';
import CampLogo from '../components/CampLogo.js';
import Row from 'react-bootstrap/esm/Row.js';
import Container from 'react-bootstrap/esm/Container.js';
import Col from 'react-bootstrap/esm/Col.js';

function SquareReceipt(){
const navigate = useNavigate();
    return(
        <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row>
            <Col lg={9} md={10} sm={11} xs={11} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder">
                <p> Your order has successfully been processed!
                    Check your email for the pickup location of your firewood, it should be ready for you when you get there!
                    </p>
                    <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => {navigate("/")}}>homepage</button>
                    </div>
            </div>
            </Col>
            <Col lg={3} md={2} sm={1} xs={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder2">
                
            </div>
        </Col>  
    </Row>
        </Container>
    </div>
    );
}

export default SquareReceipt;