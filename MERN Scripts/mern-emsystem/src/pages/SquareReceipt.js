import React from 'react';
import { useNavigate } from "react-router-dom";
import Banner from '../components/Banner.js';
import OurProgBar from '../components/OurProgBar.js';
import CampLogo from '../components/CampLogo.js';
import Row from 'react-bootstrap/esm/Row.js';
import Container from 'react-bootstrap/esm/Container.js';
import Col from 'react-bootstrap/esm/Col.js';
import Button from 'react-bootstrap/esm/Button.js';
import cabin from '../components/pictures/Camp-OAC-Logo_Cabin.png';

function SquareReceipt(){
const navigate = useNavigate();
    return(
        <div className="bContainer">
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
            <Banner /> 
            </Row>
            <Row>
            <Col className="whiteSideBar"></Col> 
            <Col xl={8} lg={8} md={8} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="bOrder">
                    <Row>
                        <Col>
                        <div className="receiptBox">
                            <h1 className="bearHug">thank you</h1>
                            <br></br>
                                <div className="receiptText">
                                    <p>Your order has been successfully processed!</p>
                                    <p>Check your phone number/email for the order receipt, and pick-up instructions!</p>
                                    <p>Click <a href="/custhistory">here</a> to view your order(s).</p>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="buttonBox">
                                        <Button variant="primary" size="lg" onClick={() => {navigate("/")}}>Continue Shopping</Button>
                                </div>
                            </div>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>                       
                            <div className="smallSideBox">
                                <img src={cabin} alt="cabin" height="30%" width="40%"></img>
                            </div>
                        </Col>
                    </Row>  
                </div>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="bOrder2">
                    
                </div>
            </Col>  
            <Col className="whiteSideBar"></Col> 
        </Row>
    </Container>
    </div>
    );
}

export default SquareReceipt;