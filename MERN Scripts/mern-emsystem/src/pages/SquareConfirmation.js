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



//import PlaceOrder from '..components/hooks/placeOrder.js';

function SquareConfirmation(){
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
                <p> Your order has successfully been processed!
                    Check your email for the pickup location of your firewood, it should be ready for you when you get there!
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

export default SquareConfirmation;