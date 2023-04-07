import React from 'react';
import {useNavigate } from "react-router-dom";
import Banner from '../components/Banner.js';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';

// e transfer confirmation page 
//import PlaceOrder from '..components/hooks/placeOrder.js';

function ETransferConfirmation(){
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
            <p> Please send $$$$ to OGOPOGOEMAIL@ROTARYCLUB.COM, When we confirm your payment your order will be approved, please check your email.
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

export default ETransferConfirmation;

/*
<p> Please send $$$$ to OGOPOGOEMAIL@ROTARYCLUB.COM, When we confirm your payment your order will be approved, please check your email.
                (WIP, email confirmation not functioning yet)
                </p>
*/