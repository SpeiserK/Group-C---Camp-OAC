import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Banner from '../components/Banner.js';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';

function CashConfirmation(){
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
                <p> Because you have selected cash payment your order is under review , please check your email for updates from our team!
                    (WIP, email confirmation not functioning yet)
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

export default CashConfirmation;