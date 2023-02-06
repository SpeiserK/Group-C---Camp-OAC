import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import OurProgBar from '../components/OurProgBar.js';
import CampLogo from '../components/CampLogo.js';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';


//import PlaceOrder from '..components/hooks/placeOrder.js';

function ETransferConfirmation(){
const navigate = useNavigate();
    return(
        <div>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>

        
        
        
        <Banner />
        
        </Row>
        <Row>
        
        <body className="appContainer">
            <div className="updateLeft">
            <p> Please send $$$$ to OGOPOGOEMAIL@ROTARYCLUB.COM, When we confirm your payment your order will be approved, please check your email.
                (WIP, email confirmation not functioning yet)
                </p>
                    <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => {navigate("/")}}>homepage</button>
                    </div>
            </div>
        </body>
        
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