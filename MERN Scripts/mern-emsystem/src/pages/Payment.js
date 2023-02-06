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
    axios.post('http://localhost:5001/send', newOrder);
}

    return(
<div className="bContainer">
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Row>
    <Banner /> 
    </Row>
    <Row>
        <Col lg={9} md={10} sm={11} xs={11} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bOrder">
            <h2 className="orderTitle">Select Payment Type</h2>
                <Col lg={{span:12,offset: 1}}>
                    <PaymentSummary />
                        <div className="buttonBox">
                            <button className="buttonStyle" onClick={() => navigate("SquarePay")}>Square Pay Page</button>
                            <button className="squareButtonStyle" onClick={() => {post2DB("Credit/Debit"); navigate("SquareConfirmation")}}>Credit/Debit</button>
                            <button className="buttonStyle" onClick={() => {post2DB("Cash"); navigate("CashConfirmation")}}>Cash </button>
                            <button className="buttonStyle" onClick={() => {post2DB("E-Transfer"); navigate("ETransferConfirmation")}}>E-Transfer </button>
                        </div>
                </Col>
            </div>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="bPay2">
                
            </div>
        </Col>  
    </Row>
</Container>
</div>
    );
}

export default Payment;