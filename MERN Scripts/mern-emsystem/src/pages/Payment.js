import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import OurProgBar from '../components/OurProgBar.js';
import axios from 'axios';
import CampLogo from '../components/CampLogo.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';

//import PlaceOrder from '..components/hooks/placeOrder.js';


function Payment(){
const navigate = useNavigate();

function post2DB(type) {
    //maybe put this in a functions.js file somewhere and import it, for readability
    const newOrder = {
        Name: localStorage.getItem("email"),
        Quantity: localStorage.getItem("quantity"),
        Location: localStorage.getItem("location"),
        Payment: type,
        phoneNumber: localStorage.getItem("phoneNumber")
    }
    axios.post('http://localhost:5000/send', newOrder);
}

    return(
            <div>
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Row>
                    
                        <Banner />
                    
                    </Row>
                    <Row>
                    <body className="appContainer">
                        <div className="updateLeft">
                            <h2 className="orderTitle">Summary</h2>
                            <PaymentSummary />
                            <br></br>
                            <h2 className="orderTitle">Select Payment Type:</h2>
                            <div className="buttonBox">
                                <button className="squareButtonStyle" onClick={() => {post2DB("Credit/Debit"); navigate("SquareConfirmation")}}>Credit/Debit</button>
                                <button className="buttonStyle" onClick={() => {post2DB("Cash"); navigate("CashConfirmation")}}>Cash </button>
                                <button className="buttonStyle" onClick={() => {post2DB("E-Transfer"); navigate("ETransferConfirmation")}}>E-Transfer </button>
                            </div>
                        </div>
                        
                    </body>
                    </Row>
                </Container>
            </div>
    );
}

export default Payment;